import{j as n}from"./jsx-runtime-CHyxX_5n.js";import{D as w,A as T}from"./index-DQrwQbba.js";import{r as b}from"./index-BCTaj__g.js";import"./iframe-C3Vznt8H.js";import{T as D}from"./tr-DA3Y4ZHr.js";import{T as _}from"./tbody-DSl766WV.js";import"./index-Ihh17YBv.js";import"./iconBase-BEozv2MW.js";import"./useTranslation-CIkR91I8.js";import"./context-BTA3T-59.js";import"./text-CIBszfI9.js";import"./use-style-config-BXPCbPng.js";import"./factory-D36qWwKB.js";import"./flex-DAOyVrXN.js";import"./icon-54qfchxO.js";import"./context-B1S3rUf_.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="fc696af2-2a8a-49c5-a69c-d1fee43ef0f1",e._sentryDebugIdIdentifier="sentry-dbid-fc696af2-2a8a-49c5-a69c-d1fee43ef0f1")}catch{}const k={component:w},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=b.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function x(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:T.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,k as default};
