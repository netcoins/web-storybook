import{j as b}from"./jsx-runtime-ae3r69FJ.js";import{r as g}from"./index-XBYBtqxJ.js";import{M as i}from"./index-DbRLIgfB.js";import"./iframe-kK6UFf7H.js";import"./index-B-958vDz.js";import"./types--bm3c-dY.js";import"./color-mode-BlytE6KB.js";import"./iconBase-DXhK__NV.js";import"./icon-button-fden9lNM.js";import"./button-BIiprEQW.js";import"./factory-_MSS-rU-.js";import"./create-recipe-context-BxyFvRHK.js";import"./attr-DhmmAXiK.js";import"./spinner-BB4OXv6J.js";import"./skeleton-edjD-HEU.js";import"./index-DxdNKgeD.js";import"./stack-toAFvhll.js";import"./flex-BPM3tror.js";import"./icon-7S2WRhgi.js";import"./index-D1cvT4Kn.js";import"./index-CebIlSh6.js";import"./index-DR847OV_.js";import"./index.esm-BfvTism-.js";import"./index-Cn0b_FtJ.js";import"./link-DaCNwh0B.js";import"./types-Dl_NbzJO.js";import"./index-DmIOy6So.js";import"./h-stack-BRrrDTOz.js";import"./field-C2yoY_O3.js";import"./create-slot-recipe-context-H-xVUtWh.js";import"./use-field-context-BT8CYFn9.js";import"./create-context-wYGfa5_X.js";import"./factory-DStPiNMb.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0AsyEJJ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BDJYEYCe.js";import"./index-My67Tq_O.js";import"./index-B7hKTDCm.js";import"./use-locale-context-hwb_qjAX.js";import"./use-event-cmPl1-5p.js";import"./index-CdbnM-VW.js";import"./useColorFormatConverter-ArMjdFHE.js";import"./index-D8sVZaDy.js";import"./ReactIconWrapper-BrZfquIg.js";import"./input-group-Dst2w_Do.js";import"./input-BLOJ7bGi.js";import"./useTranslation-CoBNaf3O.js";import"./context-NL2FSLZI.js";import"./portal-gvuCVBHi.js";import"./v-stack-qgKBN_gq.js";import"./menu-BoxaIT8H.js";import"./icons-OTkZttPu.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DXOXtiMf.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
