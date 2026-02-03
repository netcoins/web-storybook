import{j as b}from"./jsx-runtime-BuboEnn7.js";import{r as g}from"./index-Cf4RApSA.js";import{M as i}from"./index-D9_Lw41H.js";import"./iframe-CtpZ5jTH.js";import"./index-CX-BZZpt.js";import"./types-BOiLn_NO.js";import"./color-mode-By_qS8f8.js";import"./iconBase-BG8FLNyp.js";import"./icon-button-DAmzD-eE.js";import"./button-BZf7YSsO.js";import"./factory-D9tfIkox.js";import"./create-recipe-context-D4D-cicv.js";import"./attr-DhmmAXiK.js";import"./spinner-1Wl8Dn19.js";import"./skeleton-elnMix4R.js";import"./index--vQbilcC.js";import"./stack-Bt6buO_p.js";import"./flex-BdP6wZZJ.js";import"./icon-jiYTDmDH.js";import"./index-BicNAlus.js";import"./index-GnogjNE8.js";import"./index-DMwYeuO-.js";import"./index.esm-CmyaJfgk.js";import"./index-CbqaQivA.js";import"./index-DhyiOSPZ.js";import"./link-BFjg0Kb2.js";import"./types-Cz6FkQg9.js";import"./h-stack-Cu20kTpY.js";import"./field-Yf4S9Iwl.js";import"./create-slot-recipe-context-Zfj36F3x.js";import"./use-field-context-C5fldtC3.js";import"./create-context-DkHlJRJW.js";import"./factory-Zlghz-Uw.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C3bqE_55.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CEMWQzdY.js";import"./index-CB4KQhWX.js";import"./index-Dtvn1iyZ.js";import"./use-locale-context-D8_wHvaM.js";import"./use-event-CTawuRKl.js";import"./index-BKK5lInG.js";import"./useColorFormatConverter-BuJmBaNn.js";import"./index-8k5jMNpW.js";import"./ReactIconWrapper-DlzyOhvM.js";import"./input-group-BKeQX1CE.js";import"./input-Cdc3uH7O.js";import"./useTranslation-BYhEwGcj.js";import"./context-B55JgMpk.js";import"./portal-DhrxWLnE.js";import"./v-stack-BzoE6RAS.js";import"./menu-B5hn3IL3.js";import"./icons-CWYO_3hP.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-71g-F6t7.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
