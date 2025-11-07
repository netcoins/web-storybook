import{j as b}from"./jsx-runtime-Dv2agtU7.js";import{r as g}from"./index-BsoArW0f.js";import{M as i}from"./index-CiVjniFn.js";import"./iframe-dJqc1-Qj.js";import"./index-CJZ2QYMY.js";import"./index-CfNZ0R8I.js";import"./types-BEMdp0BA.js";import"./factory-DItE7Zbf.js";import"./button-BKlO4PSU.js";import"./context-DCB91Iml.js";import"./use-style-config-DimwGAZE.js";import"./spinner-Dta4iY2t.js";import"./emotion-react.browser.esm-CoTtarx2.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-zIXrsNDy.js";import"./flex-C_oEG4_I.js";import"./icon-CFMzBpLt.js";import"./text-fxYgO8kb.js";import"./index-BfbhS8un.js";import"./index-BUhqXKz5.js";import"./index.esm-BsEiJ_Yr.js";import"./index-8B09ueSL.js";import"./index-CXBWWOW0.js";import"./iconBase-QXUzZFCY.js";import"./link-2Dsxse-z.js";import"./types-Dg61vmbz.js";import"./form-control-BupH7fAE.js";import"./h-stack-7RdOvOuV.js";import"./stack-DVwFRSHN.js";import"./responsive-5_ItuWFE.js";import"./children-CWNAtveH.js";import"./use-checkbox-CCyIkAL3.js";import"./use-form-control-D6h5CGr1.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-2eF-msno.js";import"./use-safe-layout-effect-CpCXk6om.js";import"./use-update-effect-BC_MjMJw.js";import"./index-CgACzZxH.js";import"./useColorFormatConverter-DkfLfv3G.js";import"./ReactIconWrapper-CYSPo76-.js";import"./input-group-DNrB6VbG.js";import"./input-addon-FrahBTes.js";import"./input-V2Jy_ILN.js";import"./useTranslation-BJC4aqrR.js";import"./context-CJyOgCrg.js";import"./box-Wj3TPIrS.js";import"./menu-C9AYlJyT.js";import"./use-descendant-Bp_5avbo.js";import"./use-popper-BCJUTfdr.js";import"./use-event-listener-BglMcFjq.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-B45xJDo9.js";import"./use-disclosure-0AdMV-E2.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DFm2KG2E.js";import"./menu-list-CTdGWgkz.js";import"./motion-CjxihoIy.js";import"./v-stack-DJ5d2r1x.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
