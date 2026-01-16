import{j as b}from"./jsx-runtime-DPMpNnXZ.js";import{r as g}from"./index-B84vUFZt.js";import{M as i}from"./index-DZL8UHvN.js";import"./iframe-D4MesB1-.js";import"./index-C8bpv_V7.js";import"./types-kOqasbvD.js";import"./color-mode-CTbOIU0k.js";import"./iconBase-Ba8qU5zn.js";import"./icon-button-BTouLfA7.js";import"./button-P1cOoHXw.js";import"./factory-DyNYFw1b.js";import"./create-recipe-context-Dvnq3eBD.js";import"./attr-DhmmAXiK.js";import"./spinner-B0SaDVG2.js";import"./skeleton-0FhqIADY.js";import"./index-BuaD3O4C.js";import"./stack-zAxET8FT.js";import"./flex-DRNaZEXn.js";import"./icon-Bo4cYvSi.js";import"./index-TWaqeXJZ.js";import"./index-BBii0Qfa.js";import"./index-3BiFS6LZ.js";import"./index.esm-DcEY3u_i.js";import"./index-Dzhhx08H.js";import"./index-BbzQ0eBl.js";import"./link-MGL2L3Gd.js";import"./types-JE7Own_N.js";import"./h-stack-D6MdfYD1.js";import"./field-DMIbX8Fj.js";import"./create-slot-recipe-context-Dcgux3jd.js";import"./use-field-context-J6-MTnZZ.js";import"./create-context-TtKSSaLt.js";import"./factory-BNSsrlYH.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BBCdx3we.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-tKXbQ0NM.js";import"./index-BAYPxm6O.js";import"./index-CDgzWiXg.js";import"./use-locale-context-Dp4Prn2t.js";import"./use-event-D-vCkS8Y.js";import"./index-D46kH2u7.js";import"./useColorFormatConverter-BlgdVcHW.js";import"./index-CMlnaBwA.js";import"./ReactIconWrapper-BiBsPajd.js";import"./input-group-CxnQlXKX.js";import"./input-AjiqNsiC.js";import"./useTranslation-tVwBD663.js";import"./context-v5lDWSZy.js";import"./portal-pCdmIA6B.js";import"./v-stack-Ccf898yx.js";import"./menu-BncESTa5.js";import"./icons-DekzO3u_.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CxzNjwr8.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
