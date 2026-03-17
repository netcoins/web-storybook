import{j as b}from"./jsx-runtime-CWIYlopj.js";import{r as g}from"./index-B7rof8nh.js";import{M as i}from"./index-C94i8qD6.js";import"./iframe-BDqx6jC8.js";import"./index-Cwy5WMjN.js";import"./types-D9pSEpSG.js";import"./color-mode-D7qFYnL6.js";import"./iconBase-y0IgG-hX.js";import"./icon-button-YYqKgVqK.js";import"./button-CHL-NboF.js";import"./factory-DZWhZEsy.js";import"./create-recipe-context-BNEqmHsA.js";import"./attr-DhmmAXiK.js";import"./spinner-TtBTnMEZ.js";import"./skeleton-CviPbvZ2.js";import"./index-BaBwGcon.js";import"./stack-Dr6O5j-C.js";import"./flex-Bggr3XRf.js";import"./icon-DA2l8ccV.js";import"./index-hYMh-BgI.js";import"./index-D7cuCHAi.js";import"./index-e_Tccf0d.js";import"./index.esm-uIuqjGnJ.js";import"./index-C9cC6o22.js";import"./link-C1p1mQbO.js";import"./types-B_o9coK7.js";import"./index-DlFYPTn4.js";import"./h-stack-5hXBD-zi.js";import"./field-B_5gEUJN.js";import"./create-slot-recipe-context-wFqtBxXe.js";import"./use-field-context-Drmb0GH-.js";import"./create-context-CRWhTCEP.js";import"./factory-CEH2qnGd.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dtpdv5Eh.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-D8cMayX4.js";import"./index-DWVPVL3t.js";import"./index-DLoZlVJE.js";import"./use-locale-context-D4TZSxIS.js";import"./use-event-6BZEe879.js";import"./index-D7Ekgg4i.js";import"./useColorFormatConverter-DerqyLOx.js";import"./index-Bbp79Ro2.js";import"./ReactIconWrapper-Cl2KYdfr.js";import"./input-group-T4TqNFFk.js";import"./input-CjVkyZF8.js";import"./useTranslation-DXKS8gXR.js";import"./context-Dpp5xxXE.js";import"./portal-CHmhtcGc.js";import"./v-stack-CesS33Jc.js";import"./menu-xxh21Xb4.js";import"./icons-wqZJOLXy.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BQPTHU0n.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
