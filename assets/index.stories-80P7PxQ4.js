import{j as e}from"./jsx-runtime-CWIYlopj.js";import{T as y,E as S}from"./index-B-Iyd2P0.js";import{w as g,x as A,y as j}from"./index-DlFYPTn4.js";import{r as B}from"./index-B7rof8nh.js";import"./iframe-BDqx6jC8.js";import{B as o}from"./index-BaBwGcon.js";import"./flex-Bggr3XRf.js";import"./factory-DZWhZEsy.js";import"./button-CHL-NboF.js";import"./create-recipe-context-BNEqmHsA.js";import"./attr-DhmmAXiK.js";import"./spinner-TtBTnMEZ.js";import"./index-hYMh-BgI.js";import"./iconBase-y0IgG-hX.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="c749aca2-dd69-4b74-a972-4d3291628f36",n._sentryDebugIdIdentifier="sentry-dbid-c749aca2-dd69-4b74-a972-4d3291628f36")}catch{}const Y={component:y},r=({options:n,initialActive:i,variant:f=S.PRIMARY})=>{const[T,h]=B.useState(i);return e.jsx(y,{options:n,activeOption:T,setActiveOption:h,variant:f,"data-sentry-element":"Sliding","data-sentry-component":"TabsSlidingWrapper","data-sentry-source-file":"index.stories.tsx"})},a={render:()=>e.jsx(o,{maxWidth:"300px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(g,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(A,{size:"14px"})}]})})},s={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(g,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(A,{size:"14px"})},{value:"staking",label:"Staking",icon:e.jsx(j,{size:"14px"})}]})})},t={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{variant:S.SECONDARY,initialActive:"",options:[{value:"line",label:"Line"},{value:"candle",label:"Candle"}]})})};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Box maxWidth="300px">
            <TabsSlidingWrapper initialActive={"buy"} options={[{
      value: "buy",
      label: "Buy",
      icon: <MdAdd size={"14px"} />
    }, {
      value: "sell",
      label: "Sell",
      icon: <MdRemove size={"14px"} />
    }]} />
        </Box>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Box maxWidth="600px">
            <TabsSlidingWrapper initialActive={"buy"} options={[{
      value: "buy",
      label: "Buy",
      icon: <MdAdd size={"14px"} />
    }, {
      value: "sell",
      label: "Sell",
      icon: <MdRemove size={"14px"} />
    }, {
      value: "staking",
      label: "Staking",
      icon: <MdAssistant size={"14px"} />
    }]} />
        </Box>
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,b,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box maxWidth="600px">
            <TabsSlidingWrapper variant={ENUM_SLIDING_TAB_VARIANT.SECONDARY} initialActive={""} options={[{
      value: "line",
      label: "Line"
    }, {
      value: "candle",
      label: "Candle"
    }]} />
        </Box>
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const G=["TwoOptions","ThreeOptions","SecTwoOptions"];export{t as SecTwoOptions,s as ThreeOptions,a as TwoOptions,G as __namedExportsOrder,Y as default};
