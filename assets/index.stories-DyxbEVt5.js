import{j as t}from"./jsx-runtime-29Qfk9KL.js";import{S as d,E as l}from"./index-BKCIAVMb.js";import{E as m}from"./index-BCBZyIfL.js";import"./iframe-TOhJAv1u.js";import{u}from"./use-disclosure-ov045cVr.js";import"./types-B6HYA5yd.js";import"./index-DNGu3sjt.js";import"./color-mode-eEnzZioz.js";import"./iconBase-0YgzzPuf.js";import"./icon-button-Dbupu2Hn.js";import"./button-CoO1RO3x.js";import"./factory-DLijOqeV.js";import"./create-recipe-context-BFVYoSYo.js";import"./attr-DhmmAXiK.js";import"./spinner-DYjKBXcP.js";import"./skeleton-BNyv3Gtv.js";import"./index-B3wK-pie.js";import"./stack-CeITEkXz.js";import"./flex-PuTe28AO.js";import"./icon-CL_v9C79.js";import"./index-CGHJav7I.js";import"./index-Dkc7SIy7.js";import"./index-Bk5AU3ZK.js";import"./useTranslation-CnF6If2R.js";import"./context-DR2RJ_w1.js";import"./dialog-DOCnrqy9.js";import"./create-slot-recipe-context-DHVJLOri.js";import"./create-context-CkT0tWSw.js";import"./render-strategy-BzaPzUKm.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CgZFnzUq.js";import"./index-DzMh4kgF.js";import"./index-BLVBAjsL.js";import"./index-DJaz1NvF.js";import"./index-CrIMUGgR.js";import"./index-h7__Mhkq.js";import"./use-event-Cooty9RI.js";import"./index-BRmxC52E.js";import"./index-pW82Y0Cx.js";import"./index-Dh3oWr9u.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-CnTHevb8.js";import"./use-locale-context-CI6jNlfZ.js";import"./factory-BYUBUBzB.js";import"./use-callback-ref-fsvApaUl.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="6cf35d1d-be97-4e6a-9843-8382764bd80d",o._sentryDebugIdIdentifier="sentry-dbid-6cf35d1d-be97-4e6a-9843-8382764bd80d")}catch{}const c={title:"There was an error",description:"Something went wrong."},po={component:m,args:c,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=u();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
