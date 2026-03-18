import{j as b}from"./jsx-runtime-C-kOd8ra.js";import{r as g}from"./index-DBbTb9B2.js";import{M as i}from"./index-81KSlSde.js";import"./iframe-BxgWbTN1.js";import"./index-BrFvF7i7.js";import"./types-DAGKeQ17.js";import"./color-mode-CifVEnSw.js";import"./iconBase-C_LfVN9r.js";import"./icon-button-B5QWHccg.js";import"./button-DI7a9-fU.js";import"./factory-BJmwlrVc.js";import"./create-recipe-context-COPnnEYf.js";import"./attr-DhmmAXiK.js";import"./spinner-BwI3w9OM.js";import"./skeleton-CB6q5jgg.js";import"./index-koSqZCrf.js";import"./stack-DMvBj6s9.js";import"./flex-xRwok3JK.js";import"./icon-DeqR9OkW.js";import"./index-BwfINbw1.js";import"./index-WqGMSkXZ.js";import"./index-DuzhHh6_.js";import"./index.esm-BgDACuSt.js";import"./index-Dy8f-fdX.js";import"./link-DcTa6NRR.js";import"./types-_1ZkbGy3.js";import"./index-C7JHjPDe.js";import"./h-stack-Bvihl1Qg.js";import"./field-qMT6_b4b.js";import"./create-slot-recipe-context-Bs5XWZRb.js";import"./use-field-context-DF1fTboI.js";import"./create-context-BbxrZvQg.js";import"./factory-BfAgfkbe.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dqk0w5Su.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-BdNz4lOZ.js";import"./index-BX6Sg72M.js";import"./index-3yZECisG.js";import"./use-locale-context-DKtRHnB2.js";import"./use-event-ABDmkwzo.js";import"./index-CKS0qMOi.js";import"./useColorFormatConverter-C-E8HYKD.js";import"./index-B86AYc71.js";import"./ReactIconWrapper-BvP5l-zh.js";import"./input-group-zT3NHBEW.js";import"./input-C5lfnm3P.js";import"./useTranslation-T_n-Za-8.js";import"./context-BClljs4W.js";import"./portal-EGCrgRPk.js";import"./v-stack-CWxymABv.js";import"./menu-BDZSHbVO.js";import"./icons-DjPR7SXx.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DD1cw0e2.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4866424-e2da-426e-9b7d-7f8b3d79dcb9",e._sentryDebugIdIdentifier="sentry-dbid-c4866424-e2da-426e-9b7d-7f8b3d79dcb9")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
