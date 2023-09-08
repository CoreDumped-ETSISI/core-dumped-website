import * as server from '../entries/pages/(main)/about/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(main)/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.b0671156.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Grid.09b0b195.js","_app/immutable/chunks/PeopleCard.2abfec13.js","_app/immutable/chunks/Title.eef844be.js","_app/immutable/chunks/paths.098b1e54.js"];
export const stylesheets = ["_app/immutable/assets/7.036a69e3.css","_app/immutable/assets/Grid.170abb5d.css","_app/immutable/assets/PeopleCard.c1a5d36c.css","_app/immutable/assets/Title.6d76f96b.css"];
export const fonts = [];
