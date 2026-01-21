import{j as b}from"./jsx-runtime-Bkqm60Fd.js";import{r as g}from"./index-gq4ihODM.js";import{M as i}from"./index-CQbzNktJ.js";import"./iframe-C6kebKm6.js";import"./index-CGFCcWsr.js";import"./types-B0g6DURd.js";import"./color-mode-DW5oD5QQ.js";import"./iconBase-BBlRpcer.js";import"./icon-button-Dr9mtXdG.js";import"./button-f65VYvbu.js";import"./factory-CWmNxzkf.js";import"./create-recipe-context-Dpntgim3.js";import"./attr-DhmmAXiK.js";import"./spinner-hkNlqNv1.js";import"./skeleton-Dks-ZOnr.js";import"./index-DZMJxMb1.js";import"./stack-BkETM8K_.js";import"./flex-BBE0JoKc.js";import"./icon-pNcQxXL6.js";import"./index-CKHISS95.js";import"./index-CoC_24DW.js";import"./index-ify33iHQ.js";import"./index.esm-BGkGkyjO.js";import"./index-Cm936vrU.js";import"./index-fNZAsoi2.js";import"./link-BpQG-lVm.js";import"./types-CgCUjcX1.js";import"./h-stack-qJ1wPwBe.js";import"./field-yC9FZpso.js";import"./create-slot-recipe-context-DUJS-TNr.js";import"./use-field-context-CVW_AzM3.js";import"./create-context-DOxQlMuh.js";import"./factory-u7MOd-Lz.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DJ87Ieuc.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-mKTgb1Ny.js";import"./index-AY189Qph.js";import"./index-9OSA5oOi.js";import"./use-locale-context-BdgXv1Vq.js";import"./use-event-qR8_oNUj.js";import"./index-CZNgsGyI.js";import"./useColorFormatConverter-CG70OPhG.js";import"./index-BNtmiEke.js";import"./ReactIconWrapper-CQfd01FC.js";import"./input-group-zYuZLa2K.js";import"./input-YBzboODu.js";import"./useTranslation-CPKSz1ZD.js";import"./context-BZEhSTuD.js";import"./portal-Bs0ob-7J.js";import"./v-stack-D2-I2g4S.js";import"./menu-yiTR_eY_.js";import"./icons-CdJ08tX4.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CXJUiRiq.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
