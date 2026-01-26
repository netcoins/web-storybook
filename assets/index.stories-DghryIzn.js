import{j as b}from"./jsx-runtime-ZI6Z-dzu.js";import{r as g}from"./index-B5XP0WwC.js";import{M as i}from"./index-QlUc6uhX.js";import"./iframe-DRNniMC4.js";import"./index-LF7LHrT4.js";import"./types-BzSHPz5A.js";import"./color-mode-tki6fT9J.js";import"./iconBase-38i7vPSg.js";import"./icon-button-CEzNe-1R.js";import"./button-F7qCZEQU.js";import"./factory-hLNJDQjk.js";import"./create-recipe-context-BgYW2p2v.js";import"./attr-DhmmAXiK.js";import"./spinner-DbsOvcVt.js";import"./skeleton-BasQXDOi.js";import"./index-B40KQeKh.js";import"./stack-BwAM3Cff.js";import"./flex-Dm0c0XQx.js";import"./icon-CjgTRsk6.js";import"./index-zZJO9NJ8.js";import"./index-DGEeKNoc.js";import"./index-nQF1ekpB.js";import"./index.esm-BYQPPqAi.js";import"./index-BltViStd.js";import"./index-C0G6dD_w.js";import"./link-D9WptR0U.js";import"./types-B0S6frxA.js";import"./h-stack-TR29hJDn.js";import"./field-BqvGdx2r.js";import"./create-slot-recipe-context-B8uprmjH.js";import"./use-field-context-BSlNDXbl.js";import"./create-context-DAN7Itxj.js";import"./factory-DVPRWu19.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CvATggAk.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-D0INw-E9.js";import"./index-B35l14ri.js";import"./index-DHnQOCdJ.js";import"./use-locale-context-DgDs1_va.js";import"./use-event-B1PNwMOs.js";import"./index-xlz2t7-3.js";import"./useColorFormatConverter-rQJe00hj.js";import"./index-DltnNELb.js";import"./ReactIconWrapper-BJcXfj4x.js";import"./input-group-oRZw7U7K.js";import"./input-CRkoHspS.js";import"./useTranslation-Dti649V5.js";import"./context-CJa2WCjh.js";import"./portal-MaoSh7_6.js";import"./v-stack-C50zCljA.js";import"./menu-CwtaeDLb.js";import"./icons-Dcsh6KJ_.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DBkNhnVB.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
