import{j as b}from"./jsx-runtime-zGFq_C62.js";import{r as g}from"./index-yNGeAoM8.js";import{M as i}from"./index-D7keZhKV.js";import"./iframe-Cki2KkBY.js";import"./index-BuZLP9aK.js";import"./index-8dkKJM0E.js";import"./types-B9Vi5VGG.js";import"./factory-B-orROQ2.js";import"./button-WCwnl3He.js";import"./context-DzU3Ccpl.js";import"./use-style-config-Day8Q7qP.js";import"./spinner-B1k9TmJJ.js";import"./emotion-react.browser.esm-DibK7BRk.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-wqF3_X0V.js";import"./flex-DXtktOtT.js";import"./icon-DX5MWoK7.js";import"./text-BNtRnHpB.js";import"./index-DsyEscsm.js";import"./index-CZRavKeG.js";import"./index.esm-C_Yx7wm2.js";import"./index-BKQX6mGO.js";import"./index-BvhrlOX8.js";import"./iconBase-6Mbyj9fK.js";import"./link-DAxPaj3o.js";import"./types-C-b_AmW2.js";import"./form-control-D5QT7OfD.js";import"./h-stack-VCGUzI4Z.js";import"./stack-BSC_G9qB.js";import"./responsive-DO5UCD0D.js";import"./children-DOy171LJ.js";import"./use-checkbox-CJ57ePFf.js";import"./use-form-control-BHLRm-Bi.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BwTn-8qm.js";import"./use-safe-layout-effect-CZn_zMT5.js";import"./use-update-effect-Bq1UiBd1.js";import"./index-CeyGgzBX.js";import"./useColorFormatConverter-BkCCeILI.js";import"./ReactIconWrapper-DZLi-HpD.js";import"./input-group-DnObiW26.js";import"./input-addon-B9CLFFwM.js";import"./input-gKVK3Of4.js";import"./useTranslation-C9Cf6z0E.js";import"./context-DSHNjmW3.js";import"./box-D9oSJl1u.js";import"./menu-CUYAlKgW.js";import"./use-descendant-Y-mT9obB.js";import"./use-popper-C6wsYazR.js";import"./use-event-listener-CMpck3vV.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BOo-FP8z.js";import"./use-disclosure-C8IprfUz.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DDkiOKv4.js";import"./menu-list-CT3PbhpI.js";import"./motion-FW5wo-U4.js";import"./v-stack-CFENR30p.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Fe=["Default","Search"];export{r as Default,o as Search,Fe as __namedExportsOrder,De as default};
