import{j as b}from"./jsx-runtime-BVg7y1Cx.js";import{r as d}from"./index-UqO0nVH7.js";import{C as s}from"./index-Hsspv3gE.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-A7meJ9S6.js";import"./index-D2ulT1Si.js";import"./box-jb5rruk_.js";import"./factory-otme7FcP.js";import"./text-ePwmt_IR.js";import"./use-style-config-GGOJDxZk.js";import"./numericalFormatting-C91OJkSe.js";import"./stringFormatting-BaRoGECy.js";import"./index-DRCDpJRM.js";import"./iconBase-P9cZLnAH.js";import"./index-Dm4Uv1ej.js";import"./types-D5t1czqU.js";import"./index.esm-Bb_53z_9.js";import"./useColorFormatConverter-fBQYuwLs.js";import"./index-Cij0bAky.js";import"./IconWrapper-CYDQSsB0.js";import"./theme-DMYu2WI8.js";import"./types-Boxb0kJt.js";import"./form-control-B8lc1ecy.js";import"./context-DdZhDF0X.js";import"./use-merge-refs-DfLLh5y_.js";import"./attr-DNG3tQ7M.js";import"./form-label-Cs5DvK01.js";import"./input-group-dtisr2sA.js";import"./children-CJwHQGrN.js";import"./input-element-CHqXDUho.js";import"./icon-Dw9YduYQ.js";import"./use-callback-ref-Hdnuz_oo.js";import"./use-update-effect-Bl661QPJ.js";import"./use-safe-layout-effect-ndn6gSfW.js";import"./use-event-listener-BTXehPBO.js";import"./call-all--NRVVPhS.js";import"./use-form-control-kFkYNP0S.js";import"./flex-D58vYMIH.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
