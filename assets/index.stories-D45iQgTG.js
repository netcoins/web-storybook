import{j as o}from"./jsx-runtime-zGFq_C62.js";import{r as s}from"./index-yNGeAoM8.js";import{A as n}from"./index-Dx2PCnyD.js";import"./iframe-Cki2KkBY.js";import{T as f}from"./tr-mklOeuHc.js";import{T as D}from"./tbody-C1XYcL3B.js";import"./index-B1ajPszd.js";import"./use-style-config-Day8Q7qP.js";import"./factory-B-orROQ2.js";import"./button-WCwnl3He.js";import"./context-DzU3Ccpl.js";import"./spinner-B1k9TmJJ.js";import"./emotion-react.browser.esm-DibK7BRk.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-wqF3_X0V.js";import"./icon-DX5MWoK7.js";import"./index-DjJz15_F.js";import"./index-CgDx04P1.js";import"./iconBase-6Mbyj9fK.js";import"./menu-CUYAlKgW.js";import"./use-descendant-Y-mT9obB.js";import"./use-popper-C6wsYazR.js";import"./use-event-listener-CMpck3vV.js";import"./use-callback-ref-BwTn-8qm.js";import"./use-safe-layout-effect-CZn_zMT5.js";import"./use-update-effect-Bq1UiBd1.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BOo-FP8z.js";import"./use-disclosure-C8IprfUz.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DDkiOKv4.js";import"./children-DOy171LJ.js";import"./menu-list-CT3PbhpI.js";import"./motion-FW5wo-U4.js";import"./icon-button-CPnQikoU.js";import"./menu-item-D6GEMcft.js";import"./menu-icon-CZPUDPJ3.js";import"./dateFormating-CxlOyeY1.js";import"./format-BNL-6LtM.js";import"./index-DdofnsJ4.js";import"./index-BvhrlOX8.js";import"./useTranslation-C9Cf6z0E.js";import"./context-DSHNjmW3.js";import"./text-BNtRnHpB.js";import"./box-D9oSJl1u.js";import"./flex-DXtktOtT.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6283391-5b7e-48f4-938c-d42808b14a16",e._sentryDebugIdIdentifier="sentry-dbid-f6283391-5b7e-48f4-938c-d42808b14a16")}catch{}const ce={component:n},r=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},i=()=>{const[e,t]=s.useState(!1),[y,a]=s.useState(!1);return o.jsx(f,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(D,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
