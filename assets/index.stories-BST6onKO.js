import{j as n}from"./jsx-runtime-YZ3G-iYu.js";import{D as f,A as x}from"./index-CUVzmD0D.js";import{r as b}from"./index-BS2vbNQg.js";import"./iframe-BX2xc-_U.js";import{T as D,a as R}from"./table-CSwh_l7G.js";import"./index-xdqt72Ez.js";import"./link-C-GbAlvJ.js";import"./create-recipe-context-PhxApsI9.js";import"./factory-Dg1TFsXz.js";import"./index-Clk5tSNG.js";import"./flex-Bt2k7mEY.js";import"./icon-8w6_OK_u.js";import"./index-aOgZSKCU.js";import"./iconBase-CboeoTjN.js";import"./useTranslation-duUbFn1x.js";import"./context-CdyKrKEB.js";import"./create-slot-recipe-context-DcJDbZXT.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="444d8a35-d104-4a6d-8ce0-177ae0c03230",e._sentryDebugIdIdentifier="sentry-dbid-444d8a35-d104-4a6d-8ce0-177ae0c03230")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=b.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function T(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
