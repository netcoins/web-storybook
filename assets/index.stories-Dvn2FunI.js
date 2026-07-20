import{j as b}from"./jsx-runtime-CJmRwBu2.js";import{r as g}from"./index-C60rT7WO.js";import{M as i}from"./index-F5LgnJri.js";import"./iframe-BO9fv6dM.js";import"./index-B6bQsNnh.js";import"./types-BpNvq4H1.js";import"./color-mode-Box40ptH.js";import"./iconBase-B1X0d7tr.js";import"./icon-button-C_akTEiA.js";import"./button-DqbMBDJY.js";import"./factory-BjKtRbVQ.js";import"./create-recipe-context-BkMXg-I_.js";import"./attr-DhmmAXiK.js";import"./spinner-CabIwlne.js";import"./skeleton--1jqoD_p.js";import"./index-ChFkgRsI.js";import"./stack-BUTpD4pi.js";import"./flex-BvJ9ykOf.js";import"./icon-AYf1V15_.js";import"./index-o4aYGhZ6.js";import"./index-B5mH_kFs.js";import"./index-BBOrUTWM.js";import"./index.esm-DIVvT_-l.js";import"./index-lpX3rOri.js";import"./link-02i_0qVP.js";import"./types-CmUCUlpj.js";import"./index-CBoEUXtP.js";import"./h-stack-DTxZGDKK.js";import"./field-DwTU89wk.js";import"./create-slot-recipe-context-XZpqfDQz.js";import"./use-field-context-CEIwkwHv.js";import"./create-context-D9vclOlc.js";import"./factory-DG1uZ-bq.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DzhawKPY.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-DlhqcioK.js";import"./index-CFVp1Gql.js";import"./index-C4ULTJ7m.js";import"./use-locale-context-D4cWri8H.js";import"./use-event-DqVETzXw.js";import"./index-anlFM66Y.js";import"./useColorFormatConverter-fnVBLwF-.js";import"./index-DhIbq1WJ.js";import"./ReactIconWrapper-C-_4djto.js";import"./input-group-DxYBRmJy.js";import"./input-CrjSjEJ7.js";import"./useTranslation-BsS-g0hu.js";import"./context-BxOAPsRU.js";import"./portal-C5PNVm2G.js";import"./v-stack-DGQK-4xx.js";import"./menu-IE9LB6kV.js";import"./icons-CGyezO5c.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CpiSGreD.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
