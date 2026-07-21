import{j as i}from"./jsx-runtime-sSiny72Q.js";import{T as j,t as d}from"./index-WhLPc_he.js";import{r as c}from"./index-BRZUHrxl.js";import"./iframe-BtF_amxx.js";import{F as a}from"./flex-DBF-bEeD.js";import"./portal-D7cX7vIq.js";import"./index-DzMh4kgF.js";import"./index-DLLSwTiU.js";import"./index-Bg6o_01X.js";import"./use-environment-context-DCmU3z1b.js";import"./create-context-uyfP516n.js";import"./create-slot-recipe-context-sVH52Z6B.js";import"./factory-DB5fldYk.js";import"./create-recipe-context-ysTfWqWA.js";import"./icons-BYuY7D5V.js";import"./index-CF-5GPVB.js";import"./index-BLVBAjsL.js";import"./index-pW82Y0Cx.js";import"./index-C2wdLnPZ.js";import"./use-locale-context-CmisX32z.js";import"./factory-Cs1OGWTc.js";import"./spinner-DomKOxpT.js";import"./stack-DwLzdsVO.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="89358c50-1f91-4c3e-8220-c59cde4269d2",e._sentryDebugIdIdentifier="sentry-dbid-89358c50-1f91-4c3e-8220-c59cde4269d2")}catch{}const Y={component:j,tags:["pending"]},f=(e,r,I,F)=>{const p=crypto.randomUUID();d.create({id:p,type:e,title:r,description:I,closable:!0,onStatusChange:({status:S})=>{S==="unmounted"&&d.dismiss(p)}})},t={render:()=>(c.useEffect(()=>{f("success","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))},n={render:()=>(c.useEffect(()=>{f("error","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))},s={render:()=>(c.useEffect(()=>{f("warning","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))},o={render:()=>(c.useEffect(()=>{f("info","Title","This is a description")},[]),i.jsx(a,{w:"fit-content",flexDir:"column"}))};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
