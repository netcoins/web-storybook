import{j as b}from"./jsx-runtime-BkQZSEIf.js";import{r as g}from"./index-D4EOpcLa.js";import{M as i}from"./index-Cl7MGp6x.js";import"./iframe-DN8G179o.js";import"./index-XoorCstD.js";import"./index-C4i1M6VP.js";import"./types-OEM87gJJ.js";import"./factory-BvfaDmtu.js";import"./button-DywUw3lk.js";import"./context-uzRk5v5o.js";import"./use-style-config-B0UF7OPr.js";import"./spinner-BW1cZurn.js";import"./emotion-react.browser.esm-UeZPA3jc.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-0QJjtJvY.js";import"./flex-gyDmVpPH.js";import"./icon-BKAVBbR4.js";import"./text-638c3RYc.js";import"./index-0alrhzMu.js";import"./index-B5PNVSe8.js";import"./index.esm-CbgU3TqX.js";import"./index-Cl_nKAfg.js";import"./index-BZY4FehO.js";import"./iconBase-BhIrwaDC.js";import"./link-DB2-WZXR.js";import"./types-i2wqNBn6.js";import"./form-control-DdsGnUHJ.js";import"./h-stack-D_EOQskV.js";import"./stack-B8xZvDvv.js";import"./responsive-BT7fAblR.js";import"./children-B0anPadQ.js";import"./use-checkbox-ZC27ghZT.js";import"./use-form-control-Cpj8bSau.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BnXW2utd.js";import"./use-safe-layout-effect-ZCDLejXd.js";import"./use-update-effect-BDAUnvJJ.js";import"./index-EGMCA15o.js";import"./useColorFormatConverter-D3P8__bw.js";import"./ReactIconWrapper-C1uVqv-S.js";import"./input-group-wtvJdxas.js";import"./input-addon-fKWc9lR6.js";import"./input-B0RzRGpq.js";import"./useTranslation-BVto1Khj.js";import"./context-BGFKcsXk.js";import"./box-CNsYUkgW.js";import"./menu-b_-WVguA.js";import"./use-descendant-Bo0RuFXa.js";import"./use-popper-BbilKC3u.js";import"./use-event-listener-DX7KVXI6.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CR33AEaZ.js";import"./use-disclosure-B71kswdA.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CRtdp8JF.js";import"./menu-list-BhwryaFs.js";import"./motion-lpzbv2oE.js";import"./v-stack-AOQGywdx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
