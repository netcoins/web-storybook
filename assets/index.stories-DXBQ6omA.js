import{j as b}from"./jsx-runtime-Dso0oQ8e.js";import{r as g}from"./index-DqOy4NCE.js";import{M as i}from"./index-BnZHqJ1A.js";import"./iframe-BSb3dkxL.js";import"./index-DYhhBXCN.js";import"./types-DlgsL2QM.js";import"./color-mode-COm9eqfQ.js";import"./iconBase-SmKGG0Wa.js";import"./icon-button-BvGmUBgl.js";import"./button-983oc3P3.js";import"./factory-BX8gXkm0.js";import"./create-recipe-context-DdSXfxgW.js";import"./attr-DhmmAXiK.js";import"./spinner-BGUCA4H8.js";import"./skeleton-Cv2duZTU.js";import"./index-C9A_1p4A.js";import"./stack-DxcZUIuG.js";import"./flex-DHnzza0I.js";import"./icon-B9v7n158.js";import"./index-QNk2wPmi.js";import"./index-OF2OfysS.js";import"./index-pxfjGzxq.js";import"./index.esm-BF49-0g6.js";import"./index-BaZBi0Md.js";import"./link-B-sdSowI.js";import"./types-BNza5hFd.js";import"./index-BbAk-nqt.js";import"./h-stack-ybB9mZ60.js";import"./field-UqCfUgp5.js";import"./create-slot-recipe-context-DNbb1UH1.js";import"./use-field-context-Be8s3Oz8.js";import"./create-context-DK9-C9Hf.js";import"./factory-I5EY8nfp.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BkhY8l0j.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CHZ3RzCr.js";import"./index-CZEX_3UZ.js";import"./index-Cx7HxNjM.js";import"./use-locale-context-DJFkpnTj.js";import"./use-event-Czq8nbm0.js";import"./index-5lDMGiA5.js";import"./useColorFormatConverter-DCnsOyXB.js";import"./index-tV63Sd_0.js";import"./ReactIconWrapper-CZb8oPcz.js";import"./input-group-BIwRNGCt.js";import"./input-JK1S5quE.js";import"./useTranslation-DUipYwfN.js";import"./context-D-SPtiXK.js";import"./portal-C29d67qU.js";import"./v-stack-DUHiMWwy.js";import"./menu-Bre6KouC.js";import"./icons-CnZK-1Aa.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-DOFrv3zu.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
