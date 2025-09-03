import{j as d}from"./jsx-runtime-BNQDehop.js";import{r as b}from"./index-Dtvo63Fj.js";import{C as s}from"./index-mGohvGpR.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BK-dEJ0W.js";import"./index-BmFLkp9Y.js";import"./box-CDfQMF8X.js";import"./factory-DjsCg92e.js";import"./text-DnKu5_yy.js";import"./use-style-config-CFTpPbOn.js";import"./numericalFormatting-CtaoNkLe.js";import"./stringFormatting-CsBdUs76.js";import"./index-Cf1O9_8x.js";import"./iconBase-DKcCp5rX.js";import"./index-DVQ5-5DI.js";import"./types-QkoD5LfF.js";import"./index.esm-Hj2ij_a1.js";import"./useColorFormatConverter-BmGI9gin.js";import"./index-Bx1rT1Bt.js";import"./IconWrapper-D6Pjpfa2.js";import"./theme-DMYu2WI8.js";import"./types-DVpP8HVt.js";import"./form-control-CtJ1lDCg.js";import"./context-DhARttyT.js";import"./use-merge-refs-DJpphMDB.js";import"./attr-DNG3tQ7M.js";import"./form-label-CX79QUcj.js";import"./input-group-DHL0Ar9M.js";import"./children-BulxUKbP.js";import"./input-element-DPrUd9pv.js";import"./icon-CVJTYtlB.js";import"./use-callback-ref-B_axOoT8.js";import"./use-update-effect-C0SCHU3z.js";import"./use-safe-layout-effect-X0MxaKpP.js";import"./use-event-listener-BvrwqYMw.js";import"./call-all--NRVVPhS.js";import"./use-form-control-sNVt-Pd3.js";import"./flex-B7YzHcV8.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
