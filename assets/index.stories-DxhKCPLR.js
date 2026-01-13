import{j as o}from"./jsx-runtime-DUvnlu6r.js";import{r as i}from"./index-DbeXWJ-W.js";import{A as n}from"./index-DVJY_LAW.js";import"./iframe-xLDCLI1U.js";import{T as D,a as f}from"./tr-DuLzsHn-.js";import"./index-B-FMiNOZ.js";import"./use-style-config-BEaeOCj0.js";import"./factory-EvmFdQJ8.js";import"./button-CSzKaiSu.js";import"./context-D3WNSJYq.js";import"./spinner-B_jfKDrU.js";import"./emotion-react.browser.esm-DNcCxAUk.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Bl65njns.js";import"./icon-CouGRMZl.js";import"./index-B3i-pE6L.js";import"./index-74_L8YuN.js";import"./iconBase-BEtHxgO5.js";import"./menu-bUcI2D7e.js";import"./use-descendant-Ceon0tu5.js";import"./use-popper-g63-_hRX.js";import"./use-event-listener-DJUhvG9G.js";import"./use-callback-ref-pRHjHwSk.js";import"./use-safe-layout-effect-CiFH7Jzm.js";import"./use-update-effect-CJwnIJfw.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-B5Byahbn.js";import"./use-disclosure-PFCjadI2.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-rXzd1MKL.js";import"./children-CiAjPAHz.js";import"./menu-list-BjC4e0hP.js";import"./motion-CyXmvnor.js";import"./icon-button-Dyq1mF0Q.js";import"./menu-item-jEUZtwN_.js";import"./menu-icon-CA0rLHhs.js";import"./dateFormating-SPk13RwN.js";import"./format-BNL-6LtM.js";import"./index-lGYSRGBb.js";import"./index-BcYljkKM.js";import"./useTranslation-BjPozARb.js";import"./context-BAyZlrbb.js";import"./text-IH71t2kF.js";import"./box-Qy06BcHb.js";import"./flex-t7eBuDrE.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="191e60a8-991c-4aea-aff0-b25e2ed4e290",e._sentryDebugIdIdentifier="sentry-dbid-191e60a8-991c-4aea-aff0-b25e2ed4e290")}catch{}const me={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
