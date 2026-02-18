import{j as b}from"./jsx-runtime-BvfgqyqX.js";import{r as g}from"./index-tleJD8oB.js";import{M as i}from"./index-BL9q_uwh.js";import"./iframe-BrNVpXR8.js";import"./index-BxMqzPjx.js";import"./types-BOheLfFn.js";import"./color-mode-N0979DRJ.js";import"./iconBase-D-5AZUIY.js";import"./icon-button-DAXQNsWF.js";import"./button-6EwN_P_k.js";import"./factory-C8zgxApk.js";import"./create-recipe-context-BmxWgX0L.js";import"./attr-DhmmAXiK.js";import"./spinner-HBPl8SDU.js";import"./skeleton-CrTxgvQg.js";import"./index-DBa8kk1E.js";import"./stack-Cd_Wm_48.js";import"./flex-BuN_dKI6.js";import"./icon-DTJkuv9I.js";import"./index-B_n9MNKY.js";import"./index-Dxwv6esU.js";import"./index-CClgToCs.js";import"./index.esm-BCp2Nill.js";import"./index-C6wQ8gMV.js";import"./link-DscUkw2F.js";import"./types-l-lO17JM.js";import"./index-CLFE_QU-.js";import"./h-stack-Ngs5Mhzb.js";import"./field-CRX0Kq49.js";import"./create-slot-recipe-context-BOkeZ-QE.js";import"./use-field-context-DDUPNMJy.js";import"./create-context-Da_XNqZt.js";import"./factory-CBdGxQOW.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-vkYNOr5F.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CMG1zV9H.js";import"./index-CP_9R17k.js";import"./index-CnjDLc13.js";import"./use-locale-context-iKXlJ_gJ.js";import"./use-event-DXcGOXeo.js";import"./index-BObx6Ycj.js";import"./useColorFormatConverter-Dpg5Jrwl.js";import"./index-SZJc9drA.js";import"./ReactIconWrapper-DNNKtWON.js";import"./input-group-BtOAYxVG.js";import"./input-Bwo-yga0.js";import"./useTranslation-CyXi6Ux5.js";import"./context-BJDTqYcq.js";import"./portal-Bg9-QJlK.js";import"./v-stack-BAjjzV0s.js";import"./menu-B9gdoIEw.js";import"./icons-CVaGROSj.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-3yWOq2nK.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
