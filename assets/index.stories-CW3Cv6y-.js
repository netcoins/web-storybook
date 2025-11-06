import{j as t}from"./jsx-runtime-CtUEez0z.js";import{R as p}from"./index-ClMG0joA.js";import"./iframe-COwPw1VY.js";import"./ReactIconWrapper-s8kSXq-k.js";import"./flex-WnzeImCB.js";import"./use-style-config-DWzjkw3h.js";import"./index-Cqmn51YS.js";import"./factory-DJYjEkMm.js";import"./icon-pHxpQceI.js";import"./chunk-2OOHT3W5-BCmr8mkC.js";import"./chunk-ZJJGQIVY-BxMdh_-C.js";import"./chunk-PULVB27S-CdnRv6KS.js";import"./chunk-KRPLQIP4-ejFlYfjc.js";import"./index-B1KVQGGL.js";import"./index-CTGzOJ-z.js";import"./index-CMMXWqW6.js";import"./iconBase-Dn46-paq.js";import"./link-DRgt6bZT.js";import"./text-DU2wDpPi.js";import"./popover-trigger-DzXUubWb.js";import"./use-popper-Bo3zfxkV.js";import"./use-event-listener-D32HG4Yo.js";import"./use-callback-ref-DrjLitdx.js";import"./use-safe-layout-effect-Bz0q2S9E.js";import"./use-update-effect-3eGvpoH8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DD_bcvjC.js";import"./use-disclosure-zUyXwX9i.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-BIX3BNxl.js";import"./define-styles-k0dS9I3S.js";import"./context-BxW3_Ype.js";import"./box-9BX69DHc.js";import"./portal-BdY166rg.js";import"./index-DiVBZjDx.js";import"./index-D-8BsizW.js";import"./index-CWbkxcru.js";import"./skeleton-C7avB-vG.js";import"./emotion-react.browser.esm-Cu-JWzKK.js";import"./css-var-BrkJIZpq.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new r.Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="375620f3-0b59-40dd-9d00-857371e6f668",r._sentryDebugIdIdentifier="sentry-dbid-375620f3-0b59-40dd-9d00-857371e6f668")}catch{}const Le={title:"Components/ReceiptLineItem",component:p,parameters:{layout:"centered"},tags:["autodocs","pending"],decorators:[r=>t.jsx(r,{})]},e={args:{leftText:"Receipt Line Label",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},o={args:{...e.args,size:"sm"}},s={args:{...e.args,color:"grey"}},a={args:{...e.args,bottomBorder:!1}},i={args:{...e.args,onInfoIconClick:()=>alert("Info icon clicked")}},n={args:{leftText:"Very Long Receipt Line Label That Might Wrap on Smaller Screens",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},m={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{leftText:"First Item",rightText:"100.00 MMMM",size:"md",color:"black",bottomBorder:!0}),t.jsx(p,{leftText:"Second Item",rightText:"200.00 MMMM",size:"md",color:"grey",bottomBorder:!0}),t.jsx(p,{leftText:"Total",rightText:"300.00 MMMM",size:"md",color:"black",bottomBorder:!1})]})},c={parameters:{chromatic:{viewports:[320,768]}},args:{...e.args}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
