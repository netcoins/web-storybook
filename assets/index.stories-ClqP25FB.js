import{j as o}from"./jsx-runtime-BdkXbjko.js";import{r as i}from"./index-DB51DUFv.js";import{A as n}from"./index-zmU1Xh_q.js";import"./iframe-BdH25jYA.js";import{T as D,a as y}from"./table-DNuEkGsa.js";import"./index-DOnzkkx-.js";import"./button-B8BXZL3n.js";import"./factory-CEv1ktPX.js";import"./create-recipe-context-cqBIdbee.js";import"./attr-DhmmAXiK.js";import"./spinner-C6Bgahz8.js";import"./icon-C3lFvyta.js";import"./index-DOurMrz4.js";import"./index-Bd_b7Hno.js";import"./iconBase-Cci91VHL.js";import"./portal-BjNBTx2r.js";import"./index-CehdyC4B.js";import"./index-CA_foo3-.js";import"./index-C7Msfp21.js";import"./use-environment-context-D2xClmVb.js";import"./create-context-D2AkJT4o.js";import"./menu-BpcWmhZ7.js";import"./create-slot-recipe-context-BYz_odB4.js";import"./icons-C2zFHK-T.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DuYzFG6w.js";import"./index-BLVBAjsL.js";import"./index-DofmaLkm.js";import"./use-event-CC6shJxy.js";import"./index-CkgrAf5i.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";import"./use-locale-context-DWo43fKx.js";import"./factory-TzRYTmhl.js";import"./dateFormating-OWRNyVj1.js";import"./format-BNL-6LtM.js";import"./index-DaUiwlDm.js";import"./index-mDyLfx55.js";import"./useTranslation-GGhkpz1f.js";import"./context-CJXSmzPe.js";import"./index-Bm1yYWlC.js";import"./index-BIcqwx7Y.js";import"./flex-BxpYFeL2.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6328b166-3a13-48ee-9a56-0c2c040eba72",e._sentryDebugIdIdentifier="sentry-dbid-6328b166-3a13-48ee-9a56-0c2c040eba72")}catch{}const de={component:n},r=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!0,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})},s=()=>{const[e,t]=i.useState(!1),[f,a]=i.useState(!1);return o.jsx(D,{css:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table.Root","data-sentry-component":"IsNotCurrentDevice","data-sentry-source-file":"index.stories.tsx",children:o.jsx(y,{w:"full","data-sentry-element":"Table.Body","data-sentry-source-file":"index.stories.tsx",children:o.jsx(n,{onDeleteClick:()=>a(!0),onEditClick:()=>t(!0),authorizedDevice:{authorized_at:"2021-10-10",deviceID:"123456",label:"Device",type:"Desktop",user_agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",is_current:!1,summary:"Device summary"},"data-sentry-element":"AuthorizedDeviceRow","data-sentry-source-file":"index.stories.tsx"})})})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
