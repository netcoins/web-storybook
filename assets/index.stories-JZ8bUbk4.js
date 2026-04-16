import{j as o}from"./jsx-runtime-UwRoxOis.js";import{r as i}from"./index-rQf-HDJx.js";import{A as n}from"./index-CsRvsh8G.js";import"./iframe-CKtoteMt.js";import{T as D,a as y}from"./table-Nh3XBsZP.js";import"./index-BQhtg91W.js";import"./button-CyMJf14M.js";import"./factory-D4a8xBd5.js";import"./create-recipe-context-BzOF1OiO.js";import"./attr-DhmmAXiK.js";import"./spinner-DvoGTqtj.js";import"./icon-Dmj_bu5Z.js";import"./index-DrzUuQ2g.js";import"./index-DH7NyEr0.js";import"./iconBase-DsUadah2.js";import"./portal-DNVwmmFE.js";import"./index-ZoHJkkX0.js";import"./index-CLC5K_V_.js";import"./index-DwQ_QCwy.js";import"./use-environment-context-Z0prSxiy.js";import"./create-context-C0W2S-rB.js";import"./menu-Dm3Jz6wd.js";import"./create-slot-recipe-context-QSL3U4Yy.js";import"./icons-Dm1No1kO.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CtvnDt4d.js";import"./index-BLVBAjsL.js";import"./index-FI9XQNsC.js";import"./use-event-mS_NdDdX.js";import"./index-COCaMt2I.js";import"./index-pW82Y0Cx.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";import"./use-locale-context-BcrdLHZ3.js";import"./factory-BPHrUvf4.js";import"./dateFormating-BpnjcdeH.js";import"./format-BNL-6LtM.js";import"./index-B9fSNEXB.js";import"./index-Dij4ZHnC.js";import"./useTranslation-CHULjVxq.js";import"./context-78IZNpbo.js";import"./index-Clele84I.js";import"./index-TLTQQWtv.js";import"./flex-sSglzitQ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0d0071c4-7c34-4e23-908a-0ae5ac951dde",e._sentryDebugIdIdentifier="sentry-dbid-0d0071c4-7c34-4e23-908a-0ae5ac951dde")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
