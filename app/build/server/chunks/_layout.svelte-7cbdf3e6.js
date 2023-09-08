import { c as create_ssr_component, b as subscribe, d as add_classes } from './ssr-27bb2042.js';
import { p as page } from './stores-9cf89351.js';

/* empty css                       */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `  <link rel="stylesheet" href="/global.css"> <body><header><a href="/" data-svelte-h="svelte-1y5snuo"><img src="/logo.png" alt="Logo" class="logo"></a> <div class="topnav"><a href="/"${add_classes(($page.url.pathname === "/" ? "active" : "").trim())} data-svelte-h="svelte-hd7y51">Inicio</a> <a href="/proyectos"${add_classes(($page.url.pathname === "/proyectos" ? "active" : "").trim())} data-svelte-h="svelte-12nynjc">Proyectos</a> <a href="/eventos"${add_classes(($page.url.pathname === "/eventos" ? "active" : "").trim())} data-svelte-h="svelte-12cgcam">Eventos</a> <a href="/about"${add_classes(($page.url.pathname === "/about" ? "active" : "").trim())} data-svelte-h="svelte-f2qg70">Sobre nosotros</a></div></header> <div class="slot">${slots.default ? slots.default({}) : ``}</div> <footer data-svelte-h="svelte-18s3o7l"><div class="footer_wrap"><a href="/"><img src="/logo.png" alt="Logo" class="logo"></a> <div class="footer_socials"><ul><li><a href="mailto:coredumped.etsisi@gmail.com"><i class="fa-solid fa-envelope fa-2xl"></i></a></li> <li><a href="https://github.com/CoreDumped-ETSISI"><i class="fa-brands fa-github fa-2xl"></i></a></li> <li><a href="https://t.me/CoreDumpedUPM"><i class="fa-brands fa-telegram fa-2xl"></i></a></li> <li><a href="https://discord.gg/mf67s292"><i class="fa-brands fa-discord fa-2xl"></i></a></li> <li><a href="https://www.instagram.com/coredumpedupm/"><i class="fa-brands fa-square-instagram fa-2xl"></i></a></li> <li><a href="https://www.linkedin.com/company/coredumped/"><i class="fa-brands fa-linkedin fa-2xl"></i></a></li></ul></div></div></footer></body>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-7cbdf3e6.js.map
