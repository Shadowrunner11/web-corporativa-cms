import{M as i}from"./index.esm-07fd3446.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Link-d1dacd30.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import"./assertThisInitialized-33acfce7.js";import"./index-d3ea75b5.js";const _={title:"Molecules/Menu Group",component:i,parameters:{layout:"centered"}},p=Array.from({length:5}).map((l,e)=>({label:`sub item ${e}`,url:"#"})),r={args:{label:"Sub menu",items:p}},c=Array.from({length:5}).map((l,e)=>({label:`sub item ${e}`,items:[{label:`children sub item ${e}`,url:"#"}]})),t={args:{label:"Sub menu",items:c}};var s,a,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Sub menu",
    items
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var o,u,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Sub menu",
    items: itemsWithSubMenu
  }
}`,...(n=(u=t.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};const W=["Default","WithSubMenus"];export{r as Default,t as WithSubMenus,W as __namedExportsOrder,_ as default};
