import{j as n}from"./jsx-runtime-CQ4vP9D9.js";import{D as w,A as x}from"./index-DYhQ4Z2M.js";import{r as b}from"./index-CCYt4LCz.js";import"./iframe-BOJVnPqD.js";import{T as D,a as R}from"./table-CigMNSvN.js";import"./index-Cwbx8mzo.js";import"./link-B4zlq3Gn.js";import"./create-recipe-context-Cd1gDX9n.js";import"./factory-CrYckV6z.js";import"./index-gt7Vnwoq.js";import"./flex-BWqEwq43.js";import"./icon--Q6l7EXN.js";import"./index-Dfh99gWW.js";import"./iconBase-CXfTt_Jl.js";import"./useTranslation-Cjd8wC9H.js";import"./context-Czc8akKf.js";import"./create-slot-recipe-context-_OwTRBFK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="3aa8af6f-2910-4ca1-9d3f-47e198d3a694",e._sentryDebugIdIdentifier="sentry-dbid-3aa8af6f-2910-4ca1-9d3f-47e198d3a694")}catch{}const k={component:w},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[r,p]=b.useState([]),y=(t,o)=>r.some(a=>a.statementId===t&&a.format===o);function T(t,o,a){p(i=>[...i,{statementId:a,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===a&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Table.Root css={{
    borderCollapse: "collapse"
  }} w="100%">
            <Table.Body w="full">
                <DocumentRowWrapper statement={{
        ...MOCK_STATEMENT
      }} />
                <DocumentRowWrapper statement={{
        ...MOCK_STATEMENT
      }} />
                <DocumentRowWrapper statement={{
        ...MOCK_STATEMENT
      }} />
            </Table.Body>
        </Table.Root>;
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,k as default};
