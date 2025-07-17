import{j as n}from"./jsx-runtime-IV0hNWlL.js";import{D as f,A as x}from"./index-D0C15yOI.js";import{r as T}from"./index-2etZxnfb.js";import"./iframe-BXtP_xvY.js";import{T as D,a as _}from"./tr-Dv9z1Rx_.js";import"./index-Bm5SSv38.js";import"./iconBase-C3HOsW-Q.js";import"./useTranslation-DJv9nCEz.js";import"./context-C34o5-op.js";import"./text-C1Bc78qT.js";import"./use-style-config-CDFdgQtb.js";import"./flex-Cp2APPf8.js";import"./icon-D00_Znpz.js";import"./context-CCE5gbTt.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c426008c-ba2a-4501-bae9-5f0a20bd734d",e._sentryDebugIdIdentifier="sentry-dbid-c426008c-ba2a-4501-bae9-5f0a20bd734d")}catch{}const N={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[a,p]=T.useState([]),y=(t,o)=>a.some(r=>r.statementId===t&&r.format===o);function b(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(c=>!(c.statementId===r&&c.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>b(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var m,u,w;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
