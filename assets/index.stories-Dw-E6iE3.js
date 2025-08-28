import{j as e}from"./jsx-runtime-MHZvqL_t.js";import{T as v,E as y}from"./index-9XS_Jf00.js";import{u as S,v as g,w as j}from"./index-CX5TbEnR.js";import{r as B}from"./index-BQja5mEm.js";import"./iframe-BS01ocFG.js";import{B as o}from"./box-CNEYIEc2.js";import"./motion-Cq2wECNI.js";import"./flex-ClNkGKqe.js";import"./use-style-config-C5kUKhAX.js";import"./factory-CqABM38r.js";import"./button-Dbyv7cOs.js";import"./context-CjJ0Wp3S.js";import"./spinner-DWd39qma.js";import"./emotion-react.browser.esm-D4mcBU_U.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B0dABy0A.js";import"./text-CFn7IS6o.js";import"./iconBase-9XpoQhKd.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="cf8f60fb-b169-4b00-9dfc-bbf4e04bee73",n._sentryDebugIdIdentifier="sentry-dbid-cf8f60fb-b169-4b00-9dfc-bbf4e04bee73")}catch{}const q={component:v},r=({options:n,initialActive:i,variant:A=y.PRIMARY})=>{const[T,h]=B.useState(i);return e.jsx(v,{options:n,activeOption:T,setActiveOption:h,variant:A,"data-sentry-element":"Sliding","data-sentry-component":"TabsSlidingWrapper","data-sentry-source-file":"index.stories.tsx"})},s={render:()=>e.jsx(o,{maxWidth:"300px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})}]})})},a={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})},{value:"staking",label:"Staking",icon:e.jsx(j,{size:"14px"})}]})})},t={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{variant:y.SECONDARY,initialActive:"",options:[{value:"line",label:"Line"},{value:"candle",label:"Candle"}]})})};var l,p,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box maxWidth="600px">
            <TabsSlidingWrapper variant={ENUM_SLIDING_TAB_VARIANT.SECONDARY} initialActive={""} options={[{
      value: "line",
      label: "Line"
    }, {
      value: "candle",
      label: "Candle"
    }]} />
        </Box>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const F=["TwoOptions","ThreeOptions","SecTwoOptions"];export{t as SecTwoOptions,a as ThreeOptions,s as TwoOptions,F as __namedExportsOrder,q as default};
