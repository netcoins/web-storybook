import{j as b}from"./jsx-runtime-Bf6FIY89.js";import{r as g}from"./index-BI5uO-PF.js";import{M as i}from"./index-CODdwnk5.js";import"./iframe-DzoY9gxD.js";import"./index-S6TqZ29Z.js";import"./index-CMPe3TJc.js";import"./types-B-Q6A-Fi.js";import"./factory-B1KwL9fl.js";import"./button-DdreDIYA.js";import"./context-rJ4pha0b.js";import"./use-style-config-BXPz3sCm.js";import"./spinner-Bex5S1NV.js";import"./emotion-react.browser.esm-DakPhJjT.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B5DWbnO3.js";import"./flex-Cg_eJLpA.js";import"./icon-BVLsEFas.js";import"./text-Boo3MJ2c.js";import"./index-n8c00BvI.js";import"./index-DpgG-cYU.js";import"./index.esm-lzu-9L0x.js";import"./index-Dp3zlxoY.js";import"./index-BJOvK6Do.js";import"./iconBase-BlvCQgOC.js";import"./link-Czb9O4I8.js";import"./types-DYIJde27.js";import"./form-control-BoFRfAXb.js";import"./h-stack-CgBHX3ag.js";import"./stack-BGsINfbP.js";import"./responsive-B5RFGaZx.js";import"./children-CqaGmJg9.js";import"./use-checkbox-BUctbu_0.js";import"./use-form-control-CcvwwqEj.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-C7rBtymT.js";import"./use-safe-layout-effect-xEfYQs6i.js";import"./use-update-effect-DSBV5QZx.js";import"./index-UEvaN09s.js";import"./useColorFormatConverter-C2kmG-cl.js";import"./ReactIconWrapper-CJ39R-EP.js";import"./input-group-B9HprW6c.js";import"./input-addon-BpihC3sP.js";import"./input-FnPpsmJl.js";import"./useTranslation-Ke8gqaJO.js";import"./context-BaCimMZ2.js";import"./box-D_riIZ06.js";import"./menu-B3l9ma6o.js";import"./use-descendant-CDRKHvK4.js";import"./use-popper-BkAFnx68.js";import"./use-event-listener-CvA1Os5D.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-C08XTD8i.js";import"./use-disclosure-MdnrFlwG.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-LIRhPSGn.js";import"./menu-list-CSrlTHXE.js";import"./motion-u6ttxewf.js";import"./v-stack-CyXiKxeF.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
