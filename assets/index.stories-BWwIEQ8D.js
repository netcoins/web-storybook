import{j as b}from"./jsx-runtime-CkH6S3ig.js";import{r as g}from"./index-C4GKAn__.js";import{M as i}from"./index-Bwn0kJ1n.js";import"./iframe-DcUMTise.js";import"./index-BJWzqA3M.js";import"./index-Bwij2nFC.js";import"./types-_Y-e29VJ.js";import"./factory-CJgsC9Zc.js";import"./button-Z0w_MRO9.js";import"./context-Hvcz6sJt.js";import"./use-style-config-r-A-EIoM.js";import"./spinner-DdcOylji.js";import"./emotion-react.browser.esm-BE3EeOGA.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CetbD06m.js";import"./flex-BcB-lZfE.js";import"./icon-XYdOQzHF.js";import"./text-CJOhgQ4Z.js";import"./index-DIDi_VYi.js";import"./index-DA7i6r-I.js";import"./index.esm-DNG1_9p7.js";import"./index-BA8ZkPLA.js";import"./index-uPpbHImm.js";import"./iconBase-CoN9m2S4.js";import"./link-CuVxUb1O.js";import"./types-hFFUSIID.js";import"./form-control-BVkitgZw.js";import"./h-stack-esrvt-R1.js";import"./stack-Dlek6BRd.js";import"./responsive-Cg-F0xKZ.js";import"./children-DnWY1Axh.js";import"./use-checkbox-Codflatz.js";import"./use-form-control-BBAMJxQj.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-Bnkkzu65.js";import"./use-safe-layout-effect-CPIC6cqQ.js";import"./use-update-effect-BQ6_zsYZ.js";import"./index-e_icRX94.js";import"./useColorFormatConverter-rpiPlluB.js";import"./ReactIconWrapper-BmWLgC--.js";import"./input-group-CMQYfE1z.js";import"./input-addon-RKc4Ng2f.js";import"./input-BQCSgXdU.js";import"./useTranslation-CDyQiy3M.js";import"./context-V_J2eyC3.js";import"./box-YCxJput_.js";import"./menu-DdzYrNAd.js";import"./use-descendant-Ce1MNAbF.js";import"./use-popper-Bng1DKVi.js";import"./use-event-listener-DUWti1KD.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-tVHgMJgX.js";import"./use-disclosure-CudLrVLl.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-D5_1B2eO.js";import"./menu-list-DZEghvBG.js";import"./motion-BswwFjp_.js";import"./v-stack-BWvxFgPR.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8126297a-4321-49ce-a160-c82d6a789f18",e._sentryDebugIdIdentifier="sentry-dbid-8126297a-4321-49ce-a160-c82d6a789f18")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
