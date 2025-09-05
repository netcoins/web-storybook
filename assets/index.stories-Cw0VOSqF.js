import{j as b}from"./jsx-runtime-ydD5Yllt.js";import{r as g}from"./index-CPBmZDNx.js";import{M as i}from"./index-9pOsEsPv.js";import"./iframe-Cucd9TTe.js";import"./index-m7Oc1Y8i.js";import"./index-mR9ZgIT_.js";import"./types-D1qfs8Ca.js";import"./factory-Cyl6eWPO.js";import"./button-C1j4wdT2.js";import"./context-COfqbvr5.js";import"./use-style-config-C2tJll5c.js";import"./spinner-CeUsbvhy.js";import"./emotion-react.browser.esm-DeU1maMp.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BWnqh23d.js";import"./flex-DQfbM5OU.js";import"./icon-3_V4cxGi.js";import"./text-BlSpEd-U.js";import"./index-D-t-V5rj.js";import"./index-DXEzFsIU.js";import"./index.esm-DzaRUYh4.js";import"./index-Dm5sG2hT.js";import"./index-ISDZpMUR.js";import"./iconBase-DxyqNysn.js";import"./link-CPCjGlRD.js";import"./types-DcVh6_Kq.js";import"./form-control-BDUFr2OV.js";import"./h-stack-CUNIhuGq.js";import"./stack-CRQ1AV2u.js";import"./responsive-DheYH6wm.js";import"./children-CQv4PfSI.js";import"./use-checkbox-CZLYWPCx.js";import"./use-form-control-DjFdvKpV.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BkEaq5rq.js";import"./use-safe-layout-effect-De1pOtlk.js";import"./use-update-effect-DkurWNFT.js";import"./index-Bz7TnyPh.js";import"./useColorFormatConverter-MQkWhB9x.js";import"./ReactIconWrapper-DYgZmdkE.js";import"./input-group-CED2vSdn.js";import"./input-addon-5XiYHSz2.js";import"./input-SGywvWzb.js";import"./useTranslation-BrSbziRp.js";import"./context-BwwbAX9T.js";import"./box-KzV_V6oH.js";import"./menu-CCFxGtRg.js";import"./use-descendant-DdHHBSck.js";import"./use-popper-Btbe2Gkj.js";import"./use-event-listener-D1C6NsDw.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-DC_9Iw8E.js";import"./use-disclosure-Dv0KlQ3P.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BMiTa4ec.js";import"./menu-list-BY_eBprJ.js";import"./motion-CHat3LIp.js";import"./v-stack-CUCWihns.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fabd7f25-98cc-4b30-a4d1-3377fe9b7173",e._sentryDebugIdIdentifier="sentry-dbid-fabd7f25-98cc-4b30-a4d1-3377fe9b7173")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
