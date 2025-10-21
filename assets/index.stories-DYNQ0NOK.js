import{j as e}from"./jsx-runtime-CVi4Qpbx.js";import{T as y,E as f}from"./index-CzUPg_z_.js";import{u as S,v as g,w as j}from"./index-28l1afoe.js";import{r as B}from"./index-CReu0ybR.js";import"./iframe-CIKX4rQs.js";import{B as o}from"./box-CkWvgQfS.js";import"./motion-e77wNtiD.js";import"./flex-AfmMxkwZ.js";import"./use-style-config-DxjlVjz9.js";import"./factory-DKjfRhkG.js";import"./button-D0PwJoQd.js";import"./context-DYRdLxPr.js";import"./spinner-BnFTNDIe.js";import"./emotion-react.browser.esm-BEdH8kdH.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CeFgIJ4O.js";import"./text-AaZOsKYA.js";import"./iconBase-Dbvz94a_.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="4eed7a50-1c2f-4815-84ba-99df6faac624",n._sentryDebugIdIdentifier="sentry-dbid-4eed7a50-1c2f-4815-84ba-99df6faac624")}catch{}const q={component:y},r=({options:n,initialActive:i,variant:A=f.PRIMARY})=>{const[T,h]=B.useState(i);return e.jsx(y,{options:n,activeOption:T,setActiveOption:h,variant:A,"data-sentry-element":"Sliding","data-sentry-component":"TabsSlidingWrapper","data-sentry-source-file":"index.stories.tsx"})},a={render:()=>e.jsx(o,{maxWidth:"300px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})}]})})},s={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})},{value:"staking",label:"Staking",icon:e.jsx(j,{size:"14px"})}]})})},t={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{variant:f.SECONDARY,initialActive:"",options:[{value:"line",label:"Line"},{value:"candle",label:"Candle"}]})})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const F=["TwoOptions","ThreeOptions","SecTwoOptions"];export{t as SecTwoOptions,s as ThreeOptions,a as TwoOptions,F as __namedExportsOrder,q as default};
