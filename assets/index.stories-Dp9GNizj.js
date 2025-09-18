import{j as b}from"./jsx-runtime-D9lk7ff7.js";import{r as d}from"./index-DGSN4z5d.js";import{C as s}from"./index-g29zsHXS.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-4snOr_nA.js";import"./index-7w2Tlf3a.js";import"./box-mIRb2X17.js";import"./factory-BaMHIHF2.js";import"./text-Davp32bw.js";import"./use-style-config-BTIaUb99.js";import"./numericalFormatting-XaD3qwq8.js";import"./stringFormatting-D7jkVTZX.js";import"./index-CPXKtL05.js";import"./iconBase-CA1HnJL0.js";import"./index-CRXJ5fUU.js";import"./types-5UbARIeR.js";import"./index.esm-CSef8Gwz.js";import"./useColorFormatConverter-B3Ohx5Ps.js";import"./index-CDtsVQou.js";import"./IconWrapper-Bl5n1G5l.js";import"./theme-DMYu2WI8.js";import"./types-BHUp5B1b.js";import"./form-control-C3bfR5Fn.js";import"./context-DbYNCYOF.js";import"./use-merge-refs-FfpTWtbi.js";import"./attr-DNG3tQ7M.js";import"./form-label-Cn-EKAWn.js";import"./input-group-CMKMttZY.js";import"./children-Di3ar6Rw.js";import"./input-element-BzeBEr65.js";import"./icon-C96Dy3VJ.js";import"./use-callback-ref-D312f1V-.js";import"./use-update-effect-ChZy2cIw.js";import"./use-safe-layout-effect-XsK3228V.js";import"./use-event-listener-Wcj-GdVd.js";import"./call-all--NRVVPhS.js";import"./use-form-control-i8vIWuTo.js";import"./flex-Cn4tngKW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return <CurrencySwitchField mode="dual" currencies={args.currencies} balance={args.balance} exchangeRate={args.exchangeRate} label={args.label} value={value} onTextChange={(values: {
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
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    return <CurrencySwitchField mode="single" currencies={args.currencies} balance={args.balance} label={args.label} value={value} onTextChange={(values: {
      currencyOne: string;
      focus: "currencyOne";
    }) => {
      setValue({
        currencyOne: values.currencyOne
      });
    }} />;
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const re=["Default","Single"];export{c as Default,a as Single,re as __namedExportsOrder,ne as default};
