import{j as t}from"./jsx-runtime-CIqfBLiW.js";import{R as p}from"./index-BspZpPhV.js";import"./iframe-CgiJZm3J.js";import"./ReactIconWrapper-CEzjKQ4X.js";import"./flex-DG9TD6-J.js";import"./use-style-config-DID0GbhU.js";import"./index-k1jG6xPF.js";import"./factory-DGji_UzY.js";import"./icon-FneL2-dz.js";import"./chunk-2OOHT3W5-BgLV9lGU.js";import"./chunk-ZJJGQIVY-BGLi4DS8.js";import"./chunk-PULVB27S-DBIIhzZn.js";import"./chunk-KRPLQIP4-DQRM5B9R.js";import"./index-DS7ME2F3.js";import"./index-DJGYbd1n.js";import"./index-B0bugIJk.js";import"./iconBase-CDzHQ3cO.js";import"./link-BQnkbd0f.js";import"./text-0vmpramh.js";import"./popover-trigger-BLza2bxd.js";import"./use-popper-BA9rhYLp.js";import"./use-event-listener-BC-P5lEF.js";import"./use-callback-ref-C71cmK3f.js";import"./use-safe-layout-effect-vuqKibam.js";import"./use-update-effect-qaQ-aU4k.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DfiD8wIE.js";import"./use-disclosure-CvK4U0RW.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CQZoWQSz.js";import"./define-styles-k0dS9I3S.js";import"./context-DUOxryss.js";import"./box-Bzwi0K9I.js";import"./portal-BUtpgNzn.js";import"./index-peMRWvWv.js";import"./index-BnMT3-Z2.js";import"./index-BbmObZul.js";import"./skeleton-CtJLNe5l.js";import"./emotion-react.browser.esm-C5I8tLOS.js";import"./css-var-BrkJIZpq.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},l=new r.Error().stack;l&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[l]="ab9b0517-b253-42ac-8fbd-bb19dd11464d",r._sentryDebugIdIdentifier="sentry-dbid-ab9b0517-b253-42ac-8fbd-bb19dd11464d")}catch{}const Le={title:"Components/ReceiptLineItem",component:p,parameters:{layout:"centered"},tags:["autodocs","pending"],decorators:[r=>t.jsx(r,{})]},e={args:{leftText:"Receipt Line Label",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},o={args:{...e.args,size:"sm"}},s={args:{...e.args,color:"grey"}},a={args:{...e.args,bottomBorder:!1}},i={args:{...e.args,onInfoIconClick:()=>alert("Info icon clicked")}},n={args:{leftText:"Very Long Receipt Line Label That Might Wrap on Smaller Screens",rightText:"999,999,999,999,999.99 MMMM",size:"md",color:"black",bottomBorder:!0}},m={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{leftText:"First Item",rightText:"100.00 MMMM",size:"md",color:"black",bottomBorder:!0}),t.jsx(p,{leftText:"Second Item",rightText:"200.00 MMMM",size:"md",color:"grey",bottomBorder:!0}),t.jsx(p,{leftText:"Total",rightText:"300.00 MMMM",size:"md",color:"black",bottomBorder:!1})]})},c={parameters:{chromatic:{viewports:[320,768]}},args:{...e.args}};var d,g,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    leftText: "Receipt Line Label",
    rightText: "999,999,999,999,999.99 MMMM",
    size: "md",
    color: "black",
    bottomBorder: true
  }
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,M,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "sm"
  }
}`,...(f=(M=o.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var x,T,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
