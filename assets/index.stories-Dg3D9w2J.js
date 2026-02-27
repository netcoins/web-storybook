import{j as b}from"./jsx-runtime-vvhZueLp.js";import{r as g}from"./index-CW4k7OzC.js";import{M as i}from"./index-eMlr9G6Z.js";import"./iframe-DRTKXJo7.js";import"./index-DszNNl64.js";import"./types-IRUAuDAp.js";import"./color-mode-CxtEDWX5.js";import"./iconBase-CDcIIsVK.js";import"./icon-button-CnylSYfO.js";import"./button-CzF91Jmv.js";import"./factory-BjONj8Sm.js";import"./create-recipe-context-PRG2qmi_.js";import"./attr-DhmmAXiK.js";import"./spinner-CwaiGiE5.js";import"./skeleton-DCxRYxTk.js";import"./index-CmmruF8O.js";import"./stack-CywcskUk.js";import"./flex-9XVylu8y.js";import"./icon-BzywRMAe.js";import"./index-ChpQI84Q.js";import"./index-dQReG3r6.js";import"./index-B6muhPVs.js";import"./index.esm-Dwmfs1IG.js";import"./index-DtWycZy4.js";import"./link-Bq-a5Xzq.js";import"./types-Bsle8a-S.js";import"./index-CVI0Fqtt.js";import"./h-stack-BzTPSl56.js";import"./field-D9fbaPfn.js";import"./create-slot-recipe-context-YdEYqDmV.js";import"./use-field-context-DxrplzGw.js";import"./create-context-kVyYew4k.js";import"./factory-Do0w9V6y.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-dVaTL65L.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-lT5it9nE.js";import"./index-DuBAXsA-.js";import"./index-Orm0DYhG.js";import"./use-locale-context-BsuG4Ck0.js";import"./use-event-CEh8TtW3.js";import"./index-BBigu8H7.js";import"./useColorFormatConverter-DbJL0N3c.js";import"./index-BAYfHPwF.js";import"./ReactIconWrapper-Cr9-oIap.js";import"./input-group-8evoVNMB.js";import"./input-D3qxWOGr.js";import"./useTranslation-BH6qTFge.js";import"./context-BcYZCto6.js";import"./portal-C_wXQjgF.js";import"./v-stack-Dx-P7jt4.js";import"./menu-Dwfed6CD.js";import"./icons-BS1TKjPS.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-KSljdd3H.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
