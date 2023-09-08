const load = async ({ fetch, params }) => {
  const response = await fetch("http://localhost:3000/personas");
  let data = await response.json();
  return { data };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-af29aa76.js')).default;
const universal_id = "src/routes/edit/personas/+page.ts";
const imports = ["_app/immutable/nodes/14.77599f05.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Grid.09b0b195.js","_app/immutable/chunks/PeopleCard.2abfec13.js"];
const stylesheets = ["_app/immutable/assets/14.4a92bcf2.css","_app/immutable/assets/Grid.170abb5d.css","_app/immutable/assets/PeopleCard.c1a5d36c.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=14-2c2b90a3.js.map
