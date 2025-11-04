import{j as l}from"./jsx-runtime-CIqfBLiW.js";import{r as u}from"./index-k1jG6xPF.js";import{O as r}from"./index-CJJ4r-lU.js";import"./iframe-CgiJZm3J.js";import{F as m}from"./flex-DG9TD6-J.js";import"./index-B0bugIJk.js";import"./iconBase-CDzHQ3cO.js";import"./text-0vmpramh.js";import"./use-style-config-DID0GbhU.js";import"./factory-DGji_UzY.js";import"./icon-FneL2-dz.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2d5838cf-cd6b-46d2-becd-65ba452204e8",e._sentryDebugIdIdentifier="sentry-dbid-2d5838cf-cd6b-46d2-becd-65ba452204e8")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=u.useState(null),d=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(c=>c===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:d.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
