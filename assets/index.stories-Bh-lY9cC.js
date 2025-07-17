import{j as p}from"./jsx-runtime-CQAa4qDQ.js";import{r as b}from"./index-OILgKo3Z.js";import{C as s}from"./index-yaqIQAhH.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Cx_R9WK5.js";import"./box-BUJHURtG.js";import"./use-style-config-j-GZR9Oi.js";import"./text-MAXgvpEP.js";import"./numericalFormatting-BNrseJxV.js";import"./stringFormatting-CBO-DL8K.js";import"./index-B4gmFqFq.js";import"./iconBase-_SEFdOfM.js";import"./index-bjtOhPlQ.js";import"./index-BM7tOyK9.js";import"./index.esm-CBXh4UhA.js";import"./flex-D2Ruh6ZN.js";import"./input-group-GJMUY7Dk.js";import"./children-rlgTPJZ4.js";import"./context-CJ8BW1lH.js";import"./input-element-B066tuwJ.js";import"./input-09ffhbUc.js";import"./use-form-control-Bc3PeJfc.js";import"./form-control-C4Cg1bVr.js";import"./use-merge-refs-S0LPA916.js";import"./attr-DNG3tQ7M.js";import"./call-all--NRVVPhS.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="71d3e537-d599-43f5-af5a-6ae63c0e7904",n._sentryDebugIdIdentifier="sentry-dbid-71d3e537-d599-43f5-af5a-6ae63c0e7904")}catch{}const J={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return p.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return p.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: "dual",
    currencies: [{
      symbol: "BTC",
      precision: "8"
    }, {
      symbol: "USD",
      precision: "2"
    }] as [CurrencyData, CurrencyData],
    balance: {
      quantity: new Decimal(100),
      focus: "currencyOne"
    },
    exchangeRate: 10000,
    label: "Label"
  },
  render: function Story(args) {
    const [value, setValue] = useState<{
      currencyOne: string;
      currencyTwo: string;
    }>({
      currencyOne: "",
      currencyTwo: ""
    });
    return <CurrencySwitchFormField mode="dual" currencies={args.currencies} balance={args.balance} exchangeRate={args.exchangeRate} label={args.label} value={value} onTextChange={(values: {
      currencyOne: string;
      currencyTwo: string;
      focus: "currencyOne" | "currencyTwo";
    }) => {
      setValue({
        currencyOne: values.currencyOne,
        currencyTwo: values.currencyTwo
      });
    }} />;
  }
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,y,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mode: "single",
    currencies: [{
      symbol: "CAD",
      precision: "2"
    }] as [CurrencyData],
    balance: {
      quantity: new Decimal(100),
      focus: "currencyOne"
    },
    label: "Label"
  },
  render: function Story(args) {
    const [value, setValue] = useState<{
      currencyOne: string;
    }>({
      currencyOne: ""
    });
    return <CurrencySwitchFormField mode="single" currencies={args.currencies} balance={args.balance} label={args.label} value={value} onTextChange={(values: {
      currencyOne: string;
      focus: "currencyOne";
    }) => {
      setValue({
        currencyOne: values.currencyOne
      });
    }} />;
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const K=["Default","Single"];export{c as Default,a as Single,K as __namedExportsOrder,J as default};
