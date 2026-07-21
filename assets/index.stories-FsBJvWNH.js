import{j as b}from"./jsx-runtime-DxBEdQmC.js";import{r as g}from"./index-UoMFnjkK.js";import{M as i}from"./index-BYTuq5mJ.js";import"./iframe-BKww4BIe.js";import"./index-zwW74ZqN.js";import"./types-QUHmpgmE.js";import"./color-mode-Czo0DBQ9.js";import"./iconBase-WpxnOCAJ.js";import"./icon-button-ChDq-ZE6.js";import"./button-DfxeIb5J.js";import"./factory-C7ap2FvA.js";import"./create-recipe-context-pXnyIBHL.js";import"./attr-DhmmAXiK.js";import"./spinner-DLmv6_hO.js";import"./skeleton-CDwP96XG.js";import"./index-CP_patft.js";import"./stack-jLnbIEHK.js";import"./flex-igvNLbTd.js";import"./icon-C2tazMMM.js";import"./index-CZvoKBsi.js";import"./index-DW2jC97k.js";import"./index-BRK0woxB.js";import"./index.esm-DPI0gCM3.js";import"./index-DdjClu9e.js";import"./link-CnpviH9F.js";import"./types-D0J906aa.js";import"./index-CjehYZL_.js";import"./h-stack-CLXJbCq1.js";import"./field-Rt_Hn1MS.js";import"./create-slot-recipe-context-DZ77ylde.js";import"./use-field-context-CiYKUv5I.js";import"./create-context-C7r3fsSh.js";import"./factory-D9tmIfIR.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CKOfuaxo.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-D-C9qMu8.js";import"./index-DIN6b4ja.js";import"./index-DTgH479f.js";import"./use-locale-context-B4g1rs2y.js";import"./use-event-Toqx--ZC.js";import"./index-CTy9PFoJ.js";import"./useColorFormatConverter-CCEFiTFI.js";import"./index-DY2Yoi2s.js";import"./ReactIconWrapper-D2nPWvoS.js";import"./input-group-DPAHI2ql.js";import"./input-B_ZoK-ON.js";import"./useTranslation-DY1tHa9-.js";import"./context-Cd1fQddk.js";import"./portal-B6MAwDvO.js";import"./v-stack-B0ddLGnd.js";import"./menu-B8WNfXH5.js";import"./icons-CerStkTd.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CuyMM5jJ.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
