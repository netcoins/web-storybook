import{j as b}from"./jsx-runtime-8x-A6Wxb.js";import{r as g}from"./index-ojTWUFcI.js";import{M as i}from"./index-DoRkY8ch.js";import"./iframe-hxK2I7d9.js";import"./index-n-nmFmUQ.js";import"./types-B0FmjkVa.js";import"./color-mode-DBNGCvAp.js";import"./iconBase-DixheN5d.js";import"./icon-button-B7YljAc6.js";import"./button-DfDcr1x7.js";import"./factory-CCqnMufs.js";import"./create-recipe-context-DwyIVBsh.js";import"./attr-DhmmAXiK.js";import"./spinner-D8hIOIgx.js";import"./skeleton-DFCLVDwK.js";import"./index-DIB8MuzL.js";import"./stack-DVfEpjU_.js";import"./flex-DJDmF0Mm.js";import"./icon-BHzh5oyz.js";import"./index-CScJrfLt.js";import"./index-CF99jD08.js";import"./index-o4fospBH.js";import"./index.esm-CHxB2pQy.js";import"./index-Dr_X-1LH.js";import"./link-D9UGXPDo.js";import"./types-C-BHthbp.js";import"./index-C97iw43W.js";import"./h-stack-BeItMIj5.js";import"./field-CQFKkbRj.js";import"./create-slot-recipe-context-Bzqaa1Ge.js";import"./use-field-context-D1ZBjOBB.js";import"./create-context-XwTSFXbL.js";import"./factory-DI2rNUYk.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-s5v9OhCp.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CW9RkQj_.js";import"./index-Dx967tEU.js";import"./index-DI8I5cSl.js";import"./use-locale-context-CuglJ4j5.js";import"./use-event-D3uy8UQ3.js";import"./index-CsBQH5Ic.js";import"./useColorFormatConverter-XyOv9Ot-.js";import"./index-Dez7MbZf.js";import"./ReactIconWrapper-D5jwhFY_.js";import"./input-group-yHM1XB3l.js";import"./input-H34vOIaR.js";import"./useTranslation-DN--CHtO.js";import"./context-D6rXpL_i.js";import"./portal-CCxDuRsi.js";import"./v-stack-C-cIqFRk.js";import"./menu-_TAPRmDV.js";import"./icons-l2C-GYsD.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-B4--IU51.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
