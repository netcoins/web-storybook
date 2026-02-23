import{j as b}from"./jsx-runtime-BYvR9jk8.js";import{r as g}from"./index-Op2a2csG.js";import{M as i}from"./index-Z8AzvKXo.js";import"./iframe-Dsr7MOKx.js";import"./index-Cj_1SnQF.js";import"./types-4NMHjuyI.js";import"./color-mode-wfQF1SzV.js";import"./iconBase-h35ESkFQ.js";import"./icon-button-Dmkt5wR6.js";import"./button-BH2Bb22M.js";import"./factory-Bv92ChUh.js";import"./create-recipe-context-CGtuK1ky.js";import"./attr-DhmmAXiK.js";import"./spinner-CA_YqLrl.js";import"./skeleton-CW2dYi9E.js";import"./index-D2TERkRm.js";import"./stack-B55nP-S8.js";import"./flex-CsCJnV2W.js";import"./icon-B-vHBGyv.js";import"./index-9kHTQHV3.js";import"./index-CqnR8vjy.js";import"./index-BjhDQBDN.js";import"./index.esm-CYU_JqzT.js";import"./index-Dk4XHyHb.js";import"./link-BoJ0ijXM.js";import"./types-BESUGL2z.js";import"./index-BWvO4EXm.js";import"./h-stack-Dx5OacOF.js";import"./field-BNDGy-i1.js";import"./create-slot-recipe-context-D6qVZ4hd.js";import"./use-field-context-B_f95DQv.js";import"./create-context-ORx9b7GS.js";import"./factory-C8pOLYmA.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DBWf9Wfm.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DcWfzxwM.js";import"./index-DEk39n8O.js";import"./index-BrD-eD_U.js";import"./use-locale-context-DrcNeWx3.js";import"./use-event-C4hfRC33.js";import"./index-Bp8OHsxC.js";import"./useColorFormatConverter-C36SwdgE.js";import"./index-BrrAYyN9.js";import"./ReactIconWrapper-CRClh9Tz.js";import"./input-group-DVY0ljeP.js";import"./input-DwaAH_hV.js";import"./useTranslation-rP9uvL32.js";import"./context-DYbfZvNY.js";import"./portal-BeArEtP7.js";import"./v-stack-D17jvHCY.js";import"./menu-UnPW2ivv.js";import"./icons-CgRsFQ2R.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-D9NjeZnx.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
