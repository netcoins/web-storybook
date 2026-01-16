import{j as o}from"./jsx-runtime-DPMpNnXZ.js";import{r as i}from"./index-B84vUFZt.js";import{A as n}from"./index-DaeGJjPH.js";import"./iframe-D4MesB1-.js";import{T as D,a as y}from"./table-67YccCTF.js";import"./index-DyfkPAQ_.js";import"./button-P1cOoHXw.js";import"./factory-DyNYFw1b.js";import"./create-recipe-context-Dvnq3eBD.js";import"./attr-DhmmAXiK.js";import"./spinner-B0SaDVG2.js";import"./icon-Bo4cYvSi.js";import"./index-DEMqo-Q-.js";import"./index-Cir6ndEj.js";import"./iconBase-Ba8qU5zn.js";import"./portal-pCdmIA6B.js";import"./index-CehdyC4B.js";import"./index-BAYPxm6O.js";import"./index-CDgzWiXg.js";import"./use-environment-context-BBCdx3we.js";import"./create-context-TtKSSaLt.js";import"./menu-BncESTa5.js";import"./create-slot-recipe-context-Dcgux3jd.js";import"./icons-DekzO3u_.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CxzNjwr8.js";import"./index-BLVBAjsL.js";import"./index-tKXbQ0NM.js";import"./use-event-D-vCkS8Y.js";import"./index-CkgrAf5i.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";import"./use-locale-context-Dp4Prn2t.js";import"./factory-BNSsrlYH.js";import"./dateFormating-IiLPQwt1.js";import"./format-BNL-6LtM.js";import"./index-B8mbdxED.js";import"./index-BbzQ0eBl.js";import"./useTranslation-tVwBD663.js";import"./context-v5lDWSZy.js";import"./index-TWaqeXJZ.js";import"./index-BuaD3O4C.js";import"./flex-DRNaZEXn.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6328b166-3a13-48ee-9a56-0c2c040eba72",e._sentryDebugIdIdentifier="sentry-dbid-6328b166-3a13-48ee-9a56-0c2c040eba72")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return <Table.Root css={{
    borderCollapse: "collapse"
  }} w="100%">
            <Table.Body w="full">
                <AuthorizedDeviceRow onDeleteClick={() => setIsDeleteModalOpen(true)} onEditClick={() => setIsEditModalOpen(true)} authorizedDevice={{
        authorized_at: "2021-10-10",
        deviceID: "123456",
        label: "Device",
        type: "Desktop",
        user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        is_current: true,
        summary: "Device summary"
      }} />
            </Table.Body>
        </Table.Root>;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return <Table.Root css={{
    borderCollapse: "collapse"
  }} w="100%">
            <Table.Body w="full">
                <AuthorizedDeviceRow onDeleteClick={() => setIsDeleteModalOpen(true)} onEditClick={() => setIsEditModalOpen(true)} authorizedDevice={{
        authorized_at: "2021-10-10",
        deviceID: "123456",
        label: "Device",
        type: "Desktop",
        user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        is_current: false,
        summary: "Device summary"
      }} />
            </Table.Body>
        </Table.Root>;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const pe=["IsCurrentDevice","IsNotCurrentDevice"];export{r as IsCurrentDevice,s as IsNotCurrentDevice,pe as __namedExportsOrder,de as default};
