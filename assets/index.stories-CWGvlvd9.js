import{j as b}from"./jsx-runtime-BdkXbjko.js";import{r as g}from"./index-DB51DUFv.js";import{M as i}from"./index-B6G4T66u.js";import"./iframe-BdH25jYA.js";import"./index-BZEY18uf.js";import"./types-D6JDWcLC.js";import"./color-mode-D3YyOUEg.js";import"./iconBase-Cci91VHL.js";import"./icon-button-DMY86Cyk.js";import"./button-B8BXZL3n.js";import"./factory-CEv1ktPX.js";import"./create-recipe-context-cqBIdbee.js";import"./attr-DhmmAXiK.js";import"./spinner-C6Bgahz8.js";import"./skeleton-DwwamfRl.js";import"./index-BIcqwx7Y.js";import"./stack-DL_zZhN6.js";import"./flex-BxpYFeL2.js";import"./icon-C3lFvyta.js";import"./index-Bm1yYWlC.js";import"./index-DXuyyNhV.js";import"./index-Dcaw5Dgn.js";import"./index.esm-1mm5WntI.js";import"./index-BmJyjp9n.js";import"./link-DoR8RKVf.js";import"./types-C-RgQ8JY.js";import"./index-mDyLfx55.js";import"./h-stack-B8NcWwjW.js";import"./field-BYhjXbn_.js";import"./create-slot-recipe-context-BYz_odB4.js";import"./use-field-context-DkY1Ch3A.js";import"./create-context-D2AkJT4o.js";import"./factory-TzRYTmhl.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D2xClmVb.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DofmaLkm.js";import"./index-CA_foo3-.js";import"./index-C7Msfp21.js";import"./use-locale-context-DWo43fKx.js";import"./use-event-CC6shJxy.js";import"./index-BxgQMfzc.js";import"./useColorFormatConverter-DubOYLvO.js";import"./index-mdkoDVvE.js";import"./ReactIconWrapper-BAwdZOSm.js";import"./input-group-DwLPJsG5.js";import"./input-C7JEWa_e.js";import"./useTranslation-GGhkpz1f.js";import"./context-CJXSmzPe.js";import"./portal-BjNBTx2r.js";import"./v-stack-_ObbdVbE.js";import"./menu-BpcWmhZ7.js";import"./icons-C2zFHK-T.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DuYzFG6w.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
