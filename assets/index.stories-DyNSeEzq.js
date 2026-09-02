import{j as b}from"./jsx-runtime-Nog3FBKS.js";import{r as g}from"./index-Mm4yjXV8.js";import{M as i}from"./index-4UwmEUBJ.js";import"./iframe-B01Rhazy.js";import"./index-BKnowsb3.js";import"./types-B4ZMD_Ix.js";import"./color-mode-BF20HVtQ.js";import"./iconBase-x4ewFLct.js";import"./icon-button-RtUQXOML.js";import"./button-sVoUEUTP.js";import"./factory-N6_sDeIQ.js";import"./create-recipe-context-CpX93Itj.js";import"./attr-DhmmAXiK.js";import"./spinner-CNCW_VnY.js";import"./skeleton-D7Jd2T_m.js";import"./index-B3Z5u5ba.js";import"./stack-j7TSn5zI.js";import"./flex-DXc-o7XK.js";import"./icon-yi4lADk0.js";import"./index-jbykmj3K.js";import"./index-BK9nq1Lx.js";import"./index-CHqSEj5u.js";import"./index.esm-DrDFQYzk.js";import"./index-BxbxVKLe.js";import"./link-BXroyYTK.js";import"./types-CwDDeHxl.js";import"./index-LSdfx3_X.js";import"./h-stack-C8MCZTRl.js";import"./field-DAUKCP-D.js";import"./create-slot-recipe-context-C0pz5CIq.js";import"./use-field-context-B2FDmJ6M.js";import"./create-context-VxOajozH.js";import"./factory-B_IBsr2U.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-_tICM2Zd.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-C2PRfEqY.js";import"./index-CHc7YHay.js";import"./index-C4FKJP_g.js";import"./use-locale-context-B-cxjhbP.js";import"./use-event-CPw4vvpY.js";import"./index-nVHvYR4f.js";import"./useColorFormatConverter-CvTuYEOu.js";import"./index-dfqPFhO7.js";import"./ReactIconWrapper-B-pIANpR.js";import"./input-group-BJi_3-f1.js";import"./input-B_L974Hg.js";import"./useTranslation-DzyTr9hW.js";import"./context-ylTfukuW.js";import"./portal-Bhrly4qS.js";import"./v-stack-mMvgyyES.js";import"./menu-DTKw0pGW.js";import"./icons-D9mh23eq.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-B6_baNkW.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
