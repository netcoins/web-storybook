import{j as b}from"./jsx-runtime-BTqjDgMf.js";import{r as g}from"./index-DYWH3DXx.js";import{M as i}from"./index-BLFx3yIV.js";import"./iframe-BITn7V8B.js";import"./index-c7Vj7-Oh.js";import"./types-Co6dJLMl.js";import"./color-mode-jw39W6D8.js";import"./iconBase-DmMODKqT.js";import"./icon-button-B6iBzQJ3.js";import"./button-XYcywuP9.js";import"./factory-DMNV3kaj.js";import"./create-recipe-context-BO7oV3LB.js";import"./attr-DhmmAXiK.js";import"./spinner-DJXXviBy.js";import"./skeleton-C0Nl-bVP.js";import"./index-BZZ-eHkW.js";import"./stack-BkYlu6_1.js";import"./flex-BIV0zswu.js";import"./icon-CXCTjqaQ.js";import"./index-DS3Payst.js";import"./index-HY1PiqwU.js";import"./index-CRHu4exz.js";import"./index.esm-SQCmzF5N.js";import"./index-CrKpmEBL.js";import"./link-xpWN7vq6.js";import"./types-Dr_qp_GF.js";import"./index-322o25iP.js";import"./h-stack-DtldATsB.js";import"./field-C5YubgKD.js";import"./create-slot-recipe-context-DZV8ESso.js";import"./use-field-context-CHg4fCZZ.js";import"./create-context-JOqTF1vr.js";import"./factory-Br4R_U9X.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-avyk0saP.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-DB5REpe3.js";import"./index-BaJx9EGw.js";import"./index-B8Nr9h9G.js";import"./use-locale-context-enP3WUsM.js";import"./use-event-D5YQLvCi.js";import"./index-DsZAWNFe.js";import"./useColorFormatConverter-BKQfY-XB.js";import"./index-C7f6Qlo7.js";import"./ReactIconWrapper-D1hxiAU9.js";import"./input-group-BK6cFFgH.js";import"./input-BDvf-7q_.js";import"./useTranslation-pH9QKVrO.js";import"./context-Bb-WHMDk.js";import"./portal-CNYU9dUW.js";import"./v-stack-BjiEjogc.js";import"./menu-CZoaScA8.js";import"./icons-BDt6Tx2r.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-DpJdGr2q.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
