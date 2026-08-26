import{j as b}from"./jsx-runtime-BmIRPXcQ.js";import{r as g}from"./index-BkU-Oecg.js";import{M as i}from"./index-qchKgldZ.js";import"./iframe-BVrz1qaQ.js";import"./index-SXt8hVNN.js";import"./types-D4SmEPqK.js";import"./color-mode-DmyQw_E2.js";import"./iconBase-CgPeBTf3.js";import"./icon-button-D0ru4QqC.js";import"./button-Dn1XneO_.js";import"./factory-BQmPCA93.js";import"./create-recipe-context-DF6Pj0BR.js";import"./attr-DhmmAXiK.js";import"./spinner-q2SUT4TQ.js";import"./skeleton-CaYyUU15.js";import"./index-DZlDJ0vk.js";import"./stack-DSoOKlT1.js";import"./flex-DDo8lj7J.js";import"./icon-M9cBGUYI.js";import"./index-BhNoYcjM.js";import"./index-BIMV7HIN.js";import"./index-DXr4K94i.js";import"./index.esm-07DYYImd.js";import"./index-iDfUWbZd.js";import"./link-g-GgVJSG.js";import"./types-B60uvUv0.js";import"./index-C-6Boop3.js";import"./h-stack--rFf3Yo2.js";import"./field-CNpNIGCV.js";import"./create-slot-recipe-context-BE3-Z8VU.js";import"./use-field-context-CC8xWnYL.js";import"./create-context-DNduormU.js";import"./factory-9gAU_emI.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-6TT2R8NC.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-EF7W4Rwi.js";import"./index-ByT9A7T5.js";import"./index-az-DktjO.js";import"./use-locale-context-Dwb6_Kxe.js";import"./use-event-BryhNPiu.js";import"./index-Cl6XWwmp.js";import"./useColorFormatConverter-C21Ptv_a.js";import"./index-Bfp0j7PF.js";import"./ReactIconWrapper-Cm_FNPI3.js";import"./input-group-BmJokjDX.js";import"./input-B6Y2GbJ7.js";import"./useTranslation-1GRViizQ.js";import"./context-XeNS2MJn.js";import"./portal-DAHfaq0h.js";import"./v-stack-BCCkgbSD.js";import"./menu-DVjkCIi8.js";import"./icons-Yd7J-d6I.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CL7GqOXw.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
