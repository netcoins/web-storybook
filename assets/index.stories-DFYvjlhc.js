import{j as b}from"./jsx-runtime-DgtzbHQJ.js";import{r as g}from"./index-PX2AmoWm.js";import{M as i}from"./index-DUrUFnVg.js";import"./iframe-BW7K25f6.js";import"./index-B6nm3A-1.js";import"./types-DXr63WN4.js";import"./color-mode-ChsUh5W6.js";import"./iconBase-Co39pdQz.js";import"./icon-button-D-HeHS8g.js";import"./button-27Tv2S1b.js";import"./factory-sYn6EvwR.js";import"./create-recipe-context-DVMpvz8n.js";import"./attr-DhmmAXiK.js";import"./spinner-4fCeQuBn.js";import"./skeleton-BW3WyJ6G.js";import"./index-Cirj_Cwb.js";import"./stack-CC6yZPtC.js";import"./flex-DsQKlC28.js";import"./icon-D5F8lPFD.js";import"./index-DrzeFSM5.js";import"./index-BpNQX3SF.js";import"./index-C6h1VxZ2.js";import"./index.esm-BMOBLBOC.js";import"./index-CJyyCebj.js";import"./index-Cc6MKl7I.js";import"./link-BsGhvhVB.js";import"./types-DLeWL5xr.js";import"./h-stack-CYGL9zsF.js";import"./field-180L7Zc4.js";import"./create-slot-recipe-context-D5MLl0N3.js";import"./use-field-context-Dfd-UwG1.js";import"./create-context-Bo_m7ogT.js";import"./factory-E-i8mIub.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dn_ob5u2.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-B6BRnUrr.js";import"./index-gBPXjBrv.js";import"./index-Cs-rpkpj.js";import"./use-locale-context-DZeAGfKZ.js";import"./use-event-BaCTvwr8.js";import"./index-C_ZWhFp0.js";import"./useColorFormatConverter-BxWLtmA8.js";import"./index-DmT_5D8c.js";import"./ReactIconWrapper-cAil9XMs.js";import"./input-group-DatiUVit.js";import"./input-CJeNacbs.js";import"./useTranslation-Du3_5xbn.js";import"./context-CoibbDbn.js";import"./portal-Qbg1g_qU.js";import"./v-stack-CYI3Q8hP.js";import"./menu-CeMGh1NL.js";import"./icons-BnkcNdSt.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-c7mAh07H.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
