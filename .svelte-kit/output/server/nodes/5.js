

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3ba2159f.js","_app/immutable/chunks/scheduler.96db699d.js","_app/immutable/chunks/index.7cdda8aa.js","_app/immutable/chunks/js.cookie.9e0ef7a3.js"];
export const stylesheets = ["_app/immutable/assets/5.32668e42.css"];
export const fonts = [];
