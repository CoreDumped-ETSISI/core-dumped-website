import { c as create_ssr_component, v as validate_component, e as escape, g as add_attribute } from './ssr-27bb2042.js';
import { S as StatusTag } from './StatusTag-a6baed80.js';
import { T as Title } from './Title-dc0a02e0.js';

const css = {
  code: "@media(orientation: landscape){.center.svelte-1eg8slw.svelte-1eg8slw{display:flex;justify-content:center}.landscapeFlex.svelte-1eg8slw.svelte-1eg8slw{display:flex;flex-direction:column;max-width:75%;align-content:center}img.svelte-1eg8slw.svelte-1eg8slw{max-width:50vh}.container.svelte-1eg8slw.svelte-1eg8slw{flex-flow:row nowrap}.datacard.svelte-1eg8slw.svelte-1eg8slw{flex:1}}@media(orientation: portrait){img.svelte-1eg8slw.svelte-1eg8slw{max-width:100%}.container.svelte-1eg8slw.svelte-1eg8slw{flex-flow:row wrap}}.container.svelte-1eg8slw.svelte-1eg8slw{margin-top:8px;display:flex;flex-direction:row;gap:8px}img.svelte-1eg8slw.svelte-1eg8slw{object-fit:fill;border-radius:24px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.3);flex:1 1 auto}.description.svelte-1eg8slw.svelte-1eg8slw{border-radius:24px;padding:16px;background:white;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.3);flex:2 1 auto;text-align:justify;overflow-y:auto;font-size:20px}.description.svelte-1eg8slw p.svelte-1eg8slw{margin-top:8px}.data.svelte-1eg8slw.svelte-1eg8slw{margin-top:8px;list-style-type:none;font-size:20px}.datacard.svelte-1eg8slw.svelte-1eg8slw{border-radius:24px;padding:16px;max-height:fit-content;background:white;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.3)}.tag.svelte-1eg8slw.svelte-1eg8slw{border-radius:24px;width:max-content;padding:8px;color:white;margin-top:8px;border:2px solid transparent}.category.svelte-1eg8slw.svelte-1eg8slw{border:2px solid #5fb030;color:#5fb030;font-weight:600;border-radius:24px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let item = data.data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="center svelte-1eg8slw"><div class="landscapeFlex svelte-1eg8slw"><div class="datacard svelte-1eg8slw">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(item.type)}: ${escape(item.title)}`;
    }
  })} <div class="data svelte-1eg8slw">Publicado:
        ${escape(new Date(item.date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }))} <div class="tag category svelte-1eg8slw"><p>${escape(item.category)}</p></div> ${validate_component(StatusTag, "StatusTag").$$render($$result, { status: item.status }, {}, {})}</div></div> <div class="container svelte-1eg8slw"><img${add_attribute("src", item.image, 0)} alt="${escape(item.title, true) + " poster"}" class="svelte-1eg8slw"> <div class="description svelte-1eg8slw"><h2 data-svelte-h="svelte-1p1esop">Descripción</h2> <p class="svelte-1eg8slw">${escape(item.description)}</p></div></div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d3b31343.js.map
