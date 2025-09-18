import{j as o}from"./jsx-runtime-BO59uSbh.js";import{r as s}from"./index-BgqXGIRq.js";import{A as n}from"./index-CXyUqAPt.js";import"./iframe-Buq5vjeR.js";import{T as f}from"./tr-DEnJt9n0.js";import{T as D}from"./tbody-A6aRH7Ek.js";import"./index-CPatIbvp.js";import"./use-style-config-CV80em0b.js";import"./factory-Clpu5yQH.js";import"./button-CGmuT4pt.js";import"./context-Bv8doexR.js";import"./spinner-DV46HrdQ.js";import"./emotion-react.browser.esm-UNCuAYfq.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CUoZnHPv.js";import"./icon-CT4IPwKS.js";import"./index-BYLVZMgv.js";import"./index-32EMxRt4.js";import"./iconBase-B1goy4du.js";import"./menu-pxCxYgEn.js";import"./use-descendant-D3vRal4Z.js";import"./use-popper-DEDyDvn-.js";import"./use-event-listener--QLWm8S9.js";import"./use-callback-ref-CyxOgj_V.js";import"./use-safe-layout-effect-Cu1RChpk.js";import"./use-update-effect-DpfmmSSf.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-Ba70ZfHO.js";import"./use-disclosure-CUXcQS-9.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CCUfD3j7.js";import"./children-CK6NdR6v.js";import"./menu-list-BeJiEjdy.js";import"./motion-B5oP4Omx.js";import"./icon-button-DP49G02a.js";import"./menu-item-qa1WkHvY.js";import"./menu-icon-CH8Hanrn.js";import"./dateFormating-BFMZ3iHJ.js";import"./format-BNL-6LtM.js";import"./index-BAkpr13D.js";import"./index-Dol7vJXm.js";import"./useTranslation-WNTLl7ye.js";import"./context-CdFR_DVJ.js";import"./text-CxUtm01j.js";import"./box-C0SgsxPP.js";import"./flex-BcUag4Kz.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6283391-5b7e-48f4-938c-d42808b14a16",e._sentryDebugIdIdentifier="sentry-dbid-f6283391-5b7e-48f4-938c-d42808b14a16")}catch{}const ce={component:n},r=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
