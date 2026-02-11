import{j as b}from"./jsx-runtime-xpl3tfWg.js";import{r as g}from"./index-AOymK8m_.js";import{M as i}from"./index-Ps05Y7uc.js";import"./iframe-i40_7hjf.js";import"./index-yLTHWDbs.js";import"./types-DiIc_afn.js";import"./color-mode-DAiG6_lY.js";import"./iconBase-BOpCY8f7.js";import"./icon-button-CfVOSJ4I.js";import"./button-Dh6L9XJM.js";import"./factory-BFYvbmpq.js";import"./create-recipe-context-DTWuTcVr.js";import"./attr-DhmmAXiK.js";import"./spinner-BRrLnZK-.js";import"./skeleton-UGpLngQm.js";import"./index-3s1TetRA.js";import"./stack-CGncDWzc.js";import"./flex-BQzgGcSE.js";import"./icon-Cmlhz88B.js";import"./index-C-pN0QYH.js";import"./index-BcfKopPW.js";import"./index-C1xrMN8w.js";import"./index.esm-Dj5G1alZ.js";import"./index-BXTfEra0.js";import"./link-AED2jcMQ.js";import"./types-Z2Rm3fjg.js";import"./index-C-13u3JV.js";import"./h-stack-BnvCPzEc.js";import"./field-CqjCRdvE.js";import"./create-slot-recipe-context-CvjrVRJh.js";import"./use-field-context-BP-v1uDO.js";import"./create-context-D4YMJeYH.js";import"./factory-YIMFqM36.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CbExmSB2.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CrerN4iy.js";import"./index-DMPuYm_R.js";import"./index-Da0eicq-.js";import"./use-locale-context-BUNPKIs4.js";import"./use-event-DZLQ-l3B.js";import"./index-Br62vB6Q.js";import"./useColorFormatConverter-yMGrfFSx.js";import"./index-B1ObwhJR.js";import"./ReactIconWrapper-BPAtmE7m.js";import"./input-group-DpNja5Yz.js";import"./input-BGcdmKqH.js";import"./useTranslation-B7EBOK-t.js";import"./context-BFjs0pgn.js";import"./portal-E7_tqweC.js";import"./v-stack-CqYUfTZF.js";import"./menu-rKUKx2Wu.js";import"./icons-BVIunCGt.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Bw8RHlqk.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
