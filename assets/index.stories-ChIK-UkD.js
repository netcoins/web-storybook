import{j as n}from"./jsx-runtime-XluhU0he.js";import{D as w,A as x}from"./index-CiAOf91w.js";import{r as b}from"./index-BqQGZ5I6.js";import"./iframe-CfsTNa-7.js";import{T as D,a as R}from"./table-B8PYPM0Y.js";import"./index-C7zEF5Cu.js";import"./link-BnfISxp9.js";import"./create-recipe-context-CUSab0G1.js";import"./factory-BJcU17Du.js";import"./index-C1TAcF2j.js";import"./flex-AdiVJTeo.js";import"./icon-CXUQ5J_i.js";import"./index-Bh0Aaq5H.js";import"./iconBase-DCKQAIIC.js";import"./useTranslation-CljWxwnm.js";import"./context-oFvTv4YE.js";import"./create-slot-recipe-context-Bwzj8hez.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="3aa8af6f-2910-4ca1-9d3f-47e198d3a694",e._sentryDebugIdIdentifier="sentry-dbid-3aa8af6f-2910-4ca1-9d3f-47e198d3a694")}catch{}const k={component:w},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[r,p]=b.useState([]),y=(t,o)=>r.some(a=>a.statementId===t&&a.format===o);function T(t,o,a){p(i=>[...i,{statementId:a,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===a&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
