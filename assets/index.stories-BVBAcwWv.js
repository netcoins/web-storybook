import{j as n}from"./jsx-runtime-B1_a8hwj.js";import{D as w,A as b}from"./index-loJQOjRS.js";import{r as x}from"./index-WONpn9lv.js";import"./iframe-B2VuCFQ1.js";import{T as D,a as R}from"./table-C_UgD-YX.js";import"./index-CYBH8In8.js";import"./iconBase-QDQcrdxX.js";import"./useTranslation-DmsJw1Jy.js";import"./context-BbxKxCsm.js";import"./index-C_LPTu6O.js";import"./create-recipe-context-yK9vg825.js";import"./factory-DxsDglld.js";import"./flex-B-JKexX_.js";import"./icon-CV2PHFSI.js";import"./create-slot-recipe-context-Dz9SWyWT.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="505d3795-cc67-47af-a459-b332cff7939e",e._sentryDebugIdIdentifier="sentry-dbid-505d3795-cc67-47af-a459-b332cff7939e")}catch{}const N={component:w},i={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,c]=x.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function T(t,o,r){c(l=>[...l,{statementId:r,format:o}]),setTimeout(()=>{c(l=>l.filter(p=>!(p.statementId===r&&p.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...i},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...i},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...i},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var m,u,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const $=["Default"];export{a as Default,$ as __namedExportsOrder,N as default};
