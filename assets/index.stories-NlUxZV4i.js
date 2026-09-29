import{j as i}from"./jsx-runtime-1QcaBFjt.js";import{T as j,t as d}from"./index-CTRE3qaG.js";import{r as c}from"./index-C5DJK7Mn.js";import"./iframe-CJd8REah.js";import{F as a}from"./flex-Lb8rYyah.js";import"./portal-BWX3qSHj.js";import"./index-DzMh4kgF.js";import"./index-CAZ5y66m.js";import"./index-BjZ9T2Rl.js";import"./use-environment-context-DwB2GriR.js";import"./create-context-z3Tag67_.js";import"./create-slot-recipe-context-11ZmFkDp.js";import"./factory-BdGhXirw.js";import"./create-recipe-context-BL7vxUyW.js";import"./icons-Bfmdf0B7.js";import"./index-B50MXpTV.js";import"./index-BLVBAjsL.js";import"./index-pW82Y0Cx.js";import"./index-C2wdLnPZ.js";import"./use-locale-context-BE9Vv-QU.js";import"./factory-CpSrrdZf.js";import"./spinner-Dwo6YvmC.js";import"./stack-D2LoWOhJ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="89358c50-1f91-4c3e-8220-c59cde4269d2",e._sentryDebugIdIdentifier="sentry-dbid-89358c50-1f91-4c3e-8220-c59cde4269d2")}catch{}const Y={component:j,tags:["pending"]},f=(e,r,I,F)=>{const p=crypto.randomUUID();d.create({id:p,type:e,title:r,description:I,closable:!0,onStatusChange:({status:S})=>{S==="unmounted"&&d.dismiss(p)}})},t={render:()=>(c.useEffect(()=>{f("success","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))},n={render:()=>(c.useEffect(()=>{f("error","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))},s={render:()=>(c.useEffect(()=>{f("warning","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))},o={render:()=>(c.useEffect(()=>{f("info","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,E,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("warning", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(D=(E=s.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var h,y,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("info", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Z=["Success","Error","Warning","Info"];export{n as Error,o as Info,t as Success,s as Warning,Z as __namedExportsOrder,Y as default};
