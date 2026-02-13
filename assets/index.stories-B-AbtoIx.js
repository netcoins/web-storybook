import{j as b}from"./jsx-runtime-BadbQ4D2.js";import{r as g}from"./index-w9os1JgO.js";import{M as i}from"./index-VdUJAfao.js";import"./iframe-9JMRyZas.js";import"./index-CS19N816.js";import"./types-ZRuUaJqp.js";import"./color-mode-CXp98lDI.js";import"./iconBase-Bd5ZFSwV.js";import"./icon-button-z-hYztmz.js";import"./button-D1G0U53h.js";import"./factory-81AyAolv.js";import"./create-recipe-context-BWEBmoLb.js";import"./attr-DhmmAXiK.js";import"./spinner-BDQyWriO.js";import"./skeleton-DRjTESew.js";import"./index-CJfXC2YP.js";import"./stack-FX_3AYCM.js";import"./flex-B7CrDZUT.js";import"./icon-oFKqwMCZ.js";import"./index-DWKdu4_S.js";import"./index-DxvqO4vU.js";import"./index-qNxdNH_W.js";import"./index.esm-C_9SLvd3.js";import"./index-CqEu4vqI.js";import"./link-D4jJkHru.js";import"./types-Bs9f5XGy.js";import"./index-C2t8tLFw.js";import"./h-stack-C_xbdQ9J.js";import"./field-BJi4YSJs.js";import"./create-slot-recipe-context-D8zc1ZJy.js";import"./use-field-context-CCdBIXm9.js";import"./create-context-DHObefiT.js";import"./factory-Ds56XDbQ.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CrRUKbW-.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-B56_6NES.js";import"./index-BinecdLe.js";import"./index-DbaLl6eG.js";import"./use-locale-context-Dwo8zRT5.js";import"./use-event-DGgmzwng.js";import"./index-HBNOh0iq.js";import"./useColorFormatConverter-BefnSW9e.js";import"./index-nOyjIbOD.js";import"./ReactIconWrapper-CR4c6o7o.js";import"./input-group-CODQov0l.js";import"./input-CxygnSHY.js";import"./useTranslation-CtuMCzQm.js";import"./context-B2AlPV2O.js";import"./portal-DdkRW19D.js";import"./v-stack-d1nXYYFE.js";import"./menu-CdeF75oo.js";import"./icons-BcAjo-9Z.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BSaouMAX.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
