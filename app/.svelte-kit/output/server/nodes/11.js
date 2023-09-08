import * as server from '../entries/pages/admin/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.74ddd66a.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/forms.ff805141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/stores.e1744db4.js"];
export const stylesheets = ["_app/immutable/assets/11.b5351ee1.css"];
export const fonts = [];
