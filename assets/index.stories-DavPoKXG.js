import{j as b}from"./jsx-runtime-BltyMVIj.js";import{r as g}from"./index-BjuGsieF.js";import{M as i}from"./index-BVgBZTTd.js";import"./iframe-B-P9KW7i.js";import"./index-DnABmQ1g.js";import"./types-ICKj_b2q.js";import"./color-mode-CBToMy9a.js";import"./iconBase-BDWalNut.js";import"./icon-button-BzEYbUqf.js";import"./button-ZueBprW2.js";import"./factory-ocjNe6K2.js";import"./create-recipe-context-By7s9Zk1.js";import"./attr-DhmmAXiK.js";import"./spinner-B-e5hEbv.js";import"./skeleton-Dp1nZXAr.js";import"./index-Edfv0Anl.js";import"./stack-DIiR3leU.js";import"./flex-C9bK1Iii.js";import"./icon-DgEtWLCh.js";import"./index-DflaUoxw.js";import"./index-_0BZ1QvH.js";import"./index-DJoywT1k.js";import"./index.esm-BiQ-PVy8.js";import"./index-BhjItTYd.js";import"./link-4QpmxI8f.js";import"./types-CwVLbh-j.js";import"./index-eUghAEEC.js";import"./h-stack-BwiDnt8K.js";import"./field-Ck0sgloS.js";import"./create-slot-recipe-context-CC-za7tj.js";import"./use-field-context-D83MLuUm.js";import"./create-context-7wl3JBuT.js";import"./factory-iSMd0M8_.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D5nKmaaZ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-DG45gfGJ.js";import"./index-DgKPo2JY.js";import"./index-BwC597cU.js";import"./use-locale-context-rlkPj7tD.js";import"./use-event-BKvtiCgE.js";import"./index-CDGuyL7a.js";import"./useColorFormatConverter-DFWNXOfr.js";import"./index-ytlkeB_A.js";import"./ReactIconWrapper-D0nzAvgw.js";import"./input-group-UwC5IqZT.js";import"./input-BHciF9Hv.js";import"./useTranslation-CBS6j2O4.js";import"./context-Tu2o7Af6.js";import"./portal-CIOQsYXM.js";import"./v-stack-DsiwUxlH.js";import"./menu-C8NyqK9G.js";import"./icons-Bkb8vEjG.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-fUrdypIz.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4866424-e2da-426e-9b7d-7f8b3d79dcb9",e._sentryDebugIdIdentifier="sentry-dbid-c4866424-e2da-426e-9b7d-7f8b3d79dcb9")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
