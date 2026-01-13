import{j as l}from"./jsx-runtime-DUvnlu6r.js";import{r as c}from"./index-DbeXWJ-W.js";import{O as r}from"./index-Bd1t3iKn.js";import"./iframe-xLDCLI1U.js";import{F as m}from"./flex-t7eBuDrE.js";import"./index-BcYljkKM.js";import"./iconBase-BEtHxgO5.js";import"./text-IH71t2kF.js";import"./use-style-config-BEaeOCj0.js";import"./factory-EvmFdQJ8.js";import"./icon-CouGRMZl.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fdbb860a-a8f1-489b-9332-e11c19fa5dc2",e._sentryDebugIdIdentifier="sentry-dbid-fdbb860a-a8f1-489b-9332-e11c19fa5dc2")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),d=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:d.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
