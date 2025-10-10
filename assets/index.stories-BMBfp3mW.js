import{j as o}from"./jsx-runtime-CHyxX_5n.js";import{r as s}from"./index-BCTaj__g.js";import{A as n}from"./index-P79wO03s.js";import"./iframe-C3Vznt8H.js";import{T as f}from"./tr-DA3Y4ZHr.js";import{T as D}from"./tbody-DSl766WV.js";import"./index-DXvgXPsO.js";import"./use-style-config-BXPCbPng.js";import"./factory-D36qWwKB.js";import"./button-BZ317Ail.js";import"./context-B1S3rUf_.js";import"./spinner-C0iEEgU8.js";import"./emotion-react.browser.esm-BnEgYPP7.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DPXjVske.js";import"./icon-54qfchxO.js";import"./index-BAQZDFBA.js";import"./index-BXNsLb8f.js";import"./iconBase-BEozv2MW.js";import"./menu-CgEQZgo0.js";import"./use-descendant-DePIYhFU.js";import"./use-popper-DxkzUJsn.js";import"./use-event-listener-DhB1fxOR.js";import"./use-callback-ref-AXr5jWp6.js";import"./use-safe-layout-effect-rR6xqPwy.js";import"./use-update-effect-yGGxCaHf.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-D64ozlTS.js";import"./use-disclosure-gqlSRIci.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CUrQd--C.js";import"./children-LpmKVeDd.js";import"./menu-list-CQEjFTMW.js";import"./motion-DljH8rSL.js";import"./icon-button-5l4mwRh9.js";import"./menu-item-DBZJsSOr.js";import"./menu-icon-imfkOC-s.js";import"./dateFormating-B0l-FaN7.js";import"./format-BNL-6LtM.js";import"./index-MHm-HpgQ.js";import"./index-Ihh17YBv.js";import"./useTranslation-CIkR91I8.js";import"./context-BTA3T-59.js";import"./text-CIBszfI9.js";import"./box-CQ4YIrS1.js";import"./flex-DAOyVrXN.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6283391-5b7e-48f4-938c-d42808b14a16",e._sentryDebugIdIdentifier="sentry-dbid-f6283391-5b7e-48f4-938c-d42808b14a16")}catch{}const ce={component:n},r=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
