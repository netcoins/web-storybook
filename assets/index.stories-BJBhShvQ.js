import{j as b}from"./jsx-runtime-DfTvk5JU.js";import{r as g}from"./index-BI2rZMRP.js";import{M as i}from"./index-CUba2-M0.js";import"./iframe-OeolHJlO.js";import"./index-DRiK65UT.js";import"./types-B2XpjPah.js";import"./color-mode-1ogWQevk.js";import"./iconBase-D0dYv0uK.js";import"./icon-button-C9o-fnUV.js";import"./button-BeCLa3YZ.js";import"./factory-CP_R41L6.js";import"./create-recipe-context-CTKZw3Mr.js";import"./attr-DhmmAXiK.js";import"./spinner-CmxV6PnM.js";import"./skeleton-D6mvQlsQ.js";import"./index-CqMctJb7.js";import"./stack-QU8jCdNo.js";import"./flex-DrAuV2CR.js";import"./icon--5O7vX8F.js";import"./index-BnLxWds-.js";import"./index-Byo-LTta.js";import"./index-Cp1vXFlX.js";import"./index.esm-BXEilWLB.js";import"./index-EnihuLdH.js";import"./link-DXIw648D.js";import"./types-VnYYiMHs.js";import"./index-CBjxoiqB.js";import"./h-stack-D4ygJTjc.js";import"./field-7zOCjvC5.js";import"./create-slot-recipe-context-CFdiyhgN.js";import"./use-field-context-DXqlGxzt.js";import"./create-context-CHiPB_fx.js";import"./factory-lsJnHilX.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-H5nSAQ4Y.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CY3pK6r1.js";import"./index-D4UO--Tb.js";import"./index-Bv6NjMuv.js";import"./use-locale-context-lqt8Xjd4.js";import"./use-event-CAHFReTA.js";import"./index-DW6QZ6h5.js";import"./useColorFormatConverter-Cjk42jUp.js";import"./index-BB-njoCM.js";import"./ReactIconWrapper-ZbovdqQY.js";import"./input-group-DFgsMQ7R.js";import"./input-Dv5hxWeK.js";import"./useTranslation-Db0WPopz.js";import"./context-aIipiWxJ.js";import"./portal-njfz63PX.js";import"./v-stack-D7nTlyEh.js";import"./menu-BhDHvroy.js";import"./icons-DJGEf9ZH.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-TP0EWECU.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
