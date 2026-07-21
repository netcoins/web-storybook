import{j as b}from"./jsx-runtime-sSiny72Q.js";import{r as g}from"./index-BRZUHrxl.js";import{M as i}from"./index-CxhtKEAR.js";import"./iframe-BtF_amxx.js";import"./index-CSD6-sWM.js";import"./types-BZdQ1G8O.js";import"./color-mode-nwxn5eoU.js";import"./iconBase-CmnmgoKb.js";import"./icon-button-922m34hN.js";import"./button-rhhJQ1Pi.js";import"./factory-DB5fldYk.js";import"./create-recipe-context-ysTfWqWA.js";import"./attr-DhmmAXiK.js";import"./spinner-DomKOxpT.js";import"./skeleton-CrT_m0wa.js";import"./index-BKrEO2TL.js";import"./stack-DwLzdsVO.js";import"./flex-DBF-bEeD.js";import"./icon-ntc19Dh_.js";import"./index-DJ0Z2Uk6.js";import"./index-Bypg5eHt.js";import"./index-DOwZs7t6.js";import"./index.esm-BxxdBVZ6.js";import"./index-CXCs3VlB.js";import"./link-BHGEjeYz.js";import"./types-BXyMDx4y.js";import"./index-BG2rz5xQ.js";import"./h-stack-DguvTpbc.js";import"./field-Dc8d6wMR.js";import"./create-slot-recipe-context-sVH52Z6B.js";import"./use-field-context-BlcZIZyA.js";import"./create-context-uyfP516n.js";import"./factory-Cs1OGWTc.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DCmU3z1b.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CF-5GPVB.js";import"./index-DLLSwTiU.js";import"./index-Bg6o_01X.js";import"./use-locale-context-CmisX32z.js";import"./use-event-z6sIpQtT.js";import"./index-D8FDttiV.js";import"./useColorFormatConverter-CcDH0kBZ.js";import"./index-CyuQ5wOP.js";import"./ReactIconWrapper-ousOeOcR.js";import"./input-group-MraQ5BPn.js";import"./input-Z4BruBql.js";import"./useTranslation-BWr_VPzh.js";import"./context-T2cDcmFr.js";import"./portal-D7cX7vIq.js";import"./v-stack-awRW6hvn.js";import"./menu-CxdMON_O.js";import"./icons-BYuY7D5V.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-B37u-g2R.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
