import{j as n}from"./jsx-runtime-D9n_btLS.js";import{D as w,A as x}from"./index-DWS8ATKK.js";import{r as b}from"./index-B_wJ61bp.js";import"./iframe-1RBj3wOP.js";import{T as D,a as R}from"./table-CoYKQQQ1.js";import"./index-B-kw0f_a.js";import"./link-DDNgRr5Z.js";import"./create-recipe-context-DN1RLOxq.js";import"./factory-CyXdg-dj.js";import"./index-Bl4cAPWq.js";import"./flex-yBvgSHlG.js";import"./icon-BLYmZpDL.js";import"./index-Bn-MvMLo.js";import"./iconBase-CezN9Gbw.js";import"./useTranslation-Bs_DcdEB.js";import"./context-4DbJ0GfA.js";import"./create-slot-recipe-context-L6bnsHVP.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="3aa8af6f-2910-4ca1-9d3f-47e198d3a694",e._sentryDebugIdIdentifier="sentry-dbid-3aa8af6f-2910-4ca1-9d3f-47e198d3a694")}catch{}const k={component:w},l={label:"2024-01-01",csv:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},pdf:{download_path:"https://www.netcoins.com",inline_path:"https://www.netcoins.com"},value:"2024-01-01"};function d({statement:e}){const[r,p]=b.useState([]),y=(t,o)=>r.some(a=>a.statementId===t&&a.format===o);function T(t,o,a){p(i=>[...i,{statementId:a,format:o}]),setTimeout(()=>{p(i=>i.filter(m=>!(m.statementId===a&&m.format===o)))},2e3)}return n.jsx(w,{statement:e,year:"2025",onClick:(t,o)=>T(t,o,`${e.value}-${e.label}`),downloadingFormats:x.filter(t=>y(`${e.value}-${e.label}`,t)),"data-sentry-element":"DocumentRow","data-sentry-component":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})}const s=()=>n.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:n.jsxs(R,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:[n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"}),n.jsx(d,{statement:{...l},"data-sentry-element":"DocumentRowWrapper","data-sentry-source-file":"index.stories.tsx"})]})});var c,u,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,k as default};
