import{j as b}from"./jsx-runtime-Cy_Yt1kJ.js";import{r as g}from"./index-BGm0zkb6.js";import{M as i}from"./index-CwlG1vA9.js";import"./iframe-B4TYx1_P.js";import"./index-Buv41JQQ.js";import"./types-BpX5_-8M.js";import"./color-mode-DQ7Wn1G1.js";import"./iconBase-CKdlrUt7.js";import"./icon-button-CnzKuCSX.js";import"./button-D685v6yz.js";import"./factory-TqThdlkg.js";import"./create-recipe-context-BxDfs5L8.js";import"./attr-DhmmAXiK.js";import"./spinner-BS8JVwea.js";import"./skeleton-DyCwJhgM.js";import"./index-BUHku0_r.js";import"./stack-D20aLspE.js";import"./flex-BDvoaPDf.js";import"./icon-BGq-Wc2Q.js";import"./index-DVIIDqPG.js";import"./index-DkwUuca0.js";import"./index-M6GgemNa.js";import"./index.esm-C1QGb8nP.js";import"./index-iUHy8p3o.js";import"./link-BczzVFaA.js";import"./types-DBxY25W7.js";import"./index-Dk9SYCTb.js";import"./h-stack-CRAuQgzI.js";import"./field-CIDoPlJH.js";import"./create-slot-recipe-context-0me9uDQK.js";import"./use-field-context-3n2YLwar.js";import"./create-context-CM9s3U4L.js";import"./factory-K1epug5H.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BTSqAaDF.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-DQOs12En.js";import"./index-CMm0TDLj.js";import"./index-AKLCFhWn.js";import"./use-locale-context-0a80SidC.js";import"./use-event-B-63mSr4.js";import"./index-JbRtrl32.js";import"./useColorFormatConverter-2KAYf5QT.js";import"./index-SgIYqkTW.js";import"./ReactIconWrapper-1nRteZh0.js";import"./input-group-ArotDElk.js";import"./input-Bb7-OxkP.js";import"./useTranslation-NjRsFLH4.js";import"./context-CN-dIOvZ.js";import"./portal-C-AWMOKO.js";import"./v-stack-CHk3j1xl.js";import"./menu-BKTSlOg4.js";import"./icons-BAaExsrk.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-xOT4Kwih.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
