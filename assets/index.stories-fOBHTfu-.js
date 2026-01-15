import{j as b}from"./jsx-runtime-DbvkyYZD.js";import{r as g}from"./index-BoxDUdTk.js";import{M as i}from"./index-DJWs8Zas.js";import"./iframe-D8w-pxek.js";import"./index-BnacWVwS.js";import"./types-CybhLM25.js";import"./color-mode-RIzTu4R0.js";import"./iconBase-B-oR8SiC.js";import"./icon-button-2GNdMsXP.js";import"./button-psr4bebK.js";import"./factory-B1BVY0n9.js";import"./create-recipe-context-6lql2HUX.js";import"./attr-DhmmAXiK.js";import"./spinner-Cl-UNF31.js";import"./skeleton-CDu8YmDQ.js";import"./index-BrprQboO.js";import"./stack-C5xCv2_5.js";import"./flex-DgrC-Xw3.js";import"./icon-BqNPEnAH.js";import"./index-D4Lh4ZJ4.js";import"./index-BO3T8Mxl.js";import"./index-Kj-hDOjR.js";import"./index.esm-DNNjiUAI.js";import"./index-DVGD-jro.js";import"./index-CHlBkFWM.js";import"./link-BB05STu_.js";import"./types-DBqYI4UW.js";import"./h-stack-CdIKrrbk.js";import"./field-Cr3ZjHpX.js";import"./create-slot-recipe-context-BHNnS9mG.js";import"./use-field-context-DboLCFeE.js";import"./create-context-BLWAqHwp.js";import"./factory-BTTf5Jjx.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CvhS_Z2Q.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DOTT7wj5.js";import"./index-B3L6Fl-Q.js";import"./index-DcmcCQ6g.js";import"./use-locale-context-C-U_wJ9H.js";import"./use-event-z-KCljjd.js";import"./index-BaqjOYWB.js";import"./useColorFormatConverter-BC6xdNWC.js";import"./index-D-eKkphl.js";import"./ReactIconWrapper-DyhSnrxr.js";import"./input-group-BHo3EUAN.js";import"./input-CdDlVyE8.js";import"./useTranslation-BvE4U_QH.js";import"./context-CmUn-kU7.js";import"./portal-BAbRO0VZ.js";import"./v-stack-Bg-iFVKH.js";import"./menu-BY1N4Ffv.js";import"./icons-D1lwFusK.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CwRo9-hY.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
