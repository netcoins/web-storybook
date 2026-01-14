import{j as n}from"./jsx-runtime-B06jWHTP.js";import{D as w,A as T}from"./index-CSx2-J8C.js";import{r as b}from"./index-C1TPUaTx.js";import"./iframe-B6fleTvj.js";import{T as D,a as _}from"./tr-BGVrFlOV.js";import"./index-CvKVntdK.js";import"./iconBase-BIvVonaM.js";import"./useTranslation-CcGFFMSi.js";import"./context-B9iS85c8.js";import"./text-ArEex_Yj.js";import"./use-style-config-B2W6jWHK.js";import"./factory-DvFDl3zZ.js";import"./flex-DY0jT9vK.js";import"./icon-DJIQtlNh.js";import"./context-Bcn5T_v6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7adc887c-01fa-4b25-af20-a30caf3ea82d",e._sentryDebugIdIdentifier="sentry-dbid-7adc887c-01fa-4b25-af20-a30caf3ea82d")}catch{}const $={component:w},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[r,p]=b.useState([]),y=(t,o)=>r.some(a=>a.statementId===t&&a.format===o);function x(t,o,a){p(i=>[...i,{statementId:a,format:o}]),setTimeout(()=>{p(i=>i.filter(c=>!(c.statementId===a&&c.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:T.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var m,u,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,$ as default};
