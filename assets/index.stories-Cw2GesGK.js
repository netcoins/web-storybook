import{j as o}from"./jsx-runtime-BkQZSEIf.js";import{r as i}from"./index-D4EOpcLa.js";import{A as n}from"./index-Dt7Iajjy.js";import"./iframe-DN8G179o.js";import{T as D,a as f}from"./tr-DyqeFn_k.js";import"./index-A0xx1D7c.js";import"./use-style-config-B0UF7OPr.js";import"./factory-BvfaDmtu.js";import"./button-DywUw3lk.js";import"./context-uzRk5v5o.js";import"./spinner-BW1cZurn.js";import"./emotion-react.browser.esm-UeZPA3jc.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-0QJjtJvY.js";import"./icon-BKAVBbR4.js";import"./index-z0EfeFQZ.js";import"./index-vp3VUCro.js";import"./iconBase-BhIrwaDC.js";import"./menu-b_-WVguA.js";import"./use-descendant-Bo0RuFXa.js";import"./use-popper-BbilKC3u.js";import"./use-event-listener-DX7KVXI6.js";import"./use-callback-ref-BnXW2utd.js";import"./use-safe-layout-effect-ZCDLejXd.js";import"./use-update-effect-BDAUnvJJ.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CR33AEaZ.js";import"./use-disclosure-B71kswdA.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CRtdp8JF.js";import"./children-B0anPadQ.js";import"./menu-list-BhwryaFs.js";import"./motion-lpzbv2oE.js";import"./icon-button-qgiibK8j.js";import"./menu-item-Cb4jgwS4.js";import"./menu-icon-DN6Syrdf.js";import"./dateFormating-1VGPWVv1.js";import"./format-BNL-6LtM.js";import"./index-UkdoXd9c.js";import"./index-BZY4FehO.js";import"./useTranslation-BVto1Khj.js";import"./context-BGFKcsXk.js";import"./text-638c3RYc.js";import"./box-CNsYUkgW.js";import"./flex-gyDmVpPH.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="191e60a8-991c-4aea-aff0-b25e2ed4e290",e._sentryDebugIdIdentifier="sentry-dbid-191e60a8-991c-4aea-aff0-b25e2ed4e290")}catch{}const me={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
