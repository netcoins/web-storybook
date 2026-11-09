import{j as i}from"./jsx-runtime-D3deEOy7.js";import{r as p}from"./index-BAGmRPeF.js";import{b as h,a as d}from"./index-BkHLpOEj.js";import{C as y}from"./index-Dmu5dzHy.js";import"./iframe-2uFkSe7y.js";import"./index-D6qFfkmS.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-hHT-DkER.js";import"./create-recipe-context-DI-acw4i.js";import"./factory-B0B1u6wm.js";import"./index-BjG63qjm.js";import"./flex-Dpkhht_T.js";import"./index-Emj_soZZ.js";import"./useTranslation-6SP5R22A.js";import"./context-UuU886v_.js";import"./image-tR-heEQn.js";import"./index-gW_qALDV.js";import"./iconBase-DUSP9WbV.js";import"./use-breakpoint-DkkXmf24.js";import"./use-callback-ref-C2W3aKGy.js";import"./button-t_NoiC0C.js";import"./attr-DhmmAXiK.js";import"./spinner-CQ95S0Ov.js";import"./input-group-IFG8xcvZ.js";import"./input-CDRVoR0t.js";import"./factory-EeQGlFze.js";import"./index-DzMh4kgF.js";import"./use-field-context-DUR67cJA.js";import"./create-context-31NeZeAO.js";import"./menu-BlBmJedP.js";import"./create-slot-recipe-context-DpUqBK8P.js";import"./icons-CLaxVLcp.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-8_HyJVKX.js";import"./index-BLVBAjsL.js";import"./index-ClVOmaAb.js";import"./index-Fl_USnmM.js";import"./index-CthIRYvC.js";import"./use-event-IVr-Hv_V.js";import"./index-wBejrI3a.js";import"./index-pW82Y0Cx.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-BQ03Gi7b.js";import"./use-locale-context-DMuGIhkn.js";import"./v-stack-CM0SP6YZ.js";import"./stack-Dtm549T6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="28cd6875-b421-4b81-82a1-6524c9c43534",e._sentryDebugIdIdentifier="sentry-dbid-28cd6875-b421-4b81-82a1-6524c9c43534")}catch{}const a=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Te={component:h,tags:["pending"]},n={render:e=>{const[o,s]=p.useState(a[0]);return i.jsx(h,{...e,selectedOption:o,setSelectedOption:s})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},r={render:()=>{const[e,o]=p.useState(a[0]),[s,g]=p.useState(""),l=s.trim().toLowerCase(),c=t=>l?t.filter(m=>m.label.toLowerCase().includes(l)||m.value.toString().toLowerCase().includes(l)):t,f=c(a.slice(0,2)),T=c(a.slice(2));return i.jsx(y,{search:!0,selectedOption:e,onSearchTermChange:g,categories:[{title:"My Holdings",children:f.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))},{title:"Coins Available to Convert",children:T.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))}]})}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
