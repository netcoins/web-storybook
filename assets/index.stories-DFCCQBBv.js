import{j as i}from"./jsx-runtime-BqansXUO.js";import{T as j,t as p}from"./index-B6h0imWl.js";import{r as a}from"./index-CaUP9lQz.js";import"./iframe-CJPrE54o.js";import{F as c}from"./flex-BtG4Z1Cz.js";import"./portal-BW0aG4yg.js";import"./index-DzMh4kgF.js";import"./index-Bk8PeV3R.js";import"./index-Bh2oxZLh.js";import"./use-environment-context-BDYXX-pg.js";import"./create-context-yWkgqma1.js";import"./create-slot-recipe-context-NNrBNKNw.js";import"./factory-noIglyie.js";import"./create-recipe-context-1-EkR5W0.js";import"./icons-Bh5IB2_W.js";import"./index-B2OV5qgV.js";import"./index-BLVBAjsL.js";import"./index-pW82Y0Cx.js";import"./index-CAjd0yKu.js";import"./use-locale-context-BpYWQfIH.js";import"./factory-DeJ31wet.js";import"./spinner-CULqHpKw.js";import"./stack-1pNxbbrw.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="1e11b53d-ad2b-4b54-9d38-2487221fdf32",e._sentryDebugIdIdentifier="sentry-dbid-1e11b53d-ad2b-4b54-9d38-2487221fdf32")}catch{}const Y={component:j,tags:["pending"]},d=(e,r,I,F)=>{const f=crypto.randomUUID();p.create({id:f,type:e,title:r,description:I,closable:!0,onStatusChange:({status:S})=>{S==="unmounted"&&p.dismiss(f)}})},t={render:()=>(a.useEffect(()=>{d("success","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},n={render:()=>(a.useEffect(()=>{d("error","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},s={render:()=>(a.useEffect(()=>{d("warning","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))},o={render:()=>(a.useEffect(()=>{d("info","Title","This is a description")},[]),i.jsx(c,{w:"fit-content",flexDir:"column"}))};var m,u,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,w,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("warning", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var D,h,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    useEffect(() => {
      Toast("info", "Title", "This is a description", false);
    }, []);
    return <Flex w="fit-content" flexDir="column" />;
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const Z=["Success","Error","Warning","Info"];export{n as Error,o as Info,t as Success,s as Warning,Z as __namedExportsOrder,Y as default};
