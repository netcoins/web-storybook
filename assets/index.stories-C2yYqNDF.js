import{j as o}from"./jsx-runtime-CtUEez0z.js";import{r as s}from"./index-Cqmn51YS.js";import{A as a}from"./index-Cn8AC6ME.js";import"./iframe-COwPw1VY.js";import{T as D}from"./tr-BfK1l0pf.js";import{T as y}from"./tbody-LWV6HhwR.js";import"./index-Ci4yNJ1b.js";import"./use-style-config-DWzjkw3h.js";import"./factory-DJYjEkMm.js";import"./button-Dk6CIG2O.js";import"./context-BxW3_Ype.js";import"./spinner-Dfjyfz8j.js";import"./emotion-react.browser.esm-Cu-JWzKK.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DD_bcvjC.js";import"./icon-pHxpQceI.js";import"./index-SwSKulZR.js";import"./index-4tEM9WJE.js";import"./iconBase-Dn46-paq.js";import"./menu-BkO5aLBm.js";import"./use-descendant-CpXR7RV2.js";import"./use-popper-Bo3zfxkV.js";import"./use-event-listener-D32HG4Yo.js";import"./use-callback-ref-DrjLitdx.js";import"./use-safe-layout-effect-Bz0q2S9E.js";import"./use-update-effect-3eGvpoH8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BCn_2Yw5.js";import"./use-disclosure-zUyXwX9i.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-By0Uo44f.js";import"./children-BEjxqSlI.js";import"./menu-list-DnOsyg6v.js";import"./motion-BIX3BNxl.js";import"./icon-button-D6jFl2or.js";import"./menu-item-BotbYhda.js";import"./menu-icon-DrfbyxfX.js";import"./dateFormating-DJOlDxkR.js";import"./format-BNL-6LtM.js";import"./index-CAaVtfEi.js";import"./index-CMMXWqW6.js";import"./useTranslation-VHApA7df.js";import"./context-CMxGEpSm.js";import"./text-DU2wDpPi.js";import"./box-9BX69DHc.js";import"./flex-WnzeImCB.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="154c14b8-5508-45b8-9b75-8167c5cb087b",e._sentryDebugIdIdentifier="sentry-dbid-154c14b8-5508-45b8-9b75-8167c5cb087b")}catch{}const me={component:a},r=()=>{const[e,t]=s.useState(!1),[b,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[b,n]=s.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(a,{onDeleteClick:()=>n(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ue=["IsCurrentDevice","IsNotCurrentDevice"];export{r as IsCurrentDevice,i as IsNotCurrentDevice,ue as __namedExportsOrder,me as default};
