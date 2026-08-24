import{j as t}from"./jsx-runtime-8x-A6Wxb.js";import{S as d,E as l}from"./index-n-nmFmUQ.js";import{E as m}from"./index-fNqy0uvZ.js";import"./iframe-hxK2I7d9.js";import{u}from"./use-disclosure-7R2sloP8.js";import"./types-B0FmjkVa.js";import"./index-ojTWUFcI.js";import"./color-mode-DBNGCvAp.js";import"./iconBase-DixheN5d.js";import"./icon-button-B7YljAc6.js";import"./button-DfDcr1x7.js";import"./factory-CCqnMufs.js";import"./create-recipe-context-DwyIVBsh.js";import"./attr-DhmmAXiK.js";import"./spinner-D8hIOIgx.js";import"./skeleton-DFCLVDwK.js";import"./index-DIB8MuzL.js";import"./stack-DVfEpjU_.js";import"./flex-DJDmF0Mm.js";import"./icon-BHzh5oyz.js";import"./index-CScJrfLt.js";import"./index-Dez7MbZf.js";import"./index-C97iw43W.js";import"./useTranslation-DN--CHtO.js";import"./context-D6rXpL_i.js";import"./dialog-BVYjCXBN.js";import"./create-slot-recipe-context-Bzqaa1Ge.js";import"./create-context-XwTSFXbL.js";import"./render-strategy-Df-yI2VM.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-B4--IU51.js";import"./index-DzMh4kgF.js";import"./index-BLVBAjsL.js";import"./index-CW9RkQj_.js";import"./index-Dx967tEU.js";import"./index-DI8I5cSl.js";import"./use-event-D3uy8UQ3.js";import"./index-BRmxC52E.js";import"./index-pW82Y0Cx.js";import"./index-Dh3oWr9u.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-s5v9OhCp.js";import"./use-locale-context-CuglJ4j5.js";import"./factory-DI2rNUYk.js";import"./use-callback-ref-CEdIMZ0J.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="6cf35d1d-be97-4e6a-9843-8382764bd80d",o._sentryDebugIdIdentifier="sentry-dbid-6cf35d1d-be97-4e6a-9843-8382764bd80d")}catch{}const c={title:"There was an error",description:"Something went wrong."},po={component:m,args:c,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=u();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
