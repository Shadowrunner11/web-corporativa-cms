import{C as _,k as v,l as I,m as y,n as g,j as r,i as m}from"./Link-d1dacd30.js";import{e as j,f as h,g as b,o as N,h as S,u as E,i as C,j as M,k as R,l as q,m as O,n as k,q as w,I as s,r as D,s as P,t as F}from"./index.esm-07fd3446.js";import{a as $}from"./_commonjsHelpers-de833af9.js";import{r as o,a as z}from"./index-76fb7be0.js";function A(e,t){return()=>null}function G(e,t){var n,a;return o.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(a=e.type)==null||(a=a._payload)==null||(a=a.value)==null?void 0:a.muiName)!==-1}function T(e,t){return()=>null}let c=0;function V(e){const[t,n]=o.useState(e),a=e||t;return o.useEffect(()=>{t==null&&(c+=1,n(`mui-${c}`))},[t]),a}const p=z["useId".toString()];function B(e){if(p!==void 0){const t=p();return e??t}return V(e)}function L(e,t,n,a,ee){return null}const H={configure:e=>{_.configure(e)}},U=Object.freeze(Object.defineProperty({__proto__:null,capitalize:v,createChainedFunction:j,createSvgIcon:h,debounce:b,deprecatedPropType:A,isMuiElement:G,ownerDocument:N,ownerWindow:S,requirePropFactory:T,setRef:I,unstable_ClassNameGenerator:H,unstable_useEnhancedEffect:E,unstable_useId:B,unsupportedProp:L,useControlled:C,useEventCallback:M,useForkRef:y,useIsFocusVisible:g},Symbol.toStringTag,{value:"Module"}));var i={},x={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(x);var W=x.exports,u={};const X=$(U);var d;function J(){return d||(d=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=X}(u)),u}var K=W;Object.defineProperty(i,"__esModule",{value:!0});var l=i.default=void 0,Q=K(J()),Y=r;l=i.default=(0,Q.default)((0,Y.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");const Z=({label:e})=>{const[t,n]=o.useState(!1);return r.jsxs(m,{sx:{display:"flex",justifyContent:"center",cursor:"pointer",color:"text.primary"},onClick:()=>n(a=>!a),children:[e," ",r.jsx(l,{sx:{transform:t?"rotateX(180deg)":"unset"}})]})},f=({items:e})=>r.jsx(R,{sx:{background:"white",boxShadow:"unset",zIndex:1301},navItemsMobile:e.map(({label:t})=>r.jsxs(q,{sx:{boxShadow:"unset",flexDirection:"column","& .MuiCollapse-root":{width:1}},children:[r.jsx(O,{sx:{width:1},expandIcon:r.jsx(l,{}),children:r.jsx(m,{children:t})}),r.jsx(k,{children:"Hola"})]},String(t))),navItemsDesktop:e.map(({label:t})=>r.jsx(Z,{label:t},String(t))),leftOptions:r.jsxs(w,{direction:"row",children:[r.jsx(s,{sx:{color:"primary.main"},children:r.jsx(D,{})}),r.jsx(s,{sx:{color:"primary.main"},children:r.jsx(P,{})}),r.jsx(s,{sx:{color:"primary.main"},children:r.jsx(F,{})})]})});try{f.displayName="NavbarExample",f.__docgenInfo={description:"",displayName:"NavbarExample",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NavItem[]"}}}}}catch{}export{f as N};
