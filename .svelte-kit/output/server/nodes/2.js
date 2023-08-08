import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.04c5cb61.js","_app/immutable/chunks/scheduler.96db699d.js","_app/immutable/chunks/index.7cdda8aa.js","_app/immutable/chunks/navigation.f66fc20b.js","_app/immutable/chunks/singletons.78ed0395.js","_app/immutable/chunks/js.cookie.9e0ef7a3.js"];
export const stylesheets = ["_app/immutable/assets/2.cac6973d.css"];
export const fonts = [];
