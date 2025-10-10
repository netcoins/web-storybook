import{j as b}from"./jsx-runtime-D1fmR_0H.js";import{r as g}from"./index-D7kejBr3.js";import{M as i}from"./index-md8GEhVM.js";import"./iframe-Djr8TDZX.js";import"./index-BiKVk-Fx.js";import"./index-DuuZPAuR.js";import"./types-DUbbZXGd.js";import"./factory-B75oiwYl.js";import"./button-B3z4xnCp.js";import"./context-DtPzYcKH.js";import"./use-style-config-Daw0etIq.js";import"./spinner-D1Zi2X8i.js";import"./emotion-react.browser.esm-BySdyGr1.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DWU1dUnL.js";import"./flex-B7jvFCuJ.js";import"./icon-Amzc7Rxz.js";import"./text-DIezfyBL.js";import"./index-CZ9iAA8U.js";import"./index-dnlS9r-v.js";import"./index.esm-cLm5M340.js";import"./index-BA5L0-ay.js";import"./index-DP7MK6eO.js";import"./iconBase-_mle2yPy.js";import"./link-DjskeokQ.js";import"./types-DQ5KK60y.js";import"./form-control-Cd-d_dbf.js";import"./h-stack-CzdWZ-mr.js";import"./stack-Z0Tfib7q.js";import"./responsive-C4w5CQAU.js";import"./children-V6qB4g97.js";import"./use-checkbox-utm6qyDZ.js";import"./use-form-control-CWOMNZC0.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-Dc4T41Io.js";import"./use-safe-layout-effect-BGeZWWWj.js";import"./use-update-effect-B98N2EbP.js";import"./index-fLRAvT68.js";import"./useColorFormatConverter-CP7R4FjB.js";import"./ReactIconWrapper-CeG2FVW7.js";import"./input-group-DTybUA7G.js";import"./input-addon-BmEx9Duu.js";import"./input-n7ZxjGPU.js";import"./useTranslation-DDKfQC5m.js";import"./context-Dgbi3PHK.js";import"./box-Ddo0T5vp.js";import"./menu-CHh6nII6.js";import"./use-descendant-C_3hbAYB.js";import"./use-popper-CfeTSc3e.js";import"./use-event-listener-CK1Cb9yv.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BEiSEUK6.js";import"./use-disclosure-DNUjUzU3.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-ryQlF0QM.js";import"./menu-list-DkDRZf-a.js";import"./motion-CEMETFki.js";import"./v-stack-BkMeaHSU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
