import{j as b}from"./jsx-runtime-BrDIq2Vy.js";import{r as g}from"./index-DwNhJ73_.js";import{M as i}from"./index-A0BJU8Fx.js";import"./iframe-CRrzge9r.js";import"./index-RiwpZXBe.js";import"./types-QqSu7of4.js";import"./color-mode-YPmZ7lnv.js";import"./iconBase-CXLIUDar.js";import"./icon-button-BQdK1qKc.js";import"./button-ByokCN9o.js";import"./factory-C1Uzg4zz.js";import"./create-recipe-context-Oylc3ahw.js";import"./attr-DhmmAXiK.js";import"./spinner-BQMUlTwL.js";import"./skeleton-BJ0CVDYe.js";import"./index-BYgTkbrz.js";import"./stack-DBKNMwDX.js";import"./flex-IpYzbbMW.js";import"./icon-DxLxHHwU.js";import"./index-Dr05u4es.js";import"./index-CtABCTqQ.js";import"./index-f8mVf4pw.js";import"./index.esm-wLwZ7-An.js";import"./index-DFdW6yPN.js";import"./link-BmmRRv7P.js";import"./types-r1ugFsA_.js";import"./index-aKDTXMeh.js";import"./h-stack-r462yBsX.js";import"./field-DCqWh4Ev.js";import"./create-slot-recipe-context-BSkqsq95.js";import"./use-field-context-BK7lymlY.js";import"./create-context-C-VJco7Q.js";import"./factory-BdHIA0hD.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DLEq7ZQD.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-GrHIfG7b.js";import"./index-BAu7jeDG.js";import"./index-BqbSUrJq.js";import"./use-locale-context-BX6DLzva.js";import"./use-event-BzpeXe42.js";import"./index-B4GiaSP6.js";import"./useColorFormatConverter-DwX-TVYV.js";import"./index-DsC_UoyC.js";import"./ReactIconWrapper-D2P-blyQ.js";import"./input-group-Dj8SZoQA.js";import"./input-DXh9TGnx.js";import"./useTranslation-DwygQ5vu.js";import"./context-Ck_3vGhx.js";import"./portal-i5QZPDF4.js";import"./v-stack-BhY1SDe4.js";import"./menu-BWxePb9Z.js";import"./icons-D-72d_Q-.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BfL7fM64.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
