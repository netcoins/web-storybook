import{j as b}from"./jsx-runtime-CkJgH8fn.js";import{r as d}from"./index-BWGxuQ-J.js";import{C as s}from"./index-_0mbfoSF.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-gq5HhIsB.js";import"./index-Dh7oavTr.js";import"./box-C5y2qDVe.js";import"./factory-BIK4DVT5.js";import"./text-CmEQUfFU.js";import"./use-style-config-CoRFw0rh.js";import"./numericalFormatting-QtQg7ZQv.js";import"./stringFormatting-BHAPln0G.js";import"./index-9VlqPjGV.js";import"./iconBase-29ISTzRS.js";import"./index-uKtKo96Q.js";import"./types-BvNrwTK1.js";import"./index.esm-CEEIGyPC.js";import"./useColorFormatConverter-D8Qw1ZcS.js";import"./index-Gu3DJSYY.js";import"./IconWrapper-DDp4pd97.js";import"./theme-DMYu2WI8.js";import"./types-TbBFnqYG.js";import"./form-control-9T5fky7A.js";import"./context-D8qSvbMZ.js";import"./use-merge-refs-B1jr3LbU.js";import"./attr-DNG3tQ7M.js";import"./form-label-MLA2aUqq.js";import"./input-group-DPhmiYdr.js";import"./children-CusfUkJN.js";import"./input-element-CFuomWXH.js";import"./icon-BBMwT8Yx.js";import"./use-callback-ref-CJEAjBco.js";import"./use-update-effect-DhFBTq2Q.js";import"./use-safe-layout-effect-Bj3q-XaZ.js";import"./use-event-listener-B6XGaDIX.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BAp1euDi.js";import"./flex-CbYjEDda.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
