import{j as b}from"./jsx-runtime-BJHVzd25.js";import{r as g}from"./index-VxVViXr4.js";import{M as i}from"./index-C_4a1SoX.js";import"./iframe-CGwqlfIZ.js";import"./index-gGp6SGxF.js";import"./types-dvzlzRIy.js";import"./color-mode-CQKZvi94.js";import"./iconBase-D4v2qpjo.js";import"./icon-button-DoVYBZ5X.js";import"./button-CXDxTzIk.js";import"./factory-D3CzzD93.js";import"./create-recipe-context-C0rP7BHD.js";import"./attr-DhmmAXiK.js";import"./spinner-DsDt0AX3.js";import"./skeleton-9YhPHkpN.js";import"./index-BFVolvpb.js";import"./stack-BxVtpCg8.js";import"./flex-CfUsGUci.js";import"./icon-C-m6gAy_.js";import"./index-BEDx-PZR.js";import"./index-BC70et92.js";import"./index-DfBcIG-8.js";import"./index.esm-CTsfzHYp.js";import"./index-C54NEZCd.js";import"./link-haD2Saxg.js";import"./types-BGHqYegv.js";import"./index-ChA8WshL.js";import"./h-stack-DXqpksdH.js";import"./field-fkZXqPBh.js";import"./create-slot-recipe-context-DT2sM_Rf.js";import"./use-field-context-BIqbowXh.js";import"./create-context-B4X-33h2.js";import"./factory-C_MTHdUW.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BoA0IiRe.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-DZBBpV9S.js";import"./index-CksDWgDQ.js";import"./index-BDOSyVE_.js";import"./use-locale-context-eBwgLnAh.js";import"./use-event-CTCYECL2.js";import"./index-FrqX7E3D.js";import"./useColorFormatConverter-BQd5H4zW.js";import"./index-BYtHqjsy.js";import"./ReactIconWrapper-DjJqjIuO.js";import"./input-group-DKEQbb37.js";import"./input-BnCVjlCp.js";import"./useTranslation-BIVjs_0r.js";import"./context-CgXYeA08.js";import"./portal-D2Mv-0Re.js";import"./v-stack-DXfBeieF.js";import"./menu-CJasETWo.js";import"./icons-BrIDjJil.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-7nBK8JWR.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
