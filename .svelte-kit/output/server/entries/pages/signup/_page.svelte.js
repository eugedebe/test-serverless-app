import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import "amazon-cognito-identity-js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-xmoq0w{display:flex;flex-direction:column;align-items:end}.centered.svelte-xmoq0w{max-width:20em;margin:0 auto}label.svelte-xmoq0w{width:100%}input.svelte-xmoq0w{flex:1}button.svelte-xmoq0w{min-width:100px;border:none;background-size:1rem 1rem;cursor:pointer;height:100%;opacity:0.5;transition:opacity 0.2s}button.svelte-xmoq0w:hover{opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userName;
  let userNameConfirmation;
  let email;
  let password;
  let confirmationCode;
  $$result.css.add(css);
  return `<div class="centered svelte-xmoq0w"><h1 data-svelte-h="svelte-13vjqy4">Sign up</h1> <form class="svelte-xmoq0w"><div style="margin:10px 0px;"><label for="name" class="svelte-xmoq0w" data-svelte-h="svelte-1lvea0b">User Name</label> <input id="name" name="name" autocomplete="off" class="svelte-xmoq0w"${add_attribute("value", userName, 0)}></div> <div style="margin:10px 0px;"><label for="email" class="svelte-xmoq0w" data-svelte-h="svelte-44hmb6">email</label> <input id="email" name="email" autocomplete="off" class="svelte-xmoq0w"${add_attribute("value", email, 0)}></div> <div><label for="pass" class="svelte-xmoq0w">Password
                <input id="pass" name="description" autocomplete="off" class="svelte-xmoq0w"${add_attribute("value", password, 0)}></label></div> <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 10px;"><button class="svelte-xmoq0w" data-svelte-h="svelte-1g59c5h">Sign in</button></div></form> <br> <br><br> <form class="svelte-xmoq0w"><div style="margin:10px 0px;"><label for="name" class="svelte-xmoq0w" data-svelte-h="svelte-1lvea0b">User Name</label> <input id="name" name="name" autocomplete="off" class="svelte-xmoq0w"${add_attribute("value", userNameConfirmation, 0)}></div> <div style="margin:10px 0px;"><label for="name" class="svelte-xmoq0w" data-svelte-h="svelte-6o6y2f">Confirmation Code</label> <input id="confirmation-code" name="confirmation-code" autocomplete="off" class="svelte-xmoq0w"${add_attribute("value", confirmationCode, 0)}></div> <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 10px;"><div style="display:flex; flex-direction: row; "><button class="svelte-xmoq0w" data-svelte-h="svelte-1mqv1mi">Send Code</button> <button class="svelte-xmoq0w" data-svelte-h="svelte-wuy724">ReSend Code</button></div></div></form> <a href="/" data-svelte-h="svelte-bxx4dm">Log in</a> </div>`;
});
export {
  Page as default
};
