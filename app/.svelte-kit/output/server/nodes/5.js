import * as server from '../entries/pages/edit/_layout.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/edit/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/edit/+layout.server.ts";
export const imports = ["_app/immutable/nodes/5.5aa64aec.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/stores.e1744db4.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js"];
export const stylesheets = ["_app/immutable/assets/4.80fd74c0.css","_app/immutable/assets/all.140c9228.css"];
export const fonts = [];
