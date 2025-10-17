import{j as b}from"./jsx-runtime-CaqrN-wy.js";import{r as g}from"./index-QjMZFVYs.js";import{M as i}from"./index-BryXE909.js";import"./iframe-Cqpi4Msv.js";import"./index-DYTSH956.js";import"./index-D-EoB16E.js";import"./types-C1oQHacb.js";import"./factory-BwvVwOTu.js";import"./button-DIdHwt0M.js";import"./context-CZ0KRvgK.js";import"./use-style-config-bi-IgeFq.js";import"./spinner-U_1-5A1n.js";import"./emotion-react.browser.esm-CH-py4pl.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BKbVhNWh.js";import"./flex-TdUGHDJc.js";import"./icon-Bdfsf3m3.js";import"./text-CtZ4cwpB.js";import"./index-CGDrJ5Rn.js";import"./index-1_G-RCD6.js";import"./index.esm-RVhRa2wZ.js";import"./index-BvtkYIuw.js";import"./index-IjW13TAE.js";import"./iconBase-C-wEJwje.js";import"./link-C2ksB-ab.js";import"./types-BVm_tglt.js";import"./form-control-DH8FFJ4f.js";import"./h-stack-C-UrK6mF.js";import"./stack-qdD5s7CS.js";import"./responsive-By-ySVby.js";import"./children-C5NfFATG.js";import"./use-checkbox-SWwL4Upy.js";import"./use-form-control-B_x_eLXV.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-HRjtNSAg.js";import"./use-safe-layout-effect-CSWa5Pqu.js";import"./use-update-effect-B72ZNyjo.js";import"./index-CbVRlPFT.js";import"./useColorFormatConverter-B9YDd86Z.js";import"./ReactIconWrapper-BZLGG3bb.js";import"./input-group-CEG2jyS-.js";import"./input-addon-Cr-Jm3N3.js";import"./input-CVNBhWxS.js";import"./useTranslation-BtLFTsug.js";import"./context-CTylqsv-.js";import"./box-BodYN2xA.js";import"./menu-DiaGYXvw.js";import"./use-descendant-CpT0Q62z.js";import"./use-popper-CDoEADSq.js";import"./use-event-listener-DZkzscL_.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CL617Kgf.js";import"./use-disclosure-DfgnEe9q.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BNnWz8sS.js";import"./menu-list-CHVzfKrn.js";import"./motion-BeXSIAq6.js";import"./v-stack-Z_hzF2BO.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
