import{j as t}from"./jsx-runtime-BkQZSEIf.js";import{R as p}from"./index-2EEn3sQx.js";import"./iframe-DN8G179o.js";import"./ReactIconWrapper-C1uVqv-S.js";import"./flex-gyDmVpPH.js";import"./use-style-config-B0UF7OPr.js";import"./index-D4EOpcLa.js";import"./factory-BvfaDmtu.js";import"./icon-BKAVBbR4.js";import"./chunk-2OOHT3W5-CIXvUkHz.js";import"./chunk-ZJJGQIVY-BrKoGRnO.js";import"./chunk-PULVB27S-DlTjfvPO.js";import"./chunk-KRPLQIP4-GLzzeu_C.js";import"./index-BcEYxp1I.js";import"./index-Cl_nKAfg.js";import"./index-BZY4FehO.js";import"./iconBase-BhIrwaDC.js";import"./link-DB2-WZXR.js";import"./text-638c3RYc.js";import"./popover-trigger-BA2l8mqi.js";import"./use-popper-BbilKC3u.js";import"./use-event-listener-DX7KVXI6.js";import"./use-callback-ref-BnXW2utd.js";import"./use-safe-layout-effect-ZCDLejXd.js";import"./use-update-effect-BDAUnvJJ.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-0QJjtJvY.js";import"./use-disclosure-B71kswdA.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-lpzbv2oE.js";import"./define-styles-k0dS9I3S.js";import"./context-uzRk5v5o.js";import"./box-CNsYUkgW.js";import"./portal-Zkc3MIFF.js";import"./index-DkRJ2KDe.js";import"./index-BReGxRDX.js";import"./index-CUvzeMbw.js";import"./skeleton-DoulFiOE.js";import"./emotion-react.browser.esm-UeZPA3jc.js";import"./css-var-BrkJIZpq.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new r.Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="be200868-bdd1-4f7a-87ed-64f86fec0898",r._sentryDebugIdIdentifier="sentry-dbid-be200868-bdd1-4f7a-87ed-64f86fec0898")}catch{}const Le={title:"Components/ReceiptLineItem",component:p,parameters:{layout:"centered"},tags:["autodocs","pending"],decorators:[r=>t.jsx(r,{})]},e={args:{leftText:"Receipt Line Label",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},o={args:{...e.args,size:"sm"}},s={args:{...e.args,color:"grey"}},a={args:{...e.args,bottomBorder:!1}},i={args:{...e.args,onInfoIconClick:()=>alert("Info icon clicked")}},n={args:{leftText:"Very Long Receipt Line Label That Might Wrap on Smaller Screens",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},m={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{leftText:"First Item",rightText:"100.00 MMMM",size:"md",color:"black",bottomBorder:!0}),t.jsx(p,{leftText:"Second Item",rightText:"200.00 MMMM",size:"md",color:"grey",bottomBorder:!0}),t.jsx(p,{leftText:"Total",rightText:"300.00 MMMM",size:"md",color:"black",bottomBorder:!1})]})},c={parameters:{chromatic:{viewports:[320,768]}},args:{...e.args}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    leftText: "Receipt Line Label",
    rightText: "999,999,999,999,999.99 MMMM",
    size: "md",
    color: "black",
    bottomBorder: true
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,M,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "sm"
  }
}`,...(b=(M=o.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var x,T,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    color: "grey"
  }
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var h,y,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bottomBorder: false
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var L,z,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onInfoIconClick: () => alert("Info icon clicked")
  }
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var k,R,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    leftText: "Very Long Receipt Line Label That Might Wrap on Smaller Screens",
    rightText: "999,999,999,999,999.99 MMMM",
    size: "md",
    color: "black",
    bottomBorder: true
  }
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var j,w,W;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>
            <ReceiptLineItem leftText="First Item" rightText="100.00 MMMM" size="md" color="black" bottomBorder />
            <ReceiptLineItem leftText="Second Item" rightText="200.00 MMMM" size="md" color="grey" bottomBorder />
            <ReceiptLineItem leftText="Total" rightText="300.00 MMMM" size="md" color="black" bottomBorder={false} />
        </>
}`,...(W=(w=m.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var _,C,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      viewports: [320, 768]
    }
  },
  args: {
    ...Default.args
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const ze=["Default","SmallSize","GreyColor","WithoutBorder","WithInfoIcon","LongText","MultipleItems","ResponsiveExample"];export{e as Default,s as GreyColor,n as LongText,m as MultipleItems,c as ResponsiveExample,o as SmallSize,i as WithInfoIcon,a as WithoutBorder,ze as __namedExportsOrder,Le as default};
