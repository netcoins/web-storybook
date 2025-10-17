import{j as b}from"./jsx-runtime-B7kt-w8m.js";import{r as g}from"./index-ljNtE6jk.js";import{M as i}from"./index-S6dXy1B5.js";import"./iframe-B1MAy5GU.js";import"./index-iEhTR3oI.js";import"./index-CzEjj6B6.js";import"./types-0nED4nic.js";import"./factory-mOUK1xij.js";import"./button-BU-eYeeZ.js";import"./context-is24LiEB.js";import"./use-style-config-CMJaUkQS.js";import"./spinner-DMuadPIi.js";import"./emotion-react.browser.esm-Cd6AAcg_.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-eimc2np2.js";import"./flex-CAwgA86V.js";import"./icon-ljRhRRLu.js";import"./text-DdZUcbr0.js";import"./index-BkY7E0KB.js";import"./index-DUoLxVZm.js";import"./index.esm-NgCC-C_v.js";import"./index-C0J7q-8F.js";import"./index-CsSj1Fmw.js";import"./iconBase-b4A1PDge.js";import"./link-BaXmvgra.js";import"./types-yTaU_WOE.js";import"./form-control-8VnbhH6C.js";import"./h-stack-ByF40JlJ.js";import"./stack-DnpcDHtI.js";import"./responsive-aT6fzTSd.js";import"./children-BIvgulF7.js";import"./use-checkbox-DXBVIBzi.js";import"./use-form-control-DqHfh_PI.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DqHJ43nd.js";import"./use-safe-layout-effect-B7OeJ9eV.js";import"./use-update-effect-CQ1Lw5zL.js";import"./index-eTX_TI3U.js";import"./useColorFormatConverter-Dceb41KM.js";import"./ReactIconWrapper-DIVNGSkD.js";import"./input-group-B8z_rhim.js";import"./input-addon-uzdNJWwf.js";import"./input-BUSkXqAU.js";import"./useTranslation-BDNWt5J2.js";import"./context-DTp6U_dS.js";import"./box-DB6caj5F.js";import"./menu-CTk7aH-1.js";import"./use-descendant-C76xxYqe.js";import"./use-popper-CGLPTTqA.js";import"./use-event-listener-BgKTUJdu.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CPN4PfIr.js";import"./use-disclosure-BDs55f4f.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-B0JH8wCK.js";import"./menu-list-BdzEUXa5.js";import"./motion-D8jztImW.js";import"./v-stack-BF4ZZtq6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
