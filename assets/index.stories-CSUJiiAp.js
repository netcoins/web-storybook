import{j as b}from"./jsx-runtime-CSZfmDaY.js";import{r as g}from"./index-D_M76xYj.js";import{M as i}from"./index-u5-IwmQ4.js";import"./iframe-_JSWe4WA.js";import"./index-BPK3iHUK.js";import"./types-oXH3xSaR.js";import"./color-mode-DD0VJL-q.js";import"./iconBase-D7L0XnIT.js";import"./icon-button-CQmhurw8.js";import"./button-C8i7scKm.js";import"./factory-Bf5cl-qM.js";import"./create-recipe-context-BAsP0xW3.js";import"./attr-DhmmAXiK.js";import"./spinner-BW76lQJ7.js";import"./skeleton-C4iODUiQ.js";import"./index-DrN1yt4o.js";import"./stack-DaJIfKoy.js";import"./flex-8fiJaPiW.js";import"./icon-CV2FadQy.js";import"./index-CgTCm2Rg.js";import"./index-B4obiZ8X.js";import"./index-SXVJUioB.js";import"./index.esm-DNuHBpzF.js";import"./index-B010y4eu.js";import"./link-DZBGLdRO.js";import"./types-6RqBevXW.js";import"./index-7pFrFxRr.js";import"./h-stack-DeRai30g.js";import"./field-C_iZ4jUF.js";import"./create-slot-recipe-context-BGksuD5H.js";import"./use-field-context-jz8F-fgU.js";import"./create-context-CryPlRD8.js";import"./factory-BuBYz4y9.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CaKwou38.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CkPHRQKa.js";import"./index-BcFH91hk.js";import"./index-B_ZKmCDt.js";import"./use-locale-context-DjR1DQEv.js";import"./use-event-BUn61Cpu.js";import"./index-BVMuYYeN.js";import"./useColorFormatConverter-DT3vhYoa.js";import"./index-n9CWvb_C.js";import"./ReactIconWrapper-D-aWaBmU.js";import"./input-group-mJqGvEp9.js";import"./input-BiADWWrv.js";import"./useTranslation-C3tSPb_8.js";import"./context-XqpOLSFG.js";import"./portal-DZnijUlF.js";import"./v-stack-Ef3SopTy.js";import"./menu-j29rdZZI.js";import"./icons-Sbvwkeqm.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Dm5ba4mG.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
