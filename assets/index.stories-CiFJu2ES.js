import{j as b}from"./jsx-runtime-CVGkS9S6.js";import{r as g}from"./index-DsimY1Er.js";import{M as i}from"./index-D3-gxH0F.js";import"./iframe-mYh3n4X9.js";import"./index-C2blO3sS.js";import"./types-mdukHKsn.js";import"./color-mode-Byq_X5Xd.js";import"./iconBase-0NfaldhP.js";import"./icon-button-YbfWHFcP.js";import"./button-DVEJ2y3K.js";import"./factory-CfaKATY1.js";import"./create-recipe-context-CfDVsj90.js";import"./attr-DhmmAXiK.js";import"./spinner-DSa_MMTg.js";import"./skeleton-BvBHD1FK.js";import"./index-CVUQXY8B.js";import"./stack-r4zfIMeb.js";import"./flex-vMp7_VsP.js";import"./icon-DbGTXddX.js";import"./index-nLXlyfdO.js";import"./index-Cwa5AWwD.js";import"./index-D4X63Mu-.js";import"./index.esm-BWMgYZCI.js";import"./index-B2LETTjM.js";import"./link-D_GPWFOM.js";import"./types-91ODjIi4.js";import"./index-Ct1_UDm6.js";import"./h-stack-dPBGPD15.js";import"./field-BT0kMcOF.js";import"./create-slot-recipe-context-DMGXGbVV.js";import"./use-field-context-B3ity01o.js";import"./create-context-CilLCYwj.js";import"./factory-m8yl7nBq.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-YPy70K4y.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-4h8lH-FW.js";import"./index-DsyquN5r.js";import"./index-CA_aMp87.js";import"./use-locale-context-CYQv6_ny.js";import"./use-event-BkyCVLRB.js";import"./index-D95dTOod.js";import"./useColorFormatConverter-7aZSf3ZY.js";import"./index-iQa19wCX.js";import"./ReactIconWrapper-C-1T23vu.js";import"./input-group-DjSIdCD1.js";import"./input-TryH1Gba.js";import"./useTranslation-CAFh2sxN.js";import"./context-yLwh7xOT.js";import"./portal-CknbA7y8.js";import"./v-stack-B06uuuR-.js";import"./menu-Cp5rg0hx.js";import"./icons-B54RsrCx.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Cq_wGAay.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
