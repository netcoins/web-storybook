import{j as b}from"./jsx-runtime-Ciu9vFw6.js";import{r as g}from"./index-D3ZUCIWZ.js";import{M as i}from"./index-BFZIXxnc.js";import"./iframe-CYfU2A1M.js";import"./index-WN_vrf3-.js";import"./types-D8j8-XKG.js";import"./color-mode-BYZ-u1xo.js";import"./iconBase-DqaTlC-7.js";import"./icon-button-B6w575rN.js";import"./button-CMIrRkt-.js";import"./factory-8Q1V0TBv.js";import"./create-recipe-context-XaO16wtv.js";import"./attr-DhmmAXiK.js";import"./spinner-BoI7ccru.js";import"./skeleton-AO7Q0msM.js";import"./index-BI4iJpE3.js";import"./stack-CcYnFDzW.js";import"./flex-CnHbzLHW.js";import"./icon-UQmEZHqh.js";import"./index-Po7Q-z57.js";import"./index-BmzQMCN_.js";import"./index-Okme7a3P.js";import"./index.esm-DxE7fkaB.js";import"./index-E78eAEP7.js";import"./index-CmqROfgt.js";import"./link-DY0Ah9jH.js";import"./types-DTBPHNV1.js";import"./h-stack-BqmRn28x.js";import"./field-MqeMVvww.js";import"./create-slot-recipe-context-B_S8L_ac.js";import"./use-field-context-Bd-BF34x.js";import"./create-context-C1ilVfGZ.js";import"./factory-B6vrsh1u.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DYvA1DRX.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CrSfnzVK.js";import"./index-CAyElBx_.js";import"./index-CCXExiXg.js";import"./use-locale-context-Chy5OiYs.js";import"./use-event-CwJRwwTj.js";import"./index-DUk37rid.js";import"./useColorFormatConverter-CKLsest-.js";import"./index-k4ysbLRL.js";import"./ReactIconWrapper-B-PErgw5.js";import"./input-group-qipdNtDM.js";import"./input-BG84M-w4.js";import"./useTranslation-BP-AskRp.js";import"./context-DqgmeV6A.js";import"./portal-VBf9T9yw.js";import"./v-stack-OTjU6NWy.js";import"./menu-R7rTnshB.js";import"./icons-ZEaVCJBU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Bc3kDtBw.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
