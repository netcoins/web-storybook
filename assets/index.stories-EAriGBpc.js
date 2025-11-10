import{j as b}from"./jsx-runtime-B791eGeM.js";import{r as g}from"./index-DIojWxTx.js";import{M as i}from"./index-CpFcbNMd.js";import"./iframe-CxvPOnKM.js";import"./index-D9hrI-NJ.js";import"./index-CUaKXwM5.js";import"./types-BHg-vhx1.js";import"./factory-CgJe7pVc.js";import"./button-CBll598A.js";import"./context-lpI2Zs0F.js";import"./use-style-config-D4hZ3gJS.js";import"./spinner-Ca_fy1Wb.js";import"./emotion-react.browser.esm-DMjDgr_P.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-0PJQmlTb.js";import"./flex-DwRBA7jn.js";import"./icon-BYdeT4Jt.js";import"./text-BOMZCICA.js";import"./index-G1VmkKaY.js";import"./index-ByeVlOcu.js";import"./index.esm-DErIGJ3a.js";import"./index-DXEr5Ofd.js";import"./index-BFX15_Ms.js";import"./iconBase-BdnFlmf7.js";import"./link-zYO3tWAP.js";import"./types-CEwoWStK.js";import"./form-control-DOyJwfpb.js";import"./h-stack-41zEU58h.js";import"./stack-CL2Gq_pQ.js";import"./responsive-CBvR500A.js";import"./children-gORKtQ_Q.js";import"./use-checkbox-Cem3CVrS.js";import"./use-form-control-hl55MpA4.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BTIe4Lfr.js";import"./use-safe-layout-effect-BQz89kL8.js";import"./use-update-effect-B6CgvZue.js";import"./index-niuLm1q9.js";import"./useColorFormatConverter-BTJ0WMQ0.js";import"./ReactIconWrapper-EUt_Lq8I.js";import"./input-group-BoPEH9uj.js";import"./input-addon-piqUmr-D.js";import"./input-DaKCI8h6.js";import"./useTranslation-CcFYHi0U.js";import"./context-BkSF-D9k.js";import"./box-B80E9g7g.js";import"./menu-DTf4yhJU.js";import"./use-descendant-BPhFQBfI.js";import"./use-popper-BatGaK5A.js";import"./use-event-listener-D-_kvGlA.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CiOKOpCt.js";import"./use-disclosure-Bbrx3J8Q.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CbwAKmga.js";import"./menu-list-jHeDj--B.js";import"./motion-CEvJpgjM.js";import"./v-stack-0xhVVDVM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
