import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { CognitoUserPool } from "amazon-cognito-identity-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {

  const userPoolId = import.meta.env.VITE_USER_POOL_ID;
  const clientId = import.meta.env.VITE_CLIEND_ID;

  let poolData = {
    UserPoolId: userPoolId,
    // Your user pool id here
    ClientId: clientId
    // Your client id here
  };
  var userPool = new CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("session validity: " + session.isValid());
      cognitoUser.getUserAttributes(function (err2, attributes) {
        if (err2) {
          console.log("in err: ", err2);
        } else {
          for (let i = 0; i < attributes.length; i++) {
            console.log(
              "attribute " + attributes[i].getName() + " has value " + attributes[i].getValue()
            );
          }
        }
      });
    });
  }
  return `<h2 data-svelte-h="svelte-py8ke8">user profile</h2>`;
});
export {
  Page as default
};
