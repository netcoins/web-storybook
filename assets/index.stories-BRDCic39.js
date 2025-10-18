import{j as b}from"./jsx-runtime-zMX9kT-C.js";import{r as g}from"./index-CpCus5ys.js";import{M as i}from"./index-DpCqtnbh.js";import"./iframe-B5gVaVZ6.js";import"./index-Denh88F0.js";import"./index-BFchikLI.js";import"./types-DedsU6M9.js";import"./factory-CJEULHob.js";import"./button-CiKx7H1x.js";import"./context-BxoWX6cn.js";import"./use-style-config-_reuVEHY.js";import"./spinner-C4fb9IBj.js";import"./emotion-react.browser.esm-Ds71eHAW.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BmQVFCbM.js";import"./flex-DjVMcIpx.js";import"./icon-D9llGD4O.js";import"./text-1bLNlq_T.js";import"./index-Bk9d2cpj.js";import"./index-D2anGBHi.js";import"./index.esm-DO-YoEFz.js";import"./index-CZ73_YxM.js";import"./index-YD9vWKEv.js";import"./iconBase-CF2AAAhw.js";import"./link-Cc1Al3CE.js";import"./types-DyIzSLLX.js";import"./form-control-DIEuhNVH.js";import"./h-stack-DbZ4mOVn.js";import"./stack-DezOckhg.js";import"./responsive-BDffo-wJ.js";import"./children-DdDzpVh8.js";import"./use-checkbox-B52Z2kuN.js";import"./use-form-control-Bq4bFhSv.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-CmZBCkEy.js";import"./use-safe-layout-effect-BGwQ2PqE.js";import"./use-update-effect-Det-WIcf.js";import"./index-7-Pmf3Hw.js";import"./useColorFormatConverter-BJRyOWI4.js";import"./ReactIconWrapper-BVTer17C.js";import"./input-group-CkSzndJ1.js";import"./input-addon-DeKQhr45.js";import"./input-3nS_r89T.js";import"./useTranslation-YGfIiZSr.js";import"./context-g-r_xcU2.js";import"./box-DrCaN-g_.js";import"./menu-DaCWhr6C.js";import"./use-descendant-CWVPYCkA.js";import"./use-popper-BAY2Wf3u.js";import"./use-event-listener-GQnZxBN1.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CTmYYVg0.js";import"./use-disclosure-CixK_F-5.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DVGE0GBm.js";import"./menu-list-BoBLnwFm.js";import"./motion-DMmO-et2.js";import"./v-stack-Dl3MZrcb.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
