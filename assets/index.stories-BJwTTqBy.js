import{j as o}from"./jsx-runtime-CP_l27Og.js";import{r as i}from"./index-CifKAwtN.js";import{A as n}from"./index-CI48wHCa.js";import"./iframe-B0IufI44.js";import{T as D,a as f}from"./tr-Bljqj3DM.js";import"./index-CCy6FYCJ.js";import"./use-style-config-CuBRFvaP.js";import"./factory-CMYslHa5.js";import"./button-CXr4bKqM.js";import"./context-B7IJ1l61.js";import"./spinner-CRPwlJ2b.js";import"./emotion-react.browser.esm-CNQlzF-b.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B_UA-Osh.js";import"./icon-BmCmp2Wh.js";import"./index-CtaIvPe8.js";import"./index-DlsI_QKJ.js";import"./iconBase-XtocjxSk.js";import"./menu-C2qzbf2h.js";import"./use-descendant-D96ReP_f.js";import"./use-popper-D_3Yq-9u.js";import"./use-event-listener-DIHwNqRT.js";import"./use-callback-ref-ze8OKKod.js";import"./use-safe-layout-effect-yIea3rTY.js";import"./use-update-effect-BOmdwVTy.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BYOTJWeX.js";import"./use-disclosure-DMXuqmpO.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BSQ7KXjo.js";import"./children-CQWM9A1v.js";import"./menu-list-C69C7RUs.js";import"./motion-DtvjGxoX.js";import"./icon-button-Dtjs3kw4.js";import"./menu-item-Co2rFUMC.js";import"./menu-icon-pmcunvKA.js";import"./dateFormating-DdNBT0eX.js";import"./format-BNL-6LtM.js";import"./index-BkZDNpKn.js";import"./index-CwR-zYOD.js";import"./useTranslation-C0BvOFkz.js";import"./context-Bfm3wPBX.js";import"./text-Dc4cdgMD.js";import"./box-C8HWwTW7.js";import"./flex-CX8y9bjv.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="191e60a8-991c-4aea-aff0-b25e2ed4e290",e._sentryDebugIdIdentifier="sentry-dbid-191e60a8-991c-4aea-aff0-b25e2ed4e290")}catch{}const me={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
