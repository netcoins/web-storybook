import{j as b}from"./jsx-runtime-C9s0MxPb.js";import{r as g}from"./index-CbPWoY_S.js";import{M as i}from"./index-D6pSzS5p.js";import"./iframe-DDeUXOzN.js";import"./index-CBOwdV9b.js";import"./index-D_iof3Hu.js";import"./types-DEeTrWpp.js";import"./factory-ChZTgBT9.js";import"./button-DVUwCS_-.js";import"./context-g_O-K3XP.js";import"./use-style-config-hCi5y6u4.js";import"./spinner-DX_Nyznu.js";import"./emotion-react.browser.esm-BU5-KRVf.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DAystpBg.js";import"./flex-BVidIDWj.js";import"./icon-nxnZEOa5.js";import"./text-BkJb7YbC.js";import"./index-BaunCv4P.js";import"./index-BJAuoczA.js";import"./index.esm-DrKOzY3P.js";import"./index-Tef1siDo.js";import"./index-dyRHPXh6.js";import"./iconBase-RxPoNZwz.js";import"./link-y03nINyh.js";import"./types-knqLOoc9.js";import"./form-control-vkUe2VYt.js";import"./h-stack-DlcvBOI_.js";import"./stack-CqqSz-4N.js";import"./responsive-D1Hr2uwb.js";import"./children-ByCwVLSA.js";import"./use-checkbox-BIILfSmE.js";import"./use-form-control-lehkleAh.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DB1qIbnU.js";import"./use-safe-layout-effect-FM6UoDXy.js";import"./use-update-effect-DopMb-MJ.js";import"./index-M3gF6B_P.js";import"./useColorFormatConverter-CPyQayDp.js";import"./ReactIconWrapper-Dtt7ISP2.js";import"./input-group-D2CQOBxT.js";import"./input-addon-CRh08HpB.js";import"./input-BKVY3H1v.js";import"./useTranslation-CWRq8L5Q.js";import"./context-DmlQQ_9P.js";import"./box-CgtdGRxG.js";import"./menu-Dk4e_Rbx.js";import"./use-descendant-j_KPDctH.js";import"./use-popper-CZNm01HR.js";import"./use-event-listener-qL3dpgc3.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-JwWP7_a8.js";import"./use-disclosure-CHh08HPF.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-GzGM1YsO.js";import"./menu-list-DrKcaTJY.js";import"./motion-OBA1xCp2.js";import"./v-stack-Bxwnf6It.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
