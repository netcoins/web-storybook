import{j as b}from"./jsx-runtime-DlF-hKEQ.js";import{r as g}from"./index-teU4eNSH.js";import{M as i}from"./index-Bertq1DK.js";import"./iframe-DKyycFJO.js";import"./index-BQTeHM6u.js";import"./types-rszNPkYy.js";import"./color-mode-DUByXpTq.js";import"./iconBase-DyiPEVfX.js";import"./icon-button-CixX5Biv.js";import"./button-BjzmQImh.js";import"./factory-CB3tuO0t.js";import"./create-recipe-context-DTw5gmRX.js";import"./attr-DhmmAXiK.js";import"./spinner-DWBNafRI.js";import"./skeleton-Bk2kW7IG.js";import"./index-ytO-jv-j.js";import"./stack-Bh1-Om3N.js";import"./flex-CJh8IWin.js";import"./icon-Cs6LhBmu.js";import"./index-Rdt5MFmh.js";import"./index-DAEaa_9a.js";import"./index-D2Pj_y6b.js";import"./index.esm-B3a1Xdec.js";import"./index-DwKJjPlR.js";import"./link-Bv6smx0b.js";import"./types-DjQg8NwA.js";import"./index-BoV7HnQ-.js";import"./h-stack-1Tj3Q_nz.js";import"./field-XUhydDoz.js";import"./create-slot-recipe-context-KhOHVEWZ.js";import"./use-field-context-CYi84lSK.js";import"./create-context-GaBZH8Tp.js";import"./factory-Bh_A4Lv0.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BU5I_9S-.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-CG4TY4cx.js";import"./index-DLCRCuKj.js";import"./index-BXtHAO76.js";import"./use-locale-context-DF1dwBAQ.js";import"./use-event-DnsG-QHm.js";import"./index-D80_MzSz.js";import"./useColorFormatConverter-CxK7ppPS.js";import"./index-CFB_IzTE.js";import"./ReactIconWrapper-CHrBV4Bg.js";import"./input-group-CVxiaeI_.js";import"./input-CumuRnUa.js";import"./useTranslation-DCmu7ry8.js";import"./context-C9BLRG4x.js";import"./portal-741fw-9f.js";import"./v-stack-xUeayX0q.js";import"./menu-Casen9mQ.js";import"./icons-B4wzM0sE.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-CJCFVGRG.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
