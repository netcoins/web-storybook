import{j as l}from"./jsx-runtime-xpl3tfWg.js";import{r as u}from"./index-AOymK8m_.js";import{O as r}from"./index-D-kg9gP8.js";import"./iframe-i40_7hjf.js";import{F as m}from"./flex-BQzgGcSE.js";import"./index-C-13u3JV.js";import"./iconBase-BOpCY8f7.js";import"./index-C-pN0QYH.js";import"./create-recipe-context-DTWuTcVr.js";import"./factory-BFYvbmpq.js";import"./icon-Cmlhz88B.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7ea7df1e-c9c4-4084-a97e-c01e3ab35248",e._sentryDebugIdIdentifier="sentry-dbid-7ea7df1e-c9c4-4084-a97e-c01e3ab35248")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=u.useState(null),p=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],d=n=>{t(c=>c===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:p.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>d(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const options = [{
      label: "Option A",
      value: "a",
      desc: "This is option A"
    }, {
      label: "Option B",
      value: "b",
      desc: "This is option B"
    }];
    const handleToggle = (option: {
      value: string;
    }) => {
      setSelectedValue(prev => prev === option.value ? null : option.value);
    };
    return <Flex width="100%" maxWidth="300px" direction="column" gap={2}>
                {options.map(option => <OptionCheck key={option.value} option={option} isChecked={selectedValue === option.value} onToggle={() => handleToggle(option)} />)}
            </Flex>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,D as default};
