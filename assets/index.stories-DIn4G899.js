import{j as b}from"./jsx-runtime-BmewskVx.js";import{r as g}from"./index-DPnNOvnR.js";import{M as i}from"./index-BOywLM3l.js";import"./iframe-CXirxEhC.js";import"./index-LtTswZdC.js";import"./types-w5sdMRt1.js";import"./color-mode-BtxCME4u.js";import"./iconBase-BgaQq6LT.js";import"./icon-button-oJA8Ye93.js";import"./button-DxPB7Rvo.js";import"./factory-Cq7Dd90R.js";import"./create-recipe-context-BZD__FKI.js";import"./attr-DhmmAXiK.js";import"./spinner-oVGnfeBk.js";import"./skeleton-CrMukkXT.js";import"./index-CM8vyOak.js";import"./stack-U7hkwDJI.js";import"./flex-B1yE43hz.js";import"./icon-DowBMafT.js";import"./index-DIoCqid9.js";import"./index-DZjborU9.js";import"./index-jlfwpwRk.js";import"./index.esm-DFle0JGv.js";import"./index-C4GooKnl.js";import"./index-ChGXlF6N.js";import"./link-uUqQa8zB.js";import"./types-Bf5ZImEc.js";import"./h-stack-BiJHN289.js";import"./field-DlgQBGEk.js";import"./create-slot-recipe-context-BrMbfE6J.js";import"./use-field-context-DgNOBaY7.js";import"./create-context-BHJzlMF2.js";import"./factory-Bfs-2o58.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0_jc9kv.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-S6iPBF9w.js";import"./index-DT8Pj37A.js";import"./index-CQxOFjVq.js";import"./use-locale-context-CkEFhzez.js";import"./use-event-Dk83vS2d.js";import"./index-NNH5aDEn.js";import"./useColorFormatConverter-DT0TRJnD.js";import"./index-Ch6GCfQ6.js";import"./ReactIconWrapper-CFR-tB0p.js";import"./input-group-BbOsN83Y.js";import"./input-BEV_RYak.js";import"./useTranslation-BFn58NJJ.js";import"./context-e3MsT7jP.js";import"./portal-DNmDmZpU.js";import"./v-stack-CTyLHzuB.js";import"./menu-DhEgTblv.js";import"./icons-D5GSDOzh.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-B5ofjeAD.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
