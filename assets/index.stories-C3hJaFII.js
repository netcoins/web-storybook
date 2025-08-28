import{j as n}from"./jsx-runtime-MHZvqL_t.js";import{D as w,A as b}from"./index-BH8bjQ4h.js";import{r as T}from"./index-BQja5mEm.js";import"./iframe-BS01ocFG.js";import{T as D}from"./tr-D2tHf09X.js";import{T as _}from"./tbody-CiSW1EDL.js";import"./index-CX5TbEnR.js";import"./iconBase-9XpoQhKd.js";import"./useTranslation-DGMNydqY.js";import"./context-DmGcVjL-.js";import"./text-CFn7IS6o.js";import"./use-style-config-C5kUKhAX.js";import"./factory-CqABM38r.js";import"./flex-ClNkGKqe.js";import"./icon-C7PIpLv-.js";import"./context-CjJ0Wp3S.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="0e7c885d-1d47-4cfc-a4b6-84ed81feb81a",e._sentryDebugIdIdentifier="sentry-dbid-0e7c885d-1d47-4cfc-a4b6-84ed81feb81a")}catch{}const k={component:w},d={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function l({statement:e}){const[s,p]=T.useState([]),y=(t,o)=>s.some(r=>r.statementId===t&&r.format===o);function x(t,o,r){p(i=>[...i,{statementId:r,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===r&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>x(t,o,`${e.value}-${e.label}`),downloadingFormats:b.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const a=()=>n.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(_,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(l,{statement:{...d},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(l,{statement:{...d},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(l,{statement:{...d},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
