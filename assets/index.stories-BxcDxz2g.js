import{j as l}from"./jsx-runtime-CtUEez0z.js";import{r as c}from"./index-Cqmn51YS.js";import{O as r}from"./index-ButVuYaB.js";import"./iframe-COwPw1VY.js";import{F as m}from"./flex-WnzeImCB.js";import"./index-CMMXWqW6.js";import"./iconBase-Dn46-paq.js";import"./text-DU2wDpPi.js";import"./use-style-config-DWzjkw3h.js";import"./factory-DJYjEkMm.js";import"./icon-pHxpQceI.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="eef6e5c6-3ab8-4573-826e-5722ae0421a3",e._sentryDebugIdIdentifier="sentry-dbid-eef6e5c6-3ab8-4573-826e-5722ae0421a3")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),p=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],d=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:p.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>d(n)},n.value))})}};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
