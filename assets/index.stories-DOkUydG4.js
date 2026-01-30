import{j as b}from"./jsx-runtime-DQRH0j5X.js";import{r as g}from"./index-BubfLMbL.js";import{M as i}from"./index-DX1oSMFr.js";import"./iframe-BVQCg7xC.js";import"./index-BbwqC6Ae.js";import"./types-BVN3CnT0.js";import"./color-mode-C3UDCXEJ.js";import"./iconBase-CM--pjBo.js";import"./icon-button-D7ekBhbA.js";import"./button-DZd_Kduf.js";import"./factory-B1aBIMGK.js";import"./create-recipe-context-DdNXpoAF.js";import"./attr-DhmmAXiK.js";import"./spinner-T6Hr3AsQ.js";import"./skeleton-0zeboJnp.js";import"./index-DCNXGTV4.js";import"./stack-CTVXPrNe.js";import"./flex-CLR3R1iK.js";import"./icon-Cdp4hAfn.js";import"./index-gh_q5Vq5.js";import"./index-C3ti-HwY.js";import"./index-BwizbvV0.js";import"./index.esm-kzcABPTx.js";import"./index-Dw7vS_jt.js";import"./index-dgh4_rh0.js";import"./link-6Dhw6-5Q.js";import"./types-D-EFl2G1.js";import"./h-stack-CZg-12JE.js";import"./field-CNZomNUa.js";import"./create-slot-recipe-context-CZuUheyz.js";import"./use-field-context-D_uG5wIF.js";import"./create-context-BZwjfeFF.js";import"./factory-CqNQS8ZP.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CAjeTCzs.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BJ10RGUV.js";import"./index-BlFz10_C.js";import"./index-CF4oSWzG.js";import"./use-locale-context-DndsJTqL.js";import"./use-event-Bp9SE3Le.js";import"./index-D1MgpPLZ.js";import"./useColorFormatConverter-vRg7l7G7.js";import"./index-CiiREIQs.js";import"./ReactIconWrapper-CqkxkARI.js";import"./input-group-BrVJGj9c.js";import"./input-COITk3nW.js";import"./useTranslation-D0cQKshW.js";import"./context-CEBmlvfG.js";import"./portal-C_eP6Y50.js";import"./v-stack-CAupno3D.js";import"./menu-CJUcXvO6.js";import"./icons-D6TY66CU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DPCZ0c3E.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
