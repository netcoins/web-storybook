import{j as b}from"./jsx-runtime-D0j8ighF.js";import{r as g}from"./index-Bjl9x4An.js";import{M as i}from"./index-po2a87Lp.js";import"./iframe-BKbmcILc.js";import"./index-BAum0axN.js";import"./types-7s1Hjd_w.js";import"./color-mode-Cy06qXX5.js";import"./iconBase-BDIq_Uzs.js";import"./icon-button-gM2V1MlJ.js";import"./button-DiodISAi.js";import"./factory-meOjhzOA.js";import"./create-recipe-context-CQhlGTHD.js";import"./attr-DhmmAXiK.js";import"./spinner-YETDV8CP.js";import"./skeleton-D6x80uBq.js";import"./index-BDjd6R1y.js";import"./stack-aeN9BL0s.js";import"./flex-Cfnm5amj.js";import"./icon-Cpjyx5WC.js";import"./index-DYUkN7Ea.js";import"./index-b6xwuVXs.js";import"./index-MW9iipuX.js";import"./index.esm-CANFEw97.js";import"./index-CEJTJSxm.js";import"./link-D2Tb5W9e.js";import"./types-Bz6wce5n.js";import"./index-B4RYgyCh.js";import"./h-stack-BuWyN6NR.js";import"./field-iFUHFgem.js";import"./create-slot-recipe-context-BmsY035y.js";import"./use-field-context-B6PZyoVK.js";import"./create-context-DprOAEr5.js";import"./factory-Dn1XByA4.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BegJgoMc.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-V2BdOexw.js";import"./index-_s9mJ0DW.js";import"./index-CjYKrjG1.js";import"./use-locale-context-5vmeQpBu.js";import"./use-event-CYhCDpvA.js";import"./index-CfQQv0sB.js";import"./useColorFormatConverter-C24yn4Vc.js";import"./index-DZ1rZ4Uk.js";import"./ReactIconWrapper-5O872eLy.js";import"./input-group-BJITPpUt.js";import"./input-BdvOQcOE.js";import"./useTranslation-mj8uQnDy.js";import"./context-BKGt1kVi.js";import"./portal-ewmEOmQe.js";import"./v-stack-9f3rmXPz.js";import"./menu-CwVvpLPS.js";import"./icons-Cr_dKTmC.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Bc-ASfBh.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
