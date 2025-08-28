import{j as b}from"./jsx-runtime-BRPF6uRv.js";import{r as g}from"./index-DxKK6bzi.js";import{M as i}from"./index-CyKH5TI1.js";import"./iframe-DKB_pPft.js";import"./index-BZI8PZWh.js";import"./index-CoagtHye.js";import"./types-CA721sLS.js";import"./factory-CbOttNVQ.js";import"./button-DtSJRbVH.js";import"./context-aKDDOJ6F.js";import"./use-style-config-D8AmuLNk.js";import"./spinner-z49rB9VP.js";import"./emotion-react.browser.esm-CyzL1Ri7.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-_EpIqvGs.js";import"./flex-C30owhth.js";import"./icon-BncfSRyd.js";import"./text-RxHH730M.js";import"./index-B2p-eFZ3.js";import"./index-CF8tJg6H.js";import"./index.esm-BDBy6BW5.js";import"./index-B83lxhDa.js";import"./index-BnnZUVzD.js";import"./iconBase-PwpClNxo.js";import"./link-C9qqf7LM.js";import"./index-B_ko9gyL.js";import"./index-q1BCb_w2.js";import"./useColorFormatConverter-CzDCVV3z.js";import"./index-zSvL9oE8.js";import"./IconWrapper-B3A8nw7F.js";import"./box-C7BNBrLQ.js";import"./form-control-CCttXVeQ.js";import"./form-label-DnHTg-Bw.js";import"./input-group-a2vb7X-r.js";import"./children-CCZ8Dpxt.js";import"./input-addon-B5jHMkfi.js";import"./input-ByGzf3IF.js";import"./use-form-control-C75xcI3q.js";import"./call-all--NRVVPhS.js";import"./input-element-Bv-f_yWK.js";import"./h-stack-Bm1Hv16c.js";import"./stack-CmQdhcJQ.js";import"./responsive-CKpK-I-E.js";import"./use-checkbox-Drc8Zqh4.js";import"./use-callback-ref-ZUxUk2u8.js";import"./use-safe-layout-effect-CycFbrfK.js";import"./use-update-effect-BnzPv13S.js";import"./index-e9uYG1-8.js";import"./ReactIconWrapper-DCpGCHrk.js";import"./useTranslation-Bu_YqhsW.js";import"./context-CWtyM99y.js";import"./menu-list-1cUuPXgL.js";import"./use-descendant-C8HJUhVV.js";import"./use-popper-o6htQF85.js";import"./use-event-listener-i5e0wH8O.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-C6yMTk3W.js";import"./use-disclosure-g2aG3dYx.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DVB_imDt.js";import"./motion-CH9cOFFk.js";import"./v-stack-b_qwyWgN.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="71c43d72-027c-4ce1-8667-591d01808d11",e._sentryDebugIdIdentifier="sentry-dbid-71c43d72-027c-4ce1-8667-591d01808d11")}catch{}const Ee={component:i,tags:["pending"]},n={render:e=>{const[t,r]=g.useState([]),l=a=>{r(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:r})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,r]=g.useState([]),l=a=>{r(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:r})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ve=["Default","Search"];export{n as Default,o as Search,Ve as __namedExportsOrder,Ee as default};
