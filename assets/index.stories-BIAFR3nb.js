import{j as b}from"./jsx-runtime-fezQJGwC.js";import{r as g}from"./index-MfSlmDxg.js";import{M as i}from"./index-OUTirKJ_.js";import"./iframe-Ba6dBgyN.js";import"./index-BSx9hPs_.js";import"./types-BKiRLemP.js";import"./color-mode-DTiJWfs7.js";import"./iconBase-DiGyIPt2.js";import"./icon-button-D8CqYqzU.js";import"./button-B8CP5wr3.js";import"./factory-D_JC9Kkz.js";import"./create-recipe-context-BC6ZiKdP.js";import"./attr-DhmmAXiK.js";import"./spinner-CS9s6OO9.js";import"./skeleton-BoKHo_f5.js";import"./index-DcwZbOWG.js";import"./stack-BjLt4K0v.js";import"./flex-DP55scCH.js";import"./icon-CuerpiLG.js";import"./index-CTmjKpaO.js";import"./index-D7tSFkDW.js";import"./index-BCNC9-nv.js";import"./index.esm-3yHxfltq.js";import"./index-DfiJJNYD.js";import"./link-Cl0GBKbA.js";import"./types-C2I_yXWS.js";import"./index-9o5R-Sgu.js";import"./h-stack-BZMiGIRp.js";import"./field-Cbv1hbcf.js";import"./create-slot-recipe-context-BzGdvS1h.js";import"./use-field-context-Bv5fde__.js";import"./create-context-U0a3jka0.js";import"./factory-PcDGO__Q.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BpHin42c.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DrYN9Kua.js";import"./index-BAbcPywl.js";import"./index-Dee84FJB.js";import"./use-locale-context-B64sql60.js";import"./use-event-8yRFcFLa.js";import"./index-CV5SBTIs.js";import"./useColorFormatConverter-CRyQJtdX.js";import"./index-9ALxs8Rd.js";import"./ReactIconWrapper-DR2InMQw.js";import"./input-group-jP6OotDk.js";import"./input-BcOrIz2c.js";import"./useTranslation-BkgMuPEv.js";import"./context-BSc3Bxl8.js";import"./portal-C6nwUJD4.js";import"./v-stack-BRimFoWg.js";import"./menu-DUy7WS8b.js";import"./icons-D0Ht11aa.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DZ7xhI2d.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
