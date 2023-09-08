import * as server from '../entries/pages/(main)/eventos/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/eventos/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/eventos/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.defee485.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CardComponent.eed2c840.js","_app/immutable/chunks/paths.098b1e54.js","_app/immutable/chunks/StatusTag.d46d5903.js","_app/immutable/chunks/Filters.f50678df.js","_app/immutable/chunks/Grid.09b0b195.js","_app/immutable/chunks/Title.eef844be.js"];
export const stylesheets = ["_app/immutable/assets/CardComponent.619980c2.css","_app/immutable/assets/StatusTag.b8123a44.css","_app/immutable/assets/Filters.7a3ab94e.css","_app/immutable/assets/Grid.170abb5d.css","_app/immutable/assets/Title.6d76f96b.css"];
export const fonts = [];