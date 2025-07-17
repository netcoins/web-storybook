import{j as e}from"./jsx-runtime-DIzLeBSg.js";import{T as f,E as y}from"./index-CZLzxc95.js";import{t as S,u as g,v as j}from"./index-h5EGf4KQ.js";import{r as B}from"./index-HfLk7_r9.js";import"./iframe-NthpIpXS.js";import{B as o}from"./box-NNxW-TG4.js";import"./motion-DvjLKyOb.js";import"./flex-BovBxUVX.js";import"./use-style-config-XwpbuwHi.js";import"./button-CENBuNfy.js";import"./context-BKv63LUG.js";import"./spinner-CD4V-ZNa.js";import"./emotion-react.browser.esm-B3QBLT_b.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Co7zkXVG.js";import"./text-5ESNzIeg.js";import"./iconBase-Bl0CWZaD.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="78bf8a8d-2a8f-4bb5-b522-622337fb46f9",n._sentryDebugIdIdentifier="sentry-dbid-78bf8a8d-2a8f-4bb5-b522-622337fb46f9")}catch{}const P={component:f},r=({options:n,initialActive:i,variant:A=y.PRIMARY})=>{const[T,h]=B.useState(i);return e.jsx(f,{options:n,activeOption:T,setActiveOption:h,variant:A,"data-sentry-element":"Sliding","data-sentry-component":"TabsSlidingWrapper","data-sentry-source-file":"index.stories.tsx"})},a={render:()=>e.jsx(o,{maxWidth:"300px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})}]})})},s={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})},{value:"staking",label:"Staking",icon:e.jsx(j,{size:"14px"})}]})})},t={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{variant:y.SECONDARY,initialActive:"",options:[{value:"line",label:"Line"},{value:"candle",label:"Candle"}]})})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,b,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Box maxWidth="600px">
            <TabsSlidingWrapper variant={ENUM_SLIDING_TAB_VARIANT.SECONDARY} initialActive={""} options={[{
      value: "line",
      label: "Line"
    }, {
      value: "candle",
      label: "Candle"
    }]} />
        </Box>
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const q=["TwoOptions","ThreeOptions","SecTwoOptions"];export{t as SecTwoOptions,s as ThreeOptions,a as TwoOptions,q as __namedExportsOrder,P as default};
