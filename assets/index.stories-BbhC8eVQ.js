import{j as b}from"./jsx-runtime-f-LqmLrp.js";import{r as g}from"./index-DdGWbiM8.js";import{M as i}from"./index-C3OYcea8.js";import"./iframe-C8iPQQbg.js";import"./index-NqVZP5Y2.js";import"./index-CRRaF9yS.js";import"./types-BWUfrZAW.js";import"./factory-Cn76LgBF.js";import"./button-CJKUbs0R.js";import"./context-DGdO9Tsj.js";import"./use-style-config-CSQQc7ef.js";import"./spinner-CaO_e2IB.js";import"./emotion-react.browser.esm-DFQh7K33.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B8PxTFZn.js";import"./flex-D3orRMxn.js";import"./icon-CUWxfBPZ.js";import"./text-DqP0TTVC.js";import"./index-CLYMdsaZ.js";import"./index-CoEqA6Sf.js";import"./index.esm-cEs5758K.js";import"./index-BHc-sFDu.js";import"./index-B9XvT4gi.js";import"./iconBase-D_l9Hyr6.js";import"./link-uja77377.js";import"./types-B04CaY3k.js";import"./form-control-CB87nXP4.js";import"./h-stack-B8X2vA3R.js";import"./stack-DmNc0MgV.js";import"./responsive-BcHDOAn0.js";import"./children-QRV0RdTX.js";import"./use-checkbox-DQg4VvgD.js";import"./use-form-control-CRSw71OZ.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-B1jvunlg.js";import"./use-safe-layout-effect-DkEPWJAu.js";import"./use-update-effect-Crxbl6TK.js";import"./index-DSF0Rz1o.js";import"./useColorFormatConverter-BSymcS_t.js";import"./ReactIconWrapper-DIAC3zi-.js";import"./input-group-BtlCROj_.js";import"./input-addon-BzqbTUDk.js";import"./input-dcgNNX5r.js";import"./useTranslation-COhdlQwc.js";import"./context-Def0sVG3.js";import"./box-CM5x4BGX.js";import"./menu-D03rtVhV.js";import"./use-descendant-BhJqcNi_.js";import"./use-popper-GAemyZPj.js";import"./use-event-listener-BN4pGAgl.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-WjYkQkj3.js";import"./use-disclosure-CDfd52lv.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BnHj2hOZ.js";import"./menu-list-Byy2G_nT.js";import"./motion-Cx9rCsFt.js";import"./v-stack-BQg9isO1.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
