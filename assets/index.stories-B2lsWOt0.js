import{j as b}from"./jsx-runtime-BEALrSiw.js";import{r as g}from"./index-D6Rt38Md.js";import{M as i}from"./index-D6rZBvIM.js";import"./iframe-C7fe_6PB.js";import"./index-BImMUPtx.js";import"./types-OSqUH5NV.js";import"./color-mode-Cn2E7N5O.js";import"./iconBase-DAclO8sU.js";import"./icon-button-iGTLvu5L.js";import"./button-D4XqECwX.js";import"./factory-FaUDqzG9.js";import"./create-recipe-context-DLES19Fj.js";import"./attr-DhmmAXiK.js";import"./spinner-Da7Tzysx.js";import"./skeleton-BGUlOgBz.js";import"./index-BPqvcJiY.js";import"./stack-BNh86J78.js";import"./flex-ClmIt6a8.js";import"./icon-BY3liC7U.js";import"./index-D2Di4sUN.js";import"./index-B9hyHr_W.js";import"./index-DrVe0ORx.js";import"./index.esm-6UvfEHMT.js";import"./index-DbLppJ0d.js";import"./link-C9OtjCv3.js";import"./types-D1Ps7rGN.js";import"./index-Bjaf9lYr.js";import"./h-stack-BVmeVVRo.js";import"./field-Djp9hTpt.js";import"./create-slot-recipe-context-V2WoLaU_.js";import"./use-field-context-CtGaobV9.js";import"./create-context-BX2lWgvX.js";import"./factory-CO0KLv9F.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BSDnEsNA.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-EgcsF-Nr.js";import"./index-kuc1nk3o.js";import"./index-snrugqQW.js";import"./use-locale-context-DPiHV0td.js";import"./use-event-6t3bWxiX.js";import"./index-BTRQ2jI1.js";import"./useColorFormatConverter-BWzs4f2b.js";import"./index-Cj73TuUf.js";import"./ReactIconWrapper-CMHE5-nr.js";import"./input-group-D7rWL54E.js";import"./input-DI41v8fN.js";import"./useTranslation-D2QAfVFQ.js";import"./context-Oh5jb3yu.js";import"./portal-9ScNyOmJ.js";import"./v-stack-BDMHkLBj.js";import"./menu-jya3QtFk.js";import"./icons-D5MTKEFI.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CXyNLkzc.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
