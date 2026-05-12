import{j as b}from"./jsx-runtime-CJCQCLJI.js";import{r as g}from"./index-D8usWla-.js";import{M as i}from"./index-D3SycA1S.js";import"./iframe-IWDmby_F.js";import"./index-DhLHYb8w.js";import"./types-Bb8BpVSL.js";import"./color-mode-CclVGNHo.js";import"./iconBase-B1VAODlm.js";import"./icon-button-Uxm-OE58.js";import"./button-CegeHSAs.js";import"./factory-DedWl3Tk.js";import"./create-recipe-context-CPj0a1UK.js";import"./attr-DhmmAXiK.js";import"./spinner-BeWklPwI.js";import"./skeleton-B6I1xp5g.js";import"./index-D7r-7tD1.js";import"./stack-CEz8mpCb.js";import"./flex-DuMVE5fE.js";import"./icon-D_aEX7pC.js";import"./index-BxwczoFa.js";import"./index-CvoBrPTO.js";import"./index-4fqYKyqI.js";import"./index.esm-BlbiOE1S.js";import"./index-DXGqoDfa.js";import"./link-DJ-C3tbm.js";import"./types-auUehNaD.js";import"./index-3fXSA4Ff.js";import"./h-stack-Ccj3vqoi.js";import"./field-BVUHUyD-.js";import"./create-slot-recipe-context-D7RvhRsF.js";import"./use-field-context-Cn2EotVe.js";import"./create-context-DQTmaOV4.js";import"./factory-DNT7CGpT.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-2WGmVval.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-x6Q_lp1p.js";import"./index-D85ezpTA.js";import"./index-zXXnIVSt.js";import"./use-locale-context-DeJ8gWfc.js";import"./use-event-LvxNEWRH.js";import"./index-DZTQZCRH.js";import"./useColorFormatConverter-B6zR1Ot5.js";import"./index-3NA4VWyQ.js";import"./ReactIconWrapper-jDFEQe9l.js";import"./input-group-DIJ9Awkx.js";import"./input--TI4VH3m.js";import"./useTranslation-C1fNVT-J.js";import"./context-CSc7iusQ.js";import"./portal-B_PbQyEX.js";import"./v-stack-DOCEZY2-.js";import"./menu-CjyRxucX.js";import"./icons-BPc5UJLb.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Dmg5aanL.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
