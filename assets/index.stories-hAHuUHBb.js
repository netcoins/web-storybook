import{j as o}from"./jsx-runtime-BBdz9i8f.js";import{r as i}from"./index-CLDyqeFf.js";import{A as n}from"./index-DrGwVQps.js";import"./iframe-nhziNmIE.js";import{T as D,a as f}from"./tr-6tN7CHGz.js";import"./index-CExgIwO6.js";import"./use-style-config-CnySYLUd.js";import"./factory-3hpRlgfl.js";import"./button-BLVvsVzq.js";import"./context-CKU252FF.js";import"./spinner-C9AxwMAn.js";import"./emotion-react.browser.esm-cCAfUX2b.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BcDpRs3V.js";import"./icon-Bjc4M7s7.js";import"./index-liLzjPsN.js";import"./index-D6NmpGlk.js";import"./iconBase-CpSDsPtS.js";import"./menu-HftCNH7u.js";import"./use-descendant-Jq6Yegsf.js";import"./use-popper-CmQorO98.js";import"./use-event-listener-DTPBW4jY.js";import"./use-callback-ref-CyHNAcAu.js";import"./use-safe-layout-effect-CL_piIiz.js";import"./use-update-effect-DMAr7OVE.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CYjUWLgL.js";import"./use-disclosure-ClQodmHm.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BZKpoe7Y.js";import"./children-2Vu76deA.js";import"./menu-list-CJ8EjG_9.js";import"./motion-CT_UHRWS.js";import"./icon-button-BpYKXvNq.js";import"./menu-item-BttqxlZN.js";import"./menu-icon-BdqAUDVc.js";import"./dateFormating-CDySEN-F.js";import"./format-BNL-6LtM.js";import"./index-7L1m-ktC.js";import"./index-CYsx-XtB.js";import"./useTranslation-ZDq8JxxY.js";import"./context-Bj3gIHED.js";import"./text-qmt3YJXZ.js";import"./box-regrXMqG.js";import"./flex-Bptw1u-e.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="191e60a8-991c-4aea-aff0-b25e2ed4e290",e._sentryDebugIdIdentifier="sentry-dbid-191e60a8-991c-4aea-aff0-b25e2ed4e290")}catch{}const me={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const ce=["IsCurrentDevice","IsNotCurrentDevice"];export{r as IsCurrentDevice,s as IsNotCurrentDevice,ce as __namedExportsOrder,me as default};
