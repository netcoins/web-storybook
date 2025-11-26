import{j as o}from"./jsx-runtime-f-LqmLrp.js";import{r as s}from"./index-DdGWbiM8.js";import{A as a}from"./index-CAAPieqM.js";import"./iframe-C8iPQQbg.js";import{T as D}from"./tr-wkWqNZJH.js";import{T as f}from"./tbody-BKITVQjH.js";import"./index-C7uE6nRG.js";import"./use-style-config-CSQQc7ef.js";import"./factory-Cn76LgBF.js";import"./button-CJKUbs0R.js";import"./context-DGdO9Tsj.js";import"./spinner-CaO_e2IB.js";import"./emotion-react.browser.esm-DFQh7K33.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B8PxTFZn.js";import"./icon-CUWxfBPZ.js";import"./index-DInbjOc7.js";import"./index-BU_Ob4YZ.js";import"./iconBase-D_l9Hyr6.js";import"./menu-D03rtVhV.js";import"./use-descendant-BhJqcNi_.js";import"./use-popper-GAemyZPj.js";import"./use-event-listener-BN4pGAgl.js";import"./use-callback-ref-B1jvunlg.js";import"./use-safe-layout-effect-DkEPWJAu.js";import"./use-update-effect-Crxbl6TK.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-WjYkQkj3.js";import"./use-disclosure-CDfd52lv.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BnHj2hOZ.js";import"./children-QRV0RdTX.js";import"./menu-list-Byy2G_nT.js";import"./motion-Cx9rCsFt.js";import"./icon-button-hkY5hVXW.js";import"./menu-item-D5P_w05f.js";import"./menu-icon-Cx150Dt5.js";import"./dateFormating-BisRm4C_.js";import"./format-BNL-6LtM.js";import"./index-CGiy6M8Y.js";import"./index-B9XvT4gi.js";import"./useTranslation-COhdlQwc.js";import"./context-Def0sVG3.js";import"./text-DqP0TTVC.js";import"./box-CM5x4BGX.js";import"./flex-D3orRMxn.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d91124b-7107-4de4-b826-90c18280feb1",e._sentryDebugIdIdentifier="sentry-dbid-0d91124b-7107-4de4-b826-90c18280feb1")}catch{}const ce={component:a},r=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
