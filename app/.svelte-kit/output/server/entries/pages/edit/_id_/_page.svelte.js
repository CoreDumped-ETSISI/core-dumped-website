import { c as create_ssr_component, v as validate_component, g as add_attribute, e as escape, f as each } from "../../../../chunks/ssr.js";
import "devalue";
import { g as goto } from "../../../../chunks/navigation.js";
import { C as CardComponent } from "../../../../chunks/CardComponent.js";
import { T as Title } from "../../../../chunks/Title.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".formColumn.svelte-1ssu0u{background-color:white;border-radius:24px;padding:20px}.container.svelte-1ssu0u{margin-top:16px;display:flex;flex-direction:row;gap:8px;flex-flow:wrap;justify-content:center;align-items:center}input.svelte-1ssu0u{border:none;font-size:16px;border-bottom:1px solid #5fb030;margin-bottom:8px;background-color:whitesmoke}select.svelte-1ssu0u{border:none;font-size:16px;border-bottom:1px solid #5fb030;margin-bottom:8px;background-color:whitesmoke}textarea.svelte-1ssu0u{border:none;font-size:16px;border-bottom:1px solid #5fb030;margin-bottom:8px;background-color:whitesmoke}button.svelte-1ssu0u{width:fit-content;background-color:#5fb030;color:white;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205);border-radius:16px;border:transparent;padding:6px}button.svelte-1ssu0u:active{box-shadow:none}.svelte-1ssu0u:disabled{background-color:rgba(85, 159, 45, 0.049);border-bottom:1px solid gray}button.svelte-1ssu0u:disabled{border-bottom:none;color:black;box-shadow:none}.error.svelte-1ssu0u{color:red}.delete.svelte-1ssu0u{background-color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let disable = true;
  let disableNew = true;
  let categories = [];
  let validDelete = false;
  let confirmDelete = "";
  let formData = {
    type: data.data.type,
    title: data.data.title,
    description: data.data.description,
    image: data.data.image,
    date: data.data.date,
    category: data.data.category,
    newCategory: "",
    status: data.data.status
  };
  const snapshot = {
    capture: () => formData,
    restore: (value) => formData = value
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$result.css.add(css);
  validDelete = confirmDelete.trim() === "CONFIRMAR";
  disable = formData.type === "";
  disableNew = formData.category !== "new";
  {
    if (formData.type === "Proyecto") {
      categories = [...data.projects];
    } else if (formData.type === "Evento") {
      categories = [...data.events];
    }
  }
  {
    if (form?.error === "Unauthorized") {
      goto("/admin?back=true");
    } else if (form?.success) {
      goto("/edit/cartas");
    }
  }
  return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `Modificar carta`;
    }
  })} <div class="container svelte-1ssu0u"><div class="cardColumn svelte-1ssu0u">${validate_component(CardComponent, "CardComponent").$$render(
    $$result,
    {
      title: formData.title.length > 0 ? formData.title : "Título",
      image_src: formData.image.length > 0 ? formData.image : "/fallback.png",
      date: formData.date !== void 0 && formData.date.length > 0 ? formData.date : (/* @__PURE__ */ new Date()).toISOString(),
      category: (formData.category !== "new" ? formData.category : formData.newCategory) || "Categoría",
      status: formData.status.length > 0 ? formData.status : "Estado",
      description: formData.description.length > 0 ? formData.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat id leo eget tincidunt. Nullam ullamcorper.",
      id: ""
    },
    {},
    {}
  )}</div> <div class="formColumn svelte-1ssu0u"><form method="POST" action="?/update" class="svelte-1ssu0u"><input type="text" name="id" id="id"${add_attribute("value", data.data._id, 0)} hidden class="svelte-1ssu0u"> <label for="type" class="svelte-1ssu0u" data-svelte-h="svelte-19ao2ak">Tipo</label> <select name="type" id="type" required class="svelte-1ssu0u"><option value="Proyecto" class="svelte-1ssu0u" data-svelte-h="svelte-1vgba46">Proyecto</option><option value="Evento" class="svelte-1ssu0u" data-svelte-h="svelte-16pw422">Evento</option></select> <br class="svelte-1ssu0u"> <label for="title" class="svelte-1ssu0u" data-svelte-h="svelte-1bxdx9j">Título</label> <br class="svelte-1ssu0u"> <input type="text" id="title" name="title" placeholder="Título"${add_attribute("size", 20, 0)} maxlength="20" ${disable ? "disabled" : ""} required class="svelte-1ssu0u"${add_attribute("value", formData.title, 0)}> <br class="svelte-1ssu0u"> <label for="description" class="svelte-1ssu0u" data-svelte-h="svelte-4yvg3t">Descripción</label> <br class="svelte-1ssu0u"> <small class="svelte-1ssu0u" data-svelte-h="svelte-fvwp4o">La primera linea será la que aparezca en la carta, tiene que intentar
        enganchar al usuario.
        <br class="svelte-1ssu0u">
        Usa el resto de la descripción para dar todos los detalles relevantes.</small> <br class="svelte-1ssu0u"> <textarea name="description" id="description" placeholder="Descripción" cols="50" rows="10" minlength="100" required ${disable ? "disabled" : ""} class="svelte-1ssu0u">${escape(formData.description || "")}</textarea> <br class="svelte-1ssu0u"> <label for="image" class="svelte-1ssu0u" data-svelte-h="svelte-19wabop">URL de la imagen</label> <br class="svelte-1ssu0u"> <small class="svelte-1ssu0u" data-svelte-h="svelte-18ollfi">Subela a la unidad compartida de drive y hazla publica.
        <br class="svelte-1ssu0u">
        Para mayor calidad, la imagen tiene que tener un ratio de aspecto de 1:1
        (cuadrada) <br class="svelte-1ssu0u"> y una resolucion minima de 1000x1000 pixeles.</small> <br class="svelte-1ssu0u"> <input type="url" name="image" id="image" placeholder="https://drive.google.com/file/d/..." required ${disable ? "disabled" : ""} class="svelte-1ssu0u"${add_attribute("value", formData.image, 0)}> <br class="svelte-1ssu0u"> <label for="date" class="svelte-1ssu0u" data-svelte-h="svelte-ozwb37">Fecha de publicación</label> <br class="svelte-1ssu0u"> <small class="svelte-1ssu0u" data-svelte-h="svelte-c8yk18">Dejala vacía para mantenerla</small> <br class="svelte-1ssu0u"> <input type="date" name="date" id="date"${add_attribute("max", (/* @__PURE__ */ new Date()).toLocaleDateString("fr-ca"), 0)} ${disable ? "disabled" : ""} class="svelte-1ssu0u"${add_attribute("value", formData.date, 0)}> <br class="svelte-1ssu0u"> <label for="category" class="svelte-1ssu0u" data-svelte-h="svelte-p0fyn">Categoria</label> <br class="svelte-1ssu0u"> <select name="category" id="category" required ${disable ? "disabled" : ""} class="svelte-1ssu0u"><option value="new" class="svelte-1ssu0u" data-svelte-h="svelte-g2voz6">Crear nueva</option>${each(categories, (item) => {
    return `<option${add_attribute("value", item, 0)} class="svelte-1ssu0u">${escape(item)}</option>`;
  })}</select> <input type="text" id="newcategory" name="newcategory" placeholder="Nueva categoría" size="14" maxlength="16" ${disable || disableNew ? "disabled" : ""} ${!disableNew ? "required" : ""} class="svelte-1ssu0u"${add_attribute("value", formData.newCategory, 0)}> <br class="svelte-1ssu0u"> <label for="status" class="svelte-1ssu0u" data-svelte-h="svelte-19r6n6a">Estado</label> <br class="svelte-1ssu0u"> <select id="status" name="status" required ${disable ? "disabled" : ""} class="svelte-1ssu0u"><option value="Completado" class="svelte-1ssu0u" data-svelte-h="svelte-1i8f1ye">Completado</option><option value="En progreso" class="svelte-1ssu0u" data-svelte-h="svelte-1uzctse">En progreso</option><option value="Cancelado" class="svelte-1ssu0u" data-svelte-h="svelte-1qgsv7i">Cancelado</option><option value="Próximamente" class="svelte-1ssu0u" data-svelte-h="svelte-1skw7a">Próximamente</option></select> <br class="svelte-1ssu0u"> <button type="submit" ${disable ? "disabled" : ""} class="svelte-1ssu0u">Actualizar</button> <button type="button" class="delete svelte-1ssu0u" ${""}>Borrar</button> <input type="text" name="delete" placeholder="Escribe CONFIRMAR" ${"hidden"} class="svelte-1ssu0u"${add_attribute("value", confirmDelete, 0)}> <button type="submit" formaction="?/delete" class="delete svelte-1ssu0u" ${"hidden"} ${!validDelete ? "disabled" : ""}>Confirmar borrar</button> ${form?.error ? `<div class="error svelte-1ssu0u">! ${escape(form.error)}</div>` : ``}</form></div> </div>`;
});
export {
  Page as default
};
