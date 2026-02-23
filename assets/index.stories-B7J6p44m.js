import{j as t}from"./jsx-runtime-BYvR9jk8.js";import{S as d,E as l}from"./index-Cj_1SnQF.js";import{E as m}from"./index-BO-F1i4y.js";import"./iframe-Dsr7MOKx.js";import{u}from"./use-disclosure-P6qHXzFC.js";import"./types-4NMHjuyI.js";import"./index-Op2a2csG.js";import"./color-mode-wfQF1SzV.js";import"./iconBase-h35ESkFQ.js";import"./icon-button-Dmkt5wR6.js";import"./button-BH2Bb22M.js";import"./factory-Bv92ChUh.js";import"./create-recipe-context-CGtuK1ky.js";import"./attr-DhmmAXiK.js";import"./spinner-CA_YqLrl.js";import"./skeleton-CW2dYi9E.js";import"./index-D2TERkRm.js";import"./stack-B55nP-S8.js";import"./flex-CsCJnV2W.js";import"./icon-B-vHBGyv.js";import"./index-9kHTQHV3.js";import"./index-BrrAYyN9.js";import"./index-BWvO4EXm.js";import"./useTranslation-rP9uvL32.js";import"./context-DYbfZvNY.js";import"./dialog-Dg7mXhY5.js";import"./create-slot-recipe-context-D6qVZ4hd.js";import"./create-context-ORx9b7GS.js";import"./render-strategy-By8Bvb1z.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-D9NjeZnx.js";import"./index-CehdyC4B.js";import"./index-BLVBAjsL.js";import"./index-DcWfzxwM.js";import"./index-DEk39n8O.js";import"./index-BrD-eD_U.js";import"./use-event-C4hfRC33.js";import"./index-wMDwHiza.js";import"./index-pW82Y0Cx.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-environment-context-DBWf9Wfm.js";import"./use-locale-context-DrcNeWx3.js";import"./factory-C8pOLYmA.js";import"./use-callback-ref-CBKB_yh3.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="42d772d3-8173-4562-a19b-eb332feff091",o._sentryDebugIdIdentifier="sentry-dbid-42d772d3-8173-4562-a19b-eb332feff091")}catch{}const f={title:"There was an error",description:"Something went wrong."},po={component:m,args:f,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=u();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
