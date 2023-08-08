import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/6.8cf2f06e.js","_app/immutable/chunks/scheduler.96db699d.js","_app/immutable/chunks/index.7cdda8aa.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.78ed0395.js","_app/immutable/chunks/navigation.f66fc20b.js"];
export const stylesheets = ["_app/immutable/assets/6.9d501049.css"];
export const fonts = [];
