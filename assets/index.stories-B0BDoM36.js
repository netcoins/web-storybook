import{j as l}from"./jsx-runtime-BmIRPXcQ.js";import{r as c}from"./index-BkU-Oecg.js";import{O as r}from"./index-LO5kqw8i.js";import"./iframe-BVrz1qaQ.js";import{F as m}from"./flex-DDo8lj7J.js";import"./index-C-6Boop3.js";import"./iconBase-CgPeBTf3.js";import"./index-BhNoYcjM.js";import"./create-recipe-context-DF6Pj0BR.js";import"./factory-BQmPCA93.js";import"./icon-M9cBGUYI.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1741ed0e-a5e5-409e-a37b-cc7eba0e30b5",e._sentryDebugIdIdentifier="sentry-dbid-1741ed0e-a5e5-409e-a37b-cc7eba0e30b5")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),p=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],d=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:p.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>d(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
