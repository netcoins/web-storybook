import{j as b}from"./jsx-runtime-B7TZUReY.js";import{r as g}from"./index-C5Vv_JDe.js";import{M as i}from"./index-D0Q-jSKt.js";import"./iframe-lXBdsvaw.js";import"./index-CWyqPZXR.js";import"./types-BstVpnEu.js";import"./color-mode-CVOdyaEI.js";import"./iconBase-BmKHyfZ2.js";import"./icon-button-B8na8o8J.js";import"./button-DMrim0M8.js";import"./factory-C_Hp2xGR.js";import"./create-recipe-context-DTwUQUSe.js";import"./attr-DhmmAXiK.js";import"./spinner-BTSnaZuZ.js";import"./skeleton-EU0GMmTc.js";import"./index-UuiWqqAb.js";import"./stack-COiJUwoH.js";import"./flex-C2DKTzfX.js";import"./icon-ifko-XvA.js";import"./index-BHwtE2zh.js";import"./index-Bf7Zj2zX.js";import"./index-CZKdzHL9.js";import"./index.esm-BzpP09fP.js";import"./index-CxB0sHRX.js";import"./link-h5e8U26m.js";import"./types-rc26nBfM.js";import"./index-Ct77yVhc.js";import"./h-stack-DgU2SiIL.js";import"./field-BlBq5uOB.js";import"./create-slot-recipe-context-oRKjWrpY.js";import"./use-field-context-DYlSSjvx.js";import"./create-context-DsB-YBFX.js";import"./factory-CAvMfCbn.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BWOmnnx9.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-BKl0Euwu.js";import"./index-CoqHZ5HB.js";import"./index-CWaBKySY.js";import"./use-locale-context-CKoHjI0T.js";import"./use-event-Bnvz-n-p.js";import"./index-BBpwsddY.js";import"./useColorFormatConverter-B2AIkOPz.js";import"./index-YbsbSFjK.js";import"./ReactIconWrapper-3TbhrlLo.js";import"./input-group-C1bAoTUC.js";import"./input-BgI5jJl5.js";import"./useTranslation-6mIJg2f7.js";import"./context-D3UGl7Qp.js";import"./portal-CHYHrCo2.js";import"./v-stack-D0QfNbEt.js";import"./menu-Bmw2Jjas.js";import"./icons-YLdA4zKy.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-D82nJcfn.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
