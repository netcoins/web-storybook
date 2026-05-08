import{j as t}from"./jsx-runtime-FXf2AZAz.js";import{S as d,E as l}from"./index-DtFR7ku3.js";import{E as m}from"./index-BDCpLhLa.js";import"./iframe-KIWdh1u2.js";import{u as c}from"./use-disclosure-Bj1lckpJ.js";import"./types-Dks6NYhE.js";import"./index-BNzzk7XN.js";import"./color-mode-B42hPN6y.js";import"./iconBase-7DBWr36q.js";import"./icon-button-wPI0ManC.js";import"./button-J9uLcOZF.js";import"./factory-BKRWwsU6.js";import"./create-recipe-context-BUeJPSo5.js";import"./attr-DhmmAXiK.js";import"./spinner-CCpdWbuf.js";import"./skeleton-Ctf3an-2.js";import"./index-BD5EFpfB.js";import"./stack-CWZxna0g.js";import"./flex-Du_Mfq9y.js";import"./icon-CA_9GXUW.js";import"./index-DFtcrXFz.js";import"./index-B07uNJVk.js";import"./index-i2iHUR9N.js";import"./useTranslation-DBUB1ND3.js";import"./context-BuHmhQ1n.js";import"./dialog-BpKu6doQ.js";import"./create-slot-recipe-context-BVBf0kt5.js";import"./create-context-BXP2Ml6q.js";import"./render-strategy-CoVHgCFv.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-o6NGPxgB.js";import"./index-ZoHJkkX0.js";import"./index-BLVBAjsL.js";import"./index-cBeEzYhO.js";import"./index-BEA-qWoF.js";import"./index-CZhaZ2_e.js";import"./use-event-CFPTtiRq.js";import"./index-CXYtSp3x.js";import"./index-pW82Y0Cx.js";import"./index-ZUPMn3wG.js";import"./index-cMlMUVsx.js";import"./use-environment-context-BvHwZEPR.js";import"./use-locale-context-DfvmEuOE.js";import"./factory-w44NaoB9.js";import"./use-callback-ref-WiUlOyyo.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="9ec323e0-4e99-4ce6-be4f-0145b71d4910",o._sentryDebugIdIdentifier="sentry-dbid-9ec323e0-4e99-4ce6-be4f-0145b71d4910")}catch{}const u={title:"There was an error",description:"Something went wrong."},po={component:m,args:u,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
