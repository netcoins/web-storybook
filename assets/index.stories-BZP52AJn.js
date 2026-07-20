import{j as t}from"./jsx-runtime-CJmRwBu2.js";import{S as d,E as l}from"./index-B6bQsNnh.js";import{E as m}from"./index-BEvYVrBa.js";import"./iframe-BO9fv6dM.js";import{u}from"./use-disclosure-Cl8oVXj7.js";import"./types-BpNvq4H1.js";import"./index-C60rT7WO.js";import"./color-mode-Box40ptH.js";import"./iconBase-B1X0d7tr.js";import"./icon-button-C_akTEiA.js";import"./button-DqbMBDJY.js";import"./factory-BjKtRbVQ.js";import"./create-recipe-context-BkMXg-I_.js";import"./attr-DhmmAXiK.js";import"./spinner-CabIwlne.js";import"./skeleton--1jqoD_p.js";import"./index-ChFkgRsI.js";import"./stack-BUTpD4pi.js";import"./flex-BvJ9ykOf.js";import"./icon-AYf1V15_.js";import"./index-o4aYGhZ6.js";import"./index-DhIbq1WJ.js";import"./index-CBoEUXtP.js";import"./useTranslation-BsS-g0hu.js";import"./context-BxOAPsRU.js";import"./dialog-DWBAMITe.js";import"./create-slot-recipe-context-XZpqfDQz.js";import"./create-context-D9vclOlc.js";import"./render-strategy-DY3yxkeH.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CpiSGreD.js";import"./index-DzMh4kgF.js";import"./index-BLVBAjsL.js";import"./index-DlhqcioK.js";import"./index-CFVp1Gql.js";import"./index-C4ULTJ7m.js";import"./use-event-DqVETzXw.js";import"./index-BRmxC52E.js";import"./index-pW82Y0Cx.js";import"./index-Dh3oWr9u.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-DzhawKPY.js";import"./use-locale-context-D4cWri8H.js";import"./factory-DG1uZ-bq.js";import"./use-callback-ref-B9wMyQD4.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="6cf35d1d-be97-4e6a-9843-8382764bd80d",o._sentryDebugIdIdentifier="sentry-dbid-6cf35d1d-be97-4e6a-9843-8382764bd80d")}catch{}const c={title:"There was an error",description:"Something went wrong."},po={component:m,args:c,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=u();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
