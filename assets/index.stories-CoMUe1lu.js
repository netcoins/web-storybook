import{j as e}from"./jsx-runtime-Nog3FBKS.js";import{T as y,E as S}from"./index-BM8FAE-L.js";import{u as g,v as A,w as j}from"./index-LSdfx3_X.js";import{r as B}from"./index-Mm4yjXV8.js";import"./iframe-B01Rhazy.js";import{B as o}from"./index-B3Z5u5ba.js";import"./flex-DXc-o7XK.js";import"./factory-N6_sDeIQ.js";import"./button-sVoUEUTP.js";import"./create-recipe-context-CpX93Itj.js";import"./attr-DhmmAXiK.js";import"./spinner-CNCW_VnY.js";import"./index-jbykmj3K.js";import"./iconBase-x4ewFLct.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="6d575be5-9ac6-4411-abbb-0640749a1299",n._sentryDebugIdIdentifier="sentry-dbid-6d575be5-9ac6-4411-abbb-0640749a1299")}catch{}const Y={component:y},r=({options:n,initialActive:i,variant:T=S.PRIMARY})=>{const[f,h]=B.useState(i);return e.jsx(y,{options:n,activeOption:f,setActiveOption:h,variant:T,"data-sentry-element":"Sliding","data-sentry-component":"TabsSlidingWrapper","data-sentry-source-file":"index.stories.tsx"})},a={render:()=>e.jsx(o,{maxWidth:"300px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(g,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(A,{size:"14px"})}]})})},s={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(g,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(A,{size:"14px"})},{value:"staking",label:"Staking",icon:e.jsx(j,{size:"14px"})}]})})},t={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{variant:S.SECONDARY,initialActive:"",options:[{value:"line",label:"Line"},{value:"candle",label:"Candle"}]})})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,b,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
