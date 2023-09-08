const load = async ({ fetch }) => {
  const response = await fetch("http://localhost:3000/personas");
  let people = await response.json();
  return { people };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-dbc9f376.js')).default;
const server_id = "src/routes/(main)/about/+page.server.ts";
const imports = ["_app/immutable/nodes/7.b0671156.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Grid.09b0b195.js","_app/immutable/chunks/PeopleCard.2abfec13.js","_app/immutable/chunks/Title.eef844be.js","_app/immutable/chunks/paths.098b1e54.js"];
const stylesheets = ["_app/immutable/assets/7.036a69e3.css","_app/immutable/assets/Grid.170abb5d.css","_app/immutable/assets/PeopleCard.c1a5d36c.css","_app/immutable/assets/Title.6d76f96b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-86fc5ffd.js.map
