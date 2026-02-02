import{j as b}from"./jsx-runtime-DdRIrGsz.js";import{r as g}from"./index-BSPg11Bq.js";import{M as i}from"./index-BBASCmLW.js";import"./iframe-NCWq_qb0.js";import"./index-fscHQBb1.js";import"./types-DmPTLQ2E.js";import"./color-mode-4sSBuS6H.js";import"./iconBase-kFL7wY3w.js";import"./icon-button-DpPl243L.js";import"./button-CYmFsM_p.js";import"./factory-DvdZ96DC.js";import"./create-recipe-context-TJnFh2et.js";import"./attr-DhmmAXiK.js";import"./spinner-DiozNA0e.js";import"./skeleton-BH1Enz8-.js";import"./index-BvK3__Ip.js";import"./stack-bBQTV9s7.js";import"./flex-NZFQz2Ng.js";import"./icon-HjlVpbkQ.js";import"./index-B_S-btUT.js";import"./index-DDaTSMLe.js";import"./index-e04dz2Ma.js";import"./index.esm-glKXtJH6.js";import"./index-BTpxQsE9.js";import"./index-BpNRchGn.js";import"./link-CQYLX5UZ.js";import"./types-CADCUrdn.js";import"./h-stack-DNJ3h8Ez.js";import"./field-NxPdSTqK.js";import"./create-slot-recipe-context-XMZaW4Jc.js";import"./use-field-context-DFgtpIU_.js";import"./create-context-BLuoDCXV.js";import"./factory-DbMwfEwL.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CyqHSb4m.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-ClWKq5A0.js";import"./index-Dol97L80.js";import"./index-CiQhf5Zx.js";import"./use-locale-context-C0BKfG9v.js";import"./use-event-DCzgt-ui.js";import"./index-BMBpkGLI.js";import"./useColorFormatConverter-BegyUfOu.js";import"./index-DDoQL5gt.js";import"./ReactIconWrapper-B7xx62qo.js";import"./input-group-SSFvZ-Xl.js";import"./input-CWDrMvRd.js";import"./useTranslation-CpH6XFHo.js";import"./context-DlBK1GxE.js";import"./portal-C1Bzv8GG.js";import"./v-stack-bCxRNXkL.js";import"./menu-eU594jdp.js";import"./icons-BzLkSx5C.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BOKm6PzA.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
