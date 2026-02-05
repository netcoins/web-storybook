import{j as b}from"./jsx-runtime-DQo9fPet.js";import{r as g}from"./index-229XtvDh.js";import{M as i}from"./index-BH2jaUN3.js";import"./iframe-ChFTKlVI.js";import"./index-6tMefi7h.js";import"./types-ConKdqU2.js";import"./color-mode-QPJGjkXm.js";import"./iconBase-BaDQeOPx.js";import"./icon-button-BhFqRiCJ.js";import"./button-C1Iun9uq.js";import"./factory-CmDP7x3O.js";import"./create-recipe-context-BR_oivjX.js";import"./attr-DhmmAXiK.js";import"./spinner-BNiF-eaO.js";import"./skeleton-Cyz-s8gK.js";import"./index-C_-3R0Xz.js";import"./stack-DNowTymN.js";import"./flex-D3pQY3_v.js";import"./icon-BVUSo3jz.js";import"./index-CxqVxvyH.js";import"./index-D2JNyHYi.js";import"./index-DVgN3k1F.js";import"./index.esm-DoItNUrI.js";import"./index-DEMOt3dX.js";import"./index-BrHpvttZ.js";import"./link-CzVJR6b2.js";import"./types-BIv_f5je.js";import"./h-stack-CrDPA81d.js";import"./field-BtpOKrmq.js";import"./create-slot-recipe-context-DfignGIo.js";import"./use-field-context-CMK9blh9.js";import"./create-context-8f5wdsN6.js";import"./factory-BElNn8EN.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CwFKIzWy.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BWEtZFI-.js";import"./index-CnBJKnLv.js";import"./index-B09YaBTx.js";import"./use-locale-context-COiaeQ91.js";import"./use-event-BT18evZq.js";import"./index-OOj0T6ao.js";import"./useColorFormatConverter-CTUw8_LT.js";import"./index-YrrtSlZ5.js";import"./ReactIconWrapper-BIkJfwQC.js";import"./input-group-DlOeY0l6.js";import"./input-BSMyX0t4.js";import"./useTranslation-B4hPspsh.js";import"./context-DiqkUnTP.js";import"./portal-DNdAXb0S.js";import"./v-stack-wi9u64sW.js";import"./menu-DrVK54_n.js";import"./icons-DOKZWjtD.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cz1-9X4W.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
