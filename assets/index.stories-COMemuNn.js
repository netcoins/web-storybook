import{j as b}from"./jsx-runtime-BevlS7C8.js";import{r as g}from"./index-DQA5jI_f.js";import{M as i}from"./index-CiSoupk8.js";import"./iframe-BzTS-aQH.js";import"./index-CrwX7ke9.js";import"./types-Bk42P0T0.js";import"./color-mode-BphJjCLU.js";import"./iconBase-CtH_TkY4.js";import"./icon-button-BqLHkFQs.js";import"./button-DL82Z4Oz.js";import"./factory-DrQ3NJUc.js";import"./create-recipe-context-BqK9pFug.js";import"./attr-DhmmAXiK.js";import"./spinner-BB78e0YY.js";import"./skeleton-C1lZ2mBY.js";import"./index-B3ZpYf62.js";import"./stack-B4--9JDN.js";import"./flex-DdO_G3d8.js";import"./icon-DokDLnNh.js";import"./index-ChwUUqwk.js";import"./index-CmzY8S7F.js";import"./index-D4XLZvk8.js";import"./index.esm-Cjsi_1SU.js";import"./index-BWJwE9LS.js";import"./link-CUflLD7j.js";import"./types-D8g4Cao4.js";import"./index-CCH0jWWR.js";import"./h-stack-Bzls6m7o.js";import"./field-uqy5sYrE.js";import"./create-slot-recipe-context-BiRuo-30.js";import"./use-field-context-BZWZE9AC.js";import"./create-context-C_2it4Wg.js";import"./factory-j7LST4F8.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-ChGjPzAt.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BRXhrF8D.js";import"./index-C8KcWIb-.js";import"./index-Cb7YvuK1.js";import"./use-locale-context-B0PjAUe_.js";import"./use-event-fXkKlfO_.js";import"./index-D76hpBd5.js";import"./useColorFormatConverter-DPIoGppJ.js";import"./index-DchCQQiI.js";import"./ReactIconWrapper-Dhq9YYqF.js";import"./input-group-CLjy7Rhx.js";import"./input-DowjGM1J.js";import"./useTranslation-By2-p0kj.js";import"./context-BtENtfqM.js";import"./portal-BL4Wy5Zm.js";import"./v-stack-BgKzvx-Q.js";import"./menu-h6CnYbnM.js";import"./icons-MqN6DQ1z.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CMwYe5py.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
