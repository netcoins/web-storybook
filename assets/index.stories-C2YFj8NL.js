import{j as b}from"./jsx-runtime-CpDozxPR.js";import{r as g}from"./index-D01Myi75.js";import{M as i}from"./index-D465Efrf.js";import"./iframe-DystbDa4.js";import"./index-DEYwsYja.js";import"./index-Kt6TaHLJ.js";import"./types-BzqHVfMk.js";import"./factory-D77lZdb7.js";import"./button-DDL7_tPM.js";import"./context-BxRtqpQ2.js";import"./use-style-config-D_1jrDOF.js";import"./spinner-CFWjkQRu.js";import"./emotion-react.browser.esm-BUVBNkNz.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CCG2dtML.js";import"./flex-agrL0LXn.js";import"./icon-CNJWkug4.js";import"./text-Bm2hgtv_.js";import"./index-CuJweM-H.js";import"./index-gRXT8Qcj.js";import"./index.esm-Rvn5CvA_.js";import"./index-zcR8JwEq.js";import"./index-PbswSILV.js";import"./iconBase-CUWHmIsI.js";import"./link-D92Loo_l.js";import"./types-C307-Iyf.js";import"./form-control-DAy5Vtqb.js";import"./h-stack-D2FPrX4l.js";import"./stack-DTQO0O4l.js";import"./responsive-D6bgPaAd.js";import"./children-Cqy4imaC.js";import"./use-checkbox-BzAW2zcA.js";import"./use-form-control-CgssX4uG.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DMT5aitM.js";import"./use-safe-layout-effect-CuBrxhfb.js";import"./use-update-effect-BaI2BA4c.js";import"./index-D8N1wc3R.js";import"./useColorFormatConverter-DMb5fJYy.js";import"./ReactIconWrapper-DQa4Jd_H.js";import"./input-group-BhQPBH6l.js";import"./input-addon-DAUNOOBi.js";import"./input-BiCXYHSr.js";import"./useTranslation-BKGHeECB.js";import"./context-Dd7N4oVq.js";import"./box-BVpat9EY.js";import"./menu-hMVMtCh8.js";import"./use-descendant-l1VJBWKj.js";import"./use-popper-D4DF8VIv.js";import"./use-event-listener-DNaNt6q8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-mVgPOlHo.js";import"./use-disclosure-njWCsCHD.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-C85XHxl5.js";import"./menu-list-V01JyjJp.js";import"./motion-B6613Cn0.js";import"./v-stack-DYzX3lXG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
