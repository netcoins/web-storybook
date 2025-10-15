import{j as b}from"./jsx-runtime-F2b9qZUC.js";import{r as g}from"./index-DEIjWCZM.js";import{M as i}from"./index-CmbIJ9Qh.js";import"./iframe-DO6PTJH3.js";import"./index-BMcgBNBX.js";import"./index-CpY_lhQH.js";import"./types-Brim7Klo.js";import"./factory-D4os3DTv.js";import"./button-BtKXEFgO.js";import"./context-DZDe_Ksj.js";import"./use-style-config-ltM-VqRn.js";import"./spinner-Diordp8x.js";import"./emotion-react.browser.esm-DkvWKo7R.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BYv1b4Zo.js";import"./flex-Dmt0vVc3.js";import"./icon-w9rwFRe1.js";import"./text-f24MqBOH.js";import"./index-CuKfwI7w.js";import"./index-C5Fdzhft.js";import"./index.esm-DVn3rvtr.js";import"./index-D-5hoI3w.js";import"./index-eRWJBuzG.js";import"./iconBase-OOGBl0nZ.js";import"./link-Bi5Wsd9a.js";import"./types-CkjGSnQi.js";import"./form-control-BSOVpY4M.js";import"./h-stack-ByVsTQyk.js";import"./stack-kndN1G7o.js";import"./responsive-CRbMGSGe.js";import"./children-CXYBuceE.js";import"./use-checkbox-CdICTWxI.js";import"./use-form-control-DoqhA5K1.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-D7g_qo5-.js";import"./use-safe-layout-effect-B6Y0d9ov.js";import"./use-update-effect-DX9nYMvX.js";import"./index-Di1mnzQF.js";import"./useColorFormatConverter-BxSuu2SB.js";import"./ReactIconWrapper-rTqmz8sr.js";import"./input-group-DuH94VbM.js";import"./input-addon-Kz32c3b_.js";import"./input-C0j6nrgI.js";import"./useTranslation-CezddRaN.js";import"./context-ieJEn0X6.js";import"./box-DYkp6abn.js";import"./menu-BjB4fLhZ.js";import"./use-descendant-9Pi_s4mf.js";import"./use-popper-BFP0DruU.js";import"./use-event-listener-RIwX6lXn.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-nRb-WA54.js";import"./use-disclosure-CfaSsXLT.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DMRaYZ6e.js";import"./menu-list-C7KwxHPh.js";import"./motion-BX186klT.js";import"./v-stack-vRgNY2oM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
