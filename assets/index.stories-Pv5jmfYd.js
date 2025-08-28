import{j as d}from"./jsx-runtime-DBvW3J4P.js";import{r as b}from"./index-eiqMTM-Z.js";import{C as s}from"./index-DSpnaJm_.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CbEszLwV.js";import"./index-s1tl39PH.js";import"./box-CilrpWKY.js";import"./factory-CH5OTrax.js";import"./text-drvfSy8p.js";import"./use-style-config-CRvEJw1Z.js";import"./numericalFormatting-B4ZqToxX.js";import"./stringFormatting-DfKtWWHL.js";import"./index-DwpOUU05.js";import"./iconBase-yBK0uS8I.js";import"./index-CiQPQA6V.js";import"./index-tC8Ynut5.js";import"./index.esm-D3r_tt3u.js";import"./flex-CVx7E2fo.js";import"./input-group-DbDvsQcN.js";import"./children-CWF4Ess-.js";import"./context-oDCZUX6j.js";import"./input-element-M1hbRkrt.js";import"./input-DXOhbPyQ.js";import"./use-form-control-BNiDmjLM.js";import"./form-control-CfHQBe1d.js";import"./use-merge-refs-DcwZN5rK.js";import"./attr-DNG3tQ7M.js";import"./call-all--NRVVPhS.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a3c9e66b-4a09-4e93-8628-546f8dabd33e",n._sentryDebugIdIdentifier="sentry-dbid-a3c9e66b-4a09-4e93-8628-546f8dabd33e")}catch{}const M={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,y,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(y=a.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const N=["Default","Single"];export{c as Default,a as Single,N as __namedExportsOrder,M as default};
