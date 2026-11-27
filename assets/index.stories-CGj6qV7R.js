import{j as b}from"./jsx-runtime-BqansXUO.js";import{r as g}from"./index-CaUP9lQz.js";import{M as i}from"./index-DBmXRkN4.js";import"./iframe-CJPrE54o.js";import"./index--HgEiBdQ.js";import"./types-C5fLNVPg.js";import"./color-mode-CdumHHNo.js";import"./iconBase-BO8Qqx_p.js";import"./icon-button-zxobNv8-.js";import"./button-ogbieDS2.js";import"./factory-noIglyie.js";import"./create-recipe-context-1-EkR5W0.js";import"./attr-DhmmAXiK.js";import"./spinner-CULqHpKw.js";import"./skeleton-CBRYoeMu.js";import"./index-CHIBpTh-.js";import"./stack-1pNxbbrw.js";import"./flex-BtG4Z1Cz.js";import"./icon-DQ6FgcAR.js";import"./index-BA_Zk4lD.js";import"./index-DYQCPuwW.js";import"./index-CRCRwSQo.js";import"./index.esm-ZuC3cyJA.js";import"./index-C-_Gnf0X.js";import"./link-CsnIMePw.js";import"./types-OSGDVERG.js";import"./index-Ce98lioX.js";import"./h-stack-C2jHEc2F.js";import"./field-NTrPLfn0.js";import"./create-slot-recipe-context-NNrBNKNw.js";import"./use-field-context-qmxdmUHC.js";import"./create-context-yWkgqma1.js";import"./factory-DeJ31wet.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BDYXX-pg.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C7_scmHz.js";import"./index-BLVBAjsL.js";import"./index-B2OV5qgV.js";import"./index-Bk8PeV3R.js";import"./index-Bh2oxZLh.js";import"./use-locale-context-BpYWQfIH.js";import"./use-event-w_Kt2mwn.js";import"./index-CbDyKgrz.js";import"./useColorFormatConverter-DVOP3ZhN.js";import"./index-DBuI_83k.js";import"./ReactIconWrapper-BXeHvSFa.js";import"./input-group-CqOUflYg.js";import"./input-CSmeDmTB.js";import"./useTranslation-CUiZx7U2.js";import"./context-_t1uTSTG.js";import"./portal-BW0aG4yg.js";import"./v-stack-zmwN4-Id.js";import"./menu-VaZIyo9S.js";import"./icons-Bh5IB2_W.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-2HCgLXXh.js";import"./index-C3A7Sy7F.js";import"./index-CgD3MbxH.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CAjd0yKu.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0e21c934-7181-45be-9634-d0b706a73ddb",e._sentryDebugIdIdentifier="sentry-dbid-0e21c934-7181-45be-9634-d0b706a73ddb")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
