import{j as l}from"./jsx-runtime-BRPF6uRv.js";import{r as c}from"./index-DxKK6bzi.js";import{O as r}from"./index-D445zGV_.js";import"./iframe-DKB_pPft.js";import{F as m}from"./flex-C30owhth.js";import"./index-BnnZUVzD.js";import"./iconBase-PwpClNxo.js";import"./text-RxHH730M.js";import"./use-style-config-D8AmuLNk.js";import"./factory-CbOttNVQ.js";import"./icon-BncfSRyd.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6465558-aaf5-4b10-8435-4e9b9557e12b",e._sentryDebugIdIdentifier="sentry-dbid-f6465558-aaf5-4b10-8435-4e9b9557e12b")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),p=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],d=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:p.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>d(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
