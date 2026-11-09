import{j as b}from"./jsx-runtime-C59UixyM.js";import{r as g}from"./index-DrA2bMrC.js";import{M as i}from"./index-ATSOaDsH.js";import"./iframe-BdGskVoo.js";import"./index-BCcBKcYw.js";import"./types-D8qXaDki.js";import"./color-mode-C5_1QNL7.js";import"./iconBase-BqTamR0S.js";import"./icon-button-B3s62mun.js";import"./button-DnhQwDCp.js";import"./factory-BO_uqw8M.js";import"./create-recipe-context-B56D5b4w.js";import"./attr-DhmmAXiK.js";import"./spinner-BN2slOPn.js";import"./skeleton-DJRydHvw.js";import"./index-Cn6i4Zrh.js";import"./stack-CvGHMQld.js";import"./flex-CQgJgZt_.js";import"./icon-Fz-7Uxud.js";import"./index-BpEnexkQ.js";import"./index-D9lGHhah.js";import"./index-DtQQo3Rt.js";import"./index.esm-D0gkFRzj.js";import"./index-JJy3fHsX.js";import"./link-B_7BRtIH.js";import"./types-BP2uycxU.js";import"./index-wQhQDa7m.js";import"./h-stack-uFCdiIVt.js";import"./field-B38Xf3MT.js";import"./create-slot-recipe-context-XurnZR1i.js";import"./use-field-context-U3zifuN2.js";import"./create-context-CPFXxin1.js";import"./factory-DnhdXfXU.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BZtc5lG_.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CSq8829W.js";import"./index-Claiuxw1.js";import"./index-cPps_6bW.js";import"./use-locale-context-BkAPZK1C.js";import"./use-event-Cw0I-mEu.js";import"./index-BmvLbnGt.js";import"./useColorFormatConverter-BJkVKv-i.js";import"./index-7aYna7Y4.js";import"./ReactIconWrapper-DuDhG3dZ.js";import"./input-group-B1uo1NA7.js";import"./input-vWftc6RZ.js";import"./useTranslation-ll0uZnGu.js";import"./context-vnw3ICjr.js";import"./portal-B9RaVqLY.js";import"./v-stack-UrnTGarB.js";import"./menu-0X-iPb6X.js";import"./icons-ClTna0rl.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-D5L0wADN.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
