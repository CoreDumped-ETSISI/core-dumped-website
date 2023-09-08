import { c as create_ssr_component, b as subscribe, d as add_classes } from './ssr-27bb2042.js';
import { p as page } from './stores-9cf89351.js';

const css = {
  code: "h2.svelte-1mwrium{color:#5fb030}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `  <link rel="stylesheet" href="/global.css"> <body><header><h2 class="svelte-1mwrium" data-svelte-h="svelte-1slqdb0">Admin Mode</h2> <div class="topnav"><a href="/edit/cartas"${add_classes(($page.url.pathname === "/edit/cartas" ? "active" : "").trim())} data-svelte-h="svelte-9lgbbc">Cartas</a> <a href="/edit/personas"${add_classes(($page.url.pathname === "/edit/personas" ? "active" : "").trim())} data-svelte-h="svelte-1aqa1xn">Personas</a></div></header> <div class="slot">${slots.default ? slots.default({}) : ``}</div> <footer data-svelte-h="svelte-1mj1407"><div class="footer_wrap"><a href="/"><img src="/logo.png" alt="Logo" class="logo"></a></div></footer> </body>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b4f873c6.js.map
