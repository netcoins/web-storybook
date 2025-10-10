import{j as b}from"./jsx-runtime-CHyxX_5n.js";import{r as g}from"./index-BCTaj__g.js";import{M as i}from"./index-BKpRPpPb.js";import"./iframe-C3Vznt8H.js";import"./index-BWUYx8Zl.js";import"./index-DtfAl9O8.js";import"./types-DcX6hwuZ.js";import"./factory-D36qWwKB.js";import"./button-BZ317Ail.js";import"./context-B1S3rUf_.js";import"./use-style-config-BXPCbPng.js";import"./spinner-C0iEEgU8.js";import"./emotion-react.browser.esm-BnEgYPP7.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DPXjVske.js";import"./flex-DAOyVrXN.js";import"./icon-54qfchxO.js";import"./text-CIBszfI9.js";import"./index-D5AQI6An.js";import"./index-DPZdqh1f.js";import"./index.esm-BeMODac2.js";import"./index-GzgxXZTL.js";import"./index-Ihh17YBv.js";import"./iconBase-BEozv2MW.js";import"./link-DpS2C6v1.js";import"./types-BW5CsRAK.js";import"./form-control-DlOhVEbC.js";import"./h-stack-BBNoFsIF.js";import"./stack-j_XCDCfT.js";import"./responsive-C9ircmYZ.js";import"./children-LpmKVeDd.js";import"./use-checkbox-CrddRjGQ.js";import"./use-form-control-qzCuoaDu.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-AXr5jWp6.js";import"./use-safe-layout-effect-rR6xqPwy.js";import"./use-update-effect-yGGxCaHf.js";import"./index-DyOh5HxU.js";import"./useColorFormatConverter-DVOvKiCp.js";import"./ReactIconWrapper-67jIO5o9.js";import"./input-group-Bj7FnyoJ.js";import"./input-addon-1csU-09q.js";import"./input-CfQIK71s.js";import"./useTranslation-CIkR91I8.js";import"./context-BTA3T-59.js";import"./box-CQ4YIrS1.js";import"./menu-CgEQZgo0.js";import"./use-descendant-DePIYhFU.js";import"./use-popper-DxkzUJsn.js";import"./use-event-listener-DhB1fxOR.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-D64ozlTS.js";import"./use-disclosure-gqlSRIci.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CUrQd--C.js";import"./menu-list-CQEjFTMW.js";import"./motion-DljH8rSL.js";import"./v-stack-BVjbJkm6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
