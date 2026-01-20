import{j as b}from"./jsx-runtime-C5JiWg0O.js";import{r as g}from"./index-BJGlPEiI.js";import{M as i}from"./index-DbxwErnN.js";import"./iframe-BEJIaQSr.js";import"./index-Cy-xeoiS.js";import"./types-CgtssNhC.js";import"./color-mode-DnOKbuQL.js";import"./iconBase-hZN3Cdm0.js";import"./icon-button-V_sGTRxl.js";import"./button-DLwBwJM0.js";import"./factory-CrzPrGdW.js";import"./create-recipe-context-XX7T9Qvl.js";import"./attr-DhmmAXiK.js";import"./spinner-BuVBBTpC.js";import"./skeleton-BMl1tJDC.js";import"./index-B1LNMbz_.js";import"./stack-CLK4gtgf.js";import"./flex-DEJux3l8.js";import"./icon-N9cy843p.js";import"./index-C-nhQMfH.js";import"./index-H7axLMu-.js";import"./index-B2c1rgbv.js";import"./index.esm-BVhnAcgh.js";import"./index-dTySCJhg.js";import"./index-DzFmOctF.js";import"./link-BFsW3m3O.js";import"./types--5Yk5Mmb.js";import"./h-stack--EedFyEm.js";import"./field-TDkbzUvW.js";import"./create-slot-recipe-context-Drqn5MvH.js";import"./use-field-context-CgAB-d6-.js";import"./create-context-ByFBbNOn.js";import"./factory-eWvsQVsh.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DrXWZctL.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DtC4tO9V.js";import"./index-ByyG8cvv.js";import"./index-ChnTLw8b.js";import"./use-locale-context-Czhub17e.js";import"./use-event-DB1Du3Yk.js";import"./index-CwUwdCLA.js";import"./useColorFormatConverter-BxlsjvGt.js";import"./index-P9PkheWI.js";import"./ReactIconWrapper-D1JdroT_.js";import"./input-group-BhlenDe7.js";import"./input-lzt4Akun.js";import"./useTranslation-CcRuOURa.js";import"./context-CZJr3GLZ.js";import"./portal-CiZiEXgC.js";import"./v-stack-Uh3eQbua.js";import"./menu-BXfj5Ra1.js";import"./icons-C_uze_RI.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-uR_4kuxC.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
