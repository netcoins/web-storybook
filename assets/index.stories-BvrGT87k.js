import{j as b}from"./jsx-runtime-DBxujOLp.js";import{r as g}from"./index-HDHCKL1S.js";import{M as i}from"./index-qW9MLYWY.js";import"./iframe-DqNY1Mbr.js";import"./index-C-U7fR_d.js";import"./types-BN5KfxcR.js";import"./color-mode-DQcCenTp.js";import"./iconBase-Dhemk1u5.js";import"./icon-button-OdaVNcYu.js";import"./button-BDgx4IwJ.js";import"./factory-C-6Oo286.js";import"./create-recipe-context-DoKTuRzb.js";import"./attr-DhmmAXiK.js";import"./spinner-CVPfB2ny.js";import"./skeleton-B9DZtg37.js";import"./index-CgPzQfL8.js";import"./stack-CwLzpoIO.js";import"./flex-FBoZP_4_.js";import"./icon-sAtHoJon.js";import"./index-CBAdQ3B9.js";import"./index-DvmIN8Pk.js";import"./index-Dx2tMUjM.js";import"./index.esm-CKhwRBVl.js";import"./index-CE2WaBEv.js";import"./link-BaMg3pUk.js";import"./types-C5RJ3InO.js";import"./index-GX-cdDEZ.js";import"./h-stack-DyUIOzCJ.js";import"./field-DF9df5ft.js";import"./create-slot-recipe-context-FVkUQsqG.js";import"./use-field-context-BmfXXVOE.js";import"./create-context-C4ZCr8N3.js";import"./factory-DJiU1ecU.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CZxUaOZO.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DiyWfDba.js";import"./index-CejL_Qc4.js";import"./index-mX9v4zlJ.js";import"./use-locale-context-uxQvS48D.js";import"./use-event-DClrxKfi.js";import"./index-DPtMbCYC.js";import"./useColorFormatConverter-DOre46ii.js";import"./index-DQb6bglE.js";import"./ReactIconWrapper-DVjgbsUK.js";import"./input-group-7L0kSVXC.js";import"./input-BlLCqcyF.js";import"./useTranslation-CBDRnxhW.js";import"./context-CSnYtiZv.js";import"./portal-MgF5sYLj.js";import"./v-stack-DRTr6cJK.js";import"./menu-m7f5Zc58.js";import"./icons-DlPeb3Cj.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DZosDihu.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
