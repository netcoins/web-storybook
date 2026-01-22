import{j as b}from"./jsx-runtime-C-MFBsJt.js";import{r as g}from"./index-CabVnVSx.js";import{M as i}from"./index-D2-pJTRA.js";import"./iframe-B4dX3bd3.js";import"./index-2vnaEWwy.js";import"./types-CXRWlzj-.js";import"./color-mode-Bs4Gz60I.js";import"./iconBase-AXKmiLLI.js";import"./icon-button-Cun9L0Vt.js";import"./button-C9r8DCdA.js";import"./factory-qU0kTcex.js";import"./create-recipe-context-C3wpX-tJ.js";import"./attr-DhmmAXiK.js";import"./spinner-Cy5XVZac.js";import"./skeleton-DJqvmLNx.js";import"./index-CAHpqgbX.js";import"./stack-BhGZ5tx7.js";import"./flex-CRIE8yUF.js";import"./icon-DJIySF__.js";import"./index-zt5Xy--Z.js";import"./index-C0N8AUCS.js";import"./index-BucdvixH.js";import"./index.esm-DfgaqmZ1.js";import"./index-B-pu2-mP.js";import"./index-CzPBYKVu.js";import"./link-SJvcF25T.js";import"./types-D1WLhCt2.js";import"./h-stack-DP37XreD.js";import"./field-BAzpa4_U.js";import"./create-slot-recipe-context-B7jX8uZg.js";import"./use-field-context-BFFcYpjq.js";import"./create-context-D-cni63V.js";import"./factory-CEUAgGkR.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cl1aTswv.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-VUxFe_Az.js";import"./index-CEIB1emd.js";import"./index-B6TDlUA9.js";import"./use-locale-context-Dyg8A8fN.js";import"./use-event-CaEHYw73.js";import"./index-CvSg4Z2g.js";import"./useColorFormatConverter-GgWhum32.js";import"./index-_JZpkHP6.js";import"./ReactIconWrapper-CUEOKwLh.js";import"./input-group-DVYpWS9r.js";import"./input-DHTQ0Rn6.js";import"./useTranslation-DWKn3ilv.js";import"./context-HV8Df1a6.js";import"./portal-BXqtXroa.js";import"./v-stack-CBLdgZKI.js";import"./menu-CwyAXImj.js";import"./icons-47OXJK41.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DMj52ZUx.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
