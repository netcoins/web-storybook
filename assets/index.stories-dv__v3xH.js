import{j as i}from"./jsx-runtime-BqansXUO.js";import{r as p}from"./index-CaUP9lQz.js";import{b as h,a as d}from"./index-Du68DFPh.js";import{C as y}from"./index-MlRsiNPK.js";import"./iframe-CJPrE54o.js";import"./index-Dj7QCEQV.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Boi3Ox6_.js";import"./create-recipe-context-1-EkR5W0.js";import"./factory-noIglyie.js";import"./index-CHIBpTh-.js";import"./flex-BtG4Z1Cz.js";import"./index-BA_Zk4lD.js";import"./useTranslation-CUiZx7U2.js";import"./context-_t1uTSTG.js";import"./image-uXbNQTGU.js";import"./index-Ce98lioX.js";import"./iconBase-BO8Qqx_p.js";import"./use-breakpoint-Ce7PH7VJ.js";import"./use-callback-ref-D45_7P9u.js";import"./button-ogbieDS2.js";import"./attr-DhmmAXiK.js";import"./spinner-CULqHpKw.js";import"./input-group-CqOUflYg.js";import"./input-CSmeDmTB.js";import"./factory-DeJ31wet.js";import"./index-DzMh4kgF.js";import"./use-field-context-qmxdmUHC.js";import"./create-context-yWkgqma1.js";import"./menu-VaZIyo9S.js";import"./create-slot-recipe-context-NNrBNKNw.js";import"./icons-Bh5IB2_W.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-2HCgLXXh.js";import"./index-BLVBAjsL.js";import"./index-B2OV5qgV.js";import"./index-Bk8PeV3R.js";import"./index-Bh2oxZLh.js";import"./use-event-w_Kt2mwn.js";import"./index-C3A7Sy7F.js";import"./index-pW82Y0Cx.js";import"./index-CgD3MbxH.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CAjd0yKu.js";import"./use-environment-context-BDYXX-pg.js";import"./use-locale-context-BpYWQfIH.js";import"./v-stack-zmwN4-Id.js";import"./stack-1pNxbbrw.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="b02c7046-af77-40aa-8eba-59e74c75645e",e._sentryDebugIdIdentifier="sentry-dbid-b02c7046-af77-40aa-8eba-59e74c75645e")}catch{}const a=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Te={component:h,tags:["pending"]},n={render:e=>{const[o,s]=p.useState(a[0]);return i.jsx(h,{...e,selectedOption:o,setSelectedOption:s})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},r={render:()=>{const[e,o]=p.useState(a[0]),[s,g]=p.useState(""),l=s.trim().toLowerCase(),c=t=>l?t.filter(m=>m.label.toLowerCase().includes(l)||m.value.toString().toLowerCase().includes(l)):t,f=c(a.slice(0,2)),T=c(a.slice(2));return i.jsx(y,{search:!0,selectedOption:e,onSearchTermChange:g,categories:[{title:"My Holdings",children:f.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))},{title:"Coins Available to Convert",children:T.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))}]})}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
