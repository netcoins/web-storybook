import{j as b}from"./jsx-runtime-BNQDehop.js";import{r as g}from"./index-Dtvo63Fj.js";import{M as i}from"./index-CAmbDVWy.js";import"./iframe-BK-dEJ0W.js";import"./index-QlNyfKSO.js";import"./index-DEeAc4Jh.js";import"./types-QkoD5LfF.js";import"./factory-DjsCg92e.js";import"./button-UMOiJcpB.js";import"./context-DhARttyT.js";import"./use-style-config-CFTpPbOn.js";import"./spinner-Ka0LoZy-.js";import"./emotion-react.browser.esm-C2Aq-UjM.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DJpphMDB.js";import"./flex-B7YzHcV8.js";import"./icon-CVJTYtlB.js";import"./text-DnKu5_yy.js";import"./index-C1WEmK1H.js";import"./index-DHdFE6Xc.js";import"./index.esm-Hj2ij_a1.js";import"./index-BbShbvsH.js";import"./index-Cf1O9_8x.js";import"./iconBase-DKcCp5rX.js";import"./link-HOXnbI6k.js";import"./types-DVpP8HVt.js";import"./form-control-CtJ1lDCg.js";import"./h-stack-BOAO8DGB.js";import"./stack-DqGhPjQ5.js";import"./responsive-B0reM8cU.js";import"./children-BulxUKbP.js";import"./use-checkbox-Hm4ncz0o.js";import"./use-form-control-sNVt-Pd3.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-B_axOoT8.js";import"./use-safe-layout-effect-X0MxaKpP.js";import"./use-update-effect-C0SCHU3z.js";import"./index-CxhCK6GM.js";import"./useColorFormatConverter-BmGI9gin.js";import"./ReactIconWrapper-C0K4pb5i.js";import"./input-group-DHL0Ar9M.js";import"./input-addon-BW4PJRLe.js";import"./input-CE8bbD5T.js";import"./useTranslation-DbJ7AlNF.js";import"./context-DCqPBMu7.js";import"./box-CDfQMF8X.js";import"./menu-DYL2_7G0.js";import"./use-descendant-mZ5hWIP-.js";import"./use-popper-DRB3cs1y.js";import"./use-event-listener-BvrwqYMw.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CGe9DzVl.js";import"./use-disclosure-ndrtUGzx.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CSIKpcWv.js";import"./menu-list-DlSrO5-K.js";import"./motion-CeR54XjC.js";import"./v-stack-Cdt4HPhC.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fabd7f25-98cc-4b30-a4d1-3377fe9b7173",e._sentryDebugIdIdentifier="sentry-dbid-fabd7f25-98cc-4b30-a4d1-3377fe9b7173")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
