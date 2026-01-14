import{j as b}from"./jsx-runtime-dwLmKzBU.js";import{r as g}from"./index-DD7I555u.js";import{M as i}from"./index-CCPo_xh3.js";import"./iframe-CTDEooyK.js";import"./index-Ck7gJTNy.js";import"./index-tbwcTfqw.js";import"./types-C77LlJgK.js";import"./factory-C-MThQCt.js";import"./button-CpvHk95x.js";import"./context-DcV_87gr.js";import"./use-style-config-DkkLwA2c.js";import"./spinner-IQl4Yktj.js";import"./emotion-react.browser.esm-DK9NsFbg.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-WbnRqhDC.js";import"./flex-BrPt1u5T.js";import"./icon-DrNKr4M9.js";import"./text-Bq_lQngR.js";import"./index-Cu6_kMiU.js";import"./index-hFVWWN_g.js";import"./index.esm-BoYM9p_m.js";import"./index-B7NO97RM.js";import"./index-jpLJ-bTA.js";import"./iconBase-YpL9J8BA.js";import"./link-CrA80qN7.js";import"./types-4z2v2O9k.js";import"./form-control-CiZjiyyj.js";import"./h-stack-Ou0msBwq.js";import"./stack-RP0QBHRd.js";import"./responsive-C_X96oM1.js";import"./children-C5brfHjB.js";import"./use-checkbox-BNtsUJAv.js";import"./use-form-control-CjxqDkDL.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-Bs6xhpD_.js";import"./use-safe-layout-effect-yxcMGgBv.js";import"./use-update-effect-5exfd1-h.js";import"./index-DiBoivxt.js";import"./useColorFormatConverter-oPfoAqcG.js";import"./ReactIconWrapper-Bw7TsZjO.js";import"./input-group-BDXzOsvA.js";import"./input-addon-BPHjAlDG.js";import"./input-BGdH-ttN.js";import"./useTranslation-D1jW-_tr.js";import"./context-C7IMdoTQ.js";import"./box-UiBjKlxC.js";import"./menu-BkVJC7pN.js";import"./use-descendant-CHr2F-5v.js";import"./use-popper-xl9nip9S.js";import"./use-event-listener-ytVGhmcj.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-Bb-trt63.js";import"./use-disclosure-DZv0AcOt.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DWUwph5d.js";import"./menu-list-BKvJXqp3.js";import"./motion-Cmwgc9Lq.js";import"./v-stack-BPRKWBoU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
