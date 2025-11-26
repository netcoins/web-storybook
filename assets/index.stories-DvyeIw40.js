import{j as n}from"./jsx-runtime-DRyd4aDw.js";import{D as f,A as b}from"./index-D9pP05vN.js";import{r as T}from"./index-hoYM_MhK.js";import"./iframe-DnoFEF5L.js";import{T as D}from"./tr-tn-WoBhi.js";import{T as _}from"./tbody-B2v2dKWa.js";import"./index-CtwsPdck.js";import"./iconBase-Cgw5Eno3.js";import"./useTranslation-Czhe10Mr.js";import"./context-EJw9-4NR.js";import"./text-DSLwN6c3.js";import"./use-style-config-BNR2hmNK.js";import"./factory-BXTuZL6K.js";import"./flex-CcESIdJu.js";import"./icon-CAWv3c3U.js";import"./context-BvSOH1wz.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="720e84ae-8378-40da-995a-2b0baadcc553",e._sentryDebugIdIdentifier="sentry-dbid-720e84ae-8378-40da-995a-2b0baadcc553")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[a,p]=T.useState([]),y=(t,o)=>a.some(r=>r.statementId===t&&r.format===o);function x(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,k as default};
