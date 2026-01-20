import{j as b}from"./jsx-runtime-C8sZR6xJ.js";import{r as g}from"./index-CZAOJvop.js";import{M as i}from"./index-CX1Lgh3E.js";import"./iframe-Bi_dd9P6.js";import"./index-5pC2z3xI.js";import"./types-CO30oSEc.js";import"./color-mode-BV5hdiWi.js";import"./iconBase-D00S-eeg.js";import"./icon-button-C-pd7yMf.js";import"./button-DnFuyCID.js";import"./factory-VZGNgIUr.js";import"./create-recipe-context-QWrXPsIQ.js";import"./attr-DhmmAXiK.js";import"./spinner-DyB2UJCV.js";import"./skeleton-BwqsU9fg.js";import"./index-CCHio9hf.js";import"./stack-DUU66HJG.js";import"./flex-D81_Fc7J.js";import"./icon-vHbhv79Q.js";import"./index-Bo5KZ4j4.js";import"./index-CuBarvnj.js";import"./index-CYnwXHbJ.js";import"./index.esm-uFYjuLBd.js";import"./index-Bl4DncjL.js";import"./index-BUpXgJMa.js";import"./link-LyEMUHFa.js";import"./types-Cj7vMbbX.js";import"./h-stack-DHVKiIQw.js";import"./field-DqPOrPZY.js";import"./create-slot-recipe-context-CdRWyxjm.js";import"./use-field-context-DUZgjkII.js";import"./create-context-Bj39Qvq8.js";import"./factory-DAoVn6r0.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-rYVx8atw.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-WlxBd_lj.js";import"./index-rWgvrhrL.js";import"./index-ErT5GozN.js";import"./use-locale-context-DmaTYUGM.js";import"./use-event-CHDrcAhs.js";import"./index-BX2A0MUs.js";import"./useColorFormatConverter-CrkMr5tP.js";import"./index-BTW3nEXU.js";import"./ReactIconWrapper-DLoxbMhx.js";import"./input-group-DllahJHI.js";import"./input-DqakzUUS.js";import"./useTranslation-lQ8PqZ0y.js";import"./context-ByyWzkOy.js";import"./portal-BNfnGSKR.js";import"./v-stack-DJFyCc7I.js";import"./menu-9pn2SyzT.js";import"./icons-DYSQ_gME.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-D6bJ53TS.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
