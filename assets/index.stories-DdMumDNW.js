import{j as b}from"./jsx-runtime-BYSh-DGW.js";import{r as g}from"./index-Bw8xlNb9.js";import{M as i}from"./index-CES2FXn0.js";import"./iframe-dnKpcvKR.js";import"./index-DrEaFWzF.js";import"./types-Dc8Zw9ku.js";import"./color-mode-VUKz2OmR.js";import"./iconBase-BynyZhxu.js";import"./icon-button-Bm0M2lb_.js";import"./button-Dg_iXUYc.js";import"./factory-DvwvH9wg.js";import"./create-recipe-context-CZNXbC5L.js";import"./attr-DhmmAXiK.js";import"./spinner-C3Mn__uc.js";import"./skeleton-DHaXtgg5.js";import"./index-D0rhk3hK.js";import"./stack-ClhY4XM-.js";import"./flex-B4tAXCdm.js";import"./icon-CEBuGx7n.js";import"./index-BaiNFk9l.js";import"./index-BOh2rD4Q.js";import"./index-BnacM_bM.js";import"./index.esm-CKOTlNPK.js";import"./index-BU7V5FWD.js";import"./link-BUXqKRZE.js";import"./types-CwBEcEnQ.js";import"./index-d258YrzJ.js";import"./h-stack-H0DMAQt5.js";import"./field-CWD7w_3n.js";import"./create-slot-recipe-context-gsNmplTm.js";import"./use-field-context-Bsi9wXg4.js";import"./create-context-gOhJwuw9.js";import"./factory-C-337fwu.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D1yFgS59.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-DaJb-Jar.js";import"./index-BadsPsEv.js";import"./index-B_J3PsIp.js";import"./use-locale-context-BcOWqna4.js";import"./use-event-BCspDeyo.js";import"./index-D_-yu6eL.js";import"./useColorFormatConverter-CmVkEg0N.js";import"./index-BXxCPW0V.js";import"./ReactIconWrapper-Cuawlw3a.js";import"./input-group-NXV1_ptb.js";import"./input-DxRcMtJ8.js";import"./useTranslation-1umjdI3e.js";import"./context-BjzwKsjq.js";import"./portal-B9tq48u4.js";import"./v-stack-BjrbOD4-.js";import"./menu--u2kjnV2.js";import"./icons-DOokjJbh.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CUlHhY_o.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
