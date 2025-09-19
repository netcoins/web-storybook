import{j as b}from"./jsx-runtime-BAZvs5A0.js";import{r as g}from"./index-CrJ-1aZL.js";import{M as i}from"./index-u4LNrjpL.js";import"./iframe-DoV1S5fd.js";import"./index-BbNX2tpr.js";import"./index-DZJ6HENc.js";import"./types-DMHAZAX2.js";import"./factory-DsIFjfwt.js";import"./button-KvMt9v6G.js";import"./context-DLcajKlK.js";import"./use-style-config-CS_U3WqC.js";import"./spinner-DQQA_LPF.js";import"./emotion-react.browser.esm-KVJnV3B1.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BaSwpNy7.js";import"./flex-D7q5yRS7.js";import"./icon-BKxv0mgo.js";import"./text-DoUjpBXO.js";import"./index-BOoBpXo8.js";import"./index-BcvQ5whk.js";import"./index.esm-CJqJsE6S.js";import"./index-CIeNzBwy.js";import"./index-y3MxZTpK.js";import"./iconBase-CXoTK8Ob.js";import"./link-C81swIhj.js";import"./types-DsjE3Ya_.js";import"./form-control-BeJ0QHzw.js";import"./h-stack-Bq9tLdLL.js";import"./stack-CZRR4nKW.js";import"./responsive-BQa0UBz6.js";import"./children-DLvkLNsz.js";import"./use-checkbox-DQ-nScDL.js";import"./use-form-control-BO2rED8_.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DGhWitLy.js";import"./use-safe-layout-effect-BM9K7dhN.js";import"./use-update-effect-DXzgDPQK.js";import"./index-EHY4txH_.js";import"./useColorFormatConverter-CW99gA6Y.js";import"./ReactIconWrapper-Bb_Vv5ic.js";import"./input-group-DVr_b9bz.js";import"./input-addon-CXHyG5Gt.js";import"./input-D66VJe5Y.js";import"./useTranslation-CYizUY4p.js";import"./context-D9bqmZ0m.js";import"./box-BXR3r_-o.js";import"./menu-BoaUxerz.js";import"./use-descendant-CEP-__JH.js";import"./use-popper-CCS7RNxl.js";import"./use-event-listener-C2ScdE8e.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CM3qV7rv.js";import"./use-disclosure-dnKQam3A.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-C0SRWS0o.js";import"./menu-list-DO0po52r.js";import"./motion-Bcd4NHqk.js";import"./v-stack-DreH78jJ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
