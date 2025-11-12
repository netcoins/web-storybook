import{j as b}from"./jsx-runtime-LOmjKKCo.js";import{r as d}from"./index-212F8vul.js";import{C as s}from"./index-DyOM6yXv.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D-491yR7.js";import"./index-DNHeb_8D.js";import"./box-nTzxF7C8.js";import"./factory-CjEGmDaV.js";import"./text-D4L4hpxl.js";import"./use-style-config-2WUCjPTT.js";import"./numericalFormatting-BMnXutq5.js";import"./stringFormatting-6eTPJ-4Q.js";import"./index-DbQSB1Lu.js";import"./iconBase-T6MB8e_u.js";import"./index-BAaj5Ekp.js";import"./types-DNmOj25d.js";import"./index.esm-pBpfTr5l.js";import"./useColorFormatConverter-DvCNgLuf.js";import"./index-BRbajXoZ.js";import"./IconWrapper-1U7_nkTZ.js";import"./theme-DMYu2WI8.js";import"./types-eQjqgF0W.js";import"./form-control-DjozVUBg.js";import"./context-CNuSKq7p.js";import"./use-merge-refs-lhAJ4tQ5.js";import"./attr-DNG3tQ7M.js";import"./form-label-CXsVSc4Q.js";import"./input-group-Dg4Wtc3P.js";import"./children-OPMx76oa.js";import"./input-element-CxdcUGKp.js";import"./icon-Cd4cRYvr.js";import"./use-callback-ref-CCNvMu5l.js";import"./use-update-effect-CR7Tg7kE.js";import"./use-safe-layout-effect-D088JO3c.js";import"./use-event-listener-BGSVQLH-.js";import"./call-all--NRVVPhS.js";import"./use-form-control-D5IvggtS.js";import"./flex-DJ4ueP6k.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
