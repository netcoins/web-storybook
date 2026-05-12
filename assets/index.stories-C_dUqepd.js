import{j as b}from"./jsx-runtime-XluhU0he.js";import{r as g}from"./index-BqQGZ5I6.js";import{M as i}from"./index-B2K2T4or.js";import"./iframe-CfsTNa-7.js";import"./index-CpRs2__J.js";import"./types-6_EtQxjy.js";import"./color-mode-CNgBIhFF.js";import"./iconBase-DCKQAIIC.js";import"./icon-button-BCbSp6uR.js";import"./button-DS1zxQ32.js";import"./factory-BJcU17Du.js";import"./create-recipe-context-CUSab0G1.js";import"./attr-DhmmAXiK.js";import"./spinner-rNzOerH6.js";import"./skeleton-qfBAhcPE.js";import"./index-DDrchvKh.js";import"./stack-BVjCvoCv.js";import"./flex-AdiVJTeo.js";import"./icon-CXUQ5J_i.js";import"./index-C1TAcF2j.js";import"./index-C-vdmsGe.js";import"./index-vEBUVEfU.js";import"./index.esm-Dc3mIRjB.js";import"./index-C7zEF5Cu.js";import"./link-BnfISxp9.js";import"./types-COTZSrOs.js";import"./index-Bh0Aaq5H.js";import"./h-stack-MoqzOYSC.js";import"./field-BxoTjuFA.js";import"./create-slot-recipe-context-Bwzj8hez.js";import"./use-field-context-e2aVVT5C.js";import"./create-context-rW6Kn6G8.js";import"./factory-Bl5Q4rk9.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BSAOnyN_.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-C9cYHd0U.js";import"./index-CuvRoAUE.js";import"./index-BTVxZep7.js";import"./use-locale-context-oI4VZV19.js";import"./use-event-ctTWoOBX.js";import"./index-CC4tUj4Y.js";import"./useColorFormatConverter-QO92nIcy.js";import"./index-pmDq0bxT.js";import"./ReactIconWrapper-2druXZMS.js";import"./input-group-Bd9yO594.js";import"./input-BtJmVU1M.js";import"./useTranslation-CljWxwnm.js";import"./context-oFvTv4YE.js";import"./portal-BgXKBmwv.js";import"./v-stack-CbqWI_iQ.js";import"./menu-DfFHFX1_.js";import"./icons-CymD9cbU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-_bfLyYEE.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
