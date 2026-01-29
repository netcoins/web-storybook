import{j as b}from"./jsx-runtime-kgXYXbxN.js";import{r as g}from"./index-DkrDHoA0.js";import{M as i}from"./index-Bt5DRIbY.js";import"./iframe-BBryyjVm.js";import"./index-CTsczMtn.js";import"./types-CPd_33zr.js";import"./color-mode-ChMGBL4r.js";import"./iconBase-Cawm1F28.js";import"./icon-button-CQtFySye.js";import"./button-BURgWbhi.js";import"./factory-BZTzI5pW.js";import"./create-recipe-context-BePLyMJS.js";import"./attr-DhmmAXiK.js";import"./spinner-DC4_QDZr.js";import"./skeleton-Cgg4E_Wj.js";import"./index-Cd8Lmteg.js";import"./stack-CiQGU0t-.js";import"./flex-CsIhHmY6.js";import"./icon-M9MOxPzT.js";import"./index-LdhaInLk.js";import"./index-S_9LKk7L.js";import"./index-C-oJ_MaO.js";import"./index.esm-DOlWt8x_.js";import"./index-D65za9Nk.js";import"./index-BI4T21_x.js";import"./link-DzVsTe8S.js";import"./types-BeJb0_Ij.js";import"./h-stack-BdaCreZk.js";import"./field-d61FX-VH.js";import"./create-slot-recipe-context-BpOBAris.js";import"./use-field-context-DyxzB5Op.js";import"./create-context-INHbO-rg.js";import"./factory-C2K0EIi5.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DWxkAKGZ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CyBBoEyT.js";import"./index-Bpl4YvaA.js";import"./index-DfUPD731.js";import"./use-locale-context-C5nh4WAs.js";import"./use-event-C4s59eCf.js";import"./index-DMY61obS.js";import"./useColorFormatConverter-C162ko_Z.js";import"./index-E-ygkpZ0.js";import"./ReactIconWrapper-DA6v_KJC.js";import"./input-group-Q3tDYGcI.js";import"./input-B1aKHyww.js";import"./useTranslation-voh5oVJN.js";import"./context-BqRsCf4Q.js";import"./portal-D3MW8-YJ.js";import"./v-stack-47aKX2Ia.js";import"./menu-CjojSKOq.js";import"./icons-Cqn--cx_.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DUUptRLI.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
