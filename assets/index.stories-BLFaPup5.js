import{j as b}from"./jsx-runtime-TwQoPtbL.js";import{r as g}from"./index-BrEum-xU.js";import{M as i}from"./index-A-WnMOTb.js";import"./iframe--10Z506v.js";import"./index-B3aYZ22F.js";import"./types-Bi1QEw26.js";import"./color-mode-CU-MnDFr.js";import"./iconBase-Cg_Nz2SH.js";import"./icon-button-ClcPcIAX.js";import"./button-CN29c2zi.js";import"./factory-CEqmgX0o.js";import"./create-recipe-context-wVONaudd.js";import"./attr-DhmmAXiK.js";import"./spinner-D0Qq2dgW.js";import"./skeleton-B1hP5P8q.js";import"./index-y1_3aT07.js";import"./stack-DwV2E_nC.js";import"./flex-xCnbHnBz.js";import"./icon-hqLlehJb.js";import"./index-aWf7_3X9.js";import"./index-DziRRRlx.js";import"./index-z_mfD7Z2.js";import"./index.esm-Cb7GJb-K.js";import"./index-DgCw44sA.js";import"./index-xkoTY5WA.js";import"./link-CZequk-_.js";import"./types-BiqUJkCR.js";import"./h-stack-79FP-CA_.js";import"./field-CQIUvXKz.js";import"./create-slot-recipe-context-DSsE1GzP.js";import"./use-field-context-BVCh_Sn4.js";import"./create-context-CwUdvEJE.js";import"./factory-DXN2yoRN.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-xf_PMs7C.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DJTdB3tN.js";import"./index-Ci3fpwgr.js";import"./index-d7eHKCWO.js";import"./use-locale-context-CdpJWGcw.js";import"./use-event-D1eVSCIY.js";import"./index-Die1XuZ2.js";import"./useColorFormatConverter-DK5X8DhR.js";import"./index-ChNyevMZ.js";import"./ReactIconWrapper-OduSRhs2.js";import"./input-group-B1nEz79a.js";import"./input-C91ZSiS8.js";import"./useTranslation-s8t-3Q4s.js";import"./context-BoYu1K-1.js";import"./portal-BotYWBWP.js";import"./v-stack-CpG_fbgD.js";import"./menu-DxZUZXjY.js";import"./icons-DToZiDvp.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CFmXcRc8.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
