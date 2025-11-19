import{j as o}from"./jsx-runtime-BVg7y1Cx.js";import{r as s}from"./index-UqO0nVH7.js";import{A as a}from"./index-BJqxmxXg.js";import"./iframe-A7meJ9S6.js";import{T as D}from"./tr-C4zdX8yT.js";import{T as f}from"./tbody-CpWGv7R7.js";import"./index-D9JiAtTB.js";import"./use-style-config-GGOJDxZk.js";import"./factory-otme7FcP.js";import"./button-CKQ_hx_1.js";import"./context-DdZhDF0X.js";import"./spinner-C4SHLDL2.js";import"./emotion-react.browser.esm-smHvmUJU.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DfLLh5y_.js";import"./icon-Dw9YduYQ.js";import"./index-D02wo5uJ.js";import"./index-BN33adIc.js";import"./iconBase-P9cZLnAH.js";import"./menu-D0ogVK5Z.js";import"./use-descendant-Ct2zYugh.js";import"./use-popper-C49S8W-9.js";import"./use-event-listener-BTXehPBO.js";import"./use-callback-ref-Hdnuz_oo.js";import"./use-safe-layout-effect-ndn6gSfW.js";import"./use-update-effect-Bl661QPJ.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-84952zn1.js";import"./use-disclosure-Dgg2xt1p.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-C05QuhiC.js";import"./children-CJwHQGrN.js";import"./menu-list-VfqsodYg.js";import"./motion-DmXVj7wa.js";import"./icon-button-Cvy9VVsp.js";import"./menu-item-jD3kOKlu.js";import"./menu-icon-CqXeipvz.js";import"./dateFormating-D9WvRBwd.js";import"./format-BNL-6LtM.js";import"./index-BUAsFwHX.js";import"./index-DRCDpJRM.js";import"./useTranslation-Meq16Myt.js";import"./context-BIN0zfio.js";import"./text-ePwmt_IR.js";import"./box-jb5rruk_.js";import"./flex-D58vYMIH.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d91124b-7107-4de4-b826-90c18280feb1",e._sentryDebugIdIdentifier="sentry-dbid-0d91124b-7107-4de4-b826-90c18280feb1")}catch{}const ce={component:a},r=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
