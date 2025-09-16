import{j as d}from"./jsx-runtime-Dz07FoRv.js";import{r as b}from"./index-RtDw29dl.js";import{C as s}from"./index-BALQWFWe.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CoHSMU9W.js";import"./index-ZoH4-hBa.js";import"./box-CXRAKkjr.js";import"./factory-B5PDNY2U.js";import"./text-x3p4ru8h.js";import"./use-style-config-8-25pdyZ.js";import"./numericalFormatting-Clx24290.js";import"./stringFormatting-CXjiEtl0.js";import"./index-N3ThtsZ1.js";import"./iconBase-Cxl007Ro.js";import"./index-A3SN_JUz.js";import"./types-CYd2tJet.js";import"./index.esm-EkM1RTux.js";import"./useColorFormatConverter-BimtG-K_.js";import"./index-Cw-GelDQ.js";import"./IconWrapper-C6ljq4Ye.js";import"./theme-DMYu2WI8.js";import"./types-CDh9FG4_.js";import"./form-control-DgaL7IO0.js";import"./context-D5yAGVu8.js";import"./use-merge-refs-Djc0EAy6.js";import"./attr-DNG3tQ7M.js";import"./form-label-Ba31d5z-.js";import"./input-group-D9pJMMQS.js";import"./children-Csj_dsGV.js";import"./input-element-DpmEO8KR.js";import"./icon-DqMFoBqo.js";import"./use-callback-ref-CzRpw1oH.js";import"./use-update-effect-BFuthJ2Y.js";import"./use-safe-layout-effect-D2e6twc4.js";import"./use-event-listener-6bSQv_y0.js";import"./call-all--NRVVPhS.js";import"./use-form-control-C6TG7MzY.js";import"./flex-BRL8b_YD.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
