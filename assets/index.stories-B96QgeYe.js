import{j as t}from"./jsx-runtime-0OGM7D8K.js";import{S as d,E as l}from"./index-D5o6KYl6.js";import{E as m}from"./index-2XmPQTVK.js";import"./iframe-B7ROeOph.js";import{u}from"./use-disclosure-_00IISjt.js";import"./types-Cz55r_dD.js";import"./index-1P1cuAZu.js";import"./color-mode-CAFxY0To.js";import"./iconBase-D9sNXsAR.js";import"./icon-button-CstuL5ue.js";import"./button-Bpjwt7-y.js";import"./factory-DPvUXeh5.js";import"./create-recipe-context-BMJ4Bne9.js";import"./attr-DhmmAXiK.js";import"./spinner-BR2YGWDH.js";import"./skeleton-gOxXofzu.js";import"./index-W1sMBFyr.js";import"./stack-CabptGAO.js";import"./flex-DN0vLbX1.js";import"./icon-DSSspk90.js";import"./index-CCa55i0U.js";import"./index-Cj2AohNs.js";import"./index-DrbaCE0D.js";import"./useTranslation-BYaH7_fl.js";import"./context-D0yalvBG.js";import"./dialog-B-Pu86jJ.js";import"./create-slot-recipe-context-CD1f4BuO.js";import"./create-context-BexXYZEx.js";import"./render-strategy-DJ8a6KfG.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-miRviQ_q.js";import"./index-CehdyC4B.js";import"./index-BLVBAjsL.js";import"./index-Cqc-BzUM.js";import"./index-BM1Z8WG2.js";import"./index-BJ3UbgYL.js";import"./use-event-DLhbU-PQ.js";import"./index-wMDwHiza.js";import"./index-pW82Y0Cx.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-environment-context-DoEpLGjQ.js";import"./use-locale-context-B8PG6r8S.js";import"./factory-BV6aqosp.js";import"./use-callback-ref-CFEkHPWX.js";try{let o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="92df0da4-6d55-4e79-91b5-5b0e0e109c5a",o._sentryDebugIdIdentifier="sentry-dbid-92df0da4-6d55-4e79-91b5-5b0e0e109c5a")}catch{}const c={title:"There was an error",description:"Something went wrong."},po={component:m,args:c,tags:["pending"]},e={render:o=>{const{open:r,onOpen:s,onClose:a}=u();return t.jsxs(t.Fragment,{children:[t.jsx(d,{type:"button",variant:l.PRIMARY_BLUE_OUTLINE,onClick:s,children:"Open Modal"}),t.jsx(m,{...o,open:r,onClose:a})]})},args:{}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
