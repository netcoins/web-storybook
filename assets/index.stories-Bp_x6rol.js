import{j as b}from"./jsx-runtime-UwRoxOis.js";import{r as g}from"./index-rQf-HDJx.js";import{M as i}from"./index-D8gQ4RXP.js";import"./iframe-CKtoteMt.js";import"./index-BXHqxwS1.js";import"./types-BcN9sGVQ.js";import"./color-mode-Cl5PvG3f.js";import"./iconBase-DsUadah2.js";import"./icon-button-CJzBbiT3.js";import"./button-CyMJf14M.js";import"./factory-D4a8xBd5.js";import"./create-recipe-context-BzOF1OiO.js";import"./attr-DhmmAXiK.js";import"./spinner-DvoGTqtj.js";import"./skeleton-BcdZrhRf.js";import"./index-TLTQQWtv.js";import"./stack-C1sga2uC.js";import"./flex-sSglzitQ.js";import"./icon-Dmj_bu5Z.js";import"./index-Clele84I.js";import"./index-BC9FiTB6.js";import"./index-CqWz69te.js";import"./index.esm-DXjpUWkW.js";import"./index-Dhsdn0DY.js";import"./link-DoSimJvQ.js";import"./types-8C0g96y0.js";import"./index-Dij4ZHnC.js";import"./h-stack-CiB4DxmR.js";import"./field-EpaGCDX-.js";import"./create-slot-recipe-context-QSL3U4Yy.js";import"./use-field-context-DyoRtMRU.js";import"./create-context-C0W2S-rB.js";import"./factory-BPHrUvf4.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Z0prSxiy.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-FI9XQNsC.js";import"./index-CLC5K_V_.js";import"./index-DwQ_QCwy.js";import"./use-locale-context-BcrdLHZ3.js";import"./use-event-mS_NdDdX.js";import"./index-CM_zVwYr.js";import"./useColorFormatConverter-DiySbfaW.js";import"./index-Cx4gDckJ.js";import"./ReactIconWrapper-wcrhSyUX.js";import"./input-group-Bf40cQM7.js";import"./input-BVsWtfie.js";import"./useTranslation-CHULjVxq.js";import"./context-78IZNpbo.js";import"./portal-DNVwmmFE.js";import"./v-stack-BV4BJ66V.js";import"./menu-Dm3Jz6wd.js";import"./icons-Dm1No1kO.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CtvnDt4d.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
