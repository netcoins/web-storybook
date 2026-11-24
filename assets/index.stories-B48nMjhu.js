import{j as b}from"./jsx-runtime-ATAHYhDa.js";import{r as g}from"./index-DIrk1x5G.js";import{M as i}from"./index-BJkGwl6B.js";import"./iframe-BNaiGXWG.js";import"./index-BrYGniEC.js";import"./types-CQf_1H1N.js";import"./color-mode-B0vjAzQ4.js";import"./iconBase-Bfp-M5La.js";import"./icon-button-DgbZVein.js";import"./button-BXFoe-eN.js";import"./factory-UAGRE-bk.js";import"./create-recipe-context-TArHIy8d.js";import"./attr-DhmmAXiK.js";import"./spinner-BtuEZShF.js";import"./skeleton-Cl865I1F.js";import"./index-CXyISEFP.js";import"./stack-vBXN3jf0.js";import"./flex-DNMt-wOy.js";import"./icon-CF24s83Q.js";import"./index-5oZEhw7j.js";import"./index-by9X0E_5.js";import"./index-YHGpH3A2.js";import"./index.esm-D_2rU5vl.js";import"./index-B0rTLRwX.js";import"./link-BtssBqL_.js";import"./types-DRHYd0r5.js";import"./index-YsyNkL9P.js";import"./h-stack-B2_gsX9D.js";import"./field-CifvDdQw.js";import"./create-slot-recipe-context-IOcTTd2K.js";import"./use-field-context-1qMv5wgE.js";import"./create-context-DySYu1Sq.js";import"./factory-BwjozXtU.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0G6fcAp.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-DPmP-I6D.js";import"./index-DnJBAwuu.js";import"./index-BG2z0qj9.js";import"./use-locale-context-KwiC6Z3f.js";import"./use-event-DQU8aEXb.js";import"./index-Cghq0oQO.js";import"./useColorFormatConverter-BG2ACrhR.js";import"./index-CFtuNTIz.js";import"./ReactIconWrapper-DAlZvDBk.js";import"./input-group-CK6Yz_r0.js";import"./input-CuxQIYlW.js";import"./useTranslation-x6eH_eYU.js";import"./context-C47WMJdo.js";import"./portal-DdgiDQ0B.js";import"./v-stack-CbDYi3h8.js";import"./menu-DvvylT1Y.js";import"./icons-CTDb0rem.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-BFtSts4n.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
