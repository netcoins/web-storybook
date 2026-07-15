import{j as l}from"./jsx-runtime-D5DeI2s5.js";import{r as c}from"./index-C8i9cqqN.js";import{O as r}from"./index-BEEfXULt.js";import"./iframe-C-XDvpdu.js";import{F as m}from"./flex-DKdUXSv4.js";import"./index-CW430clL.js";import"./iconBase-DMl_FT9g.js";import"./index-BfLgRuuH.js";import"./create-recipe-context-BRH5V4XP.js";import"./factory-kNuYJGc7.js";import"./icon-Cc5gBrFu.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1d361e14-4b13-4dd5-b605-1df793f9f7d6",e._sentryDebugIdIdentifier="sentry-dbid-1d361e14-4b13-4dd5-b605-1df793f9f7d6")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),d=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:d.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,D as default};
