import{j as b}from"./jsx-runtime-CkPrEKpc.js";import{r as g}from"./index-B6FdbTTN.js";import{M as i}from"./index-CWt_7yus.js";import"./iframe-CdM8ZGzA.js";import"./index-E2Fr1nBJ.js";import"./types-BY3RZpTy.js";import"./color-mode-DhbhUCnF.js";import"./iconBase-Dl7blY0Y.js";import"./icon-button-DPgBuy1M.js";import"./button-om885L8d.js";import"./factory-Czip7KJ9.js";import"./create-recipe-context-BCZzhAeH.js";import"./attr-DhmmAXiK.js";import"./spinner-BefKdmgT.js";import"./skeleton-DWm6ToPd.js";import"./index-JW3czXfw.js";import"./stack-Nnw6deO_.js";import"./flex-C0dB4hPV.js";import"./icon-DCaPN1_Z.js";import"./index-0VOT2uIS.js";import"./index-xpaf20Kg.js";import"./index-CiMJFm-y.js";import"./index.esm-j5u7tfNz.js";import"./index-Dik4zgp-.js";import"./index-CAIITE4S.js";import"./link-BodAYEvZ.js";import"./types-CunnnilO.js";import"./h-stack-BkALONuK.js";import"./field-C8-g2hXc.js";import"./create-slot-recipe-context-DoXLfIR3.js";import"./use-field-context-Dcf3s8TL.js";import"./create-context-b9M6o06d.js";import"./factory-C1trIdaF.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-TFVf1OGg.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-C5LFHObc.js";import"./index-g8Q00vWR.js";import"./index-SSq5X-CS.js";import"./use-locale-context-CWEiIogj.js";import"./use-event-Dy5tPKq7.js";import"./index-B9MCDdfV.js";import"./useColorFormatConverter-IhfvWfEW.js";import"./index-ChYy3Kbk.js";import"./ReactIconWrapper-D73C_cjA.js";import"./input-group-kHQrnFF5.js";import"./input-B-1eZXGv.js";import"./useTranslation-C7sPUDmK.js";import"./context-B6I-sbge.js";import"./portal-CPbwQG-i.js";import"./v-stack-COxYVqUh.js";import"./menu-DoOPYgjr.js";import"./icons-0HV41L9F.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CfxB-CiV.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
