import{j as n}from"./jsx-runtime-CzawzsmA.js";import{D as f,A as b}from"./index--Um7DXyX.js";import{r as T}from"./index-D_JTVgog.js";import"./iframe-nho8xsTa.js";import{T as D}from"./tr-Dcv13Tta.js";import{T as _}from"./tbody-CAceixcx.js";import"./index-Crqwe6pe.js";import"./iconBase-DYPka3bB.js";import"./useTranslation-B3r8WpWI.js";import"./context-pUfBJB3L.js";import"./text-CY1i-moW.js";import"./use-style-config-Ub2AYDQR.js";import"./factory-BmPIFoIt.js";import"./flex-BO9qodud.js";import"./icon-CR5-jKYm.js";import"./context-BNlGVI0T.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a8c59ab0-4938-470e-b883-1de157490a9c",e._sentryDebugIdIdentifier="sentry-dbid-a8c59ab0-4938-470e-b883-1de157490a9c")}catch{}const k={component:f},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[s,p]=T.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function x(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(f,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(w=(u=a.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,k as default};
