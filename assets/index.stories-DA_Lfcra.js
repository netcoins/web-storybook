import{j as b}from"./jsx-runtime-CkJgH8fn.js";import{r as g}from"./index-BWGxuQ-J.js";import{M as i}from"./index-CdvJOkRQ.js";import"./iframe-gq5HhIsB.js";import"./index-BQ4xuo-w.js";import"./index-BxLJ6lI1.js";import"./types-BvNrwTK1.js";import"./factory-BIK4DVT5.js";import"./button-DpswCHkU.js";import"./context-D8qSvbMZ.js";import"./use-style-config-CoRFw0rh.js";import"./spinner-D1PkiaSO.js";import"./emotion-react.browser.esm-DmJ4SU3l.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B1jr3LbU.js";import"./flex-CbYjEDda.js";import"./icon-BBMwT8Yx.js";import"./text-CmEQUfFU.js";import"./index-CG_k8sDk.js";import"./index-Cdj3h6hk.js";import"./index.esm-CEEIGyPC.js";import"./index-CiJADV4x.js";import"./index-9VlqPjGV.js";import"./iconBase-29ISTzRS.js";import"./link-0SDShKOl.js";import"./types-TbBFnqYG.js";import"./form-control-9T5fky7A.js";import"./h-stack-C2EcV2j3.js";import"./stack-CI5x9zmX.js";import"./responsive-DBZabLz9.js";import"./children-CusfUkJN.js";import"./use-checkbox-Ci7TiADB.js";import"./use-form-control-BAp1euDi.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-CJEAjBco.js";import"./use-safe-layout-effect-Bj3q-XaZ.js";import"./use-update-effect-DhFBTq2Q.js";import"./index-DUNGkFMq.js";import"./useColorFormatConverter-D8Qw1ZcS.js";import"./ReactIconWrapper-BLklYqaA.js";import"./input-group-DPhmiYdr.js";import"./input-addon-FwAn5oZp.js";import"./input-Bicl_bLQ.js";import"./useTranslation-C530LY-w.js";import"./context-BntNsgdU.js";import"./box-C5y2qDVe.js";import"./menu-7NrdVfws.js";import"./use-descendant-CHqSC-qm.js";import"./use-popper-BTPz0Ndx.js";import"./use-event-listener-B6XGaDIX.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-VMgHyWRc.js";import"./use-disclosure-CchPfusD.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DF6IAPf7.js";import"./menu-list-DBQROX8e.js";import"./motion-Cfxm_SBL.js";import"./v-stack-Zg8_QmvG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
