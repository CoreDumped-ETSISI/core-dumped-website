import { c as create_ssr_component, g as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { S as StatusTag } from "./StatusTag.js";
/* empty css                                             */const css = {
  code: "a.svelte-1qk61ym{all:unset;cursor:pointer}.card.svelte-1qk61ym{display:flex;flex-direction:column;overflow:hidden;width:300px;height:450px;box-shadow:0 4px 4px 0 rgba(0, 0, 0, 0.205);border-radius:8px;background-color:white;margin:8px}.card_text.svelte-1qk61ym{margin:5px 8px 8px 8px}.title.svelte-1qk61ym{margin-bottom:8px;display:flex;flex-direction:row;align-items:center}.whitespace.svelte-1qk61ym{flex:1}h3.svelte-1qk61ym{font-weight:600}h4.svelte-1qk61ym{font-weight:100}.description.svelte-1qk61ym{color:#252525}p.svelte-1qk61ym{justify-content:left}img.svelte-1qk61ym{display:block;width:100%;min-height:300px;max-height:300px;object-fit:fill;border-radius:8px 8px 0 0}.tags.svelte-1qk61ym{display:flex;flex-direction:row;margin:5px 10px 10px 10px;margin-top:auto}.tag.svelte-1qk61ym{float:right;border-radius:24px;width:max-content;padding:8px;color:white;margin-top:8px;border:2px solid transparent}.category.svelte-1qk61ym{float:left;border:2px solid #5fb030;color:#5fb030;font-weight:600;border-radius:24px}",
  map: null
};
const CardComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { image_src } = $$props;
  let { date } = $$props;
  let { status } = $$props;
  let { category } = $$props;
  const url = "/" + id;
  if (description.length > 100) {
    description = description.slice(0, 97) + "...";
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image_src === void 0 && $$bindings.image_src && image_src !== void 0)
    $$bindings.image_src(image_src);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$result.css.add(css);
  date = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
  return `  <a${add_attribute("href", url, 0)} class="svelte-1qk61ym"><div class="card svelte-1qk61ym"><img${add_attribute("src", image_src, 0)}${add_attribute("alt", title + "poster", 0)} class="svelte-1qk61ym"> <div class="card_text svelte-1qk61ym"><div class="title svelte-1qk61ym"><h3 class="svelte-1qk61ym">${escape(title)}</h3> <div class="whitespace svelte-1qk61ym"></div> <h4 class="svelte-1qk61ym">${escape(date)}</h4></div> <p class="description svelte-1qk61ym">${escape(description)}</p></div> <div class="tags svelte-1qk61ym"><div class="tag category svelte-1qk61ym"><p class="svelte-1qk61ym">${escape(category)}</p></div> <div class="whitespace svelte-1qk61ym"></div> ${validate_component(StatusTag, "StatusTag").$$render($$result, { status }, {}, {})}</div></div> </a>`;
});
export {
  CardComponent as C
};
