import{j as b}from"./jsx-runtime-u-6qd-el.js";import{r as g}from"./index-H08RK_yE.js";import{M as i}from"./index-DHhPbK2U.js";import"./iframe-czKbx93c.js";import"./index-DwAnHTRO.js";import"./types-ngJkVjL2.js";import"./color-mode-6SnMZu3d.js";import"./iconBase-BtiFMvlY.js";import"./icon-button-CjLbkHII.js";import"./button-f3NsoD5G.js";import"./factory-BAGb02Ns.js";import"./create-recipe-context-D6UF33Qh.js";import"./attr-DhmmAXiK.js";import"./spinner-BJB_93Er.js";import"./skeleton-CLpseNTE.js";import"./index-CsVVJ4AF.js";import"./stack-JRGhDut6.js";import"./flex-uxbJD1vw.js";import"./icon-DI1fej6o.js";import"./index-BlPBLEqm.js";import"./index-Bwu4AjuR.js";import"./index-4cKgXvNO.js";import"./index.esm-DojYnSbB.js";import"./index-BKordIm9.js";import"./index-CqiD0WE8.js";import"./link-BIos9BQM.js";import"./types-BcZuC824.js";import"./h-stack-jmz72Lch.js";import"./field-x8-r-LCs.js";import"./create-slot-recipe-context-C7Xtc5ey.js";import"./use-field-context-xQ5JBp_F.js";import"./create-context-BEl2lWMx.js";import"./factory-lzBkJamw.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D4E7OPXq.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-D0DXe0Bc.js";import"./index-Dx2yk9Qf.js";import"./index-jy6A5c5b.js";import"./use-locale-context-CJhWYnQ-.js";import"./use-event-DWpDLmgA.js";import"./index-v6uTuGzg.js";import"./useColorFormatConverter-BteJr02d.js";import"./index-Cjotvhly.js";import"./ReactIconWrapper-BB1xhOh9.js";import"./input-group-DxgTlSSM.js";import"./input-DRfxMqHH.js";import"./useTranslation-BAS8aYyu.js";import"./context-DByhnBKk.js";import"./portal-CT8dWSyT.js";import"./v-stack-DyApbp9x.js";import"./menu-Dc0IQWqF.js";import"./icons-DYFNS445.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DH6r188c.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
