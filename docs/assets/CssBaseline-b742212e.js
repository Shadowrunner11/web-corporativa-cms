import{_ as c}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import{j as l,u as b,a as g,T as x,_ as S,b as m,d as T,c as v}from"./Link-d1dacd30.js";import{r as u}from"./index-76fb7be0.js";import{G as j}from"./index.esm-07fd3446.js";function C(e){return e==null||Object.keys(e).length===0}function E(e){const{styles:t,defaultTheme:o={}}=e,n=typeof t=="function"?s=>t(C(s)?o:s):t;return l.jsx(j,{styles:n})}function _({styles:e,themeId:t,defaultTheme:o={}}){const n=b(o),s=typeof e=="function"?e(t&&n[t]||n):e;return l.jsx(E,{styles:s})}const $=u.createContext(null),h=$;function y(){return u.useContext(h)}const k=typeof Symbol=="function"&&Symbol.for,M=k?Symbol.for("mui.nested"):"__THEME_NESTED__";function P(e,t){return typeof t=="function"?t(e):c({},e,t)}function O(e){const{children:t,theme:o}=e,n=y(),s=u.useMemo(()=>{const r=n===null?o:P(n,o);return r!=null&&(r[M]=n!==null),r},[o,n]);return l.jsx(h.Provider,{value:s,children:t})}const f={};function p(e,t,o,n=!1){return u.useMemo(()=>{const s=e&&t[e]||t;if(typeof o=="function"){const r=o(s),i=e?c({},t,{[e]:r}):r;return n?()=>i:i}return e?c({},t,{[e]:o}):c({},t,o)},[e,t,o,n])}function G(e){const{children:t,theme:o,themeId:n}=e,s=g(f),r=y()||f,i=p(n,s,o),a=p(n,r,o,!0);return l.jsx(O,{theme:a,children:l.jsx(x.Provider,{value:i,children:t})})}const W=["theme"];function N(e){let{theme:t}=e,o=S(e,W);const n=t[m];return l.jsx(G,c({},o,{themeId:n?m:void 0,theme:n||t}))}function z(e){return l.jsx(_,c({},e,{defaultTheme:T,themeId:m}))}const B=(e,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),F=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),H=(e,t=!1)=>{var o;const n={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([i,a])=>{var d;n[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:(d=a.palette)==null?void 0:d.mode}});let s=c({html:B(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},F(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},n);const r=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return r&&(s=[s,r]),s};function R(e){const t=v({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=t;return l.jsxs(u.Fragment,{children:[l.jsx(z,{styles:s=>H(s,n)}),o]})}export{R as C,N as T};
