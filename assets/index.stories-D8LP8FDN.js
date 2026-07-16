import{j as b}from"./jsx-runtime-DBGTve3H.js";import{r as g}from"./index-DjdiN9vP.js";import{M as i}from"./index-DsCINKLw.js";import"./iframe-Bf3FyGLG.js";import"./index-Ddq31fIP.js";import"./types-D4qpF0Vk.js";import"./color-mode-CwFHgcvk.js";import"./iconBase-CeixPGSG.js";import"./icon-button-CX9-vSxg.js";import"./button-Ca11798a.js";import"./factory-C3JCNE8b.js";import"./create-recipe-context-DR4uimmH.js";import"./attr-DhmmAXiK.js";import"./spinner-CJXzuk8U.js";import"./skeleton-cMlXg9uL.js";import"./index-B085l8KG.js";import"./stack-Cw552mbC.js";import"./flex-veWOdYXU.js";import"./icon-CvXioo0b.js";import"./index-BIf0toKg.js";import"./index-1JzSC6L5.js";import"./index-CnDwDHa_.js";import"./index.esm-B_jMNGzk.js";import"./index-CIUychlY.js";import"./link-DlNOeHlm.js";import"./types-BEHz8SJi.js";import"./index-D99aBR2j.js";import"./h-stack-Bwje8Sj1.js";import"./field-DD5RDtGl.js";import"./create-slot-recipe-context-oWqG-oZx.js";import"./use-field-context-YM5M-_6o.js";import"./create-context-CJg9NqfD.js";import"./factory-2WvRMv5c.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CB6MVj73.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-CSs7t-_Z.js";import"./index-BuwzOxV6.js";import"./index-D5SGSyZc.js";import"./use-locale-context-BYyBD7xr.js";import"./use-event-BVPFUYw3.js";import"./index-BvWdReDp.js";import"./useColorFormatConverter-lkyk33ms.js";import"./index-_37wBSgY.js";import"./ReactIconWrapper-zVcUS1Fq.js";import"./input-group-CmwdPnY-.js";import"./input-BA5F17YW.js";import"./useTranslation-DIsuM6G2.js";import"./context-CCWKfhOp.js";import"./portal-DPQgRyN8.js";import"./v-stack-Clj8jYdv.js";import"./menu-CWRsKxdO.js";import"./icons-CXs0I25I.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-BgUD45oq.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
