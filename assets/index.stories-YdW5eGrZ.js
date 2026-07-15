import{j as b}from"./jsx-runtime-D5DeI2s5.js";import{r as g}from"./index-C8i9cqqN.js";import{M as i}from"./index-AJQxXmmk.js";import"./iframe-C-XDvpdu.js";import"./index-CbDajsyz.js";import"./types-BsOBGp4O.js";import"./color-mode-CFE50dCx.js";import"./iconBase-DMl_FT9g.js";import"./icon-button-Cn5-K_8d.js";import"./button-Co_WvyBc.js";import"./factory-kNuYJGc7.js";import"./create-recipe-context-BRH5V4XP.js";import"./attr-DhmmAXiK.js";import"./spinner-BP9ad5oI.js";import"./skeleton-2IoI-YEm.js";import"./index-CXQPOW_k.js";import"./stack-NR9H_vs6.js";import"./flex-DKdUXSv4.js";import"./icon-Cc5gBrFu.js";import"./index-BfLgRuuH.js";import"./index-CBJPPPaH.js";import"./index-DSXgP9Sm.js";import"./index.esm-DGwO2Hmp.js";import"./index-wiJlrGYO.js";import"./link-BwSPuBpn.js";import"./types-B195cW8T.js";import"./index-CW430clL.js";import"./h-stack-CjyH8jfN.js";import"./field-Bbhnm3Mp.js";import"./create-slot-recipe-context-U_n8nSAV.js";import"./use-field-context-Dl8iMPum.js";import"./create-context-XQK9kIJ7.js";import"./factory-ZHcklB47.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-aix4a6ly.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-DvYIvpKO.js";import"./index-DBUEsidC.js";import"./index-CTOKdcSd.js";import"./use-locale-context-BrI47jrT.js";import"./use-event-DeAaH8k1.js";import"./index-DDpSPaJX.js";import"./useColorFormatConverter-CtVqpEKy.js";import"./index-pzCQNOgO.js";import"./ReactIconWrapper-DyVNN2N0.js";import"./input-group-CqMvzMSM.js";import"./input-uVa8jg9o.js";import"./useTranslation-KzLdfBNZ.js";import"./context-DvK3fx0a.js";import"./portal-fFtfBA8T.js";import"./v-stack-CVwCrKjn.js";import"./menu-CxXHtgDD.js";import"./icons-COkOUVff.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-Cec51OVb.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
