import{j as i}from"./jsx-runtime-DxBEdQmC.js";import{r as p}from"./index-UoMFnjkK.js";import{b as h,a as d}from"./index-ChfTD8Ev.js";import{C as y}from"./index-C1forpXM.js";import"./iframe-BKww4BIe.js";import"./index-tE4Qjn2M.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CL8z5Tup.js";import"./create-recipe-context-pXnyIBHL.js";import"./factory-C7ap2FvA.js";import"./index-CP_patft.js";import"./flex-igvNLbTd.js";import"./index-CZvoKBsi.js";import"./useTranslation-DY1tHa9-.js";import"./context-Cd1fQddk.js";import"./image-BXCoSDLM.js";import"./index-CjehYZL_.js";import"./iconBase-WpxnOCAJ.js";import"./use-breakpoint-Di5iLorE.js";import"./use-callback-ref-CSimsUN4.js";import"./button-DfxeIb5J.js";import"./attr-DhmmAXiK.js";import"./spinner-DLmv6_hO.js";import"./input-group-DPAHI2ql.js";import"./input-B_ZoK-ON.js";import"./factory-D9tmIfIR.js";import"./index-DzMh4kgF.js";import"./use-field-context-CiYKUv5I.js";import"./create-context-C7r3fsSh.js";import"./menu-B8WNfXH5.js";import"./create-slot-recipe-context-DZ77ylde.js";import"./icons-CerStkTd.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CuyMM5jJ.js";import"./index-BLVBAjsL.js";import"./index-D-C9qMu8.js";import"./index-DIN6b4ja.js";import"./index-DTgH479f.js";import"./use-event-Toqx--ZC.js";import"./index-wBejrI3a.js";import"./index-pW82Y0Cx.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-CKOfuaxo.js";import"./use-locale-context-B4g1rs2y.js";import"./v-stack-B0ddLGnd.js";import"./stack-jLnbIEHK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="28cd6875-b421-4b81-82a1-6524c9c43534",e._sentryDebugIdIdentifier="sentry-dbid-28cd6875-b421-4b81-82a1-6524c9c43534")}catch{}const a=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Te={component:h,tags:["pending"]},n={render:e=>{const[o,s]=p.useState(a[0]);return i.jsx(h,{...e,selectedOption:o,setSelectedOption:s})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},r={render:()=>{const[e,o]=p.useState(a[0]),[s,g]=p.useState(""),l=s.trim().toLowerCase(),c=t=>l?t.filter(m=>m.label.toLowerCase().includes(l)||m.value.toString().toLowerCase().includes(l)):t,f=c(a.slice(0,2)),T=c(a.slice(2));return i.jsx(y,{search:!0,selectedOption:e,onSearchTermChange:g,categories:[{title:"My Holdings",children:f.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))},{title:"Coins Available to Convert",children:T.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))}]})}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [selectedOption, setSelectedOption] = useState<Option<string | number>>(options[0]);
    return <CoinSelect {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
  },
  args: {
    search: false,
    options: [{
      value: "BTC",
      label: "Bitcoin",
      desc: "BTC"
    }, {
      value: "ETH",
      label: "Ethereum",
      desc: "ETH"
    }, {
      value: "SOL",
      label: "Solana",
      desc: "SOL"
    }, {
      value: "ADA",
      label: "Cardano",
      desc: "ADA"
    }, {
      value: "SHIB",
      label: "Shiba",
      desc: "SHIB"
    }]
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,v,O;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState<Option<string | number>>(options[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const filterOptions = (items: typeof options) => {
      if (!normalizedSearchTerm) return items;
      return items.filter(option => option.label.toLowerCase().includes(normalizedSearchTerm) || option.value.toString().toLowerCase().includes(normalizedSearchTerm));
    };
    const holdingsOptions = filterOptions(options.slice(0, 2));
    const availableOptions = filterOptions(options.slice(2));
    return <CategorizedCoinSelect search selectedOption={selectedOption} onSearchTermChange={setSearchTerm} categories={[{
      title: "My Holdings",
      children: holdingsOptions.map(option => <CoinOption key={option.value} option={option} onClick={() => setSelectedOption(option)} selected={selectedOption?.value === option.value} />)
    }, {
      title: "Coins Available to Convert",
      children: availableOptions.map(option => <CoinOption key={option.value} option={option} onClick={() => setSelectedOption(option)} selected={selectedOption?.value === option.value} />)
    }]} />;
  }
}`,...(O=(v=r.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};const ye=["Default","Categorized"];export{r as Categorized,n as Default,ye as __namedExportsOrder,Te as default};
