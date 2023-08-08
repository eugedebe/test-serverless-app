

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0ff9b89c.js","_app/immutable/chunks/scheduler.96db699d.js","_app/immutable/chunks/index.7cdda8aa.js","_app/immutable/chunks/singletons.78ed0395.js"];
export const stylesheets = [];
export const fonts = [];
