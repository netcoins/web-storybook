import{j as b}from"./jsx-runtime-DbC44WDf.js";import{r as g}from"./index-CQtiP5W-.js";import{M as i}from"./index-CNb0960_.js";import"./iframe-HX7IfX-E.js";import"./index-BUbdKX6e.js";import"./types-C4_yCHha.js";import"./color-mode-Dofp9sv2.js";import"./iconBase-BL5HMgMq.js";import"./icon-button-Cxf-fdzV.js";import"./button-CVF5TL23.js";import"./factory-C1g9Nt31.js";import"./create-recipe-context-DGjKhWId.js";import"./attr-DhmmAXiK.js";import"./spinner-CYAjeUXB.js";import"./skeleton-B3GyZGtg.js";import"./index-BeVGuXJQ.js";import"./stack-BtubjkGJ.js";import"./flex-SZL6UrBw.js";import"./icon-D1JcrNxR.js";import"./index-Wz9HiZoG.js";import"./index-DU4_cMXp.js";import"./index-BnN6xxGp.js";import"./index.esm-DsH4-CcN.js";import"./index-DF7pdIdb.js";import"./link-BIg8I6g7.js";import"./types-CBAsZBPh.js";import"./index-CLYzHiRB.js";import"./h-stack-Dopuf1ov.js";import"./field-BrCONkXc.js";import"./create-slot-recipe-context-DMkemm9l.js";import"./use-field-context-B-xE9U-V.js";import"./create-context-DEIXs1yV.js";import"./factory-CENUe966.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Chuy0k9k.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-BNIFsM9j.js";import"./index-CPXiPJmz.js";import"./index-C3T8Y7we.js";import"./use-locale-context-r5rOvr59.js";import"./use-event-D_hlBP8T.js";import"./index-BuP2wvoQ.js";import"./useColorFormatConverter-Crs_PvyP.js";import"./index-C5mZffmr.js";import"./ReactIconWrapper-B6a3-O2C.js";import"./input-group-DrxhXHaL.js";import"./input-C-mYzZl3.js";import"./useTranslation-DxFaad5U.js";import"./context-BN8cGclX.js";import"./portal-C03weVyv.js";import"./v-stack-BQ0ZZFYf.js";import"./menu-DtfjKFfT.js";import"./icons-BtF9gu2P.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-zRe-gX5D.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
