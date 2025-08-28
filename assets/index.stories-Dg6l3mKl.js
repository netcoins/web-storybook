import{j as d}from"./jsx-runtime-C-c0mJju.js";import{r as b}from"./index-B_aE6-2H.js";import{C as s}from"./index-Ct5co2Bq.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bkbip2i2.js";import"./index-DvMtJVI3.js";import"./box-CmeTUdTZ.js";import"./factory-CyKh-rbl.js";import"./text-nzrlnuSt.js";import"./use-style-config-D3nBrkbw.js";import"./numericalFormatting-DHdfBDqK.js";import"./stringFormatting-DHY3MoVM.js";import"./index-3nGBOhhO.js";import"./iconBase-BTGs9oPA.js";import"./index-XoivtXvO.js";import"./index-z9iGyNBp.js";import"./index.esm--nqzUjC9.js";import"./flex-B4nO2eNk.js";import"./input-group-BBs9spS7.js";import"./children-DOGYkxq_.js";import"./context-yJ7NARXX.js";import"./input-element-RFqYuiER.js";import"./input-Bq6FRR2y.js";import"./use-form-control-B7RdA_Po.js";import"./form-control-CZLgrTRz.js";import"./use-merge-refs-OVbA9q9E.js";import"./attr-DNG3tQ7M.js";import"./call-all--NRVVPhS.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a3c9e66b-4a09-4e93-8628-546f8dabd33e",n._sentryDebugIdIdentifier="sentry-dbid-a3c9e66b-4a09-4e93-8628-546f8dabd33e")}catch{}const M={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
