import{j as b}from"./jsx-runtime-CtgriOoh.js";import{r as g}from"./index-LDZjwPyK.js";import{M as i}from"./index-BLCVLVhG.js";import"./iframe-DLsxSodE.js";import"./index-Ca9dGDHs.js";import"./types-CzbgSW5q.js";import"./color-mode-WpVxmr8-.js";import"./iconBase-DR4eJmrE.js";import"./icon-button-4urCg8tt.js";import"./button-CHXIAACq.js";import"./factory-D7c-2M3o.js";import"./create-recipe-context-BLZQd8M7.js";import"./attr-DhmmAXiK.js";import"./spinner-DC8HgJAI.js";import"./skeleton-DD0Nrcg9.js";import"./index-Dw1lZ4FK.js";import"./stack-Jh-ScoFN.js";import"./flex-jTox-Jle.js";import"./icon-DmbwW8Q1.js";import"./index-D1jbgNMH.js";import"./index-D2EAz7-K.js";import"./index-5a5HvW-7.js";import"./index.esm-CHSLZMkk.js";import"./index-EZvWhupx.js";import"./link-DOuc2B_6.js";import"./types-DP-8OxfX.js";import"./index-DLR-uKNa.js";import"./h-stack-BjIa0OVB.js";import"./field-BTvCJ-gO.js";import"./create-slot-recipe-context--PPhlwPT.js";import"./use-field-context-qfsscg7h.js";import"./create-context-92yfNqHp.js";import"./factory-VLekbDmk.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DO611hRr.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-C4YyM1t6.js";import"./index-D_GShtYd.js";import"./index-AzNZc0ao.js";import"./use-locale-context-pKa6yYTo.js";import"./use-event-Di9vixY-.js";import"./index-Bh7k9v2U.js";import"./useColorFormatConverter-CRkoFG45.js";import"./index-BBY6kj-w.js";import"./ReactIconWrapper-DwziF_QK.js";import"./input-group-DwwPU540.js";import"./input-QWeOwg5T.js";import"./useTranslation-DnlVbmrQ.js";import"./context-BL0tYy3n.js";import"./portal-CecYwpZ5.js";import"./v-stack-ChO0qkn4.js";import"./menu-CIiVfO1p.js";import"./icons-Dyq_nO0F.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-7dnhdtXc.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4866424-e2da-426e-9b7d-7f8b3d79dcb9",e._sentryDebugIdIdentifier="sentry-dbid-c4866424-e2da-426e-9b7d-7f8b3d79dcb9")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
