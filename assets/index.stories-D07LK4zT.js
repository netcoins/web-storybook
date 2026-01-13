import{j as b}from"./jsx-runtime-NJXZv2PR.js";import{r as g}from"./index-jqPUURTV.js";import{M as i}from"./index-Ccd_mYzQ.js";import"./iframe-D_8vC5L7.js";import"./index-2rzo4TYy.js";import"./index-hVujzkpZ.js";import"./types-BHPz1vsO.js";import"./factory-BN2D0nrS.js";import"./button-H7sqsnMM.js";import"./context-Bmm7nclc.js";import"./use-style-config-BaJboJXq.js";import"./spinner-BWWWKM7q.js";import"./emotion-react.browser.esm-DzHtxD6p.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DnXyTSsO.js";import"./flex-dv_TXrRW.js";import"./icon-DJN3705U.js";import"./text-CG0-vbsY.js";import"./index-g1z8yJzl.js";import"./index-CR_7JneK.js";import"./index.esm-CoNglARz.js";import"./index-B-IaOehN.js";import"./index-DFng6eQ4.js";import"./iconBase-WKWH4fTh.js";import"./link-BhZ8D6Ah.js";import"./types-C0iaVSv_.js";import"./form-control-CrQE3bdC.js";import"./h-stack-CUdcX0cQ.js";import"./stack-B-_q4uu9.js";import"./responsive-1cy2zAjo.js";import"./children-B5PQdXJz.js";import"./use-checkbox-COrMihIU.js";import"./use-form-control-OSqRW-6T.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DD63nx6B.js";import"./use-safe-layout-effect-bh2HzAmb.js";import"./use-update-effect-B0MC4zum.js";import"./index-Djk-VPIM.js";import"./useColorFormatConverter-Ddm8l03i.js";import"./ReactIconWrapper-ClK3z-Uj.js";import"./input-group-CQCM5l6p.js";import"./input-addon-CRLvz5l5.js";import"./input-BgrR2GN8.js";import"./useTranslation-Bt-ieQSb.js";import"./context-r2NDd6Mj.js";import"./box-DCs53uzh.js";import"./menu-C1-LQ6Tf.js";import"./use-descendant-FEDzRfkg.js";import"./use-popper-c2kXiIQs.js";import"./use-event-listener-BUShPiHF.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-AW_HjjN0.js";import"./use-disclosure-BFdiv1nt.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-B9eTUgE_.js";import"./menu-list-BVKBAlXQ.js";import"./motion-DUc9Loml.js";import"./v-stack-uls5wi2i.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
