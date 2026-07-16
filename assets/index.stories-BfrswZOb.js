import{j as b}from"./jsx-runtime--WFxFWJe.js";import{r as g}from"./index-BWRy1hAs.js";import{M as i}from"./index-CZeASsul.js";import"./iframe-IaPkv7CH.js";import"./index-BnQxsw2N.js";import"./types-CLVvQ7IT.js";import"./color-mode-B0_cIqMS.js";import"./iconBase-B4bas2P2.js";import"./icon-button-D-RUUr1v.js";import"./button-Ciw2S6Tm.js";import"./factory-BD6k6CXN.js";import"./create-recipe-context-B8yw7VYA.js";import"./attr-DhmmAXiK.js";import"./spinner-CHm1fCy1.js";import"./skeleton-j87O3mf3.js";import"./index-5aBzXVds.js";import"./stack-BtekSfGc.js";import"./flex-CgmoetMW.js";import"./icon-DKlUOMqA.js";import"./index-DAj02rw5.js";import"./index-DHM1A7Gj.js";import"./index-Die2zY-P.js";import"./index.esm-Dizn96H0.js";import"./index-YtuJBfPW.js";import"./link-BRbnvlnI.js";import"./types-QwGKjzjy.js";import"./index-DGMRBbKe.js";import"./h-stack-B1MPtlw3.js";import"./field-DqU4jT8h.js";import"./create-slot-recipe-context-_LG65tWk.js";import"./use-field-context-BLFsytiz.js";import"./create-context-BaiETKPX.js";import"./factory-Cj5xN7Bm.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BLSn3tlA.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-DYbDfddm.js";import"./index-CgSuPseW.js";import"./index-BVaMZN4A.js";import"./use-locale-context-CjrjPKjt.js";import"./use-event-D7h9Gyyr.js";import"./index-1vtcxlIS.js";import"./useColorFormatConverter-DqoMk5bJ.js";import"./index-Cuxds7MK.js";import"./ReactIconWrapper-DMaN2Ehg.js";import"./input-group-CHEJdDUO.js";import"./input-BMo_0YTv.js";import"./useTranslation-GOt405fa.js";import"./context-DcAJsSZf.js";import"./portal-CN4yXAhc.js";import"./v-stack-CNDSarKR.js";import"./menu-DPyPCUuF.js";import"./icons-Ct4uC7Jf.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-BP428_nI.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
