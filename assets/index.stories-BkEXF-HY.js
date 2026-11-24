import{j as i}from"./jsx-runtime-ATAHYhDa.js";import{r as p}from"./index-DIrk1x5G.js";import{b as h,a as d}from"./index-nQ4bbgum.js";import{C as y}from"./index-BQqcDThl.js";import"./iframe-BNaiGXWG.js";import"./index-BDuwm3CI.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BiWzHuge.js";import"./create-recipe-context-TArHIy8d.js";import"./factory-UAGRE-bk.js";import"./index-CXyISEFP.js";import"./flex-DNMt-wOy.js";import"./index-5oZEhw7j.js";import"./useTranslation-x6eH_eYU.js";import"./context-C47WMJdo.js";import"./image-Dz9QeBGS.js";import"./index-YsyNkL9P.js";import"./iconBase-Bfp-M5La.js";import"./use-breakpoint-CRxcNZkW.js";import"./use-callback-ref-Bu9KLUfa.js";import"./button-BXFoe-eN.js";import"./attr-DhmmAXiK.js";import"./spinner-BtuEZShF.js";import"./input-group-CK6Yz_r0.js";import"./input-CuxQIYlW.js";import"./factory-BwjozXtU.js";import"./index-DzMh4kgF.js";import"./use-field-context-1qMv5wgE.js";import"./create-context-DySYu1Sq.js";import"./menu-DvvylT1Y.js";import"./create-slot-recipe-context-IOcTTd2K.js";import"./icons-CTDb0rem.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-BFtSts4n.js";import"./index-BLVBAjsL.js";import"./index-DPmP-I6D.js";import"./index-DnJBAwuu.js";import"./index-BG2z0qj9.js";import"./use-event-DQU8aEXb.js";import"./index-wBejrI3a.js";import"./index-pW82Y0Cx.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-B0G6fcAp.js";import"./use-locale-context-KwiC6Z3f.js";import"./v-stack-CbDYi3h8.js";import"./stack-vBXN3jf0.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="28cd6875-b421-4b81-82a1-6524c9c43534",e._sentryDebugIdIdentifier="sentry-dbid-28cd6875-b421-4b81-82a1-6524c9c43534")}catch{}const a=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Te={component:h,tags:["pending"]},n={render:e=>{const[o,s]=p.useState(a[0]);return i.jsx(h,{...e,selectedOption:o,setSelectedOption:s})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},r={render:()=>{const[e,o]=p.useState(a[0]),[s,g]=p.useState(""),l=s.trim().toLowerCase(),c=t=>l?t.filter(m=>m.label.toLowerCase().includes(l)||m.value.toString().toLowerCase().includes(l)):t,f=c(a.slice(0,2)),T=c(a.slice(2));return i.jsx(y,{search:!0,selectedOption:e,onSearchTermChange:g,categories:[{title:"My Holdings",children:f.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))},{title:"Coins Available to Convert",children:T.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))}]})}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
