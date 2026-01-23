import{j as b}from"./jsx-runtime-B1_a8hwj.js";import{r as g}from"./index-WONpn9lv.js";import{M as i}from"./index-pLovy4Ec.js";import"./iframe-B2VuCFQ1.js";import"./index-BBqGJT16.js";import"./types-DhdDGB6l.js";import"./color-mode-tPdHy1zU.js";import"./iconBase-QDQcrdxX.js";import"./icon-button-DRy3v8Nn.js";import"./button-DJA01QwW.js";import"./factory-DxsDglld.js";import"./create-recipe-context-yK9vg825.js";import"./attr-DhmmAXiK.js";import"./spinner-Conn5JmV.js";import"./skeleton-gjG5zari.js";import"./index-CF-c-ho_.js";import"./stack-89CfcTh7.js";import"./flex-B-JKexX_.js";import"./icon-CV2PHFSI.js";import"./index-C_LPTu6O.js";import"./index-gEuC-uUj.js";import"./index-CzIR_mNn.js";import"./index.esm-B9dmDpwL.js";import"./index-DlJ2vCuc.js";import"./index-CYBH8In8.js";import"./link-DAhXwOBi.js";import"./types-BYYdkN1a.js";import"./h-stack-KUwGiz8Z.js";import"./field-DVYDV2rY.js";import"./create-slot-recipe-context-Dz9SWyWT.js";import"./use-field-context-BwTqn6hk.js";import"./create-context-B-iLW4YK.js";import"./factory-BCoThrpa.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DzPJTd2M.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CmHIf-20.js";import"./index-C5vwWYFn.js";import"./index-Bzj8OEaq.js";import"./use-locale-context-B9yuIw0e.js";import"./use-event-Biaa3Uyt.js";import"./index-Bz1C2Wy4.js";import"./useColorFormatConverter-DMpEqu4K.js";import"./index-DpYYlvoi.js";import"./ReactIconWrapper-C7m0kMqY.js";import"./input-group-BEKqCpRD.js";import"./input-CDDf3nob.js";import"./useTranslation-DmsJw1Jy.js";import"./context-BbxKxCsm.js";import"./portal-BQhCBtsP.js";import"./v-stack-D9egOa1G.js";import"./menu-DTCh_o3d.js";import"./icons-BCzLtvup.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-C3fAboWb.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
