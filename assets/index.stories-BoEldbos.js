import{j as b}from"./jsx-runtime-B8REGvii.js";import{r as g}from"./index-CBRd0RYk.js";import{M as i}from"./index-CkKPE0Sk.js";import"./iframe-D-C36FmD.js";import"./index-B5VwKINN.js";import"./types-DQSC6U3P.js";import"./color-mode-CO_SdLU-.js";import"./iconBase-CpfC2b5H.js";import"./icon-button-DuEVt_zK.js";import"./button-WVbwLo8j.js";import"./factory-xTy0DZXR.js";import"./create-recipe-context-MTtfpxfL.js";import"./attr-DhmmAXiK.js";import"./spinner-jwSw-tbz.js";import"./skeleton-DuO6cgWk.js";import"./index-C1556cwq.js";import"./stack-VxfsQL1O.js";import"./flex-Dy8yIwd2.js";import"./icon-Cvqi1pLH.js";import"./index-MJDKAg2t.js";import"./index-R-PZGEyZ.js";import"./index-CE04gblk.js";import"./index.esm-D8Ku6HXA.js";import"./index-B53_GB6_.js";import"./link-B2thXGf8.js";import"./types-BicxvDJo.js";import"./index-D-Qxoy_4.js";import"./h-stack-DVHwHmGr.js";import"./field-Bms_a4l0.js";import"./create-slot-recipe-context-CDS6I03o.js";import"./use-field-context-B7wACI5I.js";import"./create-context-DS5Ua430.js";import"./factory-BsAI7wPm.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D5Wd5XqK.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CHiK4bbh.js";import"./index-t-LzyF5b.js";import"./index-DW7yf1Vu.js";import"./use-locale-context-nu2auvjw.js";import"./use-event-7k1dO1Yq.js";import"./index-Dl7v6T-7.js";import"./useColorFormatConverter-Ci9bQygB.js";import"./index-Drsa-iFQ.js";import"./ReactIconWrapper-4b1kvjvW.js";import"./input-group-CHlIzIIp.js";import"./input--HIXcTUn.js";import"./useTranslation-DrchiRoR.js";import"./context-DTXQmn5X.js";import"./portal-BoAuwgMQ.js";import"./v-stack-DkXE_TvK.js";import"./menu-De23MLWk.js";import"./icons-C7gcWdi5.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-XnD4t07s.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
