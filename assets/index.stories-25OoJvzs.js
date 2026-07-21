import{j as i}from"./jsx-runtime-sSiny72Q.js";import{r as p}from"./index-BRZUHrxl.js";import{b as h,a as d}from"./index-CMy3ZWjP.js";import{C as y}from"./index-Cobc9y1i.js";import"./iframe-BtF_amxx.js";import"./index-DZYB_oIC.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CTYRmYfI.js";import"./create-recipe-context-ysTfWqWA.js";import"./factory-DB5fldYk.js";import"./index-BKrEO2TL.js";import"./flex-DBF-bEeD.js";import"./index-DJ0Z2Uk6.js";import"./useTranslation-BWr_VPzh.js";import"./context-T2cDcmFr.js";import"./image-CxPp7mke.js";import"./index-BG2rz5xQ.js";import"./iconBase-CmnmgoKb.js";import"./use-breakpoint-CwGDmfE9.js";import"./use-callback-ref-sk535Zo-.js";import"./button-rhhJQ1Pi.js";import"./attr-DhmmAXiK.js";import"./spinner-DomKOxpT.js";import"./input-group-MraQ5BPn.js";import"./input-Z4BruBql.js";import"./factory-Cs1OGWTc.js";import"./index-DzMh4kgF.js";import"./use-field-context-BlcZIZyA.js";import"./create-context-uyfP516n.js";import"./menu-CxdMON_O.js";import"./create-slot-recipe-context-sVH52Z6B.js";import"./icons-BYuY7D5V.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-B37u-g2R.js";import"./index-BLVBAjsL.js";import"./index-CF-5GPVB.js";import"./index-DLLSwTiU.js";import"./index-Bg6o_01X.js";import"./use-event-z6sIpQtT.js";import"./index-wBejrI3a.js";import"./index-pW82Y0Cx.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-DCmU3z1b.js";import"./use-locale-context-CmisX32z.js";import"./v-stack-awRW6hvn.js";import"./stack-DwLzdsVO.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="28cd6875-b421-4b81-82a1-6524c9c43534",e._sentryDebugIdIdentifier="sentry-dbid-28cd6875-b421-4b81-82a1-6524c9c43534")}catch{}const a=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Te={component:h,tags:["pending"]},n={render:e=>{const[o,s]=p.useState(a[0]);return i.jsx(h,{...e,selectedOption:o,setSelectedOption:s})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},r={render:()=>{const[e,o]=p.useState(a[0]),[s,g]=p.useState(""),l=s.trim().toLowerCase(),c=t=>l?t.filter(m=>m.label.toLowerCase().includes(l)||m.value.toString().toLowerCase().includes(l)):t,f=c(a.slice(0,2)),T=c(a.slice(2));return i.jsx(y,{search:!0,selectedOption:e,onSearchTermChange:g,categories:[{title:"My Holdings",children:f.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))},{title:"Coins Available to Convert",children:T.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))}]})}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
