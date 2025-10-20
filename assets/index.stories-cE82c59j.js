import{j as b}from"./jsx-runtime-DIpYUS1o.js";import{r as g}from"./index-DF9hz7cV.js";import{M as i}from"./index-udptU-ht.js";import"./iframe-DeHYuAfY.js";import"./index-Cnwmg8iV.js";import"./index-BCc9aLhp.js";import"./types-Bsq5ksGq.js";import"./factory-lxEkicMP.js";import"./button-CRFKB3Fc.js";import"./context-CvwolcE_.js";import"./use-style-config-DkK2YeSb.js";import"./spinner-CCpBxGPi.js";import"./emotion-react.browser.esm-BqsNV1sU.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-D5JN6S49.js";import"./flex-B7joyxkC.js";import"./icon-ChFxYhRv.js";import"./text-Co1dKC_9.js";import"./index-CzXG34jp.js";import"./index-BJ9CmoyG.js";import"./index.esm-Dy6gil0Y.js";import"./index-Bp9L-C8g.js";import"./index-9_8UlQfr.js";import"./iconBase-BphQcjDl.js";import"./link-7N3-Bq4i.js";import"./types-CbSSJ4xN.js";import"./form-control-D_yO8zKR.js";import"./h-stack-DwRA4Vkv.js";import"./stack-BxnSyiMe.js";import"./responsive-DumGEAte.js";import"./children-BD9Kr41D.js";import"./use-checkbox-D2MfGkVg.js";import"./use-form-control-NiPJ-DcN.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BRhE1dEt.js";import"./use-safe-layout-effect-zph5UAo0.js";import"./use-update-effect-BEqB3HGj.js";import"./index-CBD4_5Zx.js";import"./useColorFormatConverter-DVME-Px4.js";import"./ReactIconWrapper-LM3yF7sY.js";import"./input-group-D_ua4xh3.js";import"./input-addon-BcKg0jtA.js";import"./input-DgSlDLyC.js";import"./useTranslation-D1WXG5x3.js";import"./context-CuCnEsm7.js";import"./box-vQ5lBCtK.js";import"./menu-C0MByyv7.js";import"./use-descendant-CBAPdoy9.js";import"./use-popper-CHiL8ELj.js";import"./use-event-listener-DmU0zlt8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CgPdwy3P.js";import"./use-disclosure-CnQBQ1wx.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-k85mkcgA.js";import"./menu-list-CulUq3E4.js";import"./motion-X_AfIrdH.js";import"./v-stack-CFjSSQ2B.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
