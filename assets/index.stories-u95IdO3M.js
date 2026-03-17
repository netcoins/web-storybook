import{j as b}from"./jsx-runtime-0OGM7D8K.js";import{r as g}from"./index-1P1cuAZu.js";import{M as i}from"./index-BQ5REIei.js";import"./iframe-B7ROeOph.js";import"./index-D5o6KYl6.js";import"./types-Cz55r_dD.js";import"./color-mode-CAFxY0To.js";import"./iconBase-D9sNXsAR.js";import"./icon-button-CstuL5ue.js";import"./button-Bpjwt7-y.js";import"./factory-DPvUXeh5.js";import"./create-recipe-context-BMJ4Bne9.js";import"./attr-DhmmAXiK.js";import"./spinner-BR2YGWDH.js";import"./skeleton-gOxXofzu.js";import"./index-W1sMBFyr.js";import"./stack-CabptGAO.js";import"./flex-DN0vLbX1.js";import"./icon-DSSspk90.js";import"./index-CCa55i0U.js";import"./index-DnjV5gb5.js";import"./index-1DyJhCqa.js";import"./index.esm-BDtJ3E62.js";import"./index-B__eW-qC.js";import"./link-DT4qUxfN.js";import"./types-BAFF9zQ4.js";import"./index-DrbaCE0D.js";import"./h-stack-CmwzcZ2i.js";import"./field-MHGG9shF.js";import"./create-slot-recipe-context-CD1f4BuO.js";import"./use-field-context-CEcqr4gq.js";import"./create-context-BexXYZEx.js";import"./factory-BV6aqosp.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DoEpLGjQ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Cqc-BzUM.js";import"./index-BM1Z8WG2.js";import"./index-BJ3UbgYL.js";import"./use-locale-context-B8PG6r8S.js";import"./use-event-DLhbU-PQ.js";import"./index-DYD2VpYa.js";import"./useColorFormatConverter-ByfZbXgn.js";import"./index-Cj2AohNs.js";import"./ReactIconWrapper-WnfOSzHA.js";import"./input-group-CLh6luag.js";import"./input-CQ-HYAYt.js";import"./useTranslation-BYaH7_fl.js";import"./context-D0yalvBG.js";import"./portal-UkIc8_Hf.js";import"./v-stack-CrKh8iHh.js";import"./menu-OWAab2O2.js";import"./icons-Dvxzsnwj.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-miRviQ_q.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
