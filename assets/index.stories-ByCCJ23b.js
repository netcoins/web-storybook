import{j as e}from"./jsx-runtime-B06jWHTP.js";import{T as f,E as y}from"./index-Tg6KmesS.js";import{w as S,x as g,y as j}from"./index-CvKVntdK.js";import{r as B}from"./index-C1TPUaTx.js";import"./iframe-B6fleTvj.js";import{B as o}from"./box-CDcWH6Yu.js";import"./motion-CKBGso79.js";import"./flex-DY0jT9vK.js";import"./use-style-config-B2W6jWHK.js";import"./factory-DvFDl3zZ.js";import"./button-C7wkHYm1.js";import"./context-Bcn5T_v6.js";import"./spinner-CJSMNVQB.js";import"./emotion-react.browser.esm-a5b9UzZz.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Bs9TwqwB.js";import"./text-ArEex_Yj.js";import"./iconBase-BIvVonaM.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new n.Error().stack;i&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[i]="7bf16f23-fd4a-41ee-9baa-342acc4e04ef",n._sentryDebugIdIdentifier="sentry-dbid-7bf16f23-fd4a-41ee-9baa-342acc4e04ef")}catch{}const q={component:f},r=({options:n,initialActive:i,variant:A=y.PRIMARY})=>{const[T,h]=B.useState(i);return e.jsx(f,{options:n,activeOption:T,setActiveOption:h,variant:A,"data-sentry-element":"Sliding","data-sentry-component":"TabsSlidingWrapper","data-sentry-source-file":"index.stories.tsx"})},a={render:()=>e.jsx(o,{maxWidth:"300px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})}]})})},s={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{initialActive:"buy",options:[{value:"buy",label:"Buy",icon:e.jsx(S,{size:"14px"})},{value:"sell",label:"Sell",icon:e.jsx(g,{size:"14px"})},{value:"staking",label:"Staking",icon:e.jsx(j,{size:"14px"})}]})})},t={render:()=>e.jsx(o,{maxWidth:"600px",children:e.jsx(r,{variant:y.SECONDARY,initialActive:"",options:[{value:"line",label:"Line"},{value:"candle",label:"Candle"}]})})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,b,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
