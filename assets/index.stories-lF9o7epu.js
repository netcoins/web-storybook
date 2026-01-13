import{j as o}from"./jsx-runtime-NXhZHcg6.js";import{r as i}from"./index-Ch-dJqYU.js";import{A as n}from"./index-CFvwF93f.js";import"./iframe-BUebCkdh.js";import{T as D,a as f}from"./tr-B-nTmbuO.js";import"./index-CI3RjFVl.js";import"./use-style-config-BeVa6Ocw.js";import"./factory-BWQouZCw.js";import"./button-DRH27w9E.js";import"./context-9zgJCxIX.js";import"./spinner-BVQyKTiL.js";import"./emotion-react.browser.esm-Ba1kZHdS.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CNwRwZMM.js";import"./icon-idr_5mYa.js";import"./index-o6en5u0t.js";import"./index-CX5KVuyy.js";import"./iconBase-D4f4cSS3.js";import"./menu-Bx_5Soel.js";import"./use-descendant-Btck_i_R.js";import"./use-popper-BuZCMZMT.js";import"./use-event-listener-DQE33nso.js";import"./use-callback-ref-lCHO6cKy.js";import"./use-safe-layout-effect-CVtmfawi.js";import"./use-update-effect-Dj-cxMAl.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-C8MziRH4.js";import"./use-disclosure-BONz3KZl.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-D3LWT1jJ.js";import"./children-DI0np1TJ.js";import"./menu-list-CS22oQq8.js";import"./motion-BoUmx0w2.js";import"./icon-button-Db0UwmE9.js";import"./menu-item-CeS_NpFb.js";import"./menu-icon-CMcROqwu.js";import"./dateFormating-BmJ0v4EG.js";import"./format-BNL-6LtM.js";import"./index-DXWoyWaS.js";import"./index-Bv-lCoQI.js";import"./useTranslation-BrU8jXuL.js";import"./context-BJ2ml8Vt.js";import"./text-DfZTyfAf.js";import"./box-C6_2p-KD.js";import"./flex-DfFhdsg3.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="191e60a8-991c-4aea-aff0-b25e2ed4e290",e._sentryDebugIdIdentifier="sentry-dbid-191e60a8-991c-4aea-aff0-b25e2ed4e290")}catch{}const me={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
