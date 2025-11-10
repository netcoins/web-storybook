import{j as o}from"./jsx-runtime-B791eGeM.js";import{r as s}from"./index-DIojWxTx.js";import{A as a}from"./index-DhZdjtC7.js";import"./iframe-CxvPOnKM.js";import{T as D}from"./tr-IIdL3u_8.js";import{T as f}from"./tbody-DQkV4vl4.js";import"./index-DFxvKU1k.js";import"./use-style-config-D4hZ3gJS.js";import"./factory-CgJe7pVc.js";import"./button-CBll598A.js";import"./context-lpI2Zs0F.js";import"./spinner-Ca_fy1Wb.js";import"./emotion-react.browser.esm-DMjDgr_P.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-0PJQmlTb.js";import"./icon-BYdeT4Jt.js";import"./index-CCMuh6DD.js";import"./index-CA0xchr5.js";import"./iconBase-BdnFlmf7.js";import"./menu-DTf4yhJU.js";import"./use-descendant-BPhFQBfI.js";import"./use-popper-BatGaK5A.js";import"./use-event-listener-D-_kvGlA.js";import"./use-callback-ref-BTIe4Lfr.js";import"./use-safe-layout-effect-BQz89kL8.js";import"./use-update-effect-B6CgvZue.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CiOKOpCt.js";import"./use-disclosure-Bbrx3J8Q.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CbwAKmga.js";import"./children-gORKtQ_Q.js";import"./menu-list-jHeDj--B.js";import"./motion-CEvJpgjM.js";import"./icon-button-CiFIlcib.js";import"./menu-item-alrzcl2S.js";import"./menu-icon-WdrmnZm9.js";import"./dateFormating-D8FvsbIK.js";import"./format-BNL-6LtM.js";import"./index-Bq-Asx-R.js";import"./index-BFX15_Ms.js";import"./useTranslation-CcFYHi0U.js";import"./context-BkSF-D9k.js";import"./text-BOMZCICA.js";import"./box-B80E9g7g.js";import"./flex-DwRBA7jn.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d91124b-7107-4de4-b826-90c18280feb1",e._sentryDebugIdIdentifier="sentry-dbid-0d91124b-7107-4de4-b826-90c18280feb1")}catch{}const ce={component:a},r=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
