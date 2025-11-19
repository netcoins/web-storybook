import{j as b}from"./jsx-runtime-DycBG7t2.js";import{r as g}from"./index-BtnZsqI8.js";import{M as i}from"./index-DnrKz39O.js";import"./iframe-DQF7kjwh.js";import"./index-W5dpL5aL.js";import"./index-_F8bMnLN.js";import"./types-DQlJ93xp.js";import"./factory-BQdo0XKC.js";import"./button-Dx4-ktMJ.js";import"./context-De3L8j-K.js";import"./use-style-config-DpFmMCn2.js";import"./spinner-BvABE9kT.js";import"./emotion-react.browser.esm-Da_Q3ZfM.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CKiHq7u4.js";import"./flex-Bu-vBFNV.js";import"./icon-4CVVtdFC.js";import"./text-8uFHArpX.js";import"./index-sqBvDwFB.js";import"./index-DB_dtgKv.js";import"./index.esm-PKoZXSjd.js";import"./index-CFhJk8uz.js";import"./index-J6xFpodX.js";import"./iconBase-Dqh1lum1.js";import"./link-PVXnYowj.js";import"./types-CY5RIAmY.js";import"./form-control-CJQ-cH7l.js";import"./h-stack-BpIxbAzo.js";import"./stack-DrwMYkxF.js";import"./responsive-C1AmxRWE.js";import"./children-c925zUJn.js";import"./use-checkbox-CVoLIiZ3.js";import"./use-form-control-CeoYJWzD.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-C1u5CAv-.js";import"./use-safe-layout-effect-z0HIe9GO.js";import"./use-update-effect-CWLww0cP.js";import"./index-DaaI2BKn.js";import"./useColorFormatConverter-VslqQnjZ.js";import"./ReactIconWrapper-Bqx4fjXw.js";import"./input-group-CHC1hX9L.js";import"./input-addon-DmW-zefh.js";import"./input-DtdQo3BM.js";import"./useTranslation-DoHcXfH0.js";import"./context-DIjP_zey.js";import"./box-DcZt547K.js";import"./menu-HrdVAT_F.js";import"./use-descendant-DaWMXvzf.js";import"./use-popper--0Kua-8d.js";import"./use-event-listener-CIVNAP9L.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BHuHdbs6.js";import"./use-disclosure-BOoiphcn.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-C94NIEl5.js";import"./menu-list-j2EXZb2K.js";import"./motion-BabrYK0L.js";import"./v-stack-_faCUUyv.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
