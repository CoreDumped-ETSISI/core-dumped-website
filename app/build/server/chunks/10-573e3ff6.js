import { e as error } from './index-0087e825.js';

const load = async ({ fetch, params }) => {
  if (params.id.length != 24) {
    throw error(404, {
      message: "Not found"
    });
  }
  const response = await fetch("http://localhost:3000/cartas/" + params.id);
  if (response.ok) {
    let data = await response.json();
    return { data };
  } else {
    throw error(response.status, {
      message: response.statusText
    });
  }
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d3b31343.js')).default;
const universal_id = "src/routes/(main)/[id]/+page.ts";
const imports = ["_app/immutable/nodes/10.02bbab91.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Title.eef844be.js"];
const stylesheets = ["_app/immutable/assets/10.c7b000f4.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Title.6d76f96b.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-573e3ff6.js.map
