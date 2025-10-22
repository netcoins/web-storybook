import{j as o}from"./jsx-runtime-CzawzsmA.js";import{r as s}from"./index-D_JTVgog.js";import{A as n}from"./index-YPJznCbN.js";import"./iframe-nho8xsTa.js";import{T as f}from"./tr-Dcv13Tta.js";import{T as D}from"./tbody-CAceixcx.js";import"./index-DSOowo5w.js";import"./use-style-config-Ub2AYDQR.js";import"./factory-BmPIFoIt.js";import"./button-DvWNQ0gU.js";import"./context-BNlGVI0T.js";import"./spinner-B1_EYiBc.js";import"./emotion-react.browser.esm-CksHDEt-.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-D10T2Vj8.js";import"./icon-CR5-jKYm.js";import"./index-Cbov5tPY.js";import"./index-DVIVWTI7.js";import"./iconBase-DYPka3bB.js";import"./menu-CO86Crv9.js";import"./use-descendant-CiknogQX.js";import"./use-popper-BH-K1p3b.js";import"./use-event-listener-DgVlUeRk.js";import"./use-callback-ref-jTPbLjr0.js";import"./use-safe-layout-effect-B11fltg7.js";import"./use-update-effect-B_PPOnFv.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-DLxpytaU.js";import"./use-disclosure-C3KfC4Lh.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DJQQieUE.js";import"./children-CrionPpC.js";import"./menu-list-DZK5_jXT.js";import"./motion-CyzYwqJA.js";import"./icon-button-CtcjfMqG.js";import"./menu-item-DikO3uBu.js";import"./menu-icon-BXmx78DL.js";import"./dateFormating-NoAq88nk.js";import"./format-BNL-6LtM.js";import"./index-DDXDTnTk.js";import"./index-Crqwe6pe.js";import"./useTranslation-B3r8WpWI.js";import"./context-pUfBJB3L.js";import"./text-CY1i-moW.js";import"./box-CY1UNaKb.js";import"./flex-BO9qodud.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d76f752b-c2e6-4842-9f07-a04fd9e0d51b",e._sentryDebugIdIdentifier="sentry-dbid-d76f752b-c2e6-4842-9f07-a04fd9e0d51b")}catch{}const ce={component:n},r=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
