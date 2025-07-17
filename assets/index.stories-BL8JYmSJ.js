import{j as b}from"./jsx-runtime-IV0hNWlL.js";import{r as g}from"./index-2etZxnfb.js";import{M as i}from"./index-U5Wau7ad.js";import"./iframe-BXtP_xvY.js";import"./index-D0OajKdJ.js";import"./index-Dx66s2bO.js";import"./types-XVBJ1Tfw.js";import"./use-style-config-CDFdgQtb.js";import"./button-BaBmbU01.js";import"./context-CCE5gbTt.js";import"./spinner-Dltwr4qE.js";import"./emotion-react.browser.esm-CMSUwPfO.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CMunXerF.js";import"./flex-Cp2APPf8.js";import"./icon-D00_Znpz.js";import"./text-C1Bc78qT.js";import"./index-Bfsy-BV2.js";import"./index-CwTj82Sl.js";import"./index.esm-BNHFK_py.js";import"./index-BJt4bRas.js";import"./index-Bm5SSv38.js";import"./iconBase-C3HOsW-Q.js";import"./link-DGNvbIvP.js";import"./index-D862wM4r.js";import"./index-CU74ytTQ.js";import"./useColorFormatConverter-C4NNKZX3.js";import"./index-BDNmcUKy.js";import"./IconWrapper-C9HjikJF.js";import"./box-DZuX9mkT.js";import"./form-control-C28O_K-S.js";import"./form-label-DBhZX1wJ.js";import"./input-group-DPE0lF64.js";import"./children-BnUlYr6G.js";import"./input-addon-Bj_fb5aI.js";import"./input-1rnSZgGE.js";import"./use-form-control-TQDh02IK.js";import"./call-all--NRVVPhS.js";import"./input-element-DOwTkQ50.js";import"./h-stack-DvlymG9G.js";import"./stack--uV4HmUW.js";import"./responsive-DxACuXGl.js";import"./use-checkbox-CSFKw6UW.js";import"./use-callback-ref-CH6Cxgcb.js";import"./use-safe-layout-effect-Kf2tZsgV.js";import"./use-update-effect-D1tZ4Z0z.js";import"./index-DDE8aGEs.js";import"./ReactIconWrapper-P1rnIBzZ.js";import"./useTranslation-DJv9nCEz.js";import"./context-C34o5-op.js";import"./menu-list-DguhdjVT.js";import"./use-descendant---PyaJbM.js";import"./use-popper-X153Zylm.js";import"./use-event-listener-Dxdwrx64.js";import"./focusable-DpwIps9l.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-DM2upweN.js";import"./use-disclosure-DJ5If1Zu.js";import"./lazy-oo6M69xf.js";import"./motion-Z9DkEjdF.js";import"./v-stack-6O6Uni4k.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c99cf149-1f5b-4d82-82a7-51ca0dffbc68",e._sentryDebugIdIdentifier="sentry-dbid-c99cf149-1f5b-4d82-82a7-51ca0dffbc68")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
