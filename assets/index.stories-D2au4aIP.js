import{j as n}from"./jsx-runtime-CVZYPpe3.js";import{D as f,A as x}from"./index-vlJE3rtt.js";import{r as b}from"./index-CaYcWLWq.js";import"./iframe-DxI-Xxek.js";import{T as D,a as R}from"./table-D2PFX3re.js";import"./index-BAW0TPMw.js";import"./link-B3AjcFyN.js";import"./create-recipe-context-gmrgIQJg.js";import"./factory-DerXpTZ7.js";import"./index-B9UJmMLF.js";import"./flex-ChIhw5dD.js";import"./icon-Cgf6Ffhr.js";import"./index-DE7afPCt.js";import"./iconBase-C8F894Sy.js";import"./useTranslation-AShfltgg.js";import"./context-Cf1HNvvF.js";import"./create-slot-recipe-context-Azz0Zyfa.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="444d8a35-d104-4a6d-8ce0-177ae0c03230",e._sentryDebugIdIdentifier="sentry-dbid-444d8a35-d104-4a6d-8ce0-177ae0c03230")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=b.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function T(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
