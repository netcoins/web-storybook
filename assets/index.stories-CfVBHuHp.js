import{j as b}from"./jsx-runtime-DPKh1yZ4.js";import{r as g}from"./index-CCpxSvwH.js";import{M as i}from"./index-C0qHvFOd.js";import"./iframe-QonF7j5a.js";import"./index-B5B5WgeU.js";import"./types-CKiLoGCy.js";import"./color-mode-BswawkeU.js";import"./iconBase-Day3x6kf.js";import"./icon-button-CjmUky1n.js";import"./button-rIHXeHCg.js";import"./factory-CjBh8tPt.js";import"./create-recipe-context-B0NsN-XA.js";import"./attr-DhmmAXiK.js";import"./spinner-WaKuMFn5.js";import"./skeleton-6DSIEWqN.js";import"./index-DFSowNwj.js";import"./stack-D5DiAFc-.js";import"./flex-DYRFH-uj.js";import"./icon-C2wRp5YE.js";import"./index-BI0GrkrY.js";import"./index-CFiWfBUL.js";import"./index-B6WGUCC-.js";import"./index.esm-DTWKmrap.js";import"./index-DnyBVs9T.js";import"./link-CZOQfHrf.js";import"./types-DjmdEDme.js";import"./index-CTI7aYEK.js";import"./h-stack-DFfqOKrx.js";import"./field-29q3CdLF.js";import"./create-slot-recipe-context-B92s7dgs.js";import"./use-field-context-DA14qd8u.js";import"./create-context-C8dAhvxo.js";import"./factory-CVk_uaUF.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BZuCsz_8.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-zZF-CcKg.js";import"./index-CcunNPc0.js";import"./index-Da6bQbEk.js";import"./use-locale-context-DxmCZpwU.js";import"./use-event-nBGurhGY.js";import"./index-BzqdAOtW.js";import"./useColorFormatConverter-ZVdGCFvU.js";import"./index-D7z6LLWT.js";import"./ReactIconWrapper-CfZYbjL2.js";import"./input-group-BQ-i7WZ4.js";import"./input-J0txmnnR.js";import"./useTranslation-lWE0fM33.js";import"./context-DGO8ZKpt.js";import"./portal-TdgvqEGC.js";import"./v-stack-hQPZ0dGY.js";import"./menu-C-dC2jRQ.js";import"./icons-DhfFZJfR.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-C9Mws6jx.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
