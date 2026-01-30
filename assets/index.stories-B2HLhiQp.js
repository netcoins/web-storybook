import{j as b}from"./jsx-runtime-BVY10pED.js";import{r as g}from"./index-DW5bu5RW.js";import{M as i}from"./index-CUL6FKeN.js";import"./iframe-CApDH0hY.js";import"./index-DaX3ds3h.js";import"./types-DAudMlzW.js";import"./color-mode-D2ofyYVm.js";import"./iconBase-BTYLBUKh.js";import"./icon-button-BvL7cb0c.js";import"./button-fWua-gme.js";import"./factory-yOZ78Dg3.js";import"./create-recipe-context-BkNLTCsp.js";import"./attr-DhmmAXiK.js";import"./spinner-FxNy1ryz.js";import"./skeleton-Ds_Z9WVg.js";import"./index-B5j-RP-T.js";import"./stack-doreAFd5.js";import"./flex-8Giq18CW.js";import"./icon-XPDaqCT4.js";import"./index-D3k4mYSx.js";import"./index-cj7idZtW.js";import"./index-DxaYwYyn.js";import"./index.esm-CcbmFPwF.js";import"./index-CVz2DfDC.js";import"./index-DZuEwn1E.js";import"./link-SHAf4vQz.js";import"./types-H9ohBBL7.js";import"./h-stack-2NFCzfVP.js";import"./field-iVyZGn6T.js";import"./create-slot-recipe-context-BDCi0j_a.js";import"./use-field-context-BY-99woy.js";import"./create-context-Bkj2IisU.js";import"./factory-Bl0KWrBj.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CVBI5jZb.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Bwu7z2Tz.js";import"./index-DkF1YONj.js";import"./index-7_erN2mG.js";import"./use-locale-context-BbVkPGu5.js";import"./use-event-DaSnkTh6.js";import"./index-DeLpjaoz.js";import"./useColorFormatConverter-BWtE2Mx4.js";import"./index-p4RlcTn-.js";import"./ReactIconWrapper-B18gjVT1.js";import"./input-group-Ydi1_H1v.js";import"./input-VoLh4q03.js";import"./useTranslation-oodjKFIR.js";import"./context-DgZ5JkwA.js";import"./portal-BlEIoMEz.js";import"./v-stack-Do-iZfqw.js";import"./menu-CfiwMtPg.js";import"./icons-uPolhlRs.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-C6vQr67-.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
