import{j as b}from"./jsx-runtime-BMe23sfu.js";import{r as g}from"./index-3uRWScih.js";import{M as i}from"./index-U6Fod7tW.js";import"./iframe-DO8Utu4A.js";import"./index-BKirNFID.js";import"./types-DTqDQMcu.js";import"./color-mode-BMbrLknA.js";import"./iconBase-BhSUSoPT.js";import"./icon-button-BnhYOXv8.js";import"./button-DYtMcQ2w.js";import"./factory-5lifs_Uf.js";import"./create-recipe-context-JEdEmLoL.js";import"./attr-DhmmAXiK.js";import"./spinner-DyQCA3dh.js";import"./skeleton-B_RHwsJi.js";import"./index-DdhCPmU1.js";import"./stack-DGOJf4HG.js";import"./flex-DB-eV0Db.js";import"./icon-DTrIC6-A.js";import"./index-3hkjHPRT.js";import"./index-DH2oKe5t.js";import"./index-C6Tms7rU.js";import"./index.esm-BjEMEgPx.js";import"./index-C5RUhsXx.js";import"./link-Dw80XKvr.js";import"./types-Cp11Vp3T.js";import"./index-C7K-PE8c.js";import"./h-stack-CiL0TMOB.js";import"./field-hZlRc1Ir.js";import"./create-slot-recipe-context-CZXZtR1v.js";import"./use-field-context-cSQid5c3.js";import"./create-context-CIH32tQA.js";import"./factory-CF4MNZmU.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-pw7MjvWF.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CHzo0W0y.js";import"./index-BPkKsIEu.js";import"./index-DW6m2cXz.js";import"./use-locale-context-BESxcgKo.js";import"./use-event-Brf6dhAq.js";import"./index-DbZ3yt23.js";import"./useColorFormatConverter-OGmnnpNM.js";import"./index-Hovq0g0r.js";import"./ReactIconWrapper-C0kqq98L.js";import"./input-group-BOAWiQq7.js";import"./input-mNdcwVkh.js";import"./useTranslation-BtuYbaKE.js";import"./context-Dur4HoaN.js";import"./portal-hvt_mR5i.js";import"./v-stack-DtJOgv-D.js";import"./menu-DHU9Mm6v.js";import"./icons-CQjG46XG.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Bn7pkHR7.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
