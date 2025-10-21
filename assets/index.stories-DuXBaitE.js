import{j as l}from"./jsx-runtime-CVi4Qpbx.js";import{r as u}from"./index-CReu0ybR.js";import{O as r}from"./index-BZ0xrPZ-.js";import"./iframe-CIKX4rQs.js";import{F as m}from"./flex-AfmMxkwZ.js";import"./index-28l1afoe.js";import"./iconBase-Dbvz94a_.js";import"./text-AaZOsKYA.js";import"./use-style-config-DxjlVjz9.js";import"./factory-DKjfRhkG.js";import"./icon-DsLrUxm8.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8f9915d3-0c28-4991-9d73-c639acb012bf",e._sentryDebugIdIdentifier="sentry-dbid-8f9915d3-0c28-4991-9d73-c639acb012bf")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=u.useState(null),d=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(c=>c===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:d.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
