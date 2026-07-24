import{j as b}from"./jsx-runtime-CD1_vtUx.js";import{r as g}from"./index-CMnzKS7h.js";import{M as i}from"./index-DyTDLfrd.js";import"./iframe-CepHEkUM.js";import"./index-Yv7ap1t_.js";import"./types-Dn6m61cm.js";import"./color-mode-D4Uj_cJJ.js";import"./iconBase-KccDBRcX.js";import"./icon-button-Ml9PqnE2.js";import"./button-EWLNwFOu.js";import"./factory-Dy5ne_At.js";import"./create-recipe-context-CPIrATom.js";import"./attr-DhmmAXiK.js";import"./spinner-BbQtVInR.js";import"./skeleton-BL2YO705.js";import"./index-DVTgaKa7.js";import"./stack-Ae5-6MsW.js";import"./flex-0MNK0DX9.js";import"./icon-BmT76vSy.js";import"./index-DtA9_8B8.js";import"./index-B9IuUwna.js";import"./index-BVKVs-n7.js";import"./index.esm-rgf3_cot.js";import"./index-Dm0-ozHN.js";import"./link-DUtRKhGe.js";import"./types-sRk1v4xQ.js";import"./index-CuLqocma.js";import"./h-stack-dNFbOuuv.js";import"./field-f1Xc_E5R.js";import"./create-slot-recipe-context-BXAXMN0K.js";import"./use-field-context-CqyvMIlM.js";import"./create-context-Be0TmX7n.js";import"./factory-D1Ydo2mU.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-TyIzF7rb.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CHXAW4jd.js";import"./index-7bmnATwq.js";import"./index-kI1pKDnj.js";import"./use-locale-context-CyxdlCBq.js";import"./use-event-CXbZ6aw2.js";import"./index-DfVGh24P.js";import"./useColorFormatConverter-Da_nK1dJ.js";import"./index-C74UT2Ix.js";import"./ReactIconWrapper-COqiAl4X.js";import"./input-group-Bmq38lTf.js";import"./input-9HgQTm4O.js";import"./useTranslation-Dp_6pde_.js";import"./context-V3cxpqfc.js";import"./portal-BOGwnb08.js";import"./v-stack-COcCyRDO.js";import"./menu-rg9xuwog.js";import"./icons-DY4SfmQ_.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-C6hba5Q_.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
