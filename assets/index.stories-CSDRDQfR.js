import{j as b}from"./jsx-runtime-C3B292Xu.js";import{r as g}from"./index-PgOj0D5X.js";import{M as i}from"./index-CQkRURw6.js";import"./iframe-CnHy6M6c.js";import"./index-BROM6xTT.js";import"./index-BDFCXdlD.js";import"./types-CD_Qx30l.js";import"./factory-BzKGzsDh.js";import"./button-DfTjitQQ.js";import"./context-YqG1KvsO.js";import"./use-style-config-BAkJ30-U.js";import"./spinner-CI-ZS4te.js";import"./emotion-react.browser.esm-B461vbWr.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CyvJz5hu.js";import"./flex-DYAYLzzp.js";import"./icon-XDhCQgpV.js";import"./text-DxtYMs2k.js";import"./index-CePviLaL.js";import"./index-C_2-rCQc.js";import"./index.esm-eEXxDIZI.js";import"./index-atbfNU-T.js";import"./index-BCRaDTyh.js";import"./iconBase-CxYTiZMo.js";import"./link-DcdQiTWx.js";import"./types-B83BoJZF.js";import"./form-control-BcxdIuT0.js";import"./h-stack-Ct-rQUfQ.js";import"./stack-BwpXcolk.js";import"./responsive-C5E_iXjJ.js";import"./children-Cj0PpSmN.js";import"./use-checkbox-BFVOFoXE.js";import"./use-form-control-BlJDxNFk.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-C55yQHNk.js";import"./use-safe-layout-effect-B_dOMywT.js";import"./use-update-effect-CHkVTMZW.js";import"./index-YdAfIPqH.js";import"./useColorFormatConverter-DWGh_ZJ-.js";import"./ReactIconWrapper--bQoJgKC.js";import"./input-group-B_7D1X9z.js";import"./input-addon-BdPNV1Yv.js";import"./input-DfLYv5MM.js";import"./useTranslation-r-4_Y9N9.js";import"./context-CJPSIzB9.js";import"./box-CwP0QlWK.js";import"./menu-BWLOv-SA.js";import"./use-descendant-DDZ-mLXr.js";import"./use-popper-CMBqJ7zk.js";import"./use-event-listener-4LNcxXIR.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CoXJhoq5.js";import"./use-disclosure-CsAOqf_8.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CbqR24Gi.js";import"./menu-list-DFCanp6c.js";import"./motion-CGdP6bbk.js";import"./v-stack-DybKPKcn.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fabd7f25-98cc-4b30-a4d1-3377fe9b7173",e._sentryDebugIdIdentifier="sentry-dbid-fabd7f25-98cc-4b30-a4d1-3377fe9b7173")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
