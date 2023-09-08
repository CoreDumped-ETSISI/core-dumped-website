import * as universal from '../entries/pages/edit/add/_page.ts.js';
import * as server from '../entries/pages/edit/add/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/edit/add/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/edit/add/+page.ts";
export { server };
export const server_id = "src/routes/edit/add/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.09203380.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/forms.ff805141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/CardComponent.eed2c840.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Title.eef844be.js"];
export const stylesheets = ["_app/immutable/assets/12.938f4015.css","_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Title.6d76f96b.css"];
export const fonts = [];
