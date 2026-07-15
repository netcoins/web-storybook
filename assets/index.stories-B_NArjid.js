import{j as o}from"./jsx-runtime-BEkhRi9Z.js";import{r as i}from"./index-TzQF_aeA.js";import{A as n}from"./index-DxMk6uDu.js";import"./iframe-DtuCJnTg.js";import{T as D,a as f}from"./table-BTYDGUlE.js";import"./index-BJ-kGYoS.js";import"./button-DaRnAzp-.js";import"./factory-46RSImuz.js";import"./create-recipe-context-CzdCXJwV.js";import"./attr-DhmmAXiK.js";import"./spinner-82vpluQm.js";import"./icon-CIiTeoMS.js";import"./index-BkIxu8_q.js";import"./index-0cTVLfBE.js";import"./iconBase-C9qtZXyZ.js";import"./portal-BaTyFJ2U.js";import"./index-ZoHJkkX0.js";import"./index-LR3ipeoe.js";import"./index-8ngC4mk-.js";import"./use-environment-context-D0aSbQI3.js";import"./create-context-D9pv5gHz.js";import"./menu-CfLvSNQQ.js";import"./create-slot-recipe-context-CVeXG7tx.js";import"./icons-DP0bG89f.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-CE9gB62E.js";import"./index-BLVBAjsL.js";import"./index-ChpTWvap.js";import"./use-event-D6LH5rLg.js";import"./index-DjRw-LTH.js";import"./index-pW82Y0Cx.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";import"./use-locale-context-CjVEHTb9.js";import"./factory-C3zSMasy.js";import"./dateFormating-CG9Z6GGR.js";import"./format-BNL-6LtM.js";import"./index-DOVmIV9d.js";import"./index-2U1y_rHc.js";import"./useTranslation-BK1ANhsz.js";import"./context-C0T65-Ns.js";import"./index-l7O5pEuN.js";import"./index-GJWyF3Il.js";import"./flex-BaFULz4f.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bc3e6d63-62c1-4a4a-b97f-e14ef79d0ad5",e._sentryDebugIdIdentifier="sentry-dbid-bc3e6d63-62c1-4a4a-b97f-e14ef79d0ad5")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[y,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(f,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
