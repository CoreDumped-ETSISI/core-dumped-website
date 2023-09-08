import * as universal from '../entries/pages/(main)/_id_/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(main)/[id]/+page.ts";
export const imports = ["_app/immutable/nodes/10.02bbab91.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Title.eef844be.js"];
export const stylesheets = ["_app/immutable/assets/10.c7b000f4.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Title.6d76f96b.css"];
export const fonts = [];
