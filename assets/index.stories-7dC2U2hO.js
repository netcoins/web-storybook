import{j as b}from"./jsx-runtime-xcRR_sFE.js";import{r as d}from"./index-BfxolTsx.js";import{C as s}from"./index-DbB0syyt.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Dxt0JsW3.js";import"./index-C33ToPj_.js";import"./box-ehHZiD40.js";import"./factory-Bs5lGMgw.js";import"./text-DAhtPMd0.js";import"./use-style-config-5ytjCScN.js";import"./numericalFormatting-CT1dC8Y3.js";import"./stringFormatting-BmeNzv31.js";import"./index-B6IQNkD1.js";import"./iconBase-0rthzjfA.js";import"./index-CTByxwqt.js";import"./types-D1VbDPJB.js";import"./index.esm-iLhreySI.js";import"./useColorFormatConverter-Bzx_7CP_.js";import"./index-CJ0MZ_D3.js";import"./IconWrapper-2IQuXshP.js";import"./theme-DMYu2WI8.js";import"./types-DeELwaeD.js";import"./form-control-Bg29dK7F.js";import"./context-CrNy_0ll.js";import"./use-merge-refs-a_I5UrCu.js";import"./attr-DNG3tQ7M.js";import"./form-label-ByN-KSOB.js";import"./input-group-BKyPHCFd.js";import"./children-CYsI7u-y.js";import"./input-element-Bt8BcEng.js";import"./icon-BcEUe3QI.js";import"./use-callback-ref-B1WEbRtX.js";import"./use-update-effect-KZs9fcHS.js";import"./use-safe-layout-effect-plSln0B8.js";import"./use-event-listener-CUfXQy04.js";import"./call-all--NRVVPhS.js";import"./use-form-control-C8skFrS6.js";import"./flex-48mrT-tZ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
