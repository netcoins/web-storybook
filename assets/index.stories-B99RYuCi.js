import{j as b}from"./jsx-runtime-ChOHf6sN.js";import{r as g}from"./index-MyiED9uL.js";import{M as i}from"./index-6PzDAik8.js";import"./iframe-B33itwOw.js";import"./index-DGiffIoO.js";import"./types-D4p3Aqni.js";import"./color-mode-CFVbDZiH.js";import"./iconBase-CjZFk7Dr.js";import"./icon-button-D0eDoR6S.js";import"./button-C_fPn0qm.js";import"./factory-B8tEKhm0.js";import"./create-recipe-context-Bzbhk6Ec.js";import"./attr-DhmmAXiK.js";import"./spinner-DsqX5Znn.js";import"./skeleton-w0e5rLiI.js";import"./index-Bo7ONVNL.js";import"./stack-A-6RhKZQ.js";import"./flex-5zmgOCdO.js";import"./icon-CUnOKsHv.js";import"./index-hhAQfRbS.js";import"./index-zG0Nl6lc.js";import"./index-B0dEzS6S.js";import"./index.esm-BjnXUdG2.js";import"./index-CkXZUz4E.js";import"./link-DMyvg8tQ.js";import"./types-lRypU6X6.js";import"./index-Qh6kRb-6.js";import"./h-stack-D_U3J0km.js";import"./field-B5ugnfLL.js";import"./create-slot-recipe-context-B4BqL5Mf.js";import"./use-field-context-B7zsSeDO.js";import"./create-context-oh9N9rjv.js";import"./factory-DeA8uI4O.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-mM0XnsnV.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CfN_aJtg.js";import"./index-CG74IVSW.js";import"./index-DjYNeaXR.js";import"./use-locale-context-C_-Velaf.js";import"./use-event-B8NJegdx.js";import"./index-Co9XP1Ds.js";import"./useColorFormatConverter-DBiKJ5De.js";import"./index-BfcmBlCG.js";import"./ReactIconWrapper-CU48P5uW.js";import"./input-group-ge6u5Piv.js";import"./input-B6v8n48M.js";import"./useTranslation-Lkga7Vkk.js";import"./context-Da3KC9HS.js";import"./portal-C1l-mTv5.js";import"./v-stack-DkmbINOy.js";import"./menu-C_Ia3o7i.js";import"./icons-D_uBM72-.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BAUsIYtn.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
