import{j as b}from"./jsx-runtime-DI6U_4IB.js";import{r as d}from"./index-agZ3C1za.js";import{C as s}from"./index-B_ZsreAb.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DgfLTELc.js";import"./index-C_HO2vFb.js";import"./box-BNRj7k3s.js";import"./factory-CFgWEzc_.js";import"./text-CONdp2M0.js";import"./use-style-config-EZ6_pcLD.js";import"./numericalFormatting-CpqA-qIt.js";import"./stringFormatting-BC5e4zJc.js";import"./index-BVgvSdJU.js";import"./iconBase-Cpg_UNgP.js";import"./index-aiILqsAL.js";import"./types-9Gabj8zw.js";import"./index.esm-BmKIXKU4.js";import"./useColorFormatConverter-DafA-ueU.js";import"./index-CZJyxf9W.js";import"./IconWrapper-CadW8o00.js";import"./theme-DMYu2WI8.js";import"./types-Ad9uDSa7.js";import"./form-control-DNc9SeYw.js";import"./context-BJm0OUv_.js";import"./use-merge-refs-Bx6jzr8l.js";import"./attr-DNG3tQ7M.js";import"./form-label-DiwFlO-H.js";import"./input-group-DXtu0qtp.js";import"./children-B7FJEDx8.js";import"./input-element-Dw3kjXm5.js";import"./icon-CAuaTpcP.js";import"./use-callback-ref-HyeqLHBU.js";import"./use-update-effect-DNq4iLpn.js";import"./use-safe-layout-effect-DV-X3m1z.js";import"./use-event-listener-BskXR00q.js";import"./call-all--NRVVPhS.js";import"./use-form-control-C_H7Ta_2.js";import"./flex-QlyG6JVf.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
