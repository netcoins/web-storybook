import{j as b}from"./jsx-runtime-BRD6R0GW.js";import{r as g}from"./index-DghP1NKQ.js";import{M as i}from"./index-DT4suPvd.js";import"./iframe-ZHyus-fW.js";import"./index-BhFVDNDy.js";import"./types-BJlFDIuw.js";import"./color-mode-6Ra4OaTw.js";import"./iconBase-DHXnvs95.js";import"./icon-button-MfjZ2acx.js";import"./button-Bunhrx-l.js";import"./factory-Ct2hEz6c.js";import"./create-recipe-context-BKOzy2ji.js";import"./attr-DhmmAXiK.js";import"./spinner-D5TZj8o-.js";import"./skeleton-DVU7drCb.js";import"./index-BgoNz-9t.js";import"./stack-frXQUfl-.js";import"./flex-BodrJ31l.js";import"./icon-ta0TndNj.js";import"./index-D5pH0UZE.js";import"./index-BqozqRFV.js";import"./index-Cc-b3mm4.js";import"./index.esm-DhFksOSF.js";import"./index-CfQTDocu.js";import"./link-6ijyoVKK.js";import"./types-cGjEF-h3.js";import"./index-DyPBBHwz.js";import"./h-stack-BsD72bCc.js";import"./field-CElsnGC9.js";import"./create-slot-recipe-context-C-dxgf5u.js";import"./use-field-context-COvlcQun.js";import"./create-context-iH1h34s0.js";import"./factory-DwGhjHtG.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-xhY7UNUR.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-BwqZVLYh.js";import"./index-BhwikxFV.js";import"./index-CMQRTCwC.js";import"./use-locale-context-D7DfQcNY.js";import"./use-event-CTJTJEpM.js";import"./index-rSullLht.js";import"./useColorFormatConverter-H6rkuQdc.js";import"./index-hmhhPCl4.js";import"./ReactIconWrapper-CSeQsjUU.js";import"./input-group-7NVKq20f.js";import"./input-DbQo6H8g.js";import"./useTranslation-BfLYVA8M.js";import"./context-Buwda5xA.js";import"./portal-BQA6EgCH.js";import"./v-stack-CVTu3Qfp.js";import"./menu-DfWMem-E.js";import"./icons-DUhU-uOn.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-C4XbYEqO.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c4866424-e2da-426e-9b7d-7f8b3d79dcb9",e._sentryDebugIdIdentifier="sentry-dbid-c4866424-e2da-426e-9b7d-7f8b3d79dcb9")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
