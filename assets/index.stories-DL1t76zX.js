import{j as b}from"./jsx-runtime--lILZ9UO.js";import{r as g}from"./index-Dul_QMBV.js";import{M as i}from"./index-CzgF5K85.js";import"./iframe-DRoK8OQ_.js";import"./index-B9rKAXPH.js";import"./index-BbWV0y0K.js";import"./types-DZykK08p.js";import"./factory-cBEL_h0M.js";import"./button-vSGcI6rQ.js";import"./context-RwG5JgMk.js";import"./use-style-config-c90O6nFQ.js";import"./spinner-C3-M-FWe.js";import"./emotion-react.browser.esm-CVjg8pDV.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BA2mEcM2.js";import"./flex-BXPhKBIF.js";import"./icon-DGPOUiEw.js";import"./text-DERrfHeR.js";import"./index-Csi8YgBs.js";import"./index-BPp6cA8j.js";import"./index.esm-UOplP5n4.js";import"./index-BkIbrStP.js";import"./index-DL6zCrAR.js";import"./iconBase-Ck7fV1kq.js";import"./link-BZaTVQwC.js";import"./types-CzrYQubx.js";import"./form-control-vTHNtAwl.js";import"./h-stack-D4zRhbME.js";import"./stack-B763V5BH.js";import"./responsive-DBHL_e5n.js";import"./children-DPg40p0n.js";import"./use-checkbox-BHy7uTDz.js";import"./use-form-control-CHLuQeBA.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DMyOb9x9.js";import"./use-safe-layout-effect-DtwtbX5i.js";import"./use-update-effect-B7dMLLC1.js";import"./index-CZV6Qsba.js";import"./useColorFormatConverter-5Fnd0JWq.js";import"./ReactIconWrapper-PZcFarTi.js";import"./input-group-BNKa5hBy.js";import"./input-addon-BhJJ-7Sv.js";import"./input-BgNFvYkd.js";import"./useTranslation-Bl_qIHyZ.js";import"./context-C48GUBwm.js";import"./box-DJeTaR7J.js";import"./menu-CZVzudc2.js";import"./use-descendant-DTE-ZShw.js";import"./use-popper-suVR8dFU.js";import"./use-event-listener-ByPY-nI_.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CiO-V8dq.js";import"./use-disclosure-DpTPIjUX.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BFJQ2Et4.js";import"./menu-list-kAItjs_C.js";import"./motion-DLKV4Tay.js";import"./v-stack-DExvB0G9.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
