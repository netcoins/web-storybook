import{j as b}from"./jsx-runtime-jg6pqZ_i.js";import{r as g}from"./index-BSHGx6zv.js";import{M as i}from"./index-C47rTfAl.js";import"./iframe-Bq0h1ODx.js";import"./index-CToHvJwr.js";import"./types-Cuz_xkVi.js";import"./color-mode-sFAM2dcP.js";import"./iconBase-DdifFKa-.js";import"./icon-button-CRF5dYkY.js";import"./button-D-mmUtU2.js";import"./factory-Bpf62hMT.js";import"./create-recipe-context-CDbsiUah.js";import"./attr-DhmmAXiK.js";import"./spinner-hcJ0FEpn.js";import"./skeleton-CdsqxAT9.js";import"./index-DoxBQr9B.js";import"./stack-B7JwP2k5.js";import"./flex-BG3sCgss.js";import"./icon-CCBnoYvA.js";import"./index-Bft7ftNQ.js";import"./index-BCApDDVU.js";import"./index-Co0qoiQD.js";import"./index.esm-DveljwHM.js";import"./index-Bu6oTPdl.js";import"./link-C5iQWOjz.js";import"./types-BkJv8uNx.js";import"./index-BL80Sg3v.js";import"./h-stack-mHPcse9w.js";import"./field-BMxTQGMh.js";import"./create-slot-recipe-context-CI5mfXeb.js";import"./use-field-context-D5MiyzvR.js";import"./create-context-C_3Soxv9.js";import"./factory-C4_lmgJw.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CN6qV6zg.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CZb1Hhv0.js";import"./index-p10sExUS.js";import"./index-CDu8JjYl.js";import"./use-locale-context-Bfe2SuVb.js";import"./use-event-BBxGEtYD.js";import"./index-DLFnRtQ7.js";import"./useColorFormatConverter-B14i2pIP.js";import"./index-CfQae_a0.js";import"./ReactIconWrapper-B86_pAdi.js";import"./input-group-B9zIFE9T.js";import"./input-DCgHLRjA.js";import"./useTranslation-BzgDT8-_.js";import"./context-D_cdTDW0.js";import"./portal-BbvLTJp4.js";import"./v-stack-tvlNueub.js";import"./menu-BlAq-8e_.js";import"./icons-Bl0D-SAN.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-C6hHwYHd.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ee=["Default","Search"];export{r as Default,o as Search,Ee as __namedExportsOrder,ye as default};
