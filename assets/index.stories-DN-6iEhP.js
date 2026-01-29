import{j as i}from"./jsx-runtime-kgXYXbxN.js";import{T as j,t as d}from"./index-BK8OV0St.js";import{r as a}from"./index-DkrDHoA0.js";import"./iframe-BBryyjVm.js";import{F as c}from"./flex-CsIhHmY6.js";import"./portal-D3MW8-YJ.js";import"./index-CehdyC4B.js";import"./index-Bpl4YvaA.js";import"./index-DfUPD731.js";import"./use-environment-context-DWxkAKGZ.js";import"./create-context-INHbO-rg.js";import"./create-slot-recipe-context-BpOBAris.js";import"./factory-BZTzI5pW.js";import"./create-recipe-context-BePLyMJS.js";import"./icons-Cqn--cx_.js";import"./index-CyBBoEyT.js";import"./index-BLVBAjsL.js";import"./index-pW82Y0Cx.js";import"./index-BpECUZYK.js";import"./use-locale-context-C5nh4WAs.js";import"./factory-C2K0EIi5.js";import"./spinner-DC4_QDZr.js";import"./stack-CiQGU0t-.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f552db35-681d-4831-9544-7a89b474c599",e._sentryDebugIdIdentifier="sentry-dbid-f552db35-681d-4831-9544-7a89b474c599")}catch{}const Y={component:j,tags:["pending"]},f=(e,r,I,F)=>{const p=crypto.randomUUID();d.create({id:p,type:e,title:r,description:I,closable:!0,onStatusChange:({status:S})=>{S==="unmounted"&&d.dismiss(p)}})},t={render:()=>(a.useEffect(()=>{f("success","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},n={render:()=>(a.useEffect(()=>{f("error","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},s={render:()=>(a.useEffect(()=>{f("warning","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},o={render:()=>(a.useEffect(()=>{f("info","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
