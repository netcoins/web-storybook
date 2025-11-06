import{j as o}from"./jsx-runtime-0j627tJz.js";import{r as s}from"./index-CqM68cw3.js";import{A as a}from"./index-C9c8qcal.js";import"./iframe-BequwYZt.js";import{T as D}from"./tr-qv9axqVe.js";import{T as y}from"./tbody-EEcJCRaQ.js";import"./index-C6ECu00P.js";import"./use-style-config-K9VkrvYr.js";import"./factory-Bd3V6wa0.js";import"./button-LLMNyJV3.js";import"./context-CRHpPgiL.js";import"./spinner-C8UEVkG1.js";import"./emotion-react.browser.esm-fXjbUP0y.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-JZ-KxWIX.js";import"./icon-MsGxxGD1.js";import"./index-CCbHqdx6.js";import"./index-C2GRt4qZ.js";import"./iconBase-BZJQX4CJ.js";import"./menu-9iu4e7ai.js";import"./use-descendant-kP1i2bA9.js";import"./use-popper-_gbpm_E0.js";import"./use-event-listener-UqEDgyih.js";import"./use-callback-ref-Bb_HrfCB.js";import"./use-safe-layout-effect-cxAStKeI.js";import"./use-update-effect-Z2q3P0cR.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CCwWdjvL.js";import"./use-disclosure-CYveMB9n.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Ex6VinmX.js";import"./children-DMrXMgaK.js";import"./menu-list-Ci4J80r7.js";import"./motion-CvhmvcY9.js";import"./icon-button-gwut8nFE.js";import"./menu-item-C0ImqBe9.js";import"./menu-icon-Bcl3D2CL.js";import"./dateFormating-D2tvmmgt.js";import"./format-BNL-6LtM.js";import"./index-BbCozj_x.js";import"./index-CH_UO4tK.js";import"./useTranslation-D16A3oi5.js";import"./context-Dak0qW2L.js";import"./text-B0fW30gV.js";import"./box-BxwTpzrX.js";import"./flex-BUw3zH7M.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="154c14b8-5508-45b8-9b75-8167c5cb087b",e._sentryDebugIdIdentifier="sentry-dbid-154c14b8-5508-45b8-9b75-8167c5cb087b")}catch{}const me={component:a},r=()=>{const[e,t]=s.useState(!1),[b,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[b,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return <Table layout="fixed" sx={{
    borderCollapse: "collapse"
  }} w="100%">
            <Tbody w="full">
                <AuthorizedDeviceRow onDeleteClick={() => setIsDeleteModalOpen(true)} onEditClick={() => setIsEditModalOpen(true)} authorizedDevice={{
        authorized_at: "2021-10-10",
        deviceID: "123456",
        label: "Device",
        type: "Desktop",
        user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        is_current: true,
        summary: "Device summary"
      }} />
            </Tbody>
        </Table>;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return <Table layout="fixed" sx={{
    borderCollapse: "collapse"
  }} w="100%">
            <Tbody w="full">
                <AuthorizedDeviceRow onDeleteClick={() => setIsDeleteModalOpen(true)} onEditClick={() => setIsEditModalOpen(true)} authorizedDevice={{
        authorized_at: "2021-10-10",
        deviceID: "123456",
        label: "Device",
        type: "Desktop",
        user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        is_current: false,
        summary: "Device summary"
      }} />
            </Tbody>
        </Table>;
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ue=["IsCurrentDevice","IsNotCurrentDevice"];export{r as IsCurrentDevice,i as IsNotCurrentDevice,ue as __namedExportsOrder,me as default};
