import{j as o}from"./jsx-runtime-CVGkS9S6.js";import{r as i}from"./index-DsimY1Er.js";import{A as n}from"./index-B1fLnjF3.js";import"./iframe-mYh3n4X9.js";import{T as D,a as y}from"./table-DgMHiZeH.js";import"./index-o-xQtjpY.js";import"./button-DVEJ2y3K.js";import"./factory-CfaKATY1.js";import"./create-recipe-context-CfDVsj90.js";import"./attr-DhmmAXiK.js";import"./spinner-DSa_MMTg.js";import"./icon-DbGTXddX.js";import"./index-B1ZG0I59.js";import"./index-CPUOXM6x.js";import"./iconBase-0NfaldhP.js";import"./portal-CknbA7y8.js";import"./index-ZoHJkkX0.js";import"./index-DsyquN5r.js";import"./index-CA_aMp87.js";import"./use-environment-context-YPy70K4y.js";import"./create-context-CilLCYwj.js";import"./menu-Cp5rg0hx.js";import"./create-slot-recipe-context-DMGXGbVV.js";import"./icons-B54RsrCx.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cq_wGAay.js";import"./index-BLVBAjsL.js";import"./index-4h8lH-FW.js";import"./use-event-BkyCVLRB.js";import"./index-COCaMt2I.js";import"./index-pW82Y0Cx.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";import"./use-locale-context-CYQv6_ny.js";import"./factory-m8yl7nBq.js";import"./dateFormating-DEVGzynN.js";import"./format-BNL-6LtM.js";import"./index-C9xFGGF2.js";import"./index-Ct1_UDm6.js";import"./useTranslation-CAFh2sxN.js";import"./context-yLwh7xOT.js";import"./index-nLXlyfdO.js";import"./index-CVUQXY8B.js";import"./flex-vMp7_VsP.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d0071c4-7c34-4e23-908a-0ae5ac951dde",e._sentryDebugIdIdentifier="sentry-dbid-0d0071c4-7c34-4e23-908a-0ae5ac951dde")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return <Table.Root css={{
    borderCollapse: "collapse"
  }} w="100%">
            <Table.Body w="full">
                <AuthorizedDeviceRow onDeleteClick={() => setIsDeleteModalOpen(true)} onEditClick={() => setIsEditModalOpen(true)} authorizedDevice={{
        authorized_at: "2021-10-10",
        deviceID: "123456",
        label: "Device",
        type: "Desktop",
        user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        is_current: true,
        summary: "Device summary"
      }} />
            </Table.Body>
        </Table.Root>;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return <Table.Root css={{
    borderCollapse: "collapse"
  }} w="100%">
            <Table.Body w="full">
                <AuthorizedDeviceRow onDeleteClick={() => setIsDeleteModalOpen(true)} onEditClick={() => setIsEditModalOpen(true)} authorizedDevice={{
        authorized_at: "2021-10-10",
        deviceID: "123456",
        label: "Device",
        type: "Desktop",
        user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        is_current: false,
        summary: "Device summary"
      }} />
            </Table.Body>
        </Table.Root>;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const pe=["IsCurrentDevice","IsNotCurrentDevice"];export{r as IsCurrentDevice,s as IsNotCurrentDevice,pe as __namedExportsOrder,de as default};
