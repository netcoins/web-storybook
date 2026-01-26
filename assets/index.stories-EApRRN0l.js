import{j as b}from"./jsx-runtime-BqOX5UEi.js";import{r as g}from"./index-RlXJTQ99.js";import{M as i}from"./index-CY1cHZ6z.js";import"./iframe-BavLbHK7.js";import"./index-Bqw1nhIF.js";import"./types-Do1LstX_.js";import"./color-mode-CKMtpxB9.js";import"./iconBase-Cxlh6-T5.js";import"./icon-button-HyleWcZr.js";import"./button-COa2nJm_.js";import"./factory-DUjN4Oio.js";import"./create-recipe-context-D_oE-ofH.js";import"./attr-DhmmAXiK.js";import"./spinner-ZmIngnFW.js";import"./skeleton-DvzveMgS.js";import"./index-D-4wtkNP.js";import"./stack-DcXLkzAW.js";import"./flex-x3xZzN0g.js";import"./icon-lzrplNNo.js";import"./index-DqyRJAm4.js";import"./index-pjL6qFDq.js";import"./index-BuYXztjJ.js";import"./index.esm-BRAUSs8K.js";import"./index-CHlu-bRH.js";import"./index-qFSwcm1O.js";import"./link-CMvA-bYF.js";import"./types-khfaPnav.js";import"./h-stack-CUfsiLn9.js";import"./field-DSLMoJEu.js";import"./create-slot-recipe-context-CzdSPLme.js";import"./use-field-context-CKjogIRH.js";import"./create-context-C-NUsE_J.js";import"./factory-B8fFjxyy.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B5C4-k-Q.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Dc1chcId.js";import"./index-EnQEigIQ.js";import"./index-D6dPdGkB.js";import"./use-locale-context-ylHC4quW.js";import"./use-event-PRCWxZS7.js";import"./index-C4UcayRn.js";import"./useColorFormatConverter-B-m4EMEW.js";import"./index-BNFJ-35O.js";import"./ReactIconWrapper-D19DRfll.js";import"./input-group-qnZ92Nto.js";import"./input-BMhCU7AO.js";import"./useTranslation-BzPZNJ1h.js";import"./context-jp9zX893.js";import"./portal-D5HcaCGW.js";import"./v-stack-CEnJMNCz.js";import"./menu-HDG2wAuK.js";import"./icons-CJGjTKfj.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-ClrgB8m8.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
