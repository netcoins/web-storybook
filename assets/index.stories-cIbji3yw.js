import{j as n}from"./jsx-runtime-DBvW3J4P.js";import{D as w,A as b}from"./index-BldtY7qu.js";import{r as T}from"./index-eiqMTM-Z.js";import"./iframe-CbEszLwV.js";import{T as D}from"./tr-DowHaKSe.js";import{T as _}from"./tbody-DeKf7fcb.js";import"./index-DwpOUU05.js";import"./iconBase-yBK0uS8I.js";import"./useTranslation-BFxd_HHW.js";import"./context-BeIFq7kq.js";import"./text-drvfSy8p.js";import"./use-style-config-CRvEJw1Z.js";import"./factory-CH5OTrax.js";import"./flex-CVx7E2fo.js";import"./icon-BTh9G9d4.js";import"./context-oDCZUX6j.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="0e7c885d-1d47-4cfc-a4b6-84ed81feb81a",e._sentryDebugIdIdentifier="sentry-dbid-0e7c885d-1d47-4cfc-a4b6-84ed81feb81a")}catch{}const k={component:w},d={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function l({statement:e}){const[s,p]=T.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function x(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(l,{statement:{...d},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(l,{statement:{...d},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(l,{statement:{...d},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,k as default};
