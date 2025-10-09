import{j as b}from"./jsx-runtime-DsJGDrI9.js";import{r as g}from"./index-CsOWTxCq.js";import{M as i}from"./index-BXo1btex.js";import"./iframe-BrEj-fHR.js";import"./index-CfRXZ6id.js";import"./index-F2KekrpF.js";import"./types-BirG_6x_.js";import"./factory-DW-l0UZv.js";import"./button-GQEJDfvr.js";import"./context-DbtF92DQ.js";import"./use-style-config-CBmFdGG_.js";import"./spinner-q8umGGjp.js";import"./emotion-react.browser.esm-B-qOipIT.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CW4qXNtA.js";import"./flex-C1Misg7c.js";import"./icon-ClTXsXRa.js";import"./text-K4yY-kv6.js";import"./index-CXFX8hfW.js";import"./index-CQhmwNah.js";import"./index.esm-BQ77KF0y.js";import"./index-ByPAnK6B.js";import"./index-0WkDQStm.js";import"./iconBase-hXrUR7qP.js";import"./link-DRb9-e0y.js";import"./types-B4GGb9js.js";import"./form-control-QkjLN9uU.js";import"./h-stack-Dm5KTAs6.js";import"./stack-nysyotIF.js";import"./responsive-ClyA1Vff.js";import"./children-DC6ykxZ5.js";import"./use-checkbox-CAB5D6K_.js";import"./use-form-control-Srs4pSZU.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-16MUyjIN.js";import"./use-safe-layout-effect-BwGeSXSZ.js";import"./use-update-effect-BMqPnTiI.js";import"./index-BdsITURa.js";import"./useColorFormatConverter-Bowg8l9o.js";import"./ReactIconWrapper-BVFSj39u.js";import"./input-group-D2MR9ZQV.js";import"./input-addon-CWxgBPAW.js";import"./input-BY6SaEub.js";import"./useTranslation-CvfrTKfd.js";import"./context-Bgb6_WLd.js";import"./box-B3xH3qB_.js";import"./menu-CFbRj7pe.js";import"./use-descendant-DnBSz7Tq.js";import"./use-popper-BVFDKD8M.js";import"./use-event-listener-DYtPapfi.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-DhjBsii4.js";import"./use-disclosure-dgHok1rT.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-ByVZg5A4.js";import"./menu-list-kbmVAcgT.js";import"./motion-Uq0oa_vw.js";import"./v-stack-Dy7eVW4y.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
