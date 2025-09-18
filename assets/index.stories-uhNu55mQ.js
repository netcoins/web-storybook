import{j as b}from"./jsx-runtime-D9lk7ff7.js";import{r as g}from"./index-DGSN4z5d.js";import{M as i}from"./index-CC8MTy7u.js";import"./iframe-4snOr_nA.js";import"./index-ChLI57pT.js";import"./index-BWqMBtsC.js";import"./types-5UbARIeR.js";import"./factory-BaMHIHF2.js";import"./button-CeDxQuQA.js";import"./context-DbYNCYOF.js";import"./use-style-config-BTIaUb99.js";import"./spinner-DqecDoEp.js";import"./emotion-react.browser.esm-DndEamoG.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-FfpTWtbi.js";import"./flex-Cn4tngKW.js";import"./icon-C96Dy3VJ.js";import"./text-Davp32bw.js";import"./index-D3AyeWax.js";import"./index-DHQtcm4i.js";import"./index.esm-CSef8Gwz.js";import"./index-CB7XTSe9.js";import"./index-CPXKtL05.js";import"./iconBase-CA1HnJL0.js";import"./link-yC38Pivd.js";import"./types-BHUp5B1b.js";import"./form-control-C3bfR5Fn.js";import"./h-stack-3Dj_IR0w.js";import"./stack-M98tplnj.js";import"./responsive-D9h5m_CI.js";import"./children-Di3ar6Rw.js";import"./use-checkbox-DmSyNKAC.js";import"./use-form-control-i8vIWuTo.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-D312f1V-.js";import"./use-safe-layout-effect-XsK3228V.js";import"./use-update-effect-ChZy2cIw.js";import"./index-DHfG2afg.js";import"./useColorFormatConverter-B3Ohx5Ps.js";import"./ReactIconWrapper-DBLWKmlh.js";import"./input-group-CMKMttZY.js";import"./input-addon-DuyPt4WO.js";import"./input-a6LGNFTx.js";import"./useTranslation-DRnxolO8.js";import"./context-B-AZwJno.js";import"./box-mIRb2X17.js";import"./menu-DHKreVls.js";import"./use-descendant-D38HRtz-.js";import"./use-popper-BfN1kkWJ.js";import"./use-event-listener-Wcj-GdVd.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-Bq-cSzFv.js";import"./use-disclosure-XZf61nHt.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CiK5fLmj.js";import"./menu-list-B8GC7uh_.js";import"./motion--IkAAy9x.js";import"./v-stack-CyWmPaef.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
