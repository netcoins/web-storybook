import{j as b}from"./jsx-runtime-6DzW-w9x.js";import{r as g}from"./index-BIJSX7CD.js";import{M as i}from"./index-Cq4_ROzX.js";import"./iframe-CNLJ-usq.js";import"./index-DMG0oDpI.js";import"./types-Dy4D8vAD.js";import"./color-mode-BpNzd4cV.js";import"./iconBase-vfkI2uIw.js";import"./icon-button-La8_Adik.js";import"./button-DDChIoyT.js";import"./factory-BOkKnT_u.js";import"./create-recipe-context-DFWLmO9E.js";import"./attr-DhmmAXiK.js";import"./spinner-DslxOVYJ.js";import"./skeleton-BTTZ_DzR.js";import"./index-CZdVxye7.js";import"./stack-CjGhprGb.js";import"./flex-DfmF6aTq.js";import"./icon-BG9-mbFW.js";import"./index-DpPOOW_v.js";import"./index-D-BYuUPJ.js";import"./index-BOb8OZY5.js";import"./index.esm-Ls6MbLFM.js";import"./index-Dfw5K7T0.js";import"./index-8m69ZGx0.js";import"./link-Dz9XzHDz.js";import"./types-B9EjYeAJ.js";import"./h-stack-DoFOtRsK.js";import"./field-eZAi71og.js";import"./create-slot-recipe-context-Ba9wMddO.js";import"./use-field-context-BIC7h4Nd.js";import"./create-context-D-gDz9l0.js";import"./factory-C_RYnyYp.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cq32gPHs.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Cm2YaVWT.js";import"./index-CfVgjBV3.js";import"./index-BmvQqpOn.js";import"./use-locale-context-DGRxXXZo.js";import"./use-event-DsgUOnFz.js";import"./index-BDyTJyyJ.js";import"./useColorFormatConverter-DTq_YMy5.js";import"./index-XYYjZHrK.js";import"./ReactIconWrapper-CzP-BjVH.js";import"./input-group-Dy7JOq4Z.js";import"./input-CLBkgWIC.js";import"./useTranslation-wz8FcTNB.js";import"./context-1r1pa_1p.js";import"./portal-B1k2ggBw.js";import"./v-stack-Dj_xf6M9.js";import"./menu-BVRBtB-v.js";import"./icons-Czsf-iyy.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-IuYks2z0.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
