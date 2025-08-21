import{c as v,t as _}from"./index-BtOJh6jT.js";import{j as a}from"./jsx-runtime-NFq79fyV.js";import{C as T}from"./color-mode-provider-5pLCV51t.js";import{G as k}from"./emotion-react.browser.esm-DQ-YqFV4.js";import{r as C}from"./index-RAwrHW_h.js";import{i as j,y as P,m as M,z as R,A as I,B as E,h as O,D,r as G,F}from"./use-style-config-BenyQIu3.js";import{c as W}from"./css-var-BrkJIZpq.js";import{c as B}from"./context-DT_moMtn.js";import{a as K}from"./portal-CT7oPmpp.js";import{E as L}from"./env-CXPBU-PX.js";import{T as q,a as A}from"./toast.provider-S9u2K1B5.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2d439b41-75e8-408a-a942-97af06aa25d8",e._sentryDebugIdIdentifier="sentry-dbid-2d439b41-75e8-408a-a942-97af06aa25d8")}catch{}function H(e,t){const o={};for(const r of t)r in e&&(o[r]=e[r]);return o}function w(e,t,o={}){const{stop:r,getKey:n}=o;function i(s,l=[]){if(j(s)||Array.isArray(s)){const u={};for(const[h,d]of Object.entries(s)){const c=(n==null?void 0:n(h))??h,f=[...l,c];if(r!=null&&r(s,f))return t(s,l);u[c]=i(d,f)}return u}return t(s,l)}return i(e)}const N=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","gradients","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur","breakpoints"];function Z(e){return H(e,N)}function J(e){return e.semanticTokens}function Q(e){const{__cssMap:t,__cssVars:o,__breakpoints:r,...n}=e;return n}function U(e){const t=Z(e),o=J(e),r=i=>P.includes(i)||i==="default",n={};return w(t,(i,s)=>{i!=null&&(n[s.join(".")]={isSemantic:!1,value:i})}),w(o,(i,s)=>{i!=null&&(n[s.join(".")]={isSemantic:!0,value:i})},{stop:i=>Object.keys(i).every(r)}),n}function $(e,t){return W(String(e).replace(/\./g,"-"),void 0,t)}function X(e){var s;const t=U(e),o=(s=e.config)==null?void 0:s.cssVarPrefix;let r={};const n={};function i(l,u){const d=[String(l).split(".")[0],u].join(".");if(!t[d])return u;const{reference:f}=$(d,o);return f}for(const[l,u]of Object.entries(t)){const{isSemantic:h,value:d}=u,{variable:c,reference:f}=$(l,o);if(!h){if(l.startsWith("space")){const b=l.split("."),[m,...p]=b,g=`${m}.-${p.join(".")}`,x=v.negate(d),y=v.negate(f);n[g]={value:x,var:c,varRef:y}}r[c]=d,n[l]={value:d,var:c,varRef:f};continue}const V=j(d)?d:{default:d};r=M(r,Object.entries(V).reduce((b,[m,p])=>{var y;if(!p)return b;const g=i(l,`${p}`);if(m==="default")return b[c]=g,b;const x=((y=R)==null?void 0:y[m])??m;return b[x]={[c]:g},b},{})),n[l]={value:f,var:c,varRef:f}}return{cssVars:r,cssMap:n}}function Y(e){const t=Q(e),{cssMap:o,cssVars:r}=X(t);return Object.assign(t,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...r},__cssMap:o,__breakpoints:I(t.breakpoints)}),t}const S=String.raw,z=S`
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
`,ee=()=>a.jsx(k,{styles:z}),te=({scope:e=""})=>a.jsx(k,{styles:S`
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
    `});function re(e){const{cssVarsRoot:t,theme:o,children:r}=e,n=C.useMemo(()=>Y(o),[o]);return a.jsxs(E,{theme:n,children:[a.jsx(ne,{root:t}),r]})}function ne({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return a.jsx(k,{styles:o=>({[t]:o.__cssVars})})}B({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function oe(){const{colorMode:e}=O();return a.jsx(k,{styles:t=>{const o=D(t,"styles.global"),r=G(o,{theme:t,colorMode:e});return r?F(r)(t):void 0}})}const ie=e=>{const{children:t,colorModeManager:o,portalZIndex:r,resetScope:n,resetCSS:i=!0,theme:s={},environment:l,cssVarsRoot:u,disableEnvironment:h,disableGlobalStyle:d}=e,c=a.jsx(L,{environment:l,disabled:h,children:t});return a.jsx(re,{theme:s,cssVarsRoot:u,children:a.jsxs(T,{colorModeManager:o,options:s.config,children:[i?a.jsx(te,{scope:n}):a.jsx(ee,{}),!d&&a.jsx(oe,{}),r?a.jsx(K,{zIndex:r,children:c}):c]})})},se=e=>function({children:o,theme:r=e,toastOptions:n,...i}){return a.jsxs(ie,{theme:r,...i,children:[a.jsx(q,{value:n==null?void 0:n.defaultOptions,children:o}),a.jsx(A,{...n})]})},ye=se(_);export{ye as C};
