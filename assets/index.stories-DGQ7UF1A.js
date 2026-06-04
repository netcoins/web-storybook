import{j as l}from"./jsx-runtime-D9n_btLS.js";import{r as c}from"./index-B_wJ61bp.js";import{O as r}from"./index-CytJQI6T.js";import"./iframe-1RBj3wOP.js";import{F as m}from"./flex-yBvgSHlG.js";import"./index-Bn-MvMLo.js";import"./iconBase-CezN9Gbw.js";import"./index-Bl4cAPWq.js";import"./create-recipe-context-DN1RLOxq.js";import"./factory-CyXdg-dj.js";import"./icon-BLYmZpDL.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0efdd7bb-cbc7-4170-87e2-f29f56f0fe90",e._sentryDebugIdIdentifier="sentry-dbid-0efdd7bb-cbc7-4170-87e2-f29f56f0fe90")}catch{}const D={component:r,tags:["pending"]},o={render:()=>{const[e,t]=c.useState(null),d=[{label:"Option A",value:"a",desc:"This is option A"},{label:"Option B",value:"b",desc:"This is option B"}],p=n=>{t(u=>u===n.value?null:n.value)};return l.jsx(m,{width:"100%",maxWidth:"300px",direction:"column",gap:2,children:d.map(n=>l.jsx(r,{option:n,isChecked:e===n.value,onToggle:()=>p(n)},n.value))})}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
