import{j as b}from"./jsx-runtime-YVpTO9Gy.js";import{r as g}from"./index-DvzEW59P.js";import{M as i}from"./index-C_ccsmvZ.js";import"./iframe-D9hs98DK.js";import"./index-MOPf-U5K.js";import"./types-CBDjR42g.js";import"./color-mode-BjT6B5EY.js";import"./iconBase-Btv4CH4-.js";import"./icon-button-CVN68njS.js";import"./button-BenQTUVm.js";import"./factory-DPsV-Df3.js";import"./create-recipe-context-CXZAdpmm.js";import"./attr-DhmmAXiK.js";import"./spinner-Be0ZGc2A.js";import"./skeleton-D31jT9d7.js";import"./index-BusDrbOB.js";import"./stack-CSBqHll1.js";import"./flex-aI4RCtcQ.js";import"./icon-Bk__gXYj.js";import"./index-DcME5kjJ.js";import"./index-DWaSYzGi.js";import"./index-DTNsjui5.js";import"./index.esm-DC2n8fqf.js";import"./index-BwVbo-Zp.js";import"./index-BX9kmznL.js";import"./link-DW1LzYYz.js";import"./types-BWzpuUxo.js";import"./h-stack-CEcBmrbH.js";import"./field-gdkH7CSX.js";import"./create-slot-recipe-context-BuB-mzTk.js";import"./use-field-context-BSDfgis2.js";import"./create-context-CVKzcN51.js";import"./factory-CLzC9jzR.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B-CrTsdJ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DbNLG5Kt.js";import"./index-BexNeMe9.js";import"./index-BwRDypRe.js";import"./use-locale-context-CXgXpCt6.js";import"./use-event-CWeUV0zF.js";import"./index-DfR_Jx4p.js";import"./useColorFormatConverter-BAKZhKM7.js";import"./index-C2wwVZyy.js";import"./ReactIconWrapper-DAZFIJAQ.js";import"./input-group-B6oXUMEv.js";import"./input-ddjL6p2V.js";import"./useTranslation-BW4oKl3l.js";import"./context-3g7_Q8Gc.js";import"./portal-CJI2vKT_.js";import"./v-stack-wU6VX1L6.js";import"./menu-BZWvkviE.js";import"./icons-DHwuMkoI.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CUz8I_cW.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
