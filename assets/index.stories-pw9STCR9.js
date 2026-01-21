import{j as b}from"./jsx-runtime-B_QZGRHU.js";import{r as g}from"./index-BmFZb7kM.js";import{M as i}from"./index-BjOv-emC.js";import"./iframe-CYQC6yyR.js";import"./index-C1LBrDkZ.js";import"./types-CYWO44fi.js";import"./color-mode-Cnm-smEv.js";import"./iconBase-DQgngLqi.js";import"./icon-button-DJ5hZvpO.js";import"./button-DsGZoONq.js";import"./factory-D-qnGI5Z.js";import"./create-recipe-context-BhnHlAqQ.js";import"./attr-DhmmAXiK.js";import"./spinner-DryhmGmQ.js";import"./skeleton-LbzxkL9Z.js";import"./index-BXmB9v7M.js";import"./stack-BRo-31Bx.js";import"./flex-B5zW3QsN.js";import"./icon-Dlgi_ll_.js";import"./index-29tFnivV.js";import"./index-DD0kWaiX.js";import"./index-CPKIwW4C.js";import"./index.esm-IzELTDM7.js";import"./index-Y_hKmKC9.js";import"./index-C-t0MQ1u.js";import"./link-C3zl-Ojw.js";import"./types-TwfzlpoU.js";import"./h-stack-DRsmghKb.js";import"./field-BWUpnmDO.js";import"./create-slot-recipe-context-DKfJEoIW.js";import"./use-field-context-3BRIuCmw.js";import"./create-context-DEpFLOLj.js";import"./factory-50A13anQ.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CVgayjla.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DKdyCKAp.js";import"./index-DAkO8SRl.js";import"./index-CeTrerxm.js";import"./use-locale-context-aiZRKtnh.js";import"./use-event-Diaz0Klm.js";import"./index-BQF3-jhm.js";import"./useColorFormatConverter-9dyoo32o.js";import"./index-D_4WIvlM.js";import"./ReactIconWrapper-CT4K_MkG.js";import"./input-group-hdRevzx2.js";import"./input-BZYjwGeQ.js";import"./useTranslation-C4Ntj8lj.js";import"./context-DPtoqaqR.js";import"./portal-ColnmKn5.js";import"./v-stack-CgvDA6h8.js";import"./menu-BYcqu8x5.js";import"./icons-CXwFWDnP.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DkeOwdhz.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
