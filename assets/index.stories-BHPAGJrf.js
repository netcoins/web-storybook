import{j as t}from"./jsx-runtime-CCJ18Kz-.js";import{R as p}from"./index-DJVIlPaT.js";import"./iframe-DJ4HJDV5.js";import"./ReactIconWrapper-5xrwkHzj.js";import"./flex-BoGPGpvw.js";import"./use-style-config-CjFLxeBG.js";import"./index-CZ6gmXhl.js";import"./factory-CDAqzQl4.js";import"./icon-fRpri_pM.js";import"./chunk-2OOHT3W5-DzYbNG5P.js";import"./chunk-ZJJGQIVY-BKueF7JD.js";import"./chunk-PULVB27S-Cpn5AxNC.js";import"./chunk-KRPLQIP4-COUiWytp.js";import"./index-BKh9G5zc.js";import"./index-DdzUrdp8.js";import"./index-C-F356-J.js";import"./iconBase-DaZVHB0C.js";import"./link-C2PNHYHY.js";import"./text-CwsqMmf5.js";import"./popover-trigger-CZAvZu84.js";import"./use-popper-DanfRe3J.js";import"./use-event-listener-Dgx7ZhVh.js";import"./use-callback-ref-BF4YjfZ_.js";import"./use-safe-layout-effect-DEFZ6YCP.js";import"./use-update-effect-BNRYZS_Y.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DyLhP37g.js";import"./use-disclosure-CO3uvVa6.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-DjHdjte4.js";import"./define-styles-k0dS9I3S.js";import"./context-CjzVIJzQ.js";import"./box-FyThfQAW.js";import"./portal-D4RzTRtt.js";import"./index-DYl-dS4d.js";import"./index-CwLJJBMz.js";import"./index-CHB8otnq.js";import"./skeleton-B0eAqqCw.js";import"./emotion-react.browser.esm-DfXFgfSU.js";import"./css-var-BrkJIZpq.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new r.Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="375620f3-0b59-40dd-9d00-857371e6f668",r._sentryDebugIdIdentifier="sentry-dbid-375620f3-0b59-40dd-9d00-857371e6f668")}catch{}const Le={title:"Components/ReceiptLineItem",component:p,parameters:{layout:"centered"},tags:["autodocs","pending"],decorators:[r=>t.jsx(r,{})]},e={args:{leftText:"Receipt Line Label",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},o={args:{...e.args,size:"sm"}},s={args:{...e.args,color:"grey"}},a={args:{...e.args,bottomBorder:!1}},i={args:{...e.args,onInfoIconClick:()=>alert("Info icon clicked")}},n={args:{leftText:"Very Long Receipt Line Label That Might Wrap on Smaller Screens",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},m={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{leftText:"First Item",rightText:"100.00 MMMM",size:"md",color:"black",bottomBorder:!0}),t.jsx(p,{leftText:"Second Item",rightText:"200.00 MMMM",size:"md",color:"grey",bottomBorder:!0}),t.jsx(p,{leftText:"Total",rightText:"300.00 MMMM",size:"md",color:"black",bottomBorder:!1})]})},c={parameters:{chromatic:{viewports:[320,768]}},args:{...e.args}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
