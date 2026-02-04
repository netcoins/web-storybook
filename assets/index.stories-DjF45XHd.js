import{j as b}from"./jsx-runtime-BEUhhxPa.js";import{r as g}from"./index-DBM23BuH.js";import{M as i}from"./index-CFR2pOEO.js";import"./iframe-H47w96H_.js";import"./index-lUG50Ydr.js";import"./types-BO4TGL6A.js";import"./color-mode-BMBt2Nmr.js";import"./iconBase-Ce4ODmaK.js";import"./icon-button-BgMEKwQI.js";import"./button-Bt0Py9ao.js";import"./factory-Aauz6rz0.js";import"./create-recipe-context-BE1JFOyh.js";import"./attr-DhmmAXiK.js";import"./spinner-B_S03KXX.js";import"./skeleton-5rDaoyNq.js";import"./index--LIm_mEG.js";import"./stack-BAkw1SmN.js";import"./flex-B6-wpiI0.js";import"./icon-DoKXRjjY.js";import"./index-CSk_JCd_.js";import"./index-C-KqrdIv.js";import"./index-B7Dp0GkK.js";import"./index.esm-6gSzw6bH.js";import"./index-DDupQqLk.js";import"./index-D_mJZdjw.js";import"./link-mnF3-U0P.js";import"./types-BSgYhEb4.js";import"./h-stack-C_TmhtUU.js";import"./field-9tam2a-o.js";import"./create-slot-recipe-context-Dq88yZwk.js";import"./use-field-context-1ftB-pTa.js";import"./create-context-BtuTRjzY.js";import"./factory-Cvju92ob.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-eUexiVUl.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Hs8SwUuK.js";import"./index-BNU9fL7F.js";import"./index-DoSglGze.js";import"./use-locale-context--hyY7w9l.js";import"./use-event-CUJPwVLF.js";import"./index-BlOipdH5.js";import"./useColorFormatConverter-CJy6vuir.js";import"./index-v1hrWzx6.js";import"./ReactIconWrapper-DLt_qZJx.js";import"./input-group-BfVVOdWb.js";import"./input-CMI6jzHE.js";import"./useTranslation-CeFF08Q4.js";import"./context-DAE-rZ14.js";import"./portal-tv2xz5Y8.js";import"./v-stack-DX5_I4GQ.js";import"./menu-gjIx8NWw.js";import"./icons-DloqsmNL.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-KOIc5SBx.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
