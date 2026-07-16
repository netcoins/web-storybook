import{j as b}from"./jsx-runtime-BGcxFHfU.js";import{r as g}from"./index-B0yVpsDW.js";import{M as i}from"./index-CjcP4sPN.js";import"./iframe-GaotBMNf.js";import"./index-x_YR-Es-.js";import"./types-n3s-XB7U.js";import"./color-mode-YIxMxqOQ.js";import"./iconBase-B1jl8VR0.js";import"./icon-button-Cd6eoGMg.js";import"./button-C1b4uQig.js";import"./factory-CF2a3kaT.js";import"./create-recipe-context-D9kkmKMO.js";import"./attr-DhmmAXiK.js";import"./spinner-pYbUAc9i.js";import"./skeleton-BbHeFlNk.js";import"./index-DjAQZrVP.js";import"./stack-B8oYQZeG.js";import"./flex-DRA7j1Lm.js";import"./icon-CKa88xsx.js";import"./index-DEq67tjr.js";import"./index-Cm1Rz-Je.js";import"./index-D6i8n2lx.js";import"./index.esm-BI7EaxFV.js";import"./index-CEji5iB6.js";import"./link-DnGGqHKU.js";import"./types-RJkDjEfO.js";import"./index-DniPWfy0.js";import"./h-stack-BHLY_gYw.js";import"./field-BQ5qBbU0.js";import"./create-slot-recipe-context-Cu7idRdr.js";import"./use-field-context-Cvyh3ORQ.js";import"./create-context-BlHQPKjU.js";import"./factory-NNq8EB_E.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-ISZqcu-a.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-CQmmRITb.js";import"./index-rH2g5JbQ.js";import"./index-AP_1WMee.js";import"./use-locale-context-DTuxNaJ8.js";import"./use-event-DIQhV76m.js";import"./index-BE7m1eAf.js";import"./useColorFormatConverter-DBWH7ZI_.js";import"./index-BfMhBfU3.js";import"./ReactIconWrapper-C8bLeAC8.js";import"./input-group-BBoErCCa.js";import"./input-4bs3KAyR.js";import"./useTranslation-B06N9AA5.js";import"./context-BMaYKIfS.js";import"./portal-DQ8kwrmO.js";import"./v-stack-CqlgYV2m.js";import"./menu-BfpgBW4-.js";import"./icons-Czlh0e6K.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-dWyoFVxJ.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
