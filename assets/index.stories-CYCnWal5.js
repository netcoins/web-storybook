import{j as o}from"./jsx-runtime-DlF-hKEQ.js";import{r as i}from"./index-teU4eNSH.js";import{A as n}from"./index-CZPWX45J.js";import"./iframe-DKyycFJO.js";import{T as D,a as f}from"./table-D2t5qdLu.js";import"./index-Dqp8dBq9.js";import"./button-BjzmQImh.js";import"./factory-CB3tuO0t.js";import"./create-recipe-context-DTw5gmRX.js";import"./attr-DhmmAXiK.js";import"./spinner-DWBNafRI.js";import"./icon-Cs6LhBmu.js";import"./index-CKrdjgvv.js";import"./index-CbEb-slb.js";import"./iconBase-DyiPEVfX.js";import"./portal-741fw-9f.js";import"./index-ZoHJkkX0.js";import"./index-DLCRCuKj.js";import"./index-BXtHAO76.js";import"./use-environment-context-BU5I_9S-.js";import"./create-context-GaBZH8Tp.js";import"./menu-Casen9mQ.js";import"./create-slot-recipe-context-KhOHVEWZ.js";import"./icons-B4wzM0sE.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-CJCFVGRG.js";import"./index-BLVBAjsL.js";import"./index-CG4TY4cx.js";import"./use-event-DnsG-QHm.js";import"./index-DjRw-LTH.js";import"./index-pW82Y0Cx.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";import"./use-locale-context-DF1dwBAQ.js";import"./factory-Bh_A4Lv0.js";import"./dateFormating-_aqlKvUa.js";import"./format-BNL-6LtM.js";import"./index-Dp-3NhEt.js";import"./index-BoV7HnQ-.js";import"./useTranslation-DCmu7ry8.js";import"./context-C9BLRG4x.js";import"./index-Rdt5MFmh.js";import"./index-ytO-jv-j.js";import"./flex-CJh8IWin.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bc3e6d63-62c1-4a4a-b97f-e14ef79d0ad5",e._sentryDebugIdIdentifier="sentry-dbid-bc3e6d63-62c1-4a4a-b97f-e14ef79d0ad5")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
