import{j as b}from"./jsx-runtime-B28fAKwh.js";import{r as g}from"./index-BRvgYk6D.js";import{M as i}from"./index-umzmlSgS.js";import"./iframe-UugElKfX.js";import"./index-Ck58VQ4L.js";import"./types-B2QU8jJ2.js";import"./color-mode-VOLiUyET.js";import"./iconBase-gVQ2WkU2.js";import"./icon-button-Q_vcw8nx.js";import"./button-LvSzMk3P.js";import"./factory-Bf2aa36A.js";import"./create-recipe-context-CODMHF8x.js";import"./attr-DhmmAXiK.js";import"./spinner-J9H_wG7h.js";import"./skeleton-DGf-XzyX.js";import"./index-B4-O5UtE.js";import"./stack-DtfxyQ6o.js";import"./flex-rtPauEav.js";import"./icon-BVhE98M1.js";import"./index-bMOmcZtA.js";import"./index-BHnOm_AD.js";import"./index-ROYB1dww.js";import"./index.esm-lsVamox4.js";import"./index-DXOmzq6y.js";import"./link-STIvOR5k.js";import"./types-CC4aF1bo.js";import"./index-BHojKa9S.js";import"./h-stack-G-gg59x0.js";import"./field-CtW2ezUT.js";import"./create-slot-recipe-context-IEV-p8KP.js";import"./use-field-context-CBId6GJ8.js";import"./create-context-4OcS5IC2.js";import"./factory-DolINa2J.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-8VOhcZwr.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-Dkam1v-0.js";import"./index-ENgqkjDv.js";import"./index-CjHFJhr_.js";import"./use-locale-context-0eyi3mLX.js";import"./use-event-CnSuTyyx.js";import"./index-CP53QRub.js";import"./useColorFormatConverter-BGb92b4l.js";import"./index-DR0mp-qu.js";import"./ReactIconWrapper-Bj19KU8d.js";import"./input-group-BrwW4KkS.js";import"./input-V_fg8Ee2.js";import"./useTranslation-GeINrCpB.js";import"./context-coFW_1hp.js";import"./portal-DyGkWHly.js";import"./v-stack-CsBajd0C.js";import"./menu-DJ7hOv5j.js";import"./icons-D2MN8NAV.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-2qCnbc2p.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
