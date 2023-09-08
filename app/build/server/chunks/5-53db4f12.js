import { r as redirect } from './index-0087e825.js';

const load = async (event) => {
  const auth = event.cookies.get("AuthorizationToken");
  if (!auth) {
    throw redirect(303, "/admin");
  }
  return { success: "Success" };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-b4f873c6.js')).default;
const server_id = "src/routes/edit/+layout.server.ts";
const imports = ["_app/immutable/nodes/5.5aa64aec.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/stores.e1744db4.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js"];
const stylesheets = ["_app/immutable/assets/4.80fd74c0.css","_app/immutable/assets/all.140c9228.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-53db4f12.js.map
