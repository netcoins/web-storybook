import{j as b}from"./jsx-runtime-MGpiwdwx.js";import{r as g}from"./index-AC3qGyG6.js";import{M as i}from"./index-CPbK3JPu.js";import"./iframe-MmFYWAG4.js";import"./index-BmhfzgnY.js";import"./types-DDtHKs8T.js";import"./color-mode-CgNF_MLJ.js";import"./iconBase-wS0h1zgJ.js";import"./icon-button-MNbV7IeH.js";import"./button-2TNYDzdI.js";import"./factory-4qZqBlUt.js";import"./create-recipe-context-7KYQanMq.js";import"./attr-DhmmAXiK.js";import"./spinner-R3QkchvK.js";import"./skeleton-CmcHDX-R.js";import"./index-etiTMqvT.js";import"./stack-BSk-Jr7C.js";import"./flex-DLNdfp1T.js";import"./icon-DhzOIy2b.js";import"./index-D_yAn8MZ.js";import"./index-D3mhWpg7.js";import"./index-D4vZYDYp.js";import"./index.esm-DehvHqM6.js";import"./index-C_ReZi2N.js";import"./link-iWDb8Jub.js";import"./types-D34240fG.js";import"./index-QXYpfrgR.js";import"./h-stack-ZuXp0ybg.js";import"./field-_kw9dt_n.js";import"./create-slot-recipe-context-B1GMJY_P.js";import"./use-field-context-Zhd4oRUY.js";import"./create-context-CRd99wwV.js";import"./factory-DGaYXRnr.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-ChsM16TM.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BO9ZEZJj.js";import"./index-CPtVxVkx.js";import"./index-Cxp8FyCW.js";import"./use-locale-context-B1CuUX7n.js";import"./use-event-BoBDwDwr.js";import"./index-yWm4O5dV.js";import"./useColorFormatConverter-Cd3LD9g6.js";import"./index-BH9uDo9t.js";import"./ReactIconWrapper-BkgpkLug.js";import"./input-group-ChOOygd-.js";import"./input-Dr6aT0S0.js";import"./useTranslation-BoCWrZ8a.js";import"./context-BYNHlQP-.js";import"./portal-Bdio02Pa.js";import"./v-stack-LWLxdwQS.js";import"./menu-CW4QhU5c.js";import"./icons-BPGw9-H3.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BWOKg4gd.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<Option<string | number>[]>([]);
    const handleSaveClick = (newSelectedOptions: Option<string | number>[]) => {
      setSelectedOptions(newSelectedOptions);
    };
    return <MultiSelectDropdown {...args} selectedOptions={selectedOptions} onSaveClick={handleSaveClick} setSelectedOptions={setSelectedOptions} />;
  },
  args: {
    options: [{
      value: 1,
      label: "Apple",
      desc: "Fruit"
    }, {
      value: 2,
      label: "Banana",
      desc: "Fruit"
    }, {
      value: 3,
      label: "Carrot",
      desc: "Vegetable"
    }, {
      value: 4,
      label: "Date",
      desc: "Fruit"
    }, {
      value: 5,
      label: "Eggplant",
      desc: "Vegetable"
    }],
    placeholder: "Select Produce"
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<Option<string | number>[]>([]);
    const handleSaveClick = (newSelectedOptions: Option<string | number>[]) => {
      setSelectedOptions(newSelectedOptions);
    };
    return <MultiSelectDropdown {...args} selectedOptions={selectedOptions} onSaveClick={handleSaveClick} setSelectedOptions={setSelectedOptions} />;
  },
  args: {
    search: true,
    options: [{
      value: 1,
      label: "Apple",
      desc: "Fruit"
    }, {
      value: 2,
      label: "Banana",
      desc: "Fruit"
    }, {
      value: 3,
      label: "Carrot",
      desc: "Vegetable"
    }, {
      value: 4,
      label: "Date",
      desc: "Fruit"
    }, {
      value: 5,
      label: "Eggplant",
      desc: "Vegetable"
    }],
    placeholder: "Select Produce"
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ee=["Default","Search"];export{r as Default,o as Search,Ee as __namedExportsOrder,ye as default};
