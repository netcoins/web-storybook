import{j as b}from"./jsx-runtime-CQ4vP9D9.js";import{r as g}from"./index-CCYt4LCz.js";import{M as i}from"./index-C26EE8kV.js";import"./iframe-BOJVnPqD.js";import"./index-z8MfvhmO.js";import"./types-k0cYMeLo.js";import"./color-mode-2OTExegU.js";import"./iconBase-CXfTt_Jl.js";import"./icon-button-BVV6VDZ-.js";import"./button-D40A6LZM.js";import"./factory-CrYckV6z.js";import"./create-recipe-context-Cd1gDX9n.js";import"./attr-DhmmAXiK.js";import"./spinner-BL4NGIpA.js";import"./skeleton-eSB4KYuh.js";import"./index-DjlwGPrX.js";import"./stack-DYgF1RKE.js";import"./flex-BWqEwq43.js";import"./icon--Q6l7EXN.js";import"./index-gt7Vnwoq.js";import"./index-B4EyMO4L.js";import"./index-DHWSWm4B.js";import"./index.esm-DICDW_0Z.js";import"./index-Cwbx8mzo.js";import"./link-B4zlq3Gn.js";import"./types-dfX5aOoH.js";import"./index-Dfh99gWW.js";import"./h-stack-BbhweyNg.js";import"./field-dXbNe5SG.js";import"./create-slot-recipe-context-_OwTRBFK.js";import"./use-field-context-DhY2YANv.js";import"./create-context-BUAO09gH.js";import"./factory-Ck8YRd_y.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C4F-LSFj.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-B_h_qEzf.js";import"./index-CHVa975E.js";import"./index-BmiN6_Fe.js";import"./use-locale-context-Mh34JPYx.js";import"./use-event-t0AmWsOA.js";import"./index-B7OZS4Uz.js";import"./useColorFormatConverter-B6_jhUye.js";import"./index-CdzBI73R.js";import"./ReactIconWrapper-DGa9H8kh.js";import"./input-group-CRX4cXME.js";import"./input-BnabahjB.js";import"./useTranslation-Cjd8wC9H.js";import"./context-Czc8akKf.js";import"./portal-LFjlwF8g.js";import"./v-stack-COseqAY1.js";import"./menu-By3bmwBX.js";import"./icons-B6Y8OOCm.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-JIetXnjE.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
