import{j as b}from"./jsx-runtime-CCRVXynG.js";import{r as g}from"./index-BELy8Dkx.js";import{M as i}from"./index-BGQBD9NG.js";import"./iframe-o_2TxUQe.js";import"./index-C_zEl3Ya.js";import"./types-Bt0EFqqt.js";import"./color-mode-CYw0w3nf.js";import"./iconBase-NJZpWQF1.js";import"./icon-button-DCvEIO40.js";import"./button-DmjCKSjU.js";import"./factory-CJvbO2Gw.js";import"./create-recipe-context-yXDN9tEe.js";import"./attr-DhmmAXiK.js";import"./spinner-Ft3-kMsJ.js";import"./skeleton-D43_ykDb.js";import"./index-CcxhxnrD.js";import"./stack-BKnPQADs.js";import"./flex-DvudTNLT.js";import"./icon-D7C1liIR.js";import"./index-C0IbJbm4.js";import"./index-DtQY-waQ.js";import"./index-DH2qI9RX.js";import"./index.esm-ehz7Xs6U.js";import"./index-D6R88SwB.js";import"./link-BHJ6Xuqo.js";import"./types-Dh4LclSq.js";import"./index-MvLh9K7p.js";import"./h-stack-DhuN7T21.js";import"./field-BK41zlka.js";import"./create-slot-recipe-context-DX78yAB_.js";import"./use-field-context-DoQSZsoh.js";import"./create-context-B9CN9yxX.js";import"./factory-D5shfhPb.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BtKT7hs3.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-D8EPn6aJ.js";import"./index-D804QfBB.js";import"./index-Ay4JRkWl.js";import"./use-locale-context-C-NrCje6.js";import"./use-event-DCNifyum.js";import"./index-DBuLarWV.js";import"./useColorFormatConverter-B3_w_7Oz.js";import"./index-C3EGyQR2.js";import"./ReactIconWrapper-BezAJoOL.js";import"./input-group-C3tyZLPE.js";import"./input-Cl5bZUvD.js";import"./useTranslation-ChsWyWgV.js";import"./context-Bqmb8VE8.js";import"./portal-BRMz-RR-.js";import"./v-stack-6aptW1p0.js";import"./menu-C5IsC3sf.js";import"./icons-6rl3F-_X.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-kFjfAcSl.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
