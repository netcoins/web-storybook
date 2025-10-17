import{j as b}from"./jsx-runtime-BQw1FJDh.js";import{r as g}from"./index-DTl8I9_w.js";import{M as i}from"./index-Bx44Vn8H.js";import"./iframe-C_jfAiMj.js";import"./index-IMVB_Ian.js";import"./index-BWr3c2Na.js";import"./types-CiFe_Wa1.js";import"./factory-95VCNEo_.js";import"./button-Bq1079fH.js";import"./context-DSQWxCfV.js";import"./use-style-config-D9XEOVc0.js";import"./spinner-XBJwRY3u.js";import"./emotion-react.browser.esm-DLtW5XOd.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-C6RWpFVp.js";import"./flex-CmNuIjJk.js";import"./icon-DEvmVRH5.js";import"./text-zElQ8Nwl.js";import"./index-G7lmLk4Z.js";import"./index-pWhYKxJ8.js";import"./index.esm-D1sQLTUd.js";import"./index-CDSXbuV_.js";import"./index-CbsBzCud.js";import"./iconBase-B8sU32g4.js";import"./link-B01lteqn.js";import"./types-DQYWxJb3.js";import"./form-control-BcJ9cC3k.js";import"./h-stack-Dxcn8jP3.js";import"./stack-DaISrHpS.js";import"./responsive-DcIVqpjA.js";import"./children-DjAaBJU7.js";import"./use-checkbox-XIZP2k_G.js";import"./use-form-control-vYKfHPXC.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-CCAEGgPX.js";import"./use-safe-layout-effect-B9bJ6F1P.js";import"./use-update-effect-xgLTvF7y.js";import"./index-e2CdmhK3.js";import"./useColorFormatConverter-mqv7ev3N.js";import"./ReactIconWrapper-DcmwX-8Y.js";import"./input-group-DK_Qygg2.js";import"./input-addon-DcMy5znW.js";import"./input-BkfskICG.js";import"./useTranslation-BQcHp_OW.js";import"./context-CrxybGGs.js";import"./box-Bw4wVIZk.js";import"./menu-BV5KYbwb.js";import"./use-descendant-CAXOAUBz.js";import"./use-popper-C4tPyKe2.js";import"./use-event-listener-Ci8K31Ls.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-DHXq64k7.js";import"./use-disclosure-DwbPxmVW.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BPE10cv7.js";import"./menu-list-DUBV2Hur.js";import"./motion-CakjNdRY.js";import"./v-stack-BE0TSpwA.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
