import{j as b}from"./jsx-runtime-DsisYA5V.js";import{r as g}from"./index-CKMqqnRX.js";import{M as i}from"./index-lQzS2WDB.js";import"./iframe-BmGz4e7O.js";import"./index-CKDT70PM.js";import"./types-C2d73Vgx.js";import"./color-mode-B-XvCCsK.js";import"./iconBase-D09jbBhI.js";import"./icon-button-Don1fyMy.js";import"./button-BV0q3xzJ.js";import"./factory-Cc9wlzk0.js";import"./create-recipe-context-A4NzrDmT.js";import"./attr-DhmmAXiK.js";import"./spinner-C_3A3SF_.js";import"./skeleton-B-ujUgIV.js";import"./index-WRhI99xF.js";import"./stack-Cy_tz-BX.js";import"./flex-B_EvRp7n.js";import"./icon-CEdFO0_q.js";import"./index-7Ecb5-HI.js";import"./index-B-B0pG23.js";import"./index-xhyPjlgs.js";import"./index.esm-DtdJ8M3I.js";import"./index-D_oirs8w.js";import"./link-BUhYVFj4.js";import"./types-UwUGfn0h.js";import"./index-CRjqxKtr.js";import"./h-stack-Din5jmAl.js";import"./field-BheTsbxb.js";import"./create-slot-recipe-context-OCKFpwcK.js";import"./use-field-context-CI2uDJo5.js";import"./create-context-CK_wmhmM.js";import"./factory-BT9p-7y8.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BOuC2Yv3.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DD9Yp8Xe.js";import"./index-CL_a17YK.js";import"./index-B6nkZF41.js";import"./use-locale-context-DEDmwn6D.js";import"./use-event-DR0zwscz.js";import"./index-3ozyTozb.js";import"./useColorFormatConverter-Ds_mVWhH.js";import"./index-BJRHnXuN.js";import"./ReactIconWrapper-DcCHfcxD.js";import"./input-group-BkUsNEjc.js";import"./input-D5v_4rOo.js";import"./useTranslation-ud-cIRUH.js";import"./context-DK1qQHWb.js";import"./portal-CNSRWXdj.js";import"./v-stack-BgB5a_aC.js";import"./menu-D7J1YQ_n.js";import"./icons-5d-stagj.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BpZkdMfH.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ee=["Default","Search"];export{r as Default,o as Search,Ee as __namedExportsOrder,ye as default};
