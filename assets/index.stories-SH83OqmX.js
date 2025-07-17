import{j as n}from"./jsx-runtime-DIzLeBSg.js";import{D as f,A as x}from"./index-ulWs1fXL.js";import{r as T}from"./index-HfLk7_r9.js";import"./iframe-NthpIpXS.js";import{T as D,a as _}from"./tr-CpmL_--n.js";import"./index-h5EGf4KQ.js";import"./iconBase-Bl0CWZaD.js";import"./useTranslation-DZADT0tm.js";import"./context-CQZ1kJwo.js";import"./text-5ESNzIeg.js";import"./use-style-config-XwpbuwHi.js";import"./flex-BovBxUVX.js";import"./icon-Qt3h4PRE.js";import"./context-BKv63LUG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c426008c-ba2a-4501-bae9-5f0a20bd734d",e._sentryDebugIdIdentifier="sentry-dbid-c426008c-ba2a-4501-bae9-5f0a20bd734d")}catch{}const N={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[a,p]=T.useState([]),y=(t,o)=>a.some(r=>r.statementId===t&&r.format===o);function b(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(c=>!(c.statementId===r&&c.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>b(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var m,u,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Table layout="fixed" sx={{
    borderCollapse: "collapse"
  }} w="100%">
            <Tbody w="full">
                <DocumentRowWrapper statement={{
        ...MOCK_STATEMENT
      }} />
                <DocumentRowWrapper statement={{
        ...MOCK_STATEMENT
      }} />
                <DocumentRowWrapper statement={{
        ...MOCK_STATEMENT
      }} />
            </Tbody>
        </Table>;
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,N as default};
