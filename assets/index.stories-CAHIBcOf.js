import{j as b}from"./jsx-runtime-Dz07FoRv.js";import{r as g}from"./index-RtDw29dl.js";import{M as i}from"./index-D3EQIts6.js";import"./iframe-CoHSMU9W.js";import"./index-p5l0Zfaz.js";import"./index-DdS6lhtY.js";import"./types-CYd2tJet.js";import"./factory-B5PDNY2U.js";import"./button-CnbrlhSK.js";import"./context-D5yAGVu8.js";import"./use-style-config-8-25pdyZ.js";import"./spinner-emk_LG0E.js";import"./emotion-react.browser.esm-CcbLLw9r.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Djc0EAy6.js";import"./flex-BRL8b_YD.js";import"./icon-DqMFoBqo.js";import"./text-x3p4ru8h.js";import"./index-BL1zVru8.js";import"./index-DfJWmkm5.js";import"./index.esm-EkM1RTux.js";import"./index-BGoYCwTC.js";import"./index-N3ThtsZ1.js";import"./iconBase-Cxl007Ro.js";import"./link-vWLcx_Wj.js";import"./types-CDh9FG4_.js";import"./form-control-DgaL7IO0.js";import"./h-stack-CczuW2yR.js";import"./stack-C-gC5h8x.js";import"./responsive-swQOnuCf.js";import"./children-Csj_dsGV.js";import"./use-checkbox-DGgaonxk.js";import"./use-form-control-C6TG7MzY.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-CzRpw1oH.js";import"./use-safe-layout-effect-D2e6twc4.js";import"./use-update-effect-BFuthJ2Y.js";import"./index-BfYITaL6.js";import"./useColorFormatConverter-BimtG-K_.js";import"./ReactIconWrapper-DbCZ12F7.js";import"./input-group-D9pJMMQS.js";import"./input-addon-BkSKDT1l.js";import"./input-yOTTZaNZ.js";import"./useTranslation-DblVjCcI.js";import"./context-BPbvMlZY.js";import"./box-CXRAKkjr.js";import"./menu-PX5LRjS6.js";import"./use-descendant-Cjw46ktk.js";import"./use-popper-D3CryaWT.js";import"./use-event-listener-6bSQv_y0.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-2CpcWnNI.js";import"./use-disclosure-DuOPn0iS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BnzYEu-N.js";import"./menu-list-WLpQQLGG.js";import"./motion-BFRkCPBV.js";import"./v-stack-Cz5XBBQ0.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fabd7f25-98cc-4b30-a4d1-3377fe9b7173",e._sentryDebugIdIdentifier="sentry-dbid-fabd7f25-98cc-4b30-a4d1-3377fe9b7173")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
