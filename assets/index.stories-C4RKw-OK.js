import{j as b}from"./jsx-runtime-B_bxK6AO.js";import{r as g}from"./index-BU-LQum-.js";import{M as i}from"./index-BwbqQ0WE.js";import"./iframe-rs6ZSAg3.js";import"./index-YhyUNo94.js";import"./types-DUe2NkXm.js";import"./color-mode-frYqiW2M.js";import"./iconBase-DAjFcNyt.js";import"./icon-button-Dl8aF8kt.js";import"./button-QYHzLzFl.js";import"./factory-D1-L-1Bf.js";import"./create-recipe-context-CBDLXZVH.js";import"./attr-DhmmAXiK.js";import"./spinner-EhcSM0W9.js";import"./skeleton-Cn5eM1xq.js";import"./index-DU2zjQUg.js";import"./stack-BoHGtZp7.js";import"./flex-CtMCnVhG.js";import"./icon-FeZd41u5.js";import"./index-DhEv2XJ6.js";import"./index-5SVPf6K0.js";import"./index-Ci8AX3uI.js";import"./index.esm-D5QtIcBu.js";import"./index-Csw2GQCM.js";import"./link-oJvroiNG.js";import"./types-TeXkjDuC.js";import"./index-Ds4n3OR0.js";import"./h-stack-3J_MyT7e.js";import"./field-C9M2rUmW.js";import"./create-slot-recipe-context-Cqmdk6gb.js";import"./use-field-context-B1N_xuxQ.js";import"./create-context-DqC0W9EW.js";import"./factory-DCC48t7O.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DDwvyprB.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-B3sguw5S.js";import"./index-OKVNZlq8.js";import"./index-BdoqXbJm.js";import"./use-locale-context-Cz5KcUc7.js";import"./use-event-BBcVZrDH.js";import"./index-C4XQciBq.js";import"./useColorFormatConverter-d1OGdus-.js";import"./index-CrOPksQR.js";import"./ReactIconWrapper-DOb9jJKQ.js";import"./input-group-DDxMe3vw.js";import"./input-BBmNzH58.js";import"./useTranslation-DTBxaKvB.js";import"./context-DEcoqtLG.js";import"./portal-Cl1EdDzx.js";import"./v-stack-CfpAlP84.js";import"./menu-CSyXQLyU.js";import"./icons-CSmj-NnU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CM6ps-UN.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
