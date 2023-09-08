const load = async ({ fetch, params }) => {
  const cards = await fetch("http://localhost:3000/proyectos");
  const fetchCategories = await fetch("http://localhost:3000/proyectos/categorias");
  let projects = await cards.json();
  let categories = await fetchCategories.json();
  return { projects, categories };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d8a3a231.js')).default;
const universal_id = "src/routes/(main)/proyectos/+page.ts";
const imports = ["_app/immutable/nodes/9.33c47edb.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CardComponent.eed2c840.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Filters.f50678df.js","_app/immutable/chunks/Grid.09b0b195.js","_app/immutable/chunks/Title.eef844be.js"];
const stylesheets = ["_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Filters.7a3ab94e.css","_app/immutable/assets/Grid.170abb5d.css","_app/immutable/assets/Title.6d76f96b.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=9-55231ab6.js.map
