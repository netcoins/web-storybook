import{j as b}from"./jsx-runtime-xeqYPewq.js";import{r as g}from"./index-hVwbLp-A.js";import{M as i}from"./index-l07okmt0.js";import"./iframe-BjnDpM1q.js";import"./index-CWFPn0Ot.js";import"./types-D1chk2Wc.js";import"./color-mode-BjAyG-Xp.js";import"./iconBase-BERM_hi-.js";import"./icon-button-DHsl625e.js";import"./button-DRIY0DBw.js";import"./factory-DRBblL-U.js";import"./create-recipe-context-C7mXzTzl.js";import"./attr-DhmmAXiK.js";import"./spinner-DpPWGqJ2.js";import"./skeleton-keKVgNg9.js";import"./index-B4QVXL_Y.js";import"./stack-DFTLJjt_.js";import"./flex-C9se37Rv.js";import"./icon-BT06J39D.js";import"./index-BrexQjqi.js";import"./index-C5YwaiAE.js";import"./index-Due1ABuC.js";import"./index.esm-D0-EKn2s.js";import"./index-Co8ibUmP.js";import"./index-c2ygc6ek.js";import"./link-BYcZQtSM.js";import"./types-8eU0r5Rg.js";import"./h-stack-BjmRzpBY.js";import"./field-D5qeFB0k.js";import"./create-slot-recipe-context-B_OtZbOA.js";import"./use-field-context-BdETl923.js";import"./create-context-Htpb7xq5.js";import"./factory-C_CkSUHW.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-FUSVVJH4.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-il-cW10v.js";import"./index-Cscg3vxp.js";import"./index-BwgPNZka.js";import"./use-locale-context-CLphdXLH.js";import"./use-event-Qa8ZsarZ.js";import"./index-aMl9rDuA.js";import"./useColorFormatConverter-DMOkDtYH.js";import"./index-BN6QUe6G.js";import"./ReactIconWrapper-DwMlMWuR.js";import"./input-group-CWgl5ohT.js";import"./input-42ybHDUn.js";import"./useTranslation-DPVWq8Lh.js";import"./context-BO2fcgJG.js";import"./portal-CIs0rsSY.js";import"./v-stack-Dwu93lr1.js";import"./menu-DSOaLH5s.js";import"./icons-ewpvCfel.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-B1U2Q2u-.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
