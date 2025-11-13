import{j as o}from"./jsx-runtime-CxukLqk6.js";import{r as s}from"./index-CiQMbla8.js";import{A as a}from"./index-JaHlLzoL.js";import"./iframe-D7rg4_Je.js";import{T as D}from"./tr-4XxVGHj-.js";import{T as f}from"./tbody-D6C005yb.js";import"./index-5I1tYi7R.js";import"./use-style-config-CJ_WbTpR.js";import"./factory-NsmCz-LG.js";import"./button-DTf6i-4Y.js";import"./context-CgMiQkFd.js";import"./spinner-DwV1uv7H.js";import"./emotion-react.browser.esm-DevKKqRP.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-C3oA4Nik.js";import"./icon-D-MVpCZ3.js";import"./index-GK-wKpfT.js";import"./index-C5HtJnXI.js";import"./iconBase-Bw8pfdU6.js";import"./menu-CfqI2VKV.js";import"./use-descendant-DRyx5Xwv.js";import"./use-popper-Bp69CBM1.js";import"./use-event-listener-Cc4ZgxPH.js";import"./use-callback-ref-BhFV4E7J.js";import"./use-safe-layout-effect-VpWU712p.js";import"./use-update-effect-DM7wJQ5t.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BRPziMvG.js";import"./use-disclosure-_AwN0iGs.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-D4nWVr1l.js";import"./children-BppR3lEu.js";import"./menu-list-BIWXCV0A.js";import"./motion-BflyN1mf.js";import"./icon-button-C52BKB77.js";import"./menu-item-MpVpcgKy.js";import"./menu-icon-Ccsz9Met.js";import"./dateFormating-CYz9AALq.js";import"./format-BNL-6LtM.js";import"./index-B72VkzXO.js";import"./index-CDlLPwaW.js";import"./useTranslation-WMktMm1Y.js";import"./context-DHmpLZWT.js";import"./text-C6RSxZCk.js";import"./box-CUlvbDxP.js";import"./flex-DbNS81H2.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d91124b-7107-4de4-b826-90c18280feb1",e._sentryDebugIdIdentifier="sentry-dbid-0d91124b-7107-4de4-b826-90c18280feb1")}catch{}const ce={component:a},r=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
