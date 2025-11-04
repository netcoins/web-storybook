import{j as d}from"./jsx-runtime-BYo5s1w_.js";import{r as b}from"./index-gIeeU9h1.js";import{C as s}from"./index-DCZ23p2Q.js";import{D as g}from"./stringFormatting-CaWdwkl_.js";import"./iframe-CWLIvDKl.js";import"./index-BhqFFCet.js";import"./box-DN_MpGfH.js";import"./factory-BeGSudYV.js";import"./text-DiywcYHt.js";import"./use-style-config-DKVKIdpu.js";import"./numericalFormatting-D9y_EFUs.js";import"./index-DOFHLmOa.js";import"./iconBase-mJlYVW7K.js";import"./index-CfmEiAYY.js";import"./types-CIgEoVl2.js";import"./index.esm-BFzR6LsK.js";import"./useColorFormatConverter-D9TXYjrZ.js";import"./index-BudfJApu.js";import"./IconWrapper-ogvfkqDf.js";import"./theme-DMYu2WI8.js";import"./types-CDtTkf63.js";import"./form-control-CoDYypON.js";import"./context-D4Zg-Nqv.js";import"./use-merge-refs-DxzE3DBk.js";import"./attr-DNG3tQ7M.js";import"./form-label-COSTGk0i.js";import"./input-group-0Ust0ErZ.js";import"./children-CpslFmFW.js";import"./input-element-COQnPJ2J.js";import"./icon-BCLxeN9j.js";import"./use-callback-ref-JjQVJ41k.js";import"./use-update-effect-CgopIYg4.js";import"./use-safe-layout-effect-JHNcjjnH.js";import"./use-event-listener-DnWCA7to.js";import"./call-all--NRVVPhS.js";import"./use-form-control-nZ6oawOg.js";import"./flex-UMDGzfpp.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const ne=["Default","Single"];export{c as Default,a as Single,ne as __namedExportsOrder,ee as default};
