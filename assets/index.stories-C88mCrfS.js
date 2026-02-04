import{j as b}from"./jsx-runtime-BSdmSggo.js";import{r as g}from"./index-CARzu7rq.js";import{M as i}from"./index-vfNfsa9O.js";import"./iframe-CuKY7SOM.js";import"./index-IaUkYNMG.js";import"./types-BzdqdPi6.js";import"./color-mode-WW2pnMXF.js";import"./iconBase-2FpXMSd-.js";import"./icon-button-C54AeiWA.js";import"./button-BS_1QXZE.js";import"./factory-79QfSACv.js";import"./create-recipe-context-D2V1WGtt.js";import"./attr-DhmmAXiK.js";import"./spinner-CfFi7YI2.js";import"./skeleton-Cw8X7MCm.js";import"./index-o-DUAi9a.js";import"./stack-oG4w9e4U.js";import"./flex-DlH2HMyZ.js";import"./icon-DdcHrItk.js";import"./index-BRG-lOLa.js";import"./index-B17WFpk1.js";import"./index-CDg15xMy.js";import"./index.esm-BwvhJAx5.js";import"./index-BdBvZJQH.js";import"./index-CrQtmc8z.js";import"./link-CbgcltMH.js";import"./types-e_SBmQBN.js";import"./h-stack-DK_-EpQd.js";import"./field-rAVWqR2c.js";import"./create-slot-recipe-context-TZSfpw8m.js";import"./use-field-context-Bsn0mCKA.js";import"./create-context-Dph0B3KV.js";import"./factory-MMNosZ5Q.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DY6x1TVa.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CNRCaoLc.js";import"./index-hCnU0B4X.js";import"./index-DNz81eU8.js";import"./use-locale-context-Be-1an08.js";import"./use-event-CjaQNk7W.js";import"./index-CA6Q5JCF.js";import"./useColorFormatConverter-CD7Fod3m.js";import"./index-Dl8juEZR.js";import"./ReactIconWrapper-DdvG6CoA.js";import"./input-group-shsedVgc.js";import"./input-CoToeH7l.js";import"./useTranslation-CQKm1oCx.js";import"./context-DA6N7tx9.js";import"./portal-DJRaEqga.js";import"./v-stack-BeWFPYyc.js";import"./menu-6qJnUZVw.js";import"./icons-D7P4zFC9.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-B7ifhGGp.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
