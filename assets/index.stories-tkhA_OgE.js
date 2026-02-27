import{j as b}from"./jsx-runtime-BcGWIucs.js";import{r as g}from"./index-BQe3gQq9.js";import{M as i}from"./index-DJCVj4Zl.js";import"./iframe-CgBXbgYr.js";import"./index-DReWk2AL.js";import"./types-CJcrFJ2a.js";import"./color-mode-DTRNlfBG.js";import"./iconBase-CUEyF2gI.js";import"./icon-button-WN6ZlCnW.js";import"./button-Dwbz6tDf.js";import"./factory-MNMIIc9M.js";import"./create-recipe-context-Bhlvrdh6.js";import"./attr-DhmmAXiK.js";import"./spinner-2XCKjix_.js";import"./skeleton-D12QHuMK.js";import"./index-DY9DOtOW.js";import"./stack-CwjOZmIe.js";import"./flex-CKqNzTzX.js";import"./icon-NVXF8SuS.js";import"./index-FIP92nG-.js";import"./index-D5m_u6Vm.js";import"./index-Df-rkrwb.js";import"./index.esm-CO7SIzaU.js";import"./index-DL_iV0oS.js";import"./link-0OELAn6F.js";import"./types-Z4-U10Vc.js";import"./index-CCBp9Y0v.js";import"./h-stack-DsvLhLtT.js";import"./field-BqaiwEIs.js";import"./create-slot-recipe-context-ggUIXqW2.js";import"./use-field-context-BhCbwPva.js";import"./create-context-D5gnbQug.js";import"./factory-DpilkzRZ.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DohmNoxk.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Dt9fCmnq.js";import"./index-C7-LzFNw.js";import"./index-DdcwnEgB.js";import"./use-locale-context-DQZhIWJC.js";import"./use-event-IJTLDzXd.js";import"./index-TMZva1Ii.js";import"./useColorFormatConverter-CaiyS045.js";import"./index-C6KaWuXo.js";import"./ReactIconWrapper-DJz6Q44G.js";import"./input-group-BH43Gif_.js";import"./input-IyMVOyV6.js";import"./useTranslation-CgvNp0Ph.js";import"./context-C1NXougt.js";import"./portal-CuKKzmER.js";import"./v-stack-DEEJhbve.js";import"./menu-D0DxTyhS.js";import"./icons-B0n29LkB.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CI9pcs4K.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
