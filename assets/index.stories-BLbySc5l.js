import{j as t}from"./jsx-runtime-CJCQCLJI.js";import{S as d,E as l}from"./index-DhLHYb8w.js";import{E as m}from"./index-BpkZ7BHU.js";import"./iframe-IWDmby_F.js";import{u as c}from"./use-disclosure-t8enTxXK.js";import"./types-Bb8BpVSL.js";import"./index-D8usWla-.js";import"./color-mode-CclVGNHo.js";import"./iconBase-B1VAODlm.js";import"./icon-button-Uxm-OE58.js";import"./button-CegeHSAs.js";import"./factory-DedWl3Tk.js";import"./create-recipe-context-CPj0a1UK.js";import"./attr-DhmmAXiK.js";import"./spinner-BeWklPwI.js";import"./skeleton-B6I1xp5g.js";import"./index-D7r-7tD1.js";import"./stack-CEz8mpCb.js";import"./flex-DuMVE5fE.js";import"./icon-D_aEX7pC.js";import"./index-BxwczoFa.js";import"./index-3NA4VWyQ.js";import"./index-3fXSA4Ff.js";import"./useTranslation-C1fNVT-J.js";import"./context-CSc7iusQ.js";import"./dialog-CvWTnEN1.js";import"./create-slot-recipe-context-D7RvhRsF.js";import"./create-context-DQTmaOV4.js";import"./render-strategy-Z_cLYuP9.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Dmg5aanL.js";import"./index-ZoHJkkX0.js";import"./index-BLVBAjsL.js";import"./index-x6Q_lp1p.js";import"./index-D85ezpTA.js";import"./index-zXXnIVSt.js";import"./use-event-LvxNEWRH.js";import"./index-CXYtSp3x.js";import"./index-pW82Y0Cx.js";import"./index-ZUPMn3wG.js";import"./index-cMlMUVsx.js";import"./use-environment-context-2WGmVval.js";import"./use-locale-context-DeJ8gWfc.js";import"./factory-DNT7CGpT.js";import"./use-callback-ref-4yvdPLCG.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="9ec323e0-4e99-4ce6-be4f-0145b71d4910",o._sentryDebugIdIdentifier="sentry-dbid-9ec323e0-4e99-4ce6-be4f-0145b71d4910")}catch{}const u={title:"There was an error",description:"Something went wrong."},po={component:m,args:u,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
