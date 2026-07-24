import{j as i}from"./jsx-runtime-CD1_vtUx.js";import{r as p}from"./index-CMnzKS7h.js";import{b as h,a as d}from"./index-BthyqQh2.js";import{C as y}from"./index-wiVOBKZ7.js";import"./iframe-CepHEkUM.js";import"./index-COQN_j0y.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-DeL0AW7H.js";import"./create-recipe-context-CPIrATom.js";import"./factory-Dy5ne_At.js";import"./index-DVTgaKa7.js";import"./flex-0MNK0DX9.js";import"./index-DtA9_8B8.js";import"./useTranslation-Dp_6pde_.js";import"./context-V3cxpqfc.js";import"./image-D6dFODqI.js";import"./index-CuLqocma.js";import"./iconBase-KccDBRcX.js";import"./use-breakpoint-2cJD1AuR.js";import"./use-callback-ref-BNIVIG8l.js";import"./button-EWLNwFOu.js";import"./attr-DhmmAXiK.js";import"./spinner-BbQtVInR.js";import"./input-group-Bmq38lTf.js";import"./input-9HgQTm4O.js";import"./factory-D1Ydo2mU.js";import"./index-DzMh4kgF.js";import"./use-field-context-CqyvMIlM.js";import"./create-context-Be0TmX7n.js";import"./menu-rg9xuwog.js";import"./create-slot-recipe-context-BXAXMN0K.js";import"./icons-DY4SfmQ_.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-C6hba5Q_.js";import"./index-BLVBAjsL.js";import"./index-CHXAW4jd.js";import"./index-7bmnATwq.js";import"./index-kI1pKDnj.js";import"./use-event-CXbZ6aw2.js";import"./index-wBejrI3a.js";import"./index-pW82Y0Cx.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";import"./use-environment-context-TyIzF7rb.js";import"./use-locale-context-CyxdlCBq.js";import"./v-stack-COcCyRDO.js";import"./stack-Ae5-6MsW.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="28cd6875-b421-4b81-82a1-6524c9c43534",e._sentryDebugIdIdentifier="sentry-dbid-28cd6875-b421-4b81-82a1-6524c9c43534")}catch{}const a=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Te={component:h,tags:["pending"]},n={render:e=>{const[o,s]=p.useState(a[0]);return i.jsx(h,{...e,selectedOption:o,setSelectedOption:s})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},r={render:()=>{const[e,o]=p.useState(a[0]),[s,g]=p.useState(""),l=s.trim().toLowerCase(),c=t=>l?t.filter(m=>m.label.toLowerCase().includes(l)||m.value.toString().toLowerCase().includes(l)):t,f=c(a.slice(0,2)),T=c(a.slice(2));return i.jsx(y,{search:!0,selectedOption:e,onSearchTermChange:g,categories:[{title:"My Holdings",children:f.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))},{title:"Coins Available to Convert",children:T.map(t=>i.jsx(d,{option:t,onClick:()=>o(t),selected:(e==null?void 0:e.value)===t.value},t.value))}]})}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
