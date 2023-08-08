import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import "amazon-cognito-identity-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let age, height, income;
  return `<h1 data-svelte-h="svelte-1bgpw6n">home</h1> <div></div> <a href="/user-details" data-svelte-h="svelte-gb5jrz">See Profile</a> <form><div style="width:100%; display: flex; flex-direction:column; align-items:center; justify-content: center;"><div style="display: flex; flex-direction: column; align-items: end;"><div style="margin:10px 0px;"><label for="age" data-svelte-h="svelte-wmd51a">Age</label> <input id="age" name="age" autocomplete="off"${add_attribute("value", age, 0)}></div> <div style="margin:10px 0px;"><label for="height" data-svelte-h="svelte-dqzz1w">Height</label> <input id="height" name="height" autocomplete="off"${add_attribute("value", height, 0)}></div> <div><label for="income">Income
                    <input id="pass" name="income" autocomplete="off"${add_attribute("value", income, 0)}></label></div></div> <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 10px;"><button data-svelte-h="svelte-1rn6wl3">Submit</button></div> <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 10px;"><button data-svelte-h="svelte-1eqov4f">I already stored data on the server!</button></div></div> <div style="width: 100%; display: flex; align-items: center; justify-content: center; margin-top: 10px;"><button data-svelte-h="svelte-za3tjx">Delete user</button></div></form>`;
});
export {
  Page as default
};
