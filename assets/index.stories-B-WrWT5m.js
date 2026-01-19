import{j as b}from"./jsx-runtime-Bv3C32xW.js";import{r as g}from"./index-Om3-GvrL.js";import{M as i}from"./index-CURTPUU2.js";import"./iframe-Clf5EUVv.js";import"./index-DrOA26FY.js";import"./types-y2_l6fKV.js";import"./color-mode-CBFjWLI8.js";import"./iconBase-BIsCXZWK.js";import"./icon-button-C0rGsMRN.js";import"./button-CGqNfQQO.js";import"./factory-CvLv5Mli.js";import"./create-recipe-context-Ax8NUD4P.js";import"./attr-DhmmAXiK.js";import"./spinner-AqeHUs4w.js";import"./skeleton-BqQxaCXi.js";import"./index-BFAzA-6k.js";import"./stack-C7BViUfp.js";import"./flex-Bjd7_Xsc.js";import"./icon-Bn0iHJ7l.js";import"./index-CjAJoXa6.js";import"./index-CQRa96n-.js";import"./index-CrOymT1s.js";import"./index.esm-B-H8slbq.js";import"./index-CI1yYfuz.js";import"./index-DmyDE26J.js";import"./link-CVYFFq1Q.js";import"./types-BJ-q1_cm.js";import"./h-stack-BiJxh8fF.js";import"./field-BNeyIagP.js";import"./create-slot-recipe-context-DhUPxT2v.js";import"./use-field-context-CN-Kosi1.js";import"./create-context-DLxvbK2-.js";import"./factory-B6MEGtac.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dd5-C9jD.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DWg8MitZ.js";import"./index-Dd6emaqc.js";import"./index-DWAZbJq-.js";import"./use-locale-context-DFSoZ1Yf.js";import"./use-event-qVFAB3Em.js";import"./index-Cq3IeOYm.js";import"./useColorFormatConverter-CRjm2YcW.js";import"./index-D290kPh_.js";import"./ReactIconWrapper-BAjPAS77.js";import"./input-group-wpuZCqcX.js";import"./input-15bYfjVp.js";import"./useTranslation-AOEV1v8E.js";import"./context-DY9r397F.js";import"./portal-DLWXEhEK.js";import"./v-stack-BBeluJu5.js";import"./menu-D7a6oWHt.js";import"./icons-Cn8ZuMaj.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Bb-fah4R.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
