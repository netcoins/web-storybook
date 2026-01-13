import{j as d}from"./jsx-runtime-NJXZv2PR.js";import{r as b}from"./index-jqPUURTV.js";import{C as s}from"./index-CCj4Ay_2.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D_8vC5L7.js";import"./index-C85wG-Ea.js";import"./box-DCs53uzh.js";import"./factory-BN2D0nrS.js";import"./text-CG0-vbsY.js";import"./use-style-config-BaJboJXq.js";import"./numericalFormatting-Cz9WRFvV.js";import"./stringFormatting-DD7mbiPz.js";import"./index-DFng6eQ4.js";import"./iconBase-WKWH4fTh.js";import"./index-B109wXsZ.js";import"./types-BHPz1vsO.js";import"./index.esm-CoNglARz.js";import"./useColorFormatConverter-Ddm8l03i.js";import"./index-Ciobu71n.js";import"./IconWrapper-BcnsE8Qa.js";import"./theme-DMYu2WI8.js";import"./types-C0iaVSv_.js";import"./form-control-CrQE3bdC.js";import"./context-Bmm7nclc.js";import"./use-merge-refs-DnXyTSsO.js";import"./attr-DNG3tQ7M.js";import"./form-label-CC7z2EIE.js";import"./input-group-CQCM5l6p.js";import"./children-B5PQdXJz.js";import"./input-element-CZAJuHc6.js";import"./icon-DJN3705U.js";import"./use-callback-ref-DD63nx6B.js";import"./use-update-effect-B0MC4zum.js";import"./use-safe-layout-effect-bh2HzAmb.js";import"./use-event-listener-BUShPiHF.js";import"./call-all--NRVVPhS.js";import"./use-form-control-OSqRW-6T.js";import"./flex-dv_TXrRW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
