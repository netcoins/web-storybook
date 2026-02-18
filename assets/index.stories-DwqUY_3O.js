import{j as b}from"./jsx-runtime-CdFLmad7.js";import{r as g}from"./index-BwA5S_HZ.js";import{M as i}from"./index-Dv8sXfRq.js";import"./iframe-BJKArYqx.js";import"./index-DXUPSRsK.js";import"./types-GUo43axt.js";import"./color-mode-D82rtAK9.js";import"./iconBase-BjJYW0y7.js";import"./icon-button-CKLRz131.js";import"./button-BAfzNl5X.js";import"./factory-Btyvt5XX.js";import"./create-recipe-context-D8g0HNDB.js";import"./attr-DhmmAXiK.js";import"./spinner-BjVZrbB9.js";import"./skeleton-DoyOO75f.js";import"./index-BZzrAx71.js";import"./stack-B56Q3Prl.js";import"./flex-CfWRTGjg.js";import"./icon-VfZ1ZoWK.js";import"./index-kd-bZCMa.js";import"./index-DkhKsSMX.js";import"./index-Df1uByvL.js";import"./index.esm-mCxuIGQU.js";import"./index-CNe8bYKw.js";import"./link-CN_kW1fQ.js";import"./types-D_pw88x9.js";import"./index-DIiQnvbm.js";import"./h-stack-BS2n5uTz.js";import"./field-DLqwjXE5.js";import"./create-slot-recipe-context-B3zHMRvp.js";import"./use-field-context-DCM6aA74.js";import"./create-context-ClS6kIz6.js";import"./factory-DwoQ9UGu.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CoCvMiW0.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DWb8Kj0L.js";import"./index-Bj6sYsrv.js";import"./index-CbmNTBoM.js";import"./use-locale-context-Cm2DbkSA.js";import"./use-event-1iPMeZuO.js";import"./index-Dt8V69uF.js";import"./useColorFormatConverter-BZsIw2cI.js";import"./index-C6t-sloG.js";import"./ReactIconWrapper-C05wC8P5.js";import"./input-group-D-edBMKu.js";import"./input-B2FvAr3i.js";import"./useTranslation-BBsKni38.js";import"./context-BX5iW07T.js";import"./portal-C9GscCQ0.js";import"./v-stack-CNj6grFZ.js";import"./menu-D30Uzen7.js";import"./icons-Bdn9sHam.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Vjk2kTdI.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
