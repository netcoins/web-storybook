import{j as b}from"./jsx-runtime-C09U0QkG.js";import{r as g}from"./index-tU2a8peJ.js";import{M as i}from"./index-DbKPT68Q.js";import"./iframe-WSTQLAUA.js";import"./index-DZ6ijCMj.js";import"./types-BI0ZWuNn.js";import"./color-mode-BH1yKA6J.js";import"./iconBase-BkfLj6ee.js";import"./icon-button-BjiCyMuy.js";import"./button-CnC__iYh.js";import"./factory-BGpqAhvl.js";import"./create-recipe-context-781SFowN.js";import"./attr-DhmmAXiK.js";import"./spinner-Cl4Qlu3G.js";import"./skeleton-Dau7vFDf.js";import"./index-F3aO5O03.js";import"./stack-CcBinJLK.js";import"./flex-vmcZAlQT.js";import"./icon-DX3fR94h.js";import"./index-DyRkg7z2.js";import"./index-DukhEpoO.js";import"./index-D0utwPkq.js";import"./index.esm-Bs9hH3kX.js";import"./index-D1LP-RBe.js";import"./link-DRSVRWP5.js";import"./types-B5gSrMYx.js";import"./index-CbwDE7O0.js";import"./h-stack-CxPBrXQp.js";import"./field-CGmY8jAg.js";import"./create-slot-recipe-context-Cp1e8qjv.js";import"./use-field-context-CF8O1Ek4.js";import"./create-context-9EW50sQ_.js";import"./factory-DtUifINl.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-f4e1uT1e.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-LOS8InN1.js";import"./index-GmLmEsmK.js";import"./index-By_ipVIJ.js";import"./use-locale-context-VtJtWEH-.js";import"./use-event-Du88xLLr.js";import"./index-B1Ku3HVO.js";import"./useColorFormatConverter-B3bCQUne.js";import"./index-X9BNhYow.js";import"./ReactIconWrapper-BjTiyX0Q.js";import"./input-group-CpzUVSVY.js";import"./input-sFo1wA4E.js";import"./useTranslation-DRZGgz5-.js";import"./context-DDoi5gUE.js";import"./portal-CA6dsPti.js";import"./v-stack-ByCd8puH.js";import"./menu-DAg0tt2w.js";import"./icons-BEHiho1u.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DrRAMhR0.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
