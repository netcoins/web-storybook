import{j as b}from"./jsx-runtime-DN61zNGZ.js";import{r as g}from"./index-BpLaRMlr.js";import{M as i}from"./index-DT-Ei4lK.js";import"./iframe-Bb0sqAOi.js";import"./index-B-XcZoZ0.js";import"./types-BQNeT5Qa.js";import"./color-mode-oIg2W76_.js";import"./iconBase-16T0ykv2.js";import"./icon-button-B2q4aMYR.js";import"./button-BaH4UkFI.js";import"./factory-BwfxkOOd.js";import"./create-recipe-context-dDu3KTWq.js";import"./attr-DhmmAXiK.js";import"./spinner-DB_WoPMT.js";import"./skeleton-Bgq5UWu9.js";import"./index-s83KEs-X.js";import"./stack-DvFkM1J6.js";import"./flex-jNFRfmkW.js";import"./icon-CdGyX7ym.js";import"./index-BbEepsVM.js";import"./index-CUNv1l2y.js";import"./index-D9Obgnsh.js";import"./index.esm-Du0wQEQk.js";import"./index-zBzlk1OF.js";import"./index-BH_pea3h.js";import"./link-Cm4kuNaV.js";import"./types-CHDcdjaV.js";import"./h-stack-BxYUVywO.js";import"./field-BR9kJdf6.js";import"./create-slot-recipe-context-BG38Zyxr.js";import"./use-field-context-B9amWtgF.js";import"./create-context-DB95bXe4.js";import"./factory-BjKZl4UI.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-H3FUvUIu.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CitJgtYc.js";import"./index-BOpFzUyp.js";import"./index-Df8eR-gd.js";import"./use-locale-context-BXRcHZiF.js";import"./use-event-B7Ws49zX.js";import"./index-Ft9-vfVz.js";import"./useColorFormatConverter-DiQkZuFm.js";import"./index-D27ozKAg.js";import"./ReactIconWrapper-BTA-9fRh.js";import"./input-group-CeUP5YCk.js";import"./input-BuxJfbIX.js";import"./useTranslation-DMN-v_J4.js";import"./context-DMnnu1Tk.js";import"./portal-CD9Liav7.js";import"./v-stack-B-wIRNJs.js";import"./menu-CqeOWfl7.js";import"./icons-Dc8ljpWq.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cwbiq6Kx.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
