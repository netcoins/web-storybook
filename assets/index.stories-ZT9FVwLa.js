import{j as b}from"./jsx-runtime-DscWB3Vs.js";import{r as g}from"./index-CfXWI6FN.js";import{M as i}from"./index-CTm22rEh.js";import"./iframe-BQZJxh_e.js";import"./index-DmhEjkah.js";import"./index-CoSctqVM.js";import"./types--ojs4B1h.js";import"./factory-B5fHfxcP.js";import"./button-hM_wsMS2.js";import"./context-r-FSc8-Z.js";import"./use-style-config-B9pV9ukR.js";import"./spinner-BUCG9bxW.js";import"./emotion-react.browser.esm-B2TyoJA5.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DuVcGSWU.js";import"./flex-CX88ajTu.js";import"./icon-CBpHzWgh.js";import"./text-BLZhNId4.js";import"./index-D9VPBD4p.js";import"./index-DZgg4SBP.js";import"./index.esm-BLoCqLXT.js";import"./index-CIvqDvDL.js";import"./index-DrHOL_wO.js";import"./iconBase-_jlUlvKi.js";import"./link-D_KB_2Qo.js";import"./types-Bxoyx3pQ.js";import"./form-control-DaY-Oaeg.js";import"./h-stack-DngdbqoL.js";import"./stack-BrrMEK0r.js";import"./responsive-BpgXEpJt.js";import"./children-C9tzRyS9.js";import"./use-checkbox-DH-UiUM6.js";import"./use-form-control-C5S1AzM0.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BWNMBIJ6.js";import"./use-safe-layout-effect-Dod6fcsT.js";import"./use-update-effect-Bb2mVCcQ.js";import"./index-C2s-ee3H.js";import"./useColorFormatConverter-DstyGXOK.js";import"./ReactIconWrapper-DZIX5WFJ.js";import"./input-group-BNeIgeYP.js";import"./input-addon-CulaANtD.js";import"./input-CJUfVHqk.js";import"./useTranslation-Cadge4TL.js";import"./context-De1wxHOu.js";import"./box-loMJShw8.js";import"./menu-DPx7xlo2.js";import"./use-descendant-DYz0AVUg.js";import"./use-popper-B_ao2jpb.js";import"./use-event-listener-iq0qso-o.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-Og3IHVga.js";import"./use-disclosure-BMKIXfP7.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CtRXjet3.js";import"./menu-list-l88MTacI.js";import"./motion-BLCutdYM.js";import"./v-stack-C8Thf5f6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
