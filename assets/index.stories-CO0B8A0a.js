import{j as b}from"./jsx-runtime-BH2c4qLG.js";import{r as g}from"./index-7u_6Vy2k.js";import{M as i}from"./index-BDfnC2E1.js";import"./iframe-BGQbQ3dn.js";import"./index-BUjxv5hn.js";import"./index-eFZPOORz.js";import"./types-BXTzdq3Q.js";import"./factory-DvGDcxFa.js";import"./button-BIHLdjd8.js";import"./context-DRG8Ee5j.js";import"./use-style-config-CY0nP9yV.js";import"./spinner-DH3UzAof.js";import"./emotion-react.browser.esm-DGrlWTA6.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-oCMSTRem.js";import"./flex-Cq1r11cc.js";import"./icon-BkH6qJp9.js";import"./text-7g6ehUQF.js";import"./index-DdANRNKH.js";import"./index-DPUb3t1_.js";import"./index.esm-B1TkH2vR.js";import"./index-ClhfB6aQ.js";import"./index-CV9lSecQ.js";import"./iconBase-rSet0i5-.js";import"./link-BB2Zra7V.js";import"./types-Cp-iaKuy.js";import"./form-control-BTHLgQmF.js";import"./h-stack-kROvE_YJ.js";import"./stack-C0I1c-O2.js";import"./responsive-Aj-QOeIF.js";import"./children-CPq0-lbh.js";import"./use-checkbox-BeYHvxcL.js";import"./use-form-control-DT8uI3O4.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DbzFf3Lu.js";import"./use-safe-layout-effect-DatZKw9H.js";import"./use-update-effect-LvKnJuLD.js";import"./index-BwzscVXh.js";import"./useColorFormatConverter-H15IBrVQ.js";import"./ReactIconWrapper-Dtfqk6U0.js";import"./input-group-C1u4VYhF.js";import"./input-addon-siF-9Xg9.js";import"./input-TURyUREh.js";import"./useTranslation-CEaZRgJj.js";import"./context-DR4PK5DQ.js";import"./box-Bksqqz7s.js";import"./menu-CYMKcyn4.js";import"./use-descendant-w3-9v9nG.js";import"./use-popper-CnxUzZJh.js";import"./use-event-listener-DEQVhWnC.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-D5gTWTiY.js";import"./use-disclosure-HU9SZ82S.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Gk191Oko.js";import"./menu-list-kKK5-5-I.js";import"./motion-DNhM_1wz.js";import"./v-stack-LUiHWQOG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
