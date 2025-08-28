import{j as l}from"./jsx-runtime-DBvW3J4P.js";import{r as c}from"./index-eiqMTM-Z.js";import{O as r}from"./index-DsZHOABR.js";import"./iframe-CbEszLwV.js";import{F as m}from"./flex-CVx7E2fo.js";import"./index-DwpOUU05.js";import"./iconBase-yBK0uS8I.js";import"./text-drvfSy8p.js";import"./use-style-config-CRvEJw1Z.js";import"./factory-CH5OTrax.js";import"./icon-BTh9G9d4.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4261ad5e-44c9-4ef4-8fa9-3df25f0038cb",e._sentryDebugIdIdentifier="sentry-dbid-4261ad5e-44c9-4ef4-8fa9-3df25f0038cb")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),d=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:d.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
