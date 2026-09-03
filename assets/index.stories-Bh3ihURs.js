import{j as b}from"./jsx-runtime-CVZYPpe3.js";import{r as g}from"./index-CaYcWLWq.js";import{M as i}from"./index-ECRaQXur.js";import"./iframe-DxI-Xxek.js";import"./index-Cai53WG4.js";import"./types-DPdOs-gH.js";import"./color-mode-DNb9yxVm.js";import"./iconBase-C8F894Sy.js";import"./icon-button-D2615jxZ.js";import"./button-CFlHdhO-.js";import"./factory-DerXpTZ7.js";import"./create-recipe-context-gmrgIQJg.js";import"./attr-DhmmAXiK.js";import"./spinner-j5i0pIZU.js";import"./skeleton-O7eoA4e7.js";import"./index-BE64qa4m.js";import"./stack-B3E5i3Ws.js";import"./flex-ChIhw5dD.js";import"./icon-Cgf6Ffhr.js";import"./index-B9UJmMLF.js";import"./index-BNInqX0Z.js";import"./index-D8l2TJI8.js";import"./index.esm-B-mOrASf.js";import"./index-BAW0TPMw.js";import"./link-B3AjcFyN.js";import"./types-D62JpG42.js";import"./index-DE7afPCt.js";import"./h-stack-B1oHBhnl.js";import"./field-FVX3ZI2O.js";import"./create-slot-recipe-context-Azz0Zyfa.js";import"./use-field-context-Dk4bTIQn.js";import"./create-context-CSdpx3fF.js";import"./factory-CYvAY8Ws.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C4Ba3eMx.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-Dw4GHwN2.js";import"./index-9Ra_W91a.js";import"./index-BFHA2OmZ.js";import"./use-locale-context-7DrbYO-v.js";import"./use-event-CMByob4j.js";import"./index-CNU39Rca.js";import"./useColorFormatConverter-FVROWtKk.js";import"./index-Cq8JysY8.js";import"./ReactIconWrapper-CGyFOzk6.js";import"./input-group-CEeN7A0n.js";import"./input-DRX4g53B.js";import"./useTranslation-AShfltgg.js";import"./context-Cf1HNvvF.js";import"./portal-Bk5Qwn1v.js";import"./v-stack-xpfb27v7.js";import"./menu-CdXjPdR3.js";import"./icons-D3Ya11Ib.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-dIetg6z2.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
