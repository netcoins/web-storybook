import{j as b}from"./jsx-runtime-CP4nKzdQ.js";import{r as g}from"./index-BtIgOQNS.js";import{M as i}from"./index-C0rwk0Ri.js";import"./iframe-wiFF9nb3.js";import"./index-38lvMeO5.js";import"./types-DqsLbD-W.js";import"./color-mode-DhHJC96g.js";import"./iconBase-BtQ6vqoS.js";import"./icon-button-DTE2wowj.js";import"./button-D7OdK6w9.js";import"./factory-eHtKlpVN.js";import"./create-recipe-context-KDjhqFwd.js";import"./attr-DhmmAXiK.js";import"./spinner-BQfVqKdb.js";import"./skeleton-wdaRPjIc.js";import"./index-CnxuPyCl.js";import"./stack-TMoGmj7S.js";import"./flex-lv2J4Goy.js";import"./icon-FOYHG5uR.js";import"./index-B6NYvjTU.js";import"./index-C32vIyuA.js";import"./index-D1BmbD9P.js";import"./index.esm-B9Smdsfj.js";import"./index-ClOxTZGg.js";import"./link-D90SZ6o1.js";import"./types-DZarl5eD.js";import"./index-CQZ2_0rY.js";import"./h-stack-BjawWpoH.js";import"./field-FlycJkyT.js";import"./create-slot-recipe-context-CA6jRw1R.js";import"./use-field-context-BvFhfkN4.js";import"./create-context-Cmurla9d.js";import"./factory-HgC5yevf.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DNWTGJq-.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-o1KEF2md.js";import"./index-BON-wgls.js";import"./index-DzetRwug.js";import"./use-locale-context-Bi91Ai2L.js";import"./use-event-DxPz_GM8.js";import"./index-CNmiAn6j.js";import"./useColorFormatConverter-B37jtvKV.js";import"./index-Cx7jngQ1.js";import"./ReactIconWrapper-loKi814z.js";import"./input-group-CMSdp8yM.js";import"./input-CEaAa_9O.js";import"./useTranslation-DwnucpJ3.js";import"./context-DyIaW1Zx.js";import"./portal-BxR594NP.js";import"./v-stack-C78wAuDo.js";import"./menu-jSwyYvI7.js";import"./icons-VpLPnlho.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-BDhocqkz.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
