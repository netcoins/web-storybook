import{j as b}from"./jsx-runtime-0j627tJz.js";import{r as g}from"./index-CqM68cw3.js";import{M as i}from"./index-BIFgp9M_.js";import"./iframe-BequwYZt.js";import"./index-CAdUzXc9.js";import"./index-DRnT4q3L.js";import"./types-CBPNg1lY.js";import"./factory-Bd3V6wa0.js";import"./button-LLMNyJV3.js";import"./context-CRHpPgiL.js";import"./use-style-config-K9VkrvYr.js";import"./spinner-C8UEVkG1.js";import"./emotion-react.browser.esm-fXjbUP0y.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-JZ-KxWIX.js";import"./flex-BUw3zH7M.js";import"./icon-MsGxxGD1.js";import"./text-B0fW30gV.js";import"./index-DaF-gfsG.js";import"./index-D93mZusx.js";import"./index.esm-BCdeYzXr.js";import"./index-CD3sdQsM.js";import"./index-CH_UO4tK.js";import"./iconBase-BZJQX4CJ.js";import"./link-C7BeQdGD.js";import"./types-CB4wqhg4.js";import"./form-control-CsmaPJDd.js";import"./h-stack-5kPPJoME.js";import"./stack-D0cL1Qb1.js";import"./responsive-D0buso0D.js";import"./children-DMrXMgaK.js";import"./use-checkbox-0Sp92fnI.js";import"./use-form-control-7GzFy7Wz.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-Bb_HrfCB.js";import"./use-safe-layout-effect-cxAStKeI.js";import"./use-update-effect-Z2q3P0cR.js";import"./index-Cp38Vufi.js";import"./useColorFormatConverter-Bqk7RZn8.js";import"./ReactIconWrapper-B_y0NoKf.js";import"./input-group-Bdt0rDHz.js";import"./input-addon-B1Z2hh47.js";import"./input-CUggIiUd.js";import"./useTranslation-D16A3oi5.js";import"./context-Dak0qW2L.js";import"./box-BxwTpzrX.js";import"./menu-9iu4e7ai.js";import"./use-descendant-kP1i2bA9.js";import"./use-popper-_gbpm_E0.js";import"./use-event-listener-UqEDgyih.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CCwWdjvL.js";import"./use-disclosure-CYveMB9n.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Ex6VinmX.js";import"./menu-list-Ci4J80r7.js";import"./motion-CvhmvcY9.js";import"./v-stack-Bk-XX0Qs.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6ca0e39b-bf4a-4a89-863d-b00b94ab16b7",e._sentryDebugIdIdentifier="sentry-dbid-6ca0e39b-bf4a-4a89-863d-b00b94ab16b7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
