import{j as b}from"./jsx-runtime-BVg7y1Cx.js";import{r as g}from"./index-UqO0nVH7.js";import{M as i}from"./index-4xCRZBXP.js";import"./iframe-A7meJ9S6.js";import"./index-BXGcwLrg.js";import"./index-0L8xfzcS.js";import"./types-D5t1czqU.js";import"./factory-otme7FcP.js";import"./button-CKQ_hx_1.js";import"./context-DdZhDF0X.js";import"./use-style-config-GGOJDxZk.js";import"./spinner-C4SHLDL2.js";import"./emotion-react.browser.esm-smHvmUJU.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DfLLh5y_.js";import"./flex-D58vYMIH.js";import"./icon-Dw9YduYQ.js";import"./text-ePwmt_IR.js";import"./index-y8SihlnB.js";import"./index-BAPRI2b2.js";import"./index.esm-Bb_53z_9.js";import"./index-Dm_y6a4m.js";import"./index-DRCDpJRM.js";import"./iconBase-P9cZLnAH.js";import"./link-BTPnU-Hw.js";import"./types-Boxb0kJt.js";import"./form-control-B8lc1ecy.js";import"./h-stack-05AjRg6b.js";import"./stack-DpNVaKKj.js";import"./responsive-BTdglrIc.js";import"./children-CJwHQGrN.js";import"./use-checkbox-FWInY0DY.js";import"./use-form-control-kFkYNP0S.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-Hdnuz_oo.js";import"./use-safe-layout-effect-ndn6gSfW.js";import"./use-update-effect-Bl661QPJ.js";import"./index-CMLG5icT.js";import"./useColorFormatConverter-fBQYuwLs.js";import"./ReactIconWrapper-DL43yvOM.js";import"./input-group-dtisr2sA.js";import"./input-addon-DI4-nv8A.js";import"./input-bAQ9k28O.js";import"./useTranslation-Meq16Myt.js";import"./context-BIN0zfio.js";import"./box-jb5rruk_.js";import"./menu-D0ogVK5Z.js";import"./use-descendant-Ct2zYugh.js";import"./use-popper-C49S8W-9.js";import"./use-event-listener-BTXehPBO.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-84952zn1.js";import"./use-disclosure-Dgg2xt1p.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-C05QuhiC.js";import"./menu-list-VfqsodYg.js";import"./motion-DmXVj7wa.js";import"./v-stack-B0KdpznJ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
