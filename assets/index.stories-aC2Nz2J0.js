import{j as b}from"./jsx-runtime-DUvnlu6r.js";import{r as g}from"./index-DbeXWJ-W.js";import{M as i}from"./index-CiuVpCgs.js";import"./iframe-xLDCLI1U.js";import"./index-CvBfuLBR.js";import"./index-DvLhzGlq.js";import"./types-Sv4nceWf.js";import"./factory-EvmFdQJ8.js";import"./button-CSzKaiSu.js";import"./context-D3WNSJYq.js";import"./use-style-config-BEaeOCj0.js";import"./spinner-B_jfKDrU.js";import"./emotion-react.browser.esm-DNcCxAUk.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Bl65njns.js";import"./flex-t7eBuDrE.js";import"./icon-CouGRMZl.js";import"./text-IH71t2kF.js";import"./index-DL0jh7aX.js";import"./index-_ugiZ_-C.js";import"./index.esm-BxxFJmZQ.js";import"./index-CsymE34m.js";import"./index-BcYljkKM.js";import"./iconBase-BEtHxgO5.js";import"./link-EudkgnrQ.js";import"./types-DIhVf-2O.js";import"./form-control-DGqTZ9PV.js";import"./h-stack-DjbSXRci.js";import"./stack-B0kGj1uf.js";import"./responsive-BXzYDrF-.js";import"./children-CiAjPAHz.js";import"./use-checkbox-BqfSYKC8.js";import"./use-form-control-D2jjusBg.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-pRHjHwSk.js";import"./use-safe-layout-effect-CiFH7Jzm.js";import"./use-update-effect-CJwnIJfw.js";import"./index-BdP8Iett.js";import"./useColorFormatConverter-C9yn1Lut.js";import"./ReactIconWrapper-V2lAXwg6.js";import"./input-group-DL2D7JbS.js";import"./input-addon-CuwTLqCU.js";import"./input-D81wNIYn.js";import"./useTranslation-BjPozARb.js";import"./context-BAyZlrbb.js";import"./box-Qy06BcHb.js";import"./menu-bUcI2D7e.js";import"./use-descendant-Ceon0tu5.js";import"./use-popper-g63-_hRX.js";import"./use-event-listener-DJUhvG9G.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-B5Byahbn.js";import"./use-disclosure-PFCjadI2.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-rXzd1MKL.js";import"./menu-list-BjC4e0hP.js";import"./motion-CyXmvnor.js";import"./v-stack-Cw2-9JNm.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
