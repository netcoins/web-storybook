import{j as b}from"./jsx-runtime-CCJ18Kz-.js";import{r as d}from"./index-CZ6gmXhl.js";import{C as s}from"./index-Cbjj88PT.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DJ4HJDV5.js";import"./index-CznkZrl1.js";import"./box-FyThfQAW.js";import"./factory-CDAqzQl4.js";import"./text-CwsqMmf5.js";import"./use-style-config-CjFLxeBG.js";import"./numericalFormatting-C8lRRYvK.js";import"./stringFormatting-DFB6IMfc.js";import"./index-C-F356-J.js";import"./iconBase-DaZVHB0C.js";import"./index-BcfKK5du.js";import"./types-C8yWDRHd.js";import"./index.esm-C9k_os2O.js";import"./useColorFormatConverter-CuaM9Q_Y.js";import"./index-ClKgxRQc.js";import"./IconWrapper-CozbLQ7Y.js";import"./theme-DMYu2WI8.js";import"./types-DkgeELTi.js";import"./form-control-BaCNm2Yx.js";import"./context-CjzVIJzQ.js";import"./use-merge-refs-DyLhP37g.js";import"./attr-DNG3tQ7M.js";import"./form-label-63djrarE.js";import"./input-group-6ynKOaZl.js";import"./children-D_8N0-Lf.js";import"./input-element-De9zLnMM.js";import"./icon-fRpri_pM.js";import"./use-callback-ref-BF4YjfZ_.js";import"./use-update-effect-BNRYZS_Y.js";import"./use-safe-layout-effect-DEFZ6YCP.js";import"./use-event-listener-Dgx7ZhVh.js";import"./call-all--NRVVPhS.js";import"./use-form-control-B5B7Sgul.js";import"./flex-BoGPGpvw.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
