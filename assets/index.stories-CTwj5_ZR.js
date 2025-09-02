import{j as n}from"./jsx-runtime-DCp243fw.js";import{D as w,A as b}from"./index-C_Jybk03.js";import{r as T}from"./index-X37gZHMr.js";import"./iframe-CjW4I00D.js";import{T as D}from"./tr-ngr9IF7O.js";import{T as _}from"./tbody-BnkDR2yj.js";import"./index-BBYp1Flb.js";import"./iconBase-UsA_wLJJ.js";import"./useTranslation-CUzMHgJo.js";import"./context-B35ttG2n.js";import"./text-ds9L_zFH.js";import"./use-style-config-BMocqkaz.js";import"./factory-BXOVdwo-.js";import"./flex-Cd8PCP7_.js";import"./icon-CT-N4CCY.js";import"./context-CUL0MZ7i.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="9d0c0faa-a9f8-4ad3-aa9d-2943d8bba3d1",e._sentryDebugIdIdentifier="sentry-dbid-9d0c0faa-a9f8-4ad3-aa9d-2943d8bba3d1")}catch{}const k={component:w},i={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function l({statement:e}){const[r,p]=T.useState([]),y=(t,o)=>r.some(a=>a.statementId===t&&a.format===o);function x(t,o,a){p(d=>[...d,{statementId:a,format:o}]),setTimeout(()=>{p(d=>d.filter(m=>!(m.statementId===a&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(l,{statement:{...i},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(l,{statement:{...i},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(l,{statement:{...i},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,k as default};
