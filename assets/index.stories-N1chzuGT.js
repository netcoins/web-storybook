import{j as b}from"./jsx-runtime-D3deEOy7.js";import{r as g}from"./index-BAGmRPeF.js";import{M as i}from"./index-D0mcvsZu.js";import"./iframe-2uFkSe7y.js";import"./index-CHGH19DJ.js";import"./types-BJzokLOA.js";import"./color-mode-DXYwyGtK.js";import"./iconBase-DUSP9WbV.js";import"./icon-button-Bmq3ML0y.js";import"./button-t_NoiC0C.js";import"./factory-B0B1u6wm.js";import"./create-recipe-context-DI-acw4i.js";import"./attr-DhmmAXiK.js";import"./spinner-CQ95S0Ov.js";import"./skeleton-CP83ffmY.js";import"./index-BjG63qjm.js";import"./stack-Dtm549T6.js";import"./flex-Dpkhht_T.js";import"./icon-C4JCwogT.js";import"./index-Emj_soZZ.js";import"./index-CMFCiUso.js";import"./index-BTpqqu2M.js";import"./index.esm-BQ0MQD7X.js";import"./index-DWWFF71N.js";import"./link-BqQCiV_e.js";import"./types-lkBLd8nb.js";import"./index-gW_qALDV.js";import"./h-stack-Bq0lkmWB.js";import"./field-D8D-Abov.js";import"./create-slot-recipe-context-DpUqBK8P.js";import"./use-field-context-DUR67cJA.js";import"./create-context-31NeZeAO.js";import"./factory-EeQGlFze.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BQ03Gi7b.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-ClVOmaAb.js";import"./index-Fl_USnmM.js";import"./index-CthIRYvC.js";import"./use-locale-context-DMuGIhkn.js";import"./use-event-IVr-Hv_V.js";import"./index-DUSpCLcW.js";import"./useColorFormatConverter-CjIVTfhs.js";import"./index-CNb1Z5CF.js";import"./ReactIconWrapper-DsJyyzbA.js";import"./input-group-IFG8xcvZ.js";import"./input-CDRVoR0t.js";import"./useTranslation-6SP5R22A.js";import"./context-UuU886v_.js";import"./portal-Pen_3CZR.js";import"./v-stack-CM0SP6YZ.js";import"./menu-BlBmJedP.js";import"./icons-CLaxVLcp.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-8_HyJVKX.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
