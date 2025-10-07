import{j as o}from"./jsx-runtime-Dl65b5Ft.js";import{r as s}from"./index-Dx8U6HT0.js";import{A as n}from"./index-DrorDA22.js";import"./iframe-CspplzkO.js";import{T as f}from"./tr-BH6Z1vd-.js";import{T as D}from"./tbody-DJN-2UdW.js";import"./index-BCCPffIE.js";import"./use-style-config-Cg25QPWW.js";import"./factory-BVSOBJDN.js";import"./button-CEyPViyF.js";import"./context-CbOneei4.js";import"./spinner-Jpzki7Nr.js";import"./emotion-react.browser.esm-DHDzoTUT.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BN62VkOm.js";import"./icon-BQZJQIlv.js";import"./index-CppkSsh-.js";import"./index-B79lJRSx.js";import"./iconBase-ypD8OVkJ.js";import"./menu-H7GagmRU.js";import"./use-descendant-DgFi7rMB.js";import"./use-popper-Qa1Jhdk4.js";import"./use-event-listener-ekDpyWuY.js";import"./use-callback-ref-D7vYO4C0.js";import"./use-safe-layout-effect-B3ZR_d1v.js";import"./use-update-effect-DyVwXlaJ.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BFpwFWHv.js";import"./use-disclosure-Dr6LLOyo.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CTKw-ilw.js";import"./children-DrTEusAb.js";import"./menu-list-BeL27Cu8.js";import"./motion-DU7btML2.js";import"./icon-button-C0YkrXuO.js";import"./menu-item-BKIIHxQl.js";import"./menu-icon-Ao3hi_Cl.js";import"./dateFormating-CBiCYR4w.js";import"./format-BNL-6LtM.js";import"./index-gZx4KZ7H.js";import"./index-BnQR5SKL.js";import"./useTranslation-DSqpKOvX.js";import"./context-lJ3fCJqv.js";import"./text-C_yf4AbR.js";import"./box-xJmNwxIz.js";import"./flex-CCsjEBiM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6283391-5b7e-48f4-938c-d42808b14a16",e._sentryDebugIdIdentifier="sentry-dbid-f6283391-5b7e-48f4-938c-d42808b14a16")}catch{}const ce={component:n},r=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,c,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const ue=["IsCurrentDevice","IsNotCurrentDevice"];export{r as IsCurrentDevice,i as IsNotCurrentDevice,ue as __namedExportsOrder,ce as default};
