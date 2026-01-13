import{j as b}from"./jsx-runtime-NXhZHcg6.js";import{r as g}from"./index-Ch-dJqYU.js";import{M as i}from"./index-D-gPR5Fo.js";import"./iframe-BUebCkdh.js";import"./index-jlIQYrdx.js";import"./index-t7MViI7p.js";import"./types-BQZXY9M1.js";import"./factory-BWQouZCw.js";import"./button-DRH27w9E.js";import"./context-9zgJCxIX.js";import"./use-style-config-BeVa6Ocw.js";import"./spinner-BVQyKTiL.js";import"./emotion-react.browser.esm-Ba1kZHdS.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CNwRwZMM.js";import"./flex-DfFhdsg3.js";import"./icon-idr_5mYa.js";import"./text-DfZTyfAf.js";import"./index-Bk3zJUdd.js";import"./index-B1eQFHkt.js";import"./index.esm-Dupz7weI.js";import"./index-41FjFkpD.js";import"./index-Bv-lCoQI.js";import"./iconBase-D4f4cSS3.js";import"./link-CcZ3Kqip.js";import"./types-Cp9kXdTs.js";import"./form-control-CEeNEQaV.js";import"./h-stack-CPw2HMR_.js";import"./stack-CaAhFgd6.js";import"./responsive-BP29ecxU.js";import"./children-DI0np1TJ.js";import"./use-checkbox-DF4huLyZ.js";import"./use-form-control-BBtzsbPN.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-lCHO6cKy.js";import"./use-safe-layout-effect-CVtmfawi.js";import"./use-update-effect-Dj-cxMAl.js";import"./index-BXlBdlKQ.js";import"./useColorFormatConverter-p5siRVUE.js";import"./ReactIconWrapper-PLrzU-qZ.js";import"./input-group-BcqjiCfC.js";import"./input-addon-sBEmesuw.js";import"./input-BacnFFyS.js";import"./useTranslation-BrU8jXuL.js";import"./context-BJ2ml8Vt.js";import"./box-C6_2p-KD.js";import"./menu-Bx_5Soel.js";import"./use-descendant-Btck_i_R.js";import"./use-popper-BuZCMZMT.js";import"./use-event-listener-DQE33nso.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-C8MziRH4.js";import"./use-disclosure-BONz3KZl.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-D3LWT1jJ.js";import"./menu-list-CS22oQq8.js";import"./motion-BoUmx0w2.js";import"./v-stack-CaEbmslD.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
