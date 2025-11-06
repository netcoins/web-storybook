import{j as b}from"./jsx-runtime-CtUEez0z.js";import{r as g}from"./index-Cqmn51YS.js";import{M as i}from"./index-BsrwGecY.js";import"./iframe-COwPw1VY.js";import"./index-DIB0Ez5p.js";import"./index-CfAGRPLt.js";import"./types-DPgPz0vc.js";import"./factory-DJYjEkMm.js";import"./button-Dk6CIG2O.js";import"./context-BxW3_Ype.js";import"./use-style-config-DWzjkw3h.js";import"./spinner-Dfjyfz8j.js";import"./emotion-react.browser.esm-Cu-JWzKK.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DD_bcvjC.js";import"./flex-WnzeImCB.js";import"./icon-pHxpQceI.js";import"./text-DU2wDpPi.js";import"./index-DROsEanB.js";import"./index-DfIfRoDS.js";import"./index.esm-SnMe3SUP.js";import"./index-CTGzOJ-z.js";import"./index-CMMXWqW6.js";import"./iconBase-Dn46-paq.js";import"./link-DRgt6bZT.js";import"./types-DydRC4nw.js";import"./form-control-DvJrd1B_.js";import"./h-stack-Mu_rU2z7.js";import"./stack-CQ9pX7zL.js";import"./responsive-C0EjYG8g.js";import"./children-BEjxqSlI.js";import"./use-checkbox-Dw3Vn9ma.js";import"./use-form-control-C5Wt8_wf.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DrjLitdx.js";import"./use-safe-layout-effect-Bz0q2S9E.js";import"./use-update-effect-3eGvpoH8.js";import"./index-DBCTrpGk.js";import"./useColorFormatConverter-DSHGKob3.js";import"./ReactIconWrapper-s8kSXq-k.js";import"./input-group-BBJauUcI.js";import"./input-addon-CvkySz6A.js";import"./input-BT-B9eV4.js";import"./useTranslation-VHApA7df.js";import"./context-CMxGEpSm.js";import"./box-9BX69DHc.js";import"./menu-BkO5aLBm.js";import"./use-descendant-CpXR7RV2.js";import"./use-popper-Bo3zfxkV.js";import"./use-event-listener-D32HG4Yo.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BCn_2Yw5.js";import"./use-disclosure-zUyXwX9i.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-By0Uo44f.js";import"./menu-list-DnOsyg6v.js";import"./motion-BIX3BNxl.js";import"./v-stack-VjmrCaT2.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6ca0e39b-bf4a-4a89-863d-b00b94ab16b7",e._sentryDebugIdIdentifier="sentry-dbid-6ca0e39b-bf4a-4a89-863d-b00b94ab16b7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
