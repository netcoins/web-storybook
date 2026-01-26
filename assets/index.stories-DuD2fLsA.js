import{j as b}from"./jsx-runtime-4oOdI8QN.js";import{r as g}from"./index-4a76yvDm.js";import{M as i}from"./index-rHcTylIY.js";import"./iframe-Bem8Vvwx.js";import"./index-Bge4FAT3.js";import"./types-B1RtLFPW.js";import"./color-mode-BeOXarVn.js";import"./iconBase-Zu85hzRx.js";import"./icon-button-D77sc5e5.js";import"./button-DsXsEoa3.js";import"./factory-BHGxDoGR.js";import"./create-recipe-context-BqsjRtfZ.js";import"./attr-DhmmAXiK.js";import"./spinner-CPuOt0x5.js";import"./skeleton-BbTAhQyZ.js";import"./index-B_llUZ0m.js";import"./stack-r--FtJ6s.js";import"./flex-wCgNztPW.js";import"./icon-BZPtVpe_.js";import"./index-DVTb29Gg.js";import"./index-CLkBpkmZ.js";import"./index-CL0ogKqN.js";import"./index.esm-Bl2Kr19E.js";import"./index-DVoRZWVB.js";import"./index-Dxqjh12C.js";import"./link-DVT2qvlf.js";import"./types-BnNTJhLW.js";import"./h-stack-DtGRLDoQ.js";import"./field-BkR9fs0C.js";import"./create-slot-recipe-context-DJmIboxP.js";import"./use-field-context-88jQA77t.js";import"./create-context-BJuCrfFa.js";import"./factory-Dk6dUnob.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-aWWu1Rzj.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BXGN8QUh.js";import"./index-BjlGaKB6.js";import"./index-B4IeEIU5.js";import"./use-locale-context-_ty8LrKz.js";import"./use-event-CwhuThvj.js";import"./index-ub1fur2B.js";import"./useColorFormatConverter-C6DBN0YO.js";import"./index-DbKNWkPe.js";import"./ReactIconWrapper-cX310qDo.js";import"./input-group-B-feg0uy.js";import"./input-BEtu6Xsd.js";import"./useTranslation-DZ2UohI_.js";import"./context-C39ePaDg.js";import"./portal-CB-Ww626.js";import"./v-stack--n_dhDmq.js";import"./menu-7bPTgXIu.js";import"./icons-DyWm6uwU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cf4Zta9J.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
