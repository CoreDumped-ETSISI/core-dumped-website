import { c as create_ssr_component, v as validate_component, g as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import "devalue";
import { g as goto } from "../../../../../chunks/navigation.js";
/* empty css                                                             *//* empty css                                                                 */import { P as PeopleCard } from "../../../../../chunks/PeopleCard.js";
import { T as Title } from "../../../../../chunks/Title.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".formColumn.svelte-tcbgfm{background-color:white;border-radius:24px;padding:20px}.container.svelte-tcbgfm{margin-top:16px;display:flex;flex-direction:row;gap:8px;flex-flow:wrap;justify-content:center;align-items:center}input.svelte-tcbgfm{border:none;font-size:16px;border-bottom:1px solid #5fb030;margin-bottom:8px;background-color:whitesmoke}button.svelte-tcbgfm{width:fit-content;background-color:#5fb030;color:white;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205);border-radius:16px;border:transparent;padding:6px}button.svelte-tcbgfm:active{box-shadow:none}.error.svelte-tcbgfm{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let formData = {
    name: data.data.name,
    appointment: data.data.appointment,
    image: data.data.image,
    email: data.data.email,
    discord: data.data.discord,
    github: data.data.github,
    telegram: data.data.telegram,
    instagram: data.data.instagram,
    linkedin: data.data.linkedin
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
  {
    {
      formData.appointment = formData.appointment.slice(0, -1) + "a";
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
      return `Modificar persona`;
    }
  })} <div class="container svelte-tcbgfm"><div class="cardColumn">${validate_component(PeopleCard, "PeopleCard").$$render(
    $$result,
    {
      name: formData.name,
      appointment: formData.appointment,
      photo: formData.image && formData.image.length > 0 ? formData.image : "/PeoplePlaceholder.png",
      socials: /* @__PURE__ */ new Map([
        [
          "discord",
          formData.discord?.trim().length > 0 ? formData.discord : void 0
        ],
        [
          "email",
          formData.email?.trim().length > 0 ? formData.email : void 0
        ],
        [
          "instagram",
          formData.instagram?.trim().length > 0 ? formData.instagram : void 0
        ],
        [
          "telegram",
          formData.telegram?.trim().length > 0 ? formData.telegram : void 0
        ],
        [
          "github",
          formData.github?.trim().length > 0 ? formData.github : void 0
        ],
        [
          "linkedin",
          formData.linkedin?.trim().length > 0 ? formData.linkedin : void 0
        ]
      ])
    },
    {},
    {}
  )}</div> <div class="formColumn svelte-tcbgfm"><form method="POST"><label for="name" data-svelte-h="svelte-zbkkig">Nombre</label> <br> <input type="text" id="name" name="name" placeholder="Nombre" required class="svelte-tcbgfm"${add_attribute("value", formData.name, 0)}> <br> <input type="text" id="appointment" name="appointment" hidden class="svelte-tcbgfm"${add_attribute("value", formData.appointment, 0)}> <input type="text" id="id" name="id" hidden class="svelte-tcbgfm"${add_attribute("value", data.data._id, 0)}> <label for="gender" data-svelte-h="svelte-1fbv672">Género
        <br> <small>Unicamente usado para determinar la ultima letra del puesto (ej.
          presidente/presidenta)</small></label> <br> <input type="radio" id="Masculino" name="gender" value="M" class="svelte-tcbgfm"${""}> <label for="Masculino" data-svelte-h="svelte-1bolafc">Masculino</label> <br> <input type="radio" id="Femenino" name="gender" value="F" class="svelte-tcbgfm"${""}> <label for="Femenino" data-svelte-h="svelte-u5nhuy">Femenino</label> <br> <label for="image" data-svelte-h="svelte-19wabop">URL de la imagen</label> <br> <small data-svelte-h="svelte-hl2s2w">Subela a la unidad compartida de drive y hazla publica.
        <br>
        Para mayor calidad, la imagen tiene que tener un ratio de aspecto de 1:1
        (cuadrada) <br> y una resolucion minima de 200x200 pixeles.</small> <br> <input type="url" name="image" id="image" placeholder="https://drive.google.com/file/d/..." class="svelte-tcbgfm"${add_attribute("value", formData.image, 0)}> <br> <p data-svelte-h="svelte-muu1mu">Socials:</p> <input type="email" name="email" id="email" placeholder="Email" class="svelte-tcbgfm"${add_attribute("value", formData.email, 0)}> <br> <input type="url" name="discord" id="discord" placeholder="Discord" class="svelte-tcbgfm"${add_attribute("value", formData.discord, 0)}> <br> <input type="url" name="instagram" id="instagram" placeholder="Instagram" class="svelte-tcbgfm"${add_attribute("value", formData.instagram, 0)}> <br> <input type="url" name="telegram" id="telegram" placeholder="Telegram" class="svelte-tcbgfm"${add_attribute("value", formData.telegram, 0)}> <br> <input type="url" name="github" id="github" placeholder="Github" class="svelte-tcbgfm"${add_attribute("value", formData.github, 0)}> <br> <input type="url" name="linkedin" id="linkedin" placeholder="LinkedIn" class="svelte-tcbgfm"${add_attribute("value", formData.linkedin, 0)}> <br> <button type="submit" class="svelte-tcbgfm" data-svelte-h="svelte-8qq31l">Actualizar</button> ${form?.error ? `<div class="error svelte-tcbgfm">! ${escape(form.error)}</div>` : ``}</form></div> </div>`;
});
export {
  Page as default
};
