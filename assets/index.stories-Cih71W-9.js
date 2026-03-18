import{j as n}from"./jsx-runtime-C-kOd8ra.js";import{D as f,A as T}from"./index-CQBJ2Nri.js";import{r as x}from"./index-DBbTb9B2.js";import"./iframe-BxgWbTN1.js";import{T as D,a as R}from"./table-BYjorQHx.js";import"./index-Dy8f-fdX.js";import"./link-DcTa6NRR.js";import"./create-recipe-context-COPnnEYf.js";import"./factory-BJmwlrVc.js";import"./index-BwfINbw1.js";import"./flex-xRwok3JK.js";import"./icon-DeqR9OkW.js";import"./index-C7JHjPDe.js";import"./iconBase-C_LfVN9r.js";import"./useTranslation-T_n-Za-8.js";import"./context-BClljs4W.js";import"./create-slot-recipe-context-Bs5XWZRb.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3b5d6066-b438-4883-9547-13bcf07dc37e",e._sentryDebugIdIdentifier="sentry-dbid-3b5d6066-b438-4883-9547-13bcf07dc37e")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=x.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function b(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>b(t,o,`${e.value}-${e.label}`),downloadingFormats:T.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
