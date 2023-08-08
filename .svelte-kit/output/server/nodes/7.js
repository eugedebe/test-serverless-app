import * as universal from '../entries/pages/sverdle/how-to-play/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.js";
export const imports = ["_app/immutable/nodes/7.fd83861f.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/scheduler.96db699d.js","_app/immutable/chunks/index.7cdda8aa.js"];
export const stylesheets = ["_app/immutable/assets/7.89a9e780.css"];
export const fonts = [];
