import{j as b}from"./jsx-runtime-N0vrP3J0.js";import{r as g}from"./index-ck60p0RU.js";import{M as i}from"./index-CDWWiyr5.js";import"./iframe-CUp94-pj.js";import"./index-oPGgHyRx.js";import"./types-Crl4Xl8g.js";import"./color-mode-D5WvVSXc.js";import"./iconBase-CVpsqnYs.js";import"./icon-button-DVeqxbdt.js";import"./button-D4eLA8JR.js";import"./factory-EpxFmmKQ.js";import"./create-recipe-context-sFy9g3iL.js";import"./attr-DhmmAXiK.js";import"./spinner-Ccxf0wYu.js";import"./skeleton-Gc7LgP16.js";import"./index-BCX2X0gs.js";import"./stack-CrMjg_MK.js";import"./flex-vwFOHc22.js";import"./icon-Bh7gwcFj.js";import"./index-B05ag1x8.js";import"./index-DAe8KWRA.js";import"./index-RkKhfNZe.js";import"./index.esm-By6RUUFA.js";import"./index-BR6TP6Jf.js";import"./index-BoJ2oI9c.js";import"./link-CsQUlRdt.js";import"./types-B8QioRln.js";import"./h-stack-Chb_Jyv_.js";import"./field-DOT4dvsW.js";import"./create-slot-recipe-context-BiT62ULc.js";import"./use-field-context-Dt6U_Td3.js";import"./create-context-CP7Ju5q1.js";import"./factory-BoNAhHKo.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-41vH5xdv.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-1mfK8cUQ.js";import"./index-WH2LLmG4.js";import"./index-BRVYogLb.js";import"./use-locale-context-CFZpZPxA.js";import"./use-event-BoMOGpFU.js";import"./index-BOXapC2d.js";import"./useColorFormatConverter-Cu5iqwfi.js";import"./index-C4RetVhZ.js";import"./ReactIconWrapper-C0lzZD7D.js";import"./input-group-BAv_349E.js";import"./input-CgWJm1wL.js";import"./useTranslation-DVJrpGzW.js";import"./context-Dlo-W4uY.js";import"./portal-DSr16VPW.js";import"./v-stack-BJJZnp63.js";import"./menu-DVs20OXX.js";import"./icons-CihvqIas.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Bfvzerd_.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
