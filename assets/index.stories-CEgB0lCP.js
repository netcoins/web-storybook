import{j as b}from"./jsx-runtime-DBWTvkZQ.js";import{r as g}from"./index-DN5v9M3U.js";import{M as i}from"./index-C46yUcCW.js";import"./iframe-BpMmzN_y.js";import"./index-4XzvKbmd.js";import"./types-Bz5ska2O.js";import"./color-mode-B6LReZL6.js";import"./iconBase-CigdmIWU.js";import"./icon-button-B29ejyJR.js";import"./button-Dq9wyFbQ.js";import"./factory-CnL8o6oZ.js";import"./create-recipe-context-D4XxGmVN.js";import"./attr-DhmmAXiK.js";import"./spinner-gotHpeTL.js";import"./skeleton-sSyYsiKy.js";import"./index-Cnhf3yz8.js";import"./stack-Tzm9BjVX.js";import"./flex-B3BAmyYv.js";import"./icon-DpWJ-Jqk.js";import"./index-Ch58T9V-.js";import"./index-DfK5ppe9.js";import"./index-D6N1G-Hh.js";import"./index.esm-CKsqWO09.js";import"./index-CEwAxqP_.js";import"./link-DLHqeEoX.js";import"./types-B0gBkp4z.js";import"./index-DemlsjCA.js";import"./h-stack-DUoEPB8H.js";import"./field-DlR8iT0I.js";import"./create-slot-recipe-context-C37483WK.js";import"./use-field-context-BUKZxdA6.js";import"./create-context-B5kKFizl.js";import"./factory-CAUoQwrY.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CcjURY_D.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-CEpGWQ9E.js";import"./index-BvE0SIBr.js";import"./index-C4eCJrbV.js";import"./use-locale-context-BJeNXhVl.js";import"./use-event-BP6dekNo.js";import"./index-98xKRokm.js";import"./useColorFormatConverter-Dx2cxaEs.js";import"./index-BzcM5yDV.js";import"./ReactIconWrapper-CfXYhPMH.js";import"./input-group-BbfcDckF.js";import"./input-zXaBWDU7.js";import"./useTranslation-WNvSvoIr.js";import"./context-CZOfwt71.js";import"./portal-CNh6Ohbu.js";import"./v-stack-BOhoUoiB.js";import"./menu-uaD89ZdX.js";import"./icons-B4v_ZQBU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-b2NKB7pb.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
