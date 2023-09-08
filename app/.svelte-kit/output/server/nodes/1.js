

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.27860701.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js","_app/immutable/chunks/stores.e1744db4.js","_app/immutable/chunks/singletons.62e2f722.js","_app/immutable/chunks/paths.098b1e54.js"];
export const stylesheets = [];
export const fonts = [];
