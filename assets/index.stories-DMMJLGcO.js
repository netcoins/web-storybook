import{j as b}from"./jsx-runtime-FXf2AZAz.js";import{r as g}from"./index-BNzzk7XN.js";import{M as i}from"./index-B4EKX_a-.js";import"./iframe-KIWdh1u2.js";import"./index-DtFR7ku3.js";import"./types-Dks6NYhE.js";import"./color-mode-B42hPN6y.js";import"./iconBase-7DBWr36q.js";import"./icon-button-wPI0ManC.js";import"./button-J9uLcOZF.js";import"./factory-BKRWwsU6.js";import"./create-recipe-context-BUeJPSo5.js";import"./attr-DhmmAXiK.js";import"./spinner-CCpdWbuf.js";import"./skeleton-Ctf3an-2.js";import"./index-BD5EFpfB.js";import"./stack-CWZxna0g.js";import"./flex-Du_Mfq9y.js";import"./icon-CA_9GXUW.js";import"./index-DFtcrXFz.js";import"./index-CdXR7_HB.js";import"./index-z0WCktO1.js";import"./index.esm-DOx3CfF7.js";import"./index-DC8a4f6H.js";import"./link-DJEEIVih.js";import"./types-CbZOeyLZ.js";import"./index-i2iHUR9N.js";import"./h-stack-BVr12i2P.js";import"./field-CtUn0XB0.js";import"./create-slot-recipe-context-BVBf0kt5.js";import"./use-field-context-CNbk45WR.js";import"./create-context-BXP2Ml6q.js";import"./factory-w44NaoB9.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BvHwZEPR.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-cBeEzYhO.js";import"./index-BEA-qWoF.js";import"./index-CZhaZ2_e.js";import"./use-locale-context-DfvmEuOE.js";import"./use-event-CFPTtiRq.js";import"./index-DW9Kwt8y.js";import"./useColorFormatConverter-D_T5OUGE.js";import"./index-B07uNJVk.js";import"./ReactIconWrapper-DYWTGAai.js";import"./input-group-CcbvIAfW.js";import"./input-CB-sTKES.js";import"./useTranslation-DBUB1ND3.js";import"./context-BuHmhQ1n.js";import"./portal-B0yb6PgV.js";import"./v-stack-Ca-I_ba6.js";import"./menu-T9VgYLVo.js";import"./icons-Df26oGvq.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-o6NGPxgB.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
