import{j as o}from"./jsx-runtime-Nog3FBKS.js";import{r as i}from"./index-Mm4yjXV8.js";import{A as n}from"./index-D4LnXek5.js";import"./iframe-B01Rhazy.js";import{T as D,a as f}from"./table-D0JeiwKN.js";import"./index-Cru9uZ-4.js";import"./button-sVoUEUTP.js";import"./factory-N6_sDeIQ.js";import"./create-recipe-context-CpX93Itj.js";import"./attr-DhmmAXiK.js";import"./spinner-CNCW_VnY.js";import"./icon-yi4lADk0.js";import"./index-B0EYXbE3.js";import"./index-BWz52C4t.js";import"./iconBase-x4ewFLct.js";import"./portal-Bhrly4qS.js";import"./index-DzMh4kgF.js";import"./index-CHc7YHay.js";import"./index-C4FKJP_g.js";import"./use-environment-context-_tICM2Zd.js";import"./create-context-VxOajozH.js";import"./menu-DTKw0pGW.js";import"./create-slot-recipe-context-C0pz5CIq.js";import"./icons-D9mh23eq.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-B6_baNkW.js";import"./index-BLVBAjsL.js";import"./index-C2PRfEqY.js";import"./use-event-CPw4vvpY.js";import"./index-wBejrI3a.js";import"./index-pW82Y0Cx.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";import"./use-locale-context-B-cxjhbP.js";import"./factory-B_IBsr2U.js";import"./dateFormating-IYttN2-N.js";import"./format-BNL-6LtM.js";import"./index-BmDyxewY.js";import"./index-LSdfx3_X.js";import"./useTranslation-DzyTr9hW.js";import"./context-ylTfukuW.js";import"./index-jbykmj3K.js";import"./index-B3Z5u5ba.js";import"./flex-DXc-o7XK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7c8f5e04-3fb7-4b24-aa38-ba3b52182890",e._sentryDebugIdIdentifier="sentry-dbid-7c8f5e04-3fb7-4b24-aa38-ba3b52182890")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[b,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[b,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
