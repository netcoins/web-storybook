import{j as n}from"./jsx-runtime-DfTvk5JU.js";import{D as w,A as T}from"./index-R_1cqTof.js";import{r as x}from"./index-BI2rZMRP.js";import"./iframe-OeolHJlO.js";import{T as D,a as R}from"./table-p8GPQGKr.js";import"./index-EnihuLdH.js";import"./link-DXIw648D.js";import"./create-recipe-context-CTKZw3Mr.js";import"./factory-CP_R41L6.js";import"./index-BnLxWds-.js";import"./flex-DrAuV2CR.js";import"./icon--5O7vX8F.js";import"./index-CBjxoiqB.js";import"./iconBase-D0dYv0uK.js";import"./useTranslation-Db0WPopz.js";import"./context-aIipiWxJ.js";import"./create-slot-recipe-context-CFdiyhgN.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="2d3b4b3f-edef-4364-8638-f05b2189b4fc",e._sentryDebugIdIdentifier="sentry-dbid-2d3b4b3f-edef-4364-8638-f05b2189b4fc")}catch{}const k={component:w},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=x.useState([]),b=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function y(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>y(t,o,`${e.value}-${e.label}`),downloadingFormats:T.filter(t=>b(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,k as default};
