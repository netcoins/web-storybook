import{j as t}from"./jsx-runtime-CVGkS9S6.js";import{S as d,E as l}from"./index-C2blO3sS.js";import{E as m}from"./index-D4-iXhLY.js";import"./iframe-mYh3n4X9.js";import{u as c}from"./use-disclosure-YvvmI9b-.js";import"./types-mdukHKsn.js";import"./index-DsimY1Er.js";import"./color-mode-Byq_X5Xd.js";import"./iconBase-0NfaldhP.js";import"./icon-button-YbfWHFcP.js";import"./button-DVEJ2y3K.js";import"./factory-CfaKATY1.js";import"./create-recipe-context-CfDVsj90.js";import"./attr-DhmmAXiK.js";import"./spinner-DSa_MMTg.js";import"./skeleton-BvBHD1FK.js";import"./index-CVUQXY8B.js";import"./stack-r4zfIMeb.js";import"./flex-vMp7_VsP.js";import"./icon-DbGTXddX.js";import"./index-nLXlyfdO.js";import"./index-iQa19wCX.js";import"./index-Ct1_UDm6.js";import"./useTranslation-CAFh2sxN.js";import"./context-yLwh7xOT.js";import"./dialog-BWYbMcs_.js";import"./create-slot-recipe-context-DMGXGbVV.js";import"./create-context-CilLCYwj.js";import"./render-strategy-B4GnJ1eX.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cq_wGAay.js";import"./index-ZoHJkkX0.js";import"./index-BLVBAjsL.js";import"./index-4h8lH-FW.js";import"./index-DsyquN5r.js";import"./index-CA_aMp87.js";import"./use-event-BkyCVLRB.js";import"./index-CXYtSp3x.js";import"./index-pW82Y0Cx.js";import"./index-ZUPMn3wG.js";import"./index-cMlMUVsx.js";import"./use-environment-context-YPy70K4y.js";import"./use-locale-context-CYQv6_ny.js";import"./factory-m8yl7nBq.js";import"./use-callback-ref-CUNj8FDj.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="9ec323e0-4e99-4ce6-be4f-0145b71d4910",o._sentryDebugIdIdentifier="sentry-dbid-9ec323e0-4e99-4ce6-be4f-0145b71d4910")}catch{}const u={title:"There was an error",description:"Something went wrong."},po={component:m,args:u,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const {
      open,
      onOpen,
      onClose
    } = useDisclosure();
    return <>
                <StandardButton type="button" variant={ENUM_BUTTON_VARIANTS.PRIMARY_BLUE_OUTLINE} onClick={onOpen}>
                    Open Modal
                </StandardButton>
                <ErrorModal {...args} open={open} onClose={onClose} />
            </>;
  },
  args: {}
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const mo=["Default"];export{e as Default,mo as __namedExportsOrder,po as default};
