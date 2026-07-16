import{j as i}from"./jsx-runtime-BGcxFHfU.js";import{T as j,t as f}from"./index-CLtxLzH8.js";import{r as a}from"./index-B0yVpsDW.js";import"./iframe-GaotBMNf.js";import{F as c}from"./flex-DRA7j1Lm.js";import"./portal-DQ8kwrmO.js";import"./index-ZoHJkkX0.js";import"./index-rH2g5JbQ.js";import"./index-AP_1WMee.js";import"./use-environment-context-ISZqcu-a.js";import"./create-context-BlHQPKjU.js";import"./create-slot-recipe-context-Cu7idRdr.js";import"./factory-CF2a3kaT.js";import"./create-recipe-context-D9kkmKMO.js";import"./icons-Czlh0e6K.js";import"./index-CQmmRITb.js";import"./index-BLVBAjsL.js";import"./index-pW82Y0Cx.js";import"./index-8lXC83iU.js";import"./use-locale-context-DTuxNaJ8.js";import"./factory-NNq8EB_E.js";import"./spinner-pYbUAc9i.js";import"./stack-B8oYQZeG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="1ac2cbe9-13e0-4855-8707-5a4b396456e9",e._sentryDebugIdIdentifier="sentry-dbid-1ac2cbe9-13e0-4855-8707-5a4b396456e9")}catch{}const Y={component:j,tags:["pending"]},p=(e,r,I,F)=>{const m=crypto.randomUUID();f.create({id:m,type:e,title:r,description:I,closable:!0,onStatusChange:({status:S})=>{S==="unmounted"&&f.dismiss(m)}})},t={render:()=>(a.useEffect(()=>{p("success","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},n={render:()=>(a.useEffect(()=>{p("error","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},s={render:()=>(a.useEffect(()=>{p("warning","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},o={render:()=>(a.useEffect(()=>{p("info","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))};var d,u,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("success", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var T,x,g;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("error", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,b,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("warning", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var D,h,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("info", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Z=["Success","Error","Warning","Info"];export{n as Error,o as Info,t as Success,s as Warning,Z as __namedExportsOrder,Y as default};
