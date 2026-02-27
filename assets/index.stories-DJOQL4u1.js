import{j as l}from"./jsx-runtime-BEALrSiw.js";import{r as u}from"./index-D6Rt38Md.js";import{O as r}from"./index-D56eufL_.js";import"./iframe-C7fe_6PB.js";import{F as m}from"./flex-ClmIt6a8.js";import"./index-Bjaf9lYr.js";import"./iconBase-DAclO8sU.js";import"./index-D2Di4sUN.js";import"./create-recipe-context-DLES19Fj.js";import"./factory-FaUDqzG9.js";import"./icon-BY3liC7U.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8331c458-7eac-454a-b993-eccc9d6e149c",e._sentryDebugIdIdentifier="sentry-dbid-8331c458-7eac-454a-b993-eccc9d6e149c")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=u.useState(null),c=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(d=>d===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:c.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
