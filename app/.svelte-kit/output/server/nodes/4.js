

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.2aaec1ce.js","_app/immutable/chunks/scheduler.142d0579.js","_app/immutable/chunks/index.afb31315.js"];
export const stylesheets = ["_app/immutable/assets/4.80fd74c0.css"];
export const fonts = [];
