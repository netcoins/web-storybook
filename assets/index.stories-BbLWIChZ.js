import{j as b}from"./jsx-runtime-BF4M7H6S.js";import{r as g}from"./index-CcPnQtVc.js";import{M as i}from"./index-DBVF503T.js";import"./iframe-DaiGHfmA.js";import"./index-Cq1VP9mO.js";import"./types-CqvNov5Q.js";import"./color-mode-3-k0MeIY.js";import"./iconBase-B9Ayvr_v.js";import"./icon-button-D1qzwe0z.js";import"./button-BfLZ-VM-.js";import"./factory-DfZ_GLHF.js";import"./create-recipe-context-D_yoijnE.js";import"./attr-DhmmAXiK.js";import"./spinner-DiyqDjLm.js";import"./skeleton-Cgpo4QtB.js";import"./index-gGSd_tuc.js";import"./stack-cZqjzF3h.js";import"./flex-CXPrdUkq.js";import"./icon-6bd3B2Ot.js";import"./index-Dh77dQb7.js";import"./index-CR-JKV10.js";import"./index-c9v3nrz8.js";import"./index.esm-BryMgwr3.js";import"./index-CXJSmhBX.js";import"./link-CHu2bcs4.js";import"./types-46GkiyaY.js";import"./index-QPDHu0vi.js";import"./h-stack-CZ5J3vxW.js";import"./field-CC-Hk5CE.js";import"./create-slot-recipe-context-DY5iZR3X.js";import"./use-field-context-xJbHbs_J.js";import"./create-context-BBqg7HVM.js";import"./factory-Oor9AvS4.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D_MW--Ts.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-PZ4yXx1y.js";import"./index-BxXR7b0z.js";import"./index-BKV_5PbR.js";import"./use-locale-context-CpLIZuHk.js";import"./use-event-DFIM-lha.js";import"./index-Bv-vXX6u.js";import"./useColorFormatConverter-D0_l4mZa.js";import"./index-D9ww64sZ.js";import"./ReactIconWrapper-6GCCL5vm.js";import"./input-group-CCF-7K8C.js";import"./input-E1x09PxR.js";import"./useTranslation-CD3h8h1x.js";import"./context-Dw_KTj3T.js";import"./portal-DFW4auR5.js";import"./v-stack-yP1gt8-d.js";import"./menu-CFHu7Zcv.js";import"./icons-jXhLhQLW.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BXdCOKbB.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
