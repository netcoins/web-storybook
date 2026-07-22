import{j as b}from"./jsx-runtime-CVRg4XhV.js";import{r as g}from"./index-BtSqkbcu.js";import{M as i}from"./index-Dxs_VbI0.js";import"./iframe-D_hlYlWl.js";import"./index-BcP5s2_3.js";import"./types-D4it2m59.js";import"./color-mode-Ob_iCA9O.js";import"./iconBase-B1nRdBgN.js";import"./icon-button-C8LCEmYJ.js";import"./button-DzNv3SHm.js";import"./factory--V-sPcSn.js";import"./create-recipe-context-BrWCAkPX.js";import"./attr-DhmmAXiK.js";import"./spinner-DgYEPcB1.js";import"./skeleton-CA4-R8hc.js";import"./index-JesgJ71m.js";import"./stack-DHAYRj-8.js";import"./flex-Xx19yt3s.js";import"./icon-B6GKRAdX.js";import"./index-BqbUXWjh.js";import"./index-BGqUoFq2.js";import"./index-a_Gb1DnN.js";import"./index.esm-BhshCoqR.js";import"./index-RpZujh3J.js";import"./link-CcaqUBC5.js";import"./types-DDRsnOsB.js";import"./index-DaInESEs.js";import"./h-stack-DT_UjX7A.js";import"./field-D0yCJOrY.js";import"./create-slot-recipe-context-4DzO8Ea8.js";import"./use-field-context-BwFrGhC0.js";import"./create-context-cB0RdLHW.js";import"./factory-tckkHXlM.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BSfcELgs.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CzwmfC7t.js";import"./index-DAM3f0XV.js";import"./index-z3_lWKoQ.js";import"./use-locale-context-DELe_GJu.js";import"./use-event-DlhpIF8P.js";import"./index-DSy4FXtS.js";import"./useColorFormatConverter-DTauljzD.js";import"./index-350jGckw.js";import"./ReactIconWrapper-CHYRhFgb.js";import"./input-group-nbAJ5xZF.js";import"./input-C7wBlDSw.js";import"./useTranslation-DlQCv09s.js";import"./context-BdgG_B_r.js";import"./portal-BFLTP9jF.js";import"./v-stack-Ck182vWJ.js";import"./menu-BezNCiWa.js";import"./icons-DybU4FfY.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-3km5UBzt.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
