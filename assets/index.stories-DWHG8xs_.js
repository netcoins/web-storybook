import{j as b}from"./jsx-runtime-CbfWXZdM.js";import{r as g}from"./index-Dbu5ORvP.js";import{M as i}from"./index-wepzgEl6.js";import"./iframe-CAxZ8mgG.js";import"./index-HuHpY_D8.js";import"./types-MfIZTqiI.js";import"./color-mode-BHYkESIc.js";import"./iconBase-DZLFYoPK.js";import"./icon-button-Ch9JaqA9.js";import"./button-CQVp9zpF.js";import"./factory-D_1cLrCM.js";import"./create-recipe-context-DMJOz-xJ.js";import"./attr-DhmmAXiK.js";import"./spinner-D0VqeHT_.js";import"./skeleton-Chzag2Jw.js";import"./index-Du4VUMg_.js";import"./stack-BCQZigtg.js";import"./flex-HZUojDDe.js";import"./icon-BWHMUnMc.js";import"./index-BCQGA2NH.js";import"./index-s9PJ3dM7.js";import"./index-DK3IYdvI.js";import"./index.esm-U594VdF0.js";import"./index-BHEEblQY.js";import"./index-DrnXVuNR.js";import"./link-aowOkTaG.js";import"./types-DiBvI8n0.js";import"./h-stack-CBPrTSuX.js";import"./field-D0MkTaFj.js";import"./create-slot-recipe-context-DtfR-cUh.js";import"./use-field-context-DNNXLXD8.js";import"./create-context-Bxm401fB.js";import"./factory-DE21cdeI.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Oy_J9JOL.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-1umBbmgB.js";import"./index-CgEDtrCz.js";import"./index-QHEBrzkI.js";import"./use-locale-context-CUCPVl2a.js";import"./use-event-C1fuoGWK.js";import"./index-0p2OyY7-.js";import"./useColorFormatConverter-HSOOHGrS.js";import"./index-DEBns6Fv.js";import"./ReactIconWrapper-3vcanhrR.js";import"./input-group-D_6BFrFi.js";import"./input-CX98ntFI.js";import"./useTranslation-DW84JboJ.js";import"./context-YUG4kZd3.js";import"./portal-CdlShayB.js";import"./v-stack-D92JPI7n.js";import"./menu-DgwMnNEo.js";import"./icons-rFQm2Xtn.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-otMrJhPF.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
