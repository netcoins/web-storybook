import{j as b}from"./jsx-runtime-DRyd4aDw.js";import{r as d}from"./index-hoYM_MhK.js";import{C as s}from"./index-C4f7vUPX.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DnoFEF5L.js";import"./index-DC7rXzUE.js";import"./box-_rS9QDAM.js";import"./factory-BXTuZL6K.js";import"./text-DSLwN6c3.js";import"./use-style-config-BNR2hmNK.js";import"./numericalFormatting-B5y2W6uT.js";import"./stringFormatting-CzZ9TqjP.js";import"./index-CtwsPdck.js";import"./iconBase-Cgw5Eno3.js";import"./index-D-oCq1Hn.js";import"./types-BTDo2W4J.js";import"./index.esm-CKFlBoqB.js";import"./useColorFormatConverter-CRXtclY0.js";import"./index-BKBa0zCV.js";import"./IconWrapper--uEQhBmo.js";import"./theme-DMYu2WI8.js";import"./types-BAPOtc-j.js";import"./form-control-H4RqdKbc.js";import"./context-BvSOH1wz.js";import"./use-merge-refs-CKhi2vol.js";import"./attr-DNG3tQ7M.js";import"./form-label-DQRS_doV.js";import"./input-group-ClSjI-EM.js";import"./children-rATB11ge.js";import"./input-element-CdFnwF1X.js";import"./icon-CAWv3c3U.js";import"./use-callback-ref-Dh7WtKpe.js";import"./use-update-effect-DkiJR_Rb.js";import"./use-safe-layout-effect-Dyk5ZIOo.js";import"./use-event-listener-B_ZFqcnE.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Bdwa9DjY.js";import"./flex-CcESIdJu.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
