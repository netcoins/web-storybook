import{j as n}from"./jsx-runtime-BltyMVIj.js";import{D as f,A as T}from"./index-CAX2Q_zv.js";import{r as x}from"./index-BjuGsieF.js";import"./iframe-B-P9KW7i.js";import{T as D,a as R}from"./table-GeqHOBxe.js";import"./index-BhjItTYd.js";import"./link-4QpmxI8f.js";import"./create-recipe-context-By7s9Zk1.js";import"./factory-ocjNe6K2.js";import"./index-DflaUoxw.js";import"./flex-C9bK1Iii.js";import"./icon-DgEtWLCh.js";import"./index-eUghAEEC.js";import"./iconBase-BDWalNut.js";import"./useTranslation-CBS6j2O4.js";import"./context-Tu2o7Af6.js";import"./create-slot-recipe-context-CC-za7tj.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3b5d6066-b438-4883-9547-13bcf07dc37e",e._sentryDebugIdIdentifier="sentry-dbid-3b5d6066-b438-4883-9547-13bcf07dc37e")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=x.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function b(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>b(t,o,`${e.value}-${e.label}`),downloadingFormats:T.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
