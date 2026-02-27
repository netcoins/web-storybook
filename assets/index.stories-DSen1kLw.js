import{j as b}from"./jsx-runtime-BIoZ2dCl.js";import{r as g}from"./index-CyRyEcWT.js";import{M as i}from"./index-BkprF8-P.js";import"./iframe-COvAF4CN.js";import"./index-Rs7VbBgI.js";import"./types-DjpX97hm.js";import"./color-mode-BBva1DpT.js";import"./iconBase-D4EbIw8Q.js";import"./icon-button-Cxd4N8tV.js";import"./button-7uSJxb4b.js";import"./factory-ErsUi8OB.js";import"./create-recipe-context-DRJMtmFR.js";import"./attr-DhmmAXiK.js";import"./spinner-DksmEeuV.js";import"./skeleton-C7VvfD8I.js";import"./index-CN0u3JpD.js";import"./stack-cZf5Ao1o.js";import"./flex-DMJ9oSOn.js";import"./icon-BjXk_YF2.js";import"./index-ScbkrUjv.js";import"./index-BBFclL8P.js";import"./index-CEIZ68Pw.js";import"./index.esm-BaK5f95z.js";import"./index-C8dl4YJK.js";import"./link-tabG8hVY.js";import"./types-DuEH93WK.js";import"./index-0gmafPrL.js";import"./h-stack-B2DYS4U8.js";import"./field-Dkk13VxJ.js";import"./create-slot-recipe-context-DkFSk3G6.js";import"./use-field-context-D1fjxzbB.js";import"./create-context-DAUj2LrL.js";import"./factory-Dqletjb-.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DSiRlzgy.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Bk9TZgpg.js";import"./index-B8BBeIPL.js";import"./index-Bt_Pb3m2.js";import"./use-locale-context-Bp9QmrpD.js";import"./use-event-Cz4OP7gn.js";import"./index-BOpMhC6z.js";import"./useColorFormatConverter-CTRFc8fp.js";import"./index-CLGsZlZE.js";import"./ReactIconWrapper-Br6NZMe4.js";import"./input-group-3rHkTDhc.js";import"./input-BckI-0Er.js";import"./useTranslation-D5yYVbQm.js";import"./context-Jhcs9AJY.js";import"./portal-opYGG5Ku.js";import"./v-stack-BSvFNUgN.js";import"./menu-DEnbYiic.js";import"./icons-CrH8SrCN.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DOeIrb_P.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
