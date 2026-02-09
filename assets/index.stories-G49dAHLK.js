import{j as b}from"./jsx-runtime-aDiBerqi.js";import{r as g}from"./index-QHtmZMOc.js";import{M as i}from"./index-C2cmLtKG.js";import"./iframe-BWGQ-e-y.js";import"./index-CAtxl7Su.js";import"./types-BpWNOtjD.js";import"./color-mode-BBQ25pFD.js";import"./iconBase-Bhx-vmP5.js";import"./icon-button-Dp2P5kSP.js";import"./button-CTJoBQDg.js";import"./factory-CAiCcLdZ.js";import"./create-recipe-context-C2eWbnfB.js";import"./attr-DhmmAXiK.js";import"./spinner-R6GGbuEq.js";import"./skeleton-5QSm1s_2.js";import"./index-DX2m3BLu.js";import"./stack-Cqe9oQFW.js";import"./flex-8HDKQfdF.js";import"./icon-Db8B1RaL.js";import"./index-MQf2AjTF.js";import"./index-BZGD7Fiv.js";import"./index-Ddu9SXkF.js";import"./index.esm-CHS3J8z_.js";import"./index-C2dNhbP-.js";import"./index-CG0T9QDm.js";import"./link-Dsd5wlRm.js";import"./types-CwTSBJMe.js";import"./h-stack-BKBlAXGo.js";import"./field-XEuq1P6f.js";import"./create-slot-recipe-context-DZDh3thd.js";import"./use-field-context-CoxZdFQx.js";import"./create-context-CjGUCdtg.js";import"./factory-BoaWCybp.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BoXqgBC9.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BRWKyAje.js";import"./index-Bc4lnCfi.js";import"./index-Cx4ZODQ4.js";import"./use-locale-context-DfLxTiQ3.js";import"./use-event-D3pFQRsx.js";import"./index-BPAhVPPd.js";import"./useColorFormatConverter-BLmyuoSu.js";import"./index-E35ZmiOz.js";import"./ReactIconWrapper-DwGnhdBs.js";import"./input-group-DR8hxtdF.js";import"./input-BW5XNzsf.js";import"./useTranslation-CGgulXDx.js";import"./context-zwS_Nzoe.js";import"./portal-CnfI3ZRY.js";import"./v-stack-xj3aGp4x.js";import"./menu-CbHaIP-E.js";import"./icons-nEHd0VRJ.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-B2GTqbEU.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
