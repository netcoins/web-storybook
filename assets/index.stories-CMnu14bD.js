import{j as b}from"./jsx-runtime-B06jWHTP.js";import{r as g}from"./index-C1TPUaTx.js";import{M as i}from"./index-BSdcnEuI.js";import"./iframe-B6fleTvj.js";import"./index-BjBp_qBP.js";import"./index-37NRkZw5.js";import"./types-dhBLwLoj.js";import"./factory-DvFDl3zZ.js";import"./button-C7wkHYm1.js";import"./context-Bcn5T_v6.js";import"./use-style-config-B2W6jWHK.js";import"./spinner-CJSMNVQB.js";import"./emotion-react.browser.esm-a5b9UzZz.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Bs9TwqwB.js";import"./flex-DY0jT9vK.js";import"./icon-DJIQtlNh.js";import"./text-ArEex_Yj.js";import"./index-B6w4TMys.js";import"./index-BdjIECk-.js";import"./index.esm-CHlTz7ln.js";import"./index-DXxjifeG.js";import"./index-CvKVntdK.js";import"./iconBase-BIvVonaM.js";import"./link-DNm3yd-V.js";import"./types-DhtWiENB.js";import"./form-control-DZD-WJG6.js";import"./h-stack-BF_Vmto3.js";import"./stack-CYTsLzli.js";import"./responsive-4d5Xtb_l.js";import"./children-CSVkFAhP.js";import"./use-checkbox-D1TQI3kj.js";import"./use-form-control-Y8a7jzhZ.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DAZFU-4a.js";import"./use-safe-layout-effect-bjW5UBs0.js";import"./use-update-effect-D_Bk1TLf.js";import"./index-DwANOi_e.js";import"./useColorFormatConverter-Bl7GGRab.js";import"./ReactIconWrapper-CHmbBzU9.js";import"./input-group-BlP6T4ji.js";import"./input-addon-iqKGT7f9.js";import"./input-CA1v4p8g.js";import"./useTranslation-CcGFFMSi.js";import"./context-B9iS85c8.js";import"./box-CDcWH6Yu.js";import"./menu-Bx64O5IC.js";import"./use-descendant-B7KfmA5b.js";import"./use-popper-BBjyHbYZ.js";import"./use-event-listener-Cehu9S7U.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BMBDP0wz.js";import"./use-disclosure-D945y6nL.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BWQmEL95.js";import"./menu-list-Dy8Fv3Ya.js";import"./motion-CKBGso79.js";import"./v-stack-CBxVi8pZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
