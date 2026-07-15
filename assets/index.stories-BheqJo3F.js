import{j as t}from"./jsx-runtime-DlF-hKEQ.js";import{R as p}from"./index-DwWFiz8_.js";import"./iframe-DKyycFJO.js";import"./ReactIconWrapper-CHrBV4Bg.js";import"./flex-CJh8IWin.js";import"./index-teU4eNSH.js";import"./factory-CB3tuO0t.js";import"./icon-Cs6LhBmu.js";import"./create-recipe-context-DTw5gmRX.js";import"./index-CwFGolzc.js";import"./index-DwKJjPlR.js";import"./link-Bv6smx0b.js";import"./index-Rdt5MFmh.js";import"./index-BoV7HnQ-.js";import"./iconBase-DyiPEVfX.js";import"./index-ytO-jv-j.js";import"./portal-741fw-9f.js";import"./index-ZoHJkkX0.js";import"./index-DLCRCuKj.js";import"./index-BXtHAO76.js";import"./use-environment-context-BU5I_9S-.js";import"./create-context-GaBZH8Tp.js";import"./popover-BjFD7P4h.js";import"./create-slot-recipe-context-KhOHVEWZ.js";import"./split-presence-props-DXzEKp2t.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-CJCFVGRG.js";import"./index-BLVBAjsL.js";import"./index-CG4TY4cx.js";import"./use-event-DnsG-QHm.js";import"./index-GglaVOCO.js";import"./index-pW82Y0Cx.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-jjMpk5nr.js";import"./index-8lXC83iU.js";import"./use-locale-context-DF1dwBAQ.js";import"./factory-Bh_A4Lv0.js";import"./index-DdDJK2a1.js";import"./skeleton-Bk2kW7IG.js";import"./stack-Bh1-Om3N.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new r.Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="b1145413-3746-4563-b5a8-5de2f4e365f1",r._sentryDebugIdIdentifier="sentry-dbid-b1145413-3746-4563-b5a8-5de2f4e365f1")}catch{}const Se={title:"Components/ReceiptLineItem",component:p,parameters:{layout:"centered"},tags:["autodocs","pending"],decorators:[r=>t.jsx(r,{})]},e={args:{leftText:"Receipt Line Label",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},o={args:{...e.args,size:"sm"}},s={args:{...e.args,color:"grey"}},a={args:{...e.args,bottomBorder:!1}},i={args:{...e.args,onInfoIconClick:()=>alert("Info icon clicked")}},n={args:{leftText:"Very Long Receipt Line Label That Might Wrap on Smaller Screens",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},m={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{leftText:"First Item",rightText:"100.00 MMMM",size:"md",color:"black",bottomBorder:!0}),t.jsx(p,{leftText:"Second Item",rightText:"200.00 MMMM",size:"md",color:"grey",bottomBorder:!0}),t.jsx(p,{leftText:"Total",rightText:"300.00 MMMM",size:"md",color:"black",bottomBorder:!1})]})},c={parameters:{chromatic:{viewports:[320,768]}},args:{...e.args}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Le=["Default","SmallSize","GreyColor","WithoutBorder","WithInfoIcon","LongText","MultipleItems","ResponsiveExample"];export{e as Default,s as GreyColor,n as LongText,m as MultipleItems,c as ResponsiveExample,o as SmallSize,i as WithInfoIcon,a as WithoutBorder,Le as __namedExportsOrder,Se as default};
