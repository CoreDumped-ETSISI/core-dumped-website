import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1mwrium{color:#5fb030}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <link rel="stylesheet" href="/global.css"> <body><header data-svelte-h="svelte-a6t8r3"><h2 class="svelte-1mwrium">Admin Mode</h2></header> <div class="slot">${slots.default ? slots.default({}) : ``}</div> <footer></footer></body>`;
});
export {
  Layout as default
};
