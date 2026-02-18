import{j as b}from"./jsx-runtime-BLmHfCky.js";import{r as g}from"./index-CnQrtYIs.js";import{M as i}from"./index-BN7n6S5O.js";import"./iframe-Cwze2tCc.js";import"./index-BkZsMDxw.js";import"./types-DHujnpPf.js";import"./color-mode-CVBxgpr4.js";import"./iconBase---9GiGh3.js";import"./icon-button-Dbv2SCZY.js";import"./button-DVGh3juC.js";import"./factory-Ch1I7S1Y.js";import"./create-recipe-context-BRLnDGDc.js";import"./attr-DhmmAXiK.js";import"./spinner-Cm52mKXc.js";import"./skeleton-CQIoax4a.js";import"./index-DsH-zof2.js";import"./stack-uSpN3c7f.js";import"./flex-BwIkksZc.js";import"./icon-BdcW7C2d.js";import"./index-B0Ue0_SS.js";import"./index-DqNk0pCX.js";import"./index-B12WWzGP.js";import"./index.esm-kR7k6Tgr.js";import"./index-ChKRb01_.js";import"./link-DPCMrlwX.js";import"./types-poJiUSwb.js";import"./index-BnKqTKik.js";import"./h-stack-BtcEAloA.js";import"./field-Dzr3OYhs.js";import"./create-slot-recipe-context-C0UksDmC.js";import"./use-field-context-BHLnlpVa.js";import"./create-context-0bXuCLlP.js";import"./factory-CC3vKxIL.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DzkDUxbm.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-Bl3NHraY.js";import"./index-BMcN5yBh.js";import"./index-DneuiAfd.js";import"./use-locale-context-C-WnUJZR.js";import"./use-event-DKmV0C80.js";import"./index-D_w3RP2v.js";import"./useColorFormatConverter-B6JY4fIW.js";import"./index-DbOt26hC.js";import"./ReactIconWrapper-LQbrWzTa.js";import"./input-group-DxKeFNut.js";import"./input-BJSMMBet.js";import"./useTranslation-BbdpDOkl.js";import"./context-CLdbumUK.js";import"./portal-BjwsIDnO.js";import"./v-stack-CB4SlIpm.js";import"./menu-_8NSJY_z.js";import"./icons-DsuDXEoX.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BQsJGu_f.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
