import{j as b}from"./jsx-runtime-Dl65b5Ft.js";import{r as g}from"./index-Dx8U6HT0.js";import{M as i}from"./index-csB5Aa9k.js";import"./iframe-CspplzkO.js";import"./index-WQ0-MoaW.js";import"./index-CM3OqSaf.js";import"./types-LnE0NQFQ.js";import"./factory-BVSOBJDN.js";import"./button-CEyPViyF.js";import"./context-CbOneei4.js";import"./use-style-config-Cg25QPWW.js";import"./spinner-Jpzki7Nr.js";import"./emotion-react.browser.esm-DHDzoTUT.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BN62VkOm.js";import"./flex-CCsjEBiM.js";import"./icon-BQZJQIlv.js";import"./text-C_yf4AbR.js";import"./index-BhmZg2Au.js";import"./index-Cms4V9r5.js";import"./index.esm-5KF0nAe3.js";import"./index-BtqCm264.js";import"./index-BnQR5SKL.js";import"./iconBase-ypD8OVkJ.js";import"./link-CQmm50fV.js";import"./types-uJVEkAb7.js";import"./form-control-BQMFElq6.js";import"./h-stack-BLL1E1Gj.js";import"./stack-BtDhLTgm.js";import"./responsive-J4AcTwud.js";import"./children-DrTEusAb.js";import"./use-checkbox-2klz4tq_.js";import"./use-form-control-CTbD-N8j.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-D7vYO4C0.js";import"./use-safe-layout-effect-B3ZR_d1v.js";import"./use-update-effect-DyVwXlaJ.js";import"./index-CPIpFwJl.js";import"./useColorFormatConverter-JZ-CgPFw.js";import"./ReactIconWrapper-wAn6i36x.js";import"./input-group-BJGUqcDd.js";import"./input-addon-CkJhLb7F.js";import"./input-NlgGk1V0.js";import"./useTranslation-DSqpKOvX.js";import"./context-lJ3fCJqv.js";import"./box-xJmNwxIz.js";import"./menu-H7GagmRU.js";import"./use-descendant-DgFi7rMB.js";import"./use-popper-Qa1Jhdk4.js";import"./use-event-listener-ekDpyWuY.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BFpwFWHv.js";import"./use-disclosure-Dr6LLOyo.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CTKw-ilw.js";import"./menu-list-BeL27Cu8.js";import"./motion-DU7btML2.js";import"./v-stack-DGPAujB4.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
