import{j as b}from"./jsx-runtime-DxtjtboY.js";import{r as g}from"./index-L3vAlb-y.js";import{M as i}from"./index-D6oyxYIJ.js";import"./iframe-DEysEr8S.js";import"./index-C_8tFSs8.js";import"./types-D_kNePt8.js";import"./color-mode-h7cJMvYu.js";import"./iconBase-BUq_hCdc.js";import"./icon-button-B9F9fbLd.js";import"./button-DokTW0Wy.js";import"./factory-B9ydZp0x.js";import"./create-recipe-context-D1tK31RP.js";import"./attr-DhmmAXiK.js";import"./spinner-DQHxhM-v.js";import"./skeleton-DqrjNTC4.js";import"./index-DbelVYWN.js";import"./stack-oGIozCYN.js";import"./flex-DIY0cChB.js";import"./icon-paSOMUCh.js";import"./index-kcyWw_-P.js";import"./index-DUsDasnE.js";import"./index-DsepRRJK.js";import"./index.esm-BiHqTqT0.js";import"./index-DqCioN1-.js";import"./link-Bhtoa5m2.js";import"./types-Car_UGEL.js";import"./index-CPyxFXPr.js";import"./h-stack-epjwZYIx.js";import"./field-BLGlucJN.js";import"./create-slot-recipe-context-AmuKVsZY.js";import"./use-field-context-Bsw_B8hx.js";import"./create-context-CbVx-s2l.js";import"./factory-BLxpcTLO.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-e8cVzEs8.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DSUxZ13_.js";import"./index-DvU9st2B.js";import"./index-Cqx1v9qP.js";import"./use-locale-context-BWILmsrT.js";import"./use-event-Dhm7lne0.js";import"./index-BDgLyeLq.js";import"./useColorFormatConverter-fVvloAwP.js";import"./index-_f9ddYha.js";import"./ReactIconWrapper-DBEpMdAH.js";import"./input-group-CpXZWogC.js";import"./input-CdQkkSwp.js";import"./useTranslation-Doc8U6Mp.js";import"./context-CP76yOl_.js";import"./portal-uDIpp2p5.js";import"./v-stack-C2iTZzQO.js";import"./menu-CmSigqF4.js";import"./icons-FdeO1lik.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BIMMLwuH.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
