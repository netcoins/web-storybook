import{j as b}from"./jsx-runtime-CCJ18Kz-.js";import{r as g}from"./index-CZ6gmXhl.js";import{M as i}from"./index-at0jatRN.js";import"./iframe-DJ4HJDV5.js";import"./index-DTCE-TWJ.js";import"./index-CHbQppjX.js";import"./types-C8yWDRHd.js";import"./factory-CDAqzQl4.js";import"./button-7Kq-DVqP.js";import"./context-CjzVIJzQ.js";import"./use-style-config-CjFLxeBG.js";import"./spinner-DMyQJMxX.js";import"./emotion-react.browser.esm-DfXFgfSU.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DyLhP37g.js";import"./flex-BoGPGpvw.js";import"./icon-fRpri_pM.js";import"./text-CwsqMmf5.js";import"./index-bvbJrvJH.js";import"./index-DPbOrgp7.js";import"./index.esm-C9k_os2O.js";import"./index-DdzUrdp8.js";import"./index-C-F356-J.js";import"./iconBase-DaZVHB0C.js";import"./link-C2PNHYHY.js";import"./types-DkgeELTi.js";import"./form-control-BaCNm2Yx.js";import"./h-stack-DU1DYug_.js";import"./stack-RFww6gl6.js";import"./responsive-Apx2GA89.js";import"./children-D_8N0-Lf.js";import"./use-checkbox-CgaIiXH7.js";import"./use-form-control-B5B7Sgul.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BF4YjfZ_.js";import"./use-safe-layout-effect-DEFZ6YCP.js";import"./use-update-effect-BNRYZS_Y.js";import"./index-DbIiOEDz.js";import"./useColorFormatConverter-CuaM9Q_Y.js";import"./ReactIconWrapper-5xrwkHzj.js";import"./input-group-6ynKOaZl.js";import"./input-addon-6WkxqKqG.js";import"./input-pTlMnFar.js";import"./useTranslation-BEImrcCz.js";import"./context-DGCUbpZ6.js";import"./box-FyThfQAW.js";import"./menu-D-RWmpoY.js";import"./use-descendant-CzZFO2Hz.js";import"./use-popper-DanfRe3J.js";import"./use-event-listener-Dgx7ZhVh.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BSKc_HV0.js";import"./use-disclosure-CO3uvVa6.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CB0cTtTI.js";import"./menu-list-CJ2wg6Jk.js";import"./motion-DjHdjte4.js";import"./v-stack-Bc-JPi_r.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
