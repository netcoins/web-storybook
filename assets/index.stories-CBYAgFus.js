import{j as b}from"./jsx-runtime-Caq49NyI.js";import{r as g}from"./index-D8lQHrGn.js";import{M as i}from"./index-p1XxoaYQ.js";import"./iframe-B1-Bc3aj.js";import"./index-Cc3Rq8sK.js";import"./types-BwYCn_Kf.js";import"./color-mode-BebDMqu-.js";import"./iconBase-4MjwOzg9.js";import"./icon-button-Yv-CVJDg.js";import"./button-DzBIrWpD.js";import"./factory-BxfHbFh2.js";import"./create-recipe-context-ClxGMkfU.js";import"./attr-DhmmAXiK.js";import"./spinner-K6UCCP2q.js";import"./skeleton-2M-Qrbu-.js";import"./index-BGMJqn9I.js";import"./stack-BTwkFosQ.js";import"./flex-KQ8jqxgd.js";import"./icon-Dj74CtRp.js";import"./index-BFIhJJnR.js";import"./index-gAxIIQny.js";import"./index-B5K-BTtV.js";import"./index.esm-CU3YP8uo.js";import"./index-tdYA5gT6.js";import"./link-BDaOZXBf.js";import"./types-B6otU-bp.js";import"./index-NdkclZBp.js";import"./h-stack-CLs6olB_.js";import"./field-C9jQ20N2.js";import"./create-slot-recipe-context-DtIEFOvH.js";import"./use-field-context-Dps3mwb_.js";import"./create-context-sT42AIyI.js";import"./factory-DuLzj89h.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cyli79z1.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-70f33dnh.js";import"./index-CGMxa5UM.js";import"./index-Jx1nUab6.js";import"./use-locale-context-DLFuEBCy.js";import"./use-event-5tAZXO8S.js";import"./index-CFcmZeon.js";import"./useColorFormatConverter-CSRHU2LG.js";import"./index-DmeWpO2e.js";import"./ReactIconWrapper-CHfiOIhX.js";import"./input-group-DvGVDmqU.js";import"./input-SoAtPrG4.js";import"./useTranslation-rhX4eXqi.js";import"./context-CPvjmG9a.js";import"./portal-C4Zo3DNV.js";import"./v-stack-DKdvtSMn.js";import"./menu-D0ZIA5rT.js";import"./icons-BHpT8f-d.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-CG4S2mbi.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
