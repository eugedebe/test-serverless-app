

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user-details/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.1284decf.js","_app/immutable/chunks/scheduler.96db699d.js","_app/immutable/chunks/index.7cdda8aa.js","_app/immutable/chunks/js.cookie.9e0ef7a3.js"];
export const stylesheets = [];
export const fonts = [];
