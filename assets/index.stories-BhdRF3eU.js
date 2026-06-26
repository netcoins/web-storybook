import{j as b}from"./jsx-runtime-Crn6csNr.js";import{r as g}from"./index-DnSaMpA7.js";import{M as i}from"./index-B6YhqBFS.js";import"./iframe-btxaWulz.js";import"./index-BZH34KF0.js";import"./types-CJYnHQCh.js";import"./color-mode-Dv9_mYH9.js";import"./iconBase-DCpsZ7p3.js";import"./icon-button-DxJzajxF.js";import"./button-j7CnwX6P.js";import"./factory-CfbmFtl0.js";import"./create-recipe-context-CNw3eJam.js";import"./attr-DhmmAXiK.js";import"./spinner-CgMB24ML.js";import"./skeleton-o_qAArb0.js";import"./index-B60wDBro.js";import"./stack-BZSSY1VK.js";import"./flex-iGRZGE5B.js";import"./icon-BDKhTHkF.js";import"./index-iiQGAJk2.js";import"./index-iJ01HkRh.js";import"./index-iEGpQXb5.js";import"./index.esm-Cpi9MziD.js";import"./index-Fu4B4-U4.js";import"./link-BKEWEJ9S.js";import"./types-BbvspfpW.js";import"./index-B8U75IEm.js";import"./h-stack-CpMK7sk4.js";import"./field-ByBnqoWW.js";import"./create-slot-recipe-context-DIF2yOS6.js";import"./use-field-context-DUhYFo2n.js";import"./create-context-BvVJYA2y.js";import"./factory-Dxcrw6Ie.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dv5alifQ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-BD0E2p3x.js";import"./index-BPwD21JX.js";import"./index-Dhan9Jap.js";import"./use-locale-context-BsewbQfm.js";import"./use-event-DGQmXmvT.js";import"./index-_8moToej.js";import"./useColorFormatConverter-BQb__Fze.js";import"./index-gQQMWDxS.js";import"./ReactIconWrapper-Dtlo8b5O.js";import"./input-group-DNEQb-y1.js";import"./input-C4ImDn6a.js";import"./useTranslation-D-5U7TPz.js";import"./context-PhoKCkxa.js";import"./portal-BfDtzxBi.js";import"./v-stack-CjZiRtqX.js";import"./menu-B0gtd5Zs.js";import"./icons-BOAxJq-c.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DdraP2i4.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
