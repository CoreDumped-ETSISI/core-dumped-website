const load = async ({ fetch, params }) => {
  const cards = await fetch("http://localhost:3000/eventos");
  const fetchCategories = await fetch("http://localhost:3000/eventos/categorias");
  let events = await cards.json();
  let categories = await fetchCategories.json();
  return { events, categories };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5bcd88e8.js')).default;
const server_id = "src/routes/(main)/eventos/+page.server.ts";
const imports = ["_app/immutable/nodes/8.defee485.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CardComponent.eed2c840.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Filters.f50678df.js","_app/immutable/chunks/Grid.09b0b195.js","_app/immutable/chunks/Title.eef844be.js"];
const stylesheets = ["_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Filters.7a3ab94e.css","_app/immutable/assets/Grid.170abb5d.css","_app/immutable/assets/Title.6d76f96b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-aa7a5754.js.map
