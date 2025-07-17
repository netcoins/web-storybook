import{j as t}from"./jsx-runtime-B4yJAW4F.js";import{S as d,E as c}from"./index-BVxqEYXK.js";import{E as s}from"./index-CvwNhXi6.js";import"./iframe-uoe2xVnD.js";import{u as l}from"./use-disclosure-CLyy15bU.js";import"./index-7mQJAlOt.js";import"./types-DezzPfZJ.js";import"./use-style-config-BbW2_Tay.js";import"./button-kpeWf5m4.js";import"./context-pZcGTPqu.js";import"./spinner-B5tFgrvz.js";import"./emotion-react.browser.esm-HOelbQ7t.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DrPKD2E9.js";import"./flex-BPty2MAD.js";import"./icon-CW6weW_y.js";import"./text-ckVTOhTF.js";import"./index-4PzaVRRh.js";import"./iconBase-MUa0mIqo.js";import"./useTranslation-Bzepq4CX.js";import"./context-TB_hab3F.js";import"./alert-dialog-CzKv7Ukc.js";import"./modal-overlay-Bz7aM6hz.js";import"./motion-CydpOdtg.js";import"./defineProperty-q-xFdwBb.js";import"./focusable-DpwIps9l.js";import"./is-element-O0rWTUfl.js";import"./transition-utils-CQ-IB1pJ.js";import"./index-B1TUBUn_.js";import"./call-all--NRVVPhS.js";import"./portal-BP6_DIpo.js";import"./index-C6GuUn44.js";import"./index-GB7yVfWo.js";import"./use-safe-layout-effect-Cvp_rYKq.js";import"./fade-BD72UCkT.js";import"./box-CYwnp9cV.js";import"./use-callback-ref-YjOusxPw.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new r.Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="853af8fd-e82e-40c5-a5de-780b2ac26ccc",r._sentryDebugIdIdentifier="sentry-dbid-853af8fd-e82e-40c5-a5de-780b2ac26ccc")}catch{}const u={title:"There was an error",description:"Something went wrong."},Z={component:s,args:u,tags:["pending"]},e={render:r=>{const{isOpen:o,onOpen:a,onClose:m}=l();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:c.PRIMARY_BLUE_OUTLINE,onClick:a,children:"Open Modal"}),t.jsx(s,{...r,isOpen:o,onClose:m})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclosure();
    return <>
                <StandardButton type="button" variant={ENUM_BUTTON_VARIANTS.PRIMARY_BLUE_OUTLINE} onClick={onOpen}>
                    Open Modal
                </StandardButton>
                <ErrorModal {...args} isOpen={isOpen} onClose={onClose} />
            </>;
  },
  args: {}
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
