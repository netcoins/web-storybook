import{j as b}from"./jsx-runtime-DoicMYWS.js";import{r as g}from"./index-DNdlWO5H.js";import{M as i}from"./index-hSjphqiN.js";import"./iframe-DSQ9JSBG.js";import"./index-DzP3P2Zx.js";import"./types-NAvF9iM9.js";import"./color-mode-pYScYKhO.js";import"./iconBase-CIQhG1U3.js";import"./icon-button-yjUl_a2V.js";import"./button-DNWc98Wp.js";import"./factory-DE7yyQR0.js";import"./create-recipe-context-HdRpMqpb.js";import"./attr-DhmmAXiK.js";import"./spinner-YCzv7z72.js";import"./skeleton-CFlcXdnq.js";import"./index-Dk3GMUO6.js";import"./stack-BrZblEjt.js";import"./flex-CtA8vkJm.js";import"./icon-B5AgahgF.js";import"./index-BG6_RFA9.js";import"./index-VRRUeN_H.js";import"./index-CFKuh-w6.js";import"./index.esm-c2MWcFpm.js";import"./index-Br7xh_XY.js";import"./link-BjcLz3P4.js";import"./types-d_RLbZml.js";import"./index-Cdug8PNE.js";import"./h-stack-DGoumINn.js";import"./field-CDBVG7dd.js";import"./create-slot-recipe-context-BkkB0Gab.js";import"./use-field-context-zdPhpE4p.js";import"./create-context-B8EBDtyG.js";import"./factory-D3azWOJT.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C98wXqKf.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-C8bxUYFV.js";import"./index-Byvq8L2V.js";import"./index-BfoaV8by.js";import"./use-locale-context-CEFd7Pay.js";import"./use-event-BfkHwKdj.js";import"./index-Dh-eaaym.js";import"./useColorFormatConverter-D4YZsbu_.js";import"./index-B1roBAEe.js";import"./ReactIconWrapper-BOyUZfPn.js";import"./input-group-Bvw7h_DX.js";import"./input-BS1OSUMR.js";import"./useTranslation-CnWtbd9o.js";import"./context-CTJtdmeP.js";import"./portal-CWnN4yxr.js";import"./v-stack-B5n7ytqr.js";import"./menu-D7TRk7z9.js";import"./icons-S5oR5elF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-VWHplmge.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
