import{j as b}from"./jsx-runtime-BmMgCgA2.js";import{r as g}from"./index-DmlYK-Z3.js";import{M as i}from"./index-CL_3lbuo.js";import"./iframe-BSEJFnMu.js";import"./index-BryPmETh.js";import"./index-DBu1iHhe.js";import"./types-B6HLB56J.js";import"./factory-CQA8Rns8.js";import"./button-Dy5tAnbz.js";import"./context-CTsseuKW.js";import"./use-style-config-DHCZb2oj.js";import"./spinner-CH1cQd4v.js";import"./emotion-react.browser.esm-BploOY2-.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-NbDdLJmB.js";import"./flex-fLoPxTNl.js";import"./icon-Bcxmfz2b.js";import"./text-Ceh3FTYN.js";import"./index-DWoWMGOt.js";import"./index-DqllCdg-.js";import"./index.esm-P6WrTEEE.js";import"./index-DfqmIJEo.js";import"./index-DrxAg71I.js";import"./iconBase-BiK6znbS.js";import"./link-e-Y7C4fK.js";import"./types-D6voKK4K.js";import"./form-control-B1SIxlKp.js";import"./h-stack-Cv6U8dMZ.js";import"./stack-nMcbWxD8.js";import"./responsive-BEGKHqFH.js";import"./children-BS06lfKN.js";import"./use-checkbox-Dk8_NR4d.js";import"./use-form-control-DgNE3C4i.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-cafkOCBk.js";import"./use-safe-layout-effect-8WLRTJpb.js";import"./use-update-effect-D9ssCkk4.js";import"./index-BsEMknW8.js";import"./useColorFormatConverter-BBFtt4F9.js";import"./ReactIconWrapper-D7kroLnn.js";import"./input-group-ysGMFK-Y.js";import"./input-addon-BmntIB1A.js";import"./input-B8D_0G4j.js";import"./useTranslation-CxDF6dVF.js";import"./context-D-Wj1jfk.js";import"./box-BhZeQsVn.js";import"./menu-BKmY3KQJ.js";import"./use-descendant-B8X2ny9A.js";import"./use-popper-YnWV8wgH.js";import"./use-event-listener-DpLxMhnm.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CpYt0YEn.js";import"./use-disclosure-D37TPgvB.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Cyxl029Y.js";import"./menu-list-D30thluA.js";import"./motion-CC57Jao8.js";import"./v-stack-a0PCRRSU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fabd7f25-98cc-4b30-a4d1-3377fe9b7173",e._sentryDebugIdIdentifier="sentry-dbid-fabd7f25-98cc-4b30-a4d1-3377fe9b7173")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
