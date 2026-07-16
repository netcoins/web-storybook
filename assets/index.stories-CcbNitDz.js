import{j as b}from"./jsx-runtime-Cr-OWk_J.js";import{r as g}from"./index-VuwwLw8C.js";import{M as i}from"./index-S7gujbdq.js";import"./iframe-DS-h_83g.js";import"./index-Du9wSZgz.js";import"./types-BytKVIH7.js";import"./color-mode-Dfb0NZTZ.js";import"./iconBase-DuDPyJsP.js";import"./icon-button-MHxemLCO.js";import"./button-DGdXWSdt.js";import"./factory-BgJQcnv6.js";import"./create-recipe-context-NRTypbfF.js";import"./attr-DhmmAXiK.js";import"./spinner-Dfik6Vr2.js";import"./skeleton-BRPVTq5L.js";import"./index-BtJRV4EL.js";import"./stack-u-VzDqZP.js";import"./flex-DMlc-13s.js";import"./icon-CrYxhdN4.js";import"./index-Dbxc1QaM.js";import"./index-DNr_74Ps.js";import"./index-DRehEci0.js";import"./index.esm-CzRezVFo.js";import"./index-HU92yWKY.js";import"./link-CrF4EG3F.js";import"./types-3awHX7c1.js";import"./index-Dkf5yR0g.js";import"./h-stack-ChtYGdrD.js";import"./field-BsZdiNAk.js";import"./create-slot-recipe-context-CVjDydnc.js";import"./use-field-context-lgOq5njt.js";import"./create-context-CN-TaxrJ.js";import"./factory-DLCmHIVH.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0UAMUCL.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-qGguP1DE.js";import"./index-rE6ifZzV.js";import"./index-BWp6VOly.js";import"./use-locale-context-C89hwE1T.js";import"./use-event-BOY_sb-z.js";import"./index-D48TaEZQ.js";import"./useColorFormatConverter-wxQMjXC8.js";import"./index-DbuyklZ2.js";import"./ReactIconWrapper-DjiBxMa5.js";import"./input-group-D6Hb9_Bn.js";import"./input-B8XxPO5j.js";import"./useTranslation-D9t9ZtJ_.js";import"./context-BwUoQLlp.js";import"./portal-brJEbe-F.js";import"./v-stack-0ztSBRee.js";import"./menu-DrMJZpuN.js";import"./icons-CnD987FH.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-DB5RP2Kp.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
