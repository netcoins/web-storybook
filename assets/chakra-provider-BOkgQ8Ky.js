import{c as v,t as _}from"./index-Czlj_PXv.js";import{j as a}from"./jsx-runtime-DS9e4u4A.js";import{C as T}from"./color-mode-provider-DI_15gLj.js";import{G as y}from"./emotion-react.browser.esm-CieXSqqo.js";import{r as C}from"./index-CVM0l-Uq.js";import{i as j,p as P,m as M,g as R,j as I,u as E,r as O,k as G}from"./factory-vQYEPmQH.js";import{c as D}from"./css-var-BrkJIZpq.js";import{h as W,m as F}from"./use-style-config-BVS96XQ5.js";import{c as K}from"./context-BSvfJKpw.js";import{a as L}from"./portal-hXwKXqA4.js";import{E as q}from"./env-Jw06Xm4P.js";import{T as B,a as H}from"./toast.provider-BV-lEisx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="59e5eb37-93d6-45cc-9b05-c98188aa636c",e._sentryDebugIdIdentifier="sentry-dbid-59e5eb37-93d6-45cc-9b05-c98188aa636c")}catch{}function N(e,t){const o={};for(const r of t)r in e&&(o[r]=e[r]);return o}function w(e,t,o={}){const{stop:r,getKey:n}=o;function i(s,l=[]){if(j(s)||Array.isArray(s)){const u={};for(const[h,c]of Object.entries(s)){const d=(n==null?void 0:n(h))??h,f=[...l,d];if(r!=null&&r(s,f))return t(s,l);u[d]=i(c,f)}return u}return t(s,l)}return i(e)}const Z=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function A(e){return N(e,Z)}function J(e){return e.semanticTokens}function Q(e){const{__cssMap:t,__cssVars:o,__breakpoints:r,...n}=e;return n}function U(e){const t=A(e),o=J(e),r=i=>P.includes(i)||i==="default",n={};return w(t,(i,s)=>{i!=null&&(n[s.join(".")]={isSemantic:!1,value:i})}),w(o,(i,s)=>{i!=null&&(n[s.join(".")]={isSemantic:!0,value:i})},{stop:i=>Object.keys(i).every(r)}),n}function $(e,t){return D(String(e).replace(/\./g,"-"),void 0,t)}function X(e){var s;const t=U(e),o=(s=e.config)==null?void 0:s.cssVarPrefix;let r={};const n={};function i(l,u){const c=[String(l).split(".")[0],u].join(".");if(!t[c])return u;const{reference:f}=$(c,o);return f}for(const[l,u]of Object.entries(t)){const{isSemantic:h,value:c}=u,{variable:d,reference:f}=$(l,o);if(!h){if(l.startsWith("space")){const b=l.split("."),[m,...p]=b,g=`${m}.-${p.join(".")}`,x=v.negate(c),k=v.negate(f);n[g]={value:x,var:d,varRef:k}}r[d]=c,n[l]={value:c,var:d,varRef:f};continue}const V=j(c)?c:{default:c};r=M(r,Object.entries(V).reduce((b,[m,p])=>{var k;if(!p)return b;const g=i(l,`${p}`);if(m==="default")return b[d]=g,b;const x=((k=R)==null?void 0:k[m])??m;return b[x]={[d]:g},b},{})),n[l]={value:f,var:d,varRef:f}}return{cssVars:r,cssMap:n}}function Y(e){const t=Q(e),{cssMap:o,cssVars:r}=X(t);return Object.assign(t,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...r},__cssMap:o,__breakpoints:W(t.breakpoints)}),t}const S=String.raw,z=S`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,ee=()=>a.jsx(y,{styles:z}),te=({scope:e=""})=>a.jsx(y,{styles:S`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${z}
    `});function re(e){const{cssVarsRoot:t,theme:o,children:r}=e,n=C.useMemo(()=>Y(o),[o]);return a.jsxs(I,{theme:n,children:[a.jsx(ne,{root:t}),r]})}function ne({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return a.jsx(y,{styles:o=>({[t]:o.__cssVars})})}K({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function oe(){const{colorMode:e}=E();return a.jsx(y,{styles:t=>{const o=F(t,"styles.global"),r=O(o,{theme:t,colorMode:e});return r?G(r)(t):void 0}})}const ie=e=>{const{children:t,colorModeManager:o,portalZIndex:r,resetScope:n,resetCSS:i=!0,theme:s={},environment:l,cssVarsRoot:u,disableEnvironment:h,disableGlobalStyle:c}=e,d=a.jsx(q,{environment:l,disabled:h,children:t});return a.jsx(re,{theme:s,cssVarsRoot:u,children:a.jsxs(T,{colorModeManager:o,options:s.config,children:[i?a.jsx(te,{scope:n}):a.jsx(ee,{}),!c&&a.jsx(oe,{}),r?a.jsx(L,{zIndex:r,children:d}):d]})})},se=e=>function({children:o,theme:r=e,toastOptions:n,...i}){return a.jsxs(ie,{theme:r,...i,children:[a.jsx(B,{value:n==null?void 0:n.defaultOptions,children:o}),a.jsx(H,{...n})]})},ye=se(_);export{ye as C};
