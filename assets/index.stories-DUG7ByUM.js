import{j as b}from"./jsx-runtime-BO59uSbh.js";import{r as g}from"./index-BgqXGIRq.js";import{M as i}from"./index-BzaAiCr6.js";import"./iframe-Buq5vjeR.js";import"./index-B-Xsw8aM.js";import"./index-BXPs373V.js";import"./types-DioFgYaa.js";import"./factory-Clpu5yQH.js";import"./button-CGmuT4pt.js";import"./context-Bv8doexR.js";import"./use-style-config-CV80em0b.js";import"./spinner-DV46HrdQ.js";import"./emotion-react.browser.esm-UNCuAYfq.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CUoZnHPv.js";import"./flex-BcUag4Kz.js";import"./icon-CT4IPwKS.js";import"./text-CxUtm01j.js";import"./index-D4IjEq-i.js";import"./index-DmxutBBB.js";import"./index.esm-CVnML83m.js";import"./index-BICaYCvv.js";import"./index-Dol7vJXm.js";import"./iconBase-B1goy4du.js";import"./link-CfPIAiH7.js";import"./types-DZKCCTac.js";import"./form-control-DThX0ZZH.js";import"./h-stack-hOe5412n.js";import"./stack-DBUvN76X.js";import"./responsive-D97B2mJr.js";import"./children-CK6NdR6v.js";import"./use-checkbox-DlNkuRQs.js";import"./use-form-control-mREAO573.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-CyxOgj_V.js";import"./use-safe-layout-effect-Cu1RChpk.js";import"./use-update-effect-DpfmmSSf.js";import"./index-FZ08VTV5.js";import"./useColorFormatConverter-BGnNyKXb.js";import"./ReactIconWrapper-Bz2umCih.js";import"./input-group-C1gP17Yx.js";import"./input-addon-B86Try0G.js";import"./input-B3a4SesL.js";import"./useTranslation-WNTLl7ye.js";import"./context-CdFR_DVJ.js";import"./box-C0SgsxPP.js";import"./menu-pxCxYgEn.js";import"./use-descendant-D3vRal4Z.js";import"./use-popper-DEDyDvn-.js";import"./use-event-listener--QLWm8S9.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-Ba70ZfHO.js";import"./use-disclosure-CUXcQS-9.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CCUfD3j7.js";import"./menu-list-BeJiEjdy.js";import"./motion-B5oP4Omx.js";import"./v-stack-BmLYQTLm.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
