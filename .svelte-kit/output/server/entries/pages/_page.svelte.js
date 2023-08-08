import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
import "amazon-cognito-identity-js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-14ue56g{display:flex;flex-direction:column;align-items:end}.centered.svelte-14ue56g{max-width:20em;margin:0 auto}label.svelte-14ue56g{width:100%}input.svelte-14ue56g{flex:1}button.svelte-14ue56g{min-width:100px;border:none;background-size:1rem 1rem;cursor:pointer;height:100%;opacity:0.5;transition:opacity 0.2s}button.svelte-14ue56g:hover{opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userName;
  let password;
  $$result.css.add(css);
  return `<div class="centered svelte-14ue56g"><h1 data-svelte-h="svelte-13vjqy4">Sign up</h1> <form class="svelte-14ue56g"><div style="margin:10px 0px;"><label for="name" class="svelte-14ue56g" data-svelte-h="svelte-1lvea0b">User Name</label> <input id="name" name="name" autocomplete="off" class="svelte-14ue56g"${add_attribute("value", userName, 0)}></div> <div><label for="pass" class="svelte-14ue56g">Password
				<input id="pass" name="description" autocomplete="off" class="svelte-14ue56g"${add_attribute("value", password, 0)}></label></div> <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 10px;"><button class="svelte-14ue56g" data-svelte-h="svelte-3ij47c">Sign up</button></div></form> <br> <br><br> <a href="/signup" data-svelte-h="svelte-1cpnm5p">Create an account</a> </div>`;
});
export {
  Page as default
};
