import{j as b}from"./jsx-runtime-CXuEMHCc.js";import{r as g}from"./index-DWCqTqlq.js";import{M as i}from"./index-BVc3Kuch.js";import"./iframe-C3sC0Urb.js";import"./index-DLco6F7C.js";import"./types-CaPREOpO.js";import"./color-mode-CYDtweeM.js";import"./iconBase-CgPrQLqS.js";import"./icon-button-D4h8OqJE.js";import"./button-DG34yHYq.js";import"./factory-B6cV-n7x.js";import"./create-recipe-context-BQjsOjb0.js";import"./attr-DhmmAXiK.js";import"./spinner-BPxnhxmm.js";import"./skeleton-DZZGfg81.js";import"./index-BRt8y6ED.js";import"./stack-TAFHdRhn.js";import"./flex-KcyHNsg6.js";import"./icon-C6lAAFvR.js";import"./index-CYeRDnHu.js";import"./index-BDbQVY5l.js";import"./index-C7VgBG6e.js";import"./index.esm-xtGoauLv.js";import"./index-TA-NThXS.js";import"./index-Cu0qynvn.js";import"./link-9GGAnh9a.js";import"./types-sbBi8jhd.js";import"./h-stack-D0-CC6Uo.js";import"./field-CrZT5nwK.js";import"./create-slot-recipe-context-DJCkHth2.js";import"./use-field-context-aC3qtfLJ.js";import"./create-context-3ytI-4hL.js";import"./factory-BwZQjjbE.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BcKn39sN.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Cou-PIoa.js";import"./index-mEPFYMiw.js";import"./index-D4uzyClB.js";import"./use-locale-context-BkMXLXS_.js";import"./use-event-DQK9IFR1.js";import"./index-B03fK8Z2.js";import"./useColorFormatConverter-DoYen0sZ.js";import"./index-BN7hyBMN.js";import"./ReactIconWrapper-C623jrtL.js";import"./input-group-cR-b6oQu.js";import"./input-B3W4-BTj.js";import"./useTranslation-D_hX4KMg.js";import"./context-DmU2h750.js";import"./portal-Dfi7nAR2.js";import"./v-stack-DZdieTF8.js";import"./menu-BAnCZre5.js";import"./icons-HnL5PA4g.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BQbOezRD.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
