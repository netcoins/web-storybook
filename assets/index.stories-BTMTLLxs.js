import{j as n}from"./jsx-runtime-MGpiwdwx.js";import{D as f,A as b}from"./index-DAoa6dw2.js";import{r as x}from"./index-AC3qGyG6.js";import"./iframe-MmFYWAG4.js";import{T as D,a as R}from"./table-DAz4wGya.js";import"./index-C_ReZi2N.js";import"./link-iWDb8Jub.js";import"./create-recipe-context-7KYQanMq.js";import"./factory-4qZqBlUt.js";import"./index-D_yAn8MZ.js";import"./flex-DLNdfp1T.js";import"./icon-DhzOIy2b.js";import"./index-QXYpfrgR.js";import"./iconBase-wS0h1zgJ.js";import"./useTranslation-BoCWrZ8a.js";import"./context-BYNHlQP-.js";import"./create-slot-recipe-context-B1GMJY_P.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="4623bd9c-af04-444d-a514-d4e0e48a1154",e._sentryDebugIdIdentifier="sentry-dbid-4623bd9c-af04-444d-a514-d4e0e48a1154")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=x.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function T(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(u=a.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,k as default};
