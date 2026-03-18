import{j as b}from"./jsx-runtime--vAOgGUu.js";import{r as g}from"./index-D38BWWf8.js";import{M as i}from"./index-BlyOSN7K.js";import"./iframe-DmP3HCjv.js";import"./index-CavgSTiG.js";import"./types-C-hywY_M.js";import"./color-mode-DfYa29aK.js";import"./iconBase-CkQhKdNF.js";import"./icon-button-D7-dA7fL.js";import"./button-Bunqq_MJ.js";import"./factory-CCmCFv-x.js";import"./create-recipe-context-BdzhiBTJ.js";import"./attr-DhmmAXiK.js";import"./spinner-BxrV7T0z.js";import"./skeleton-0ihUljf1.js";import"./index-BDSNCZXH.js";import"./stack-4CesuYbZ.js";import"./flex-DIVxdMwE.js";import"./icon-KL1yYE4I.js";import"./index-CsDLiRTK.js";import"./index-BnbsXFtK.js";import"./index-DfbG-9uQ.js";import"./index.esm-0BO8A0ZR.js";import"./index-CayVgokc.js";import"./link-B-Dg2iAG.js";import"./types-RICTE3eD.js";import"./index-pg_tmg7S.js";import"./h-stack-CwNhUvRn.js";import"./field-BXZEwUJY.js";import"./create-slot-recipe-context-kJ0gy0HK.js";import"./use-field-context-DWENMkf2.js";import"./create-context-C6D4paPs.js";import"./factory-BhpIiCfV.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DOTRwmAi.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-Bid_1RSM.js";import"./index-Bph04DZs.js";import"./index-BU9hfo_9.js";import"./use-locale-context-yrsgOKI-.js";import"./use-event-D9y160xz.js";import"./index-CKHez0XS.js";import"./useColorFormatConverter-CcbUzM8O.js";import"./index-BcPKrYD5.js";import"./ReactIconWrapper-SMiqgPMt.js";import"./input-group-d1oB0kPS.js";import"./input-BOKa7lWB.js";import"./useTranslation-BEIT90bm.js";import"./context-C1QVoHJC.js";import"./portal-CfPul3Dt.js";import"./v-stack-CzFjX5Qa.js";import"./menu-7sUmbPta.js";import"./icons-CJ5J5WU2.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cp1N_St1.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4866424-e2da-426e-9b7d-7f8b3d79dcb9",e._sentryDebugIdIdentifier="sentry-dbid-c4866424-e2da-426e-9b7d-7f8b3d79dcb9")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
