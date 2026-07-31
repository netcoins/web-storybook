import{j as b}from"./jsx-runtime-YZ3G-iYu.js";import{r as g}from"./index-BS2vbNQg.js";import{M as i}from"./index-BhHFZgLv.js";import"./iframe-BX2xc-_U.js";import"./index-qkpNW99f.js";import"./types-D6FV2pvl.js";import"./color-mode-HL2DhnOV.js";import"./iconBase-CboeoTjN.js";import"./icon-button-JdHpVamL.js";import"./button-Dztq2GMa.js";import"./factory-Dg1TFsXz.js";import"./create-recipe-context-PhxApsI9.js";import"./attr-DhmmAXiK.js";import"./spinner-CfaLrlvh.js";import"./skeleton-CUsUe0jI.js";import"./index-BIBh2192.js";import"./stack-DpxukRFj.js";import"./flex-Bt2k7mEY.js";import"./icon-8w6_OK_u.js";import"./index-Clk5tSNG.js";import"./index-C_UcktIv.js";import"./index-DcMCHYuI.js";import"./index.esm-BtaOJ1x9.js";import"./index-xdqt72Ez.js";import"./link-C-GbAlvJ.js";import"./types-BBiJSphr.js";import"./index-aOgZSKCU.js";import"./h-stack-CrFt6td7.js";import"./field-vjwsIEhH.js";import"./create-slot-recipe-context-DcJDbZXT.js";import"./use-field-context-Cgb4Qwak.js";import"./create-context-a0PSGyCM.js";import"./factory-BT1X8lRG.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BN3j2GKU.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-A4ARPBR-.js";import"./index-2hBN-PtT.js";import"./index-Cd2H2Qi7.js";import"./use-locale-context-11IwyKIb.js";import"./use-event-Dw2eACWQ.js";import"./index-GO1f5Bnu.js";import"./useColorFormatConverter-B2fXDlZH.js";import"./index-Cfq8EuxB.js";import"./ReactIconWrapper-BJqLpjF9.js";import"./input-group-Df1PVfa7.js";import"./input-CMUGiqXP.js";import"./useTranslation-duUbFn1x.js";import"./context-CdyKrKEB.js";import"./portal-D0sGYAwJ.js";import"./v-stack-CGLSsC6M.js";import"./menu-DAuW-IZy.js";import"./icons-X-V7ucpc.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CbVB4rlx.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
