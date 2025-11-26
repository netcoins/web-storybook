import{j as o}from"./jsx-runtime-gm4AVeUT.js";import{r as s}from"./index-CSiA_BGD.js";import{A as a}from"./index-Cvj9i_RA.js";import"./iframe-aGQYMViW.js";import{T as D}from"./tr-7STLRv0n.js";import{T as f}from"./tbody-DnK_I5js.js";import"./index-DpTbMeP3.js";import"./use-style-config-BT2DE8GV.js";import"./factory-BdeMgres.js";import"./button-DyoCiLRK.js";import"./context-BF6D2IRR.js";import"./spinner-CYuy-JjO.js";import"./emotion-react.browser.esm-C5HuLpdl.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B5jpiKUE.js";import"./icon-BL6FALx9.js";import"./index-DV-nFrTU.js";import"./index-OBGViN6I.js";import"./iconBase-C4j581gM.js";import"./menu-Do_tTK9X.js";import"./use-descendant-LYTAj4XT.js";import"./use-popper-71b80Dw3.js";import"./use-event-listener-CwMhulPT.js";import"./use-callback-ref-C1s38EFd.js";import"./use-safe-layout-effect-MN875fNg.js";import"./use-update-effect-CuRjgoMp.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-rKqBt6Fd.js";import"./use-disclosure-a_Ecs0Iv.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-pYoSjpNi.js";import"./children-G6mVDnMw.js";import"./menu-list-8na54-0Y.js";import"./motion-kxpJza_O.js";import"./icon-button-Chm81jly.js";import"./menu-item-bOf1OeOR.js";import"./menu-icon-5xGq4Wed.js";import"./dateFormating-C62-6vWE.js";import"./format-BNL-6LtM.js";import"./index-BDecicHQ.js";import"./index-CwGOSc4o.js";import"./useTranslation-YPt1ZBzn.js";import"./context-By0n1kTS.js";import"./text-6DnfXPcZ.js";import"./box-CWJQTfLh.js";import"./flex-D0yvUZ8Q.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d91124b-7107-4de4-b826-90c18280feb1",e._sentryDebugIdIdentifier="sentry-dbid-0d91124b-7107-4de4-b826-90c18280feb1")}catch{}const ce={component:a},r=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
