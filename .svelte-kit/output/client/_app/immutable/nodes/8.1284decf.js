import{s as g,n as l}from"../chunks/scheduler.96db699d.js";import{S as u,i as c,g as m,h as p,y as d,a as h,f as v}from"../chunks/index.7cdda8aa.js";import{C}from"../chunks/js.cookie.9e0ef7a3.js";function _(i){let e,n="user profile";return{c(){e=m("h2"),e.textContent=n},l(t){e=p(t,"H2",{"data-svelte-h":!0}),d(e)!=="svelte-py8ke8"&&(e.textContent=n)},m(t,o){h(t,e,o)},p:l,i:l,o:l,d(t){t&&v(e)}}}function x(i){let e={UserPoolId:"eu-west-2_lYdgNFNRz",ClientId:"15j3o5j00ekao3btgpnuj7t1jj"};var n=new C(e),t=n.getCurrentUser();return t!=null&&t.getSession(function(o,f){if(o){alert(o.message||JSON.stringify(o));return}console.log("session validity: "+f.isValid()),t.getUserAttributes(function(r,a){if(r)console.log("in err: ",r);else for(let s=0;s<a.length;s++)console.log("attribute "+a[s].getName()+" has value "+a[s].getValue())})}),[]}class N extends u{constructor(e){super(),c(this,e,x,_,g,{})}}export{N as component};
