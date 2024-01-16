import{j as a}from"./Link-d1dacd30.js";import{P as i,S as p,B as c}from"./index.esm-07fd3446.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./assertThisInitialized-33acfce7.js";import"./index-d3ea75b5.js";const P={decorators:[n=>a.jsx(i,{children:a.jsx(n,{})})],title:"Molecules/Submenu button",component:p,parameters:{layout:"centered"}},b=[{items:[{label:"C1 - Item 1",url:"#"},{label:"C1 - Item 2",items:[{label:"Sub Item 1",url:"#"}]}],label:"C1 - Group 1"},{label:"C1 - Group 2",items:[{label:"Item 1",url:"#"},{label:"Item 2",items:[{label:"Sub Item 1",url:"#"}]}]}],d=[{items:[{label:"C2 - Item 1",url:"#"},{label:" C2 - Item 2",items:[{label:"Sub Item 1",url:"#"}]}],label:"C2 - Group 1"},{label:"C2 - Group 2",items:[{label:"Item 1",url:"#"},{label:"Item 2",items:[{label:"Sub Item 1",url:"#"}]}]}],S=[{groups:b},{groups:d}],e={args:{label:"Sub menu",drawerProps:{},children:a.jsx("div",{children:"Hola"})}},r={args:{label:"Sub menu",drawerProps:{},hasDrawer:!0,children:a.jsx(c,{sx:{m:2,display:"flex",gap:3},columns:S})}};var l,s,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Sub menu',
    drawerProps: {},
    children: <div>Hola</div>
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var o,u,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Sub menu',
    drawerProps: {},
    hasDrawer: true,
    children: <BodyMenu sx={{
      m: 2,
      display: 'flex',
      gap: 3
    }} columns={columns} />
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["Default","WithMenuBody"];export{e as Default,r as WithMenuBody,j as __namedExportsOrder,P as default};
