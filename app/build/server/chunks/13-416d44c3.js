const load = async ({ fetch, params }) => {
  const allCardComponents = await fetch("http://localhost:3000/cartas");
  const cat1 = await fetch("http://localhost:3000/proyectos/categorias");
  const cat2 = await fetch("http://localhost:3000/eventos/categorias");
  let cards = await allCardComponents.json();
  let projectCategories = await cat1.json();
  let eventCategories = await cat2.json();
  return { cards, projectCategories, eventCategories };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-62bbe613.js')).default;
const universal_id = "src/routes/edit/cartas/+page.ts";
const imports = ["_app/immutable/nodes/13.a4759483.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CardComponent.eed2c840.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Filters.f50678df.js","_app/immutable/chunks/Grid.09b0b195.js"];
const stylesheets = ["_app/immutable/assets/13.a50e23c8.css","_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Filters.7a3ab94e.css","_app/immutable/assets/Grid.170abb5d.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=13-416d44c3.js.map
