

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(main)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7f29ddb0.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/stores.e1744db4.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js"];
export const stylesheets = ["_app/immutable/assets/all.140c9228.css"];
export const fonts = [];
