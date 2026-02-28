import{j as l}from"./jsx-runtime-C09U0QkG.js";import{r as u}from"./index-tU2a8peJ.js";import{O as r}from"./index-ClPxEB4t.js";import"./iframe-WSTQLAUA.js";import{F as m}from"./flex-vmcZAlQT.js";import"./index-CbwDE7O0.js";import"./iconBase-BkfLj6ee.js";import"./index-DyRkg7z2.js";import"./create-recipe-context-781SFowN.js";import"./factory-BGpqAhvl.js";import"./icon-DX3fR94h.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8331c458-7eac-454a-b993-eccc9d6e149c",e._sentryDebugIdIdentifier="sentry-dbid-8331c458-7eac-454a-b993-eccc9d6e149c")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=u.useState(null),c=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(d=>d===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:c.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
