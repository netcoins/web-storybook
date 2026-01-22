import{j as b}from"./jsx-runtime-ClexiTxb.js";import{r as g}from"./index-WN4e39Se.js";import{M as i}from"./index-Cs2ak4bF.js";import"./iframe-DtMEe-Td.js";import"./index-Ck4EYIwe.js";import"./types-BK9vRONP.js";import"./color-mode-agyQOBag.js";import"./iconBase-Be7_ooDO.js";import"./icon-button-BTOclPHf.js";import"./button-JhAiIS8p.js";import"./factory-C5i_ciJ1.js";import"./create-recipe-context-rijHqnmR.js";import"./attr-DhmmAXiK.js";import"./spinner-CF9eouy2.js";import"./skeleton-BX7fgfQf.js";import"./index-Sp1bLZGt.js";import"./stack-hi6LYyaU.js";import"./flex-B8J5oxX5.js";import"./icon-Cjh8QcCV.js";import"./index-CBWdwZgo.js";import"./index-D9V3Vq8w.js";import"./index-BqCXn1Jr.js";import"./index.esm-04lDmL97.js";import"./index-Cq9pnc1_.js";import"./index-b7yCAc4h.js";import"./link-DxePKjNF.js";import"./types-nOSRuCZB.js";import"./h-stack-lYqqHfH6.js";import"./field-BdQj6FYP.js";import"./create-slot-recipe-context-CnumcjDc.js";import"./use-field-context-DKKsys3H.js";import"./create-context-CeHeP5jK.js";import"./factory-5KQQv-OK.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-O4mvPwhC.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-C8n5XSO9.js";import"./index-BXCsrlVA.js";import"./index-CWvqYOYt.js";import"./use-locale-context-CjIzPHy-.js";import"./use-event-CzoqMErD.js";import"./index-DhfqR7uh.js";import"./useColorFormatConverter-BJLfccrn.js";import"./index-CsQ9nnTT.js";import"./ReactIconWrapper-B1XLpzEe.js";import"./input-group-D_Si0z-o.js";import"./input-C5NYBALn.js";import"./useTranslation-lKY2jKxU.js";import"./context-BrtqSTqa.js";import"./portal-C-TbvJNz.js";import"./v-stack-DCdFZxxa.js";import"./menu-ClSvtfOP.js";import"./icons-BqKrDrRI.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CLrqNuws.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
