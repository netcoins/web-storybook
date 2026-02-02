import{j as b}from"./jsx-runtime-BRRoXCkO.js";import{r as g}from"./index-C2qJCNAO.js";import{M as i}from"./index-CChdQ5aw.js";import"./iframe-BTMSo_JT.js";import"./index-Ccbn_88M.js";import"./types-DLWgSLwx.js";import"./color-mode-BwqAZtjB.js";import"./iconBase-C2srJJb9.js";import"./icon-button-DA8mDDDt.js";import"./button-CTTy1dlS.js";import"./factory-CHumcM9w.js";import"./create-recipe-context-DiR8rkt1.js";import"./attr-DhmmAXiK.js";import"./spinner-DJLrxBcZ.js";import"./skeleton-H5T4WGXV.js";import"./index-PtM_AfHA.js";import"./stack-CX1KRe_c.js";import"./flex-BAMcftSX.js";import"./icon-BNgImnbG.js";import"./index-BuF7Pojp.js";import"./index-CnlbElMu.js";import"./index-Bik8761Q.js";import"./index.esm-xJX5-1uU.js";import"./index-CiFwiWN3.js";import"./index-DEABvyBn.js";import"./link-D6XJTo-c.js";import"./types-BuqNbYfI.js";import"./h-stack-D-GN9zmb.js";import"./field-DbyvMRJT.js";import"./create-slot-recipe-context-kgtqppeP.js";import"./use-field-context-C46Ub9S4.js";import"./create-context-DJH51S2t.js";import"./factory-C-WUR8wx.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B96I1FTt.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DOSWFkgr.js";import"./index-BFng5UY6.js";import"./index-8eV6plGU.js";import"./use-locale-context-zK_94ux-.js";import"./use-event-B6lPkqvn.js";import"./index-C0rp7sh9.js";import"./useColorFormatConverter-D1ZbVur_.js";import"./index-Bv1jQh9M.js";import"./ReactIconWrapper-DtNDr32i.js";import"./input-group-CWHNHpD3.js";import"./input-fLACrdlb.js";import"./useTranslation-c4pSTDlY.js";import"./context-BlfxvwaF.js";import"./portal-q2DLbSXC.js";import"./v-stack-ClM6dkbg.js";import"./menu-b2wny9rn.js";import"./icons-DiC8q1Lw.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DPcYcXjW.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
