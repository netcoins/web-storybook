import{j as d}from"./jsx-runtime-BkQZSEIf.js";import{r as b}from"./index-D4EOpcLa.js";import{C as s}from"./index-BnANwUN-.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DN8G179o.js";import"./index-ChMSRim1.js";import"./box-CNsYUkgW.js";import"./factory-BvfaDmtu.js";import"./text-638c3RYc.js";import"./use-style-config-B0UF7OPr.js";import"./numericalFormatting-BSZdcmZ0.js";import"./stringFormatting-L55c1fSP.js";import"./index-BZY4FehO.js";import"./iconBase-BhIrwaDC.js";import"./index-DcYfXbqf.js";import"./types-OEM87gJJ.js";import"./index.esm-CbgU3TqX.js";import"./useColorFormatConverter-D3P8__bw.js";import"./index-B_EvyX4i.js";import"./IconWrapper-Dty6X9QB.js";import"./theme-DMYu2WI8.js";import"./types-i2wqNBn6.js";import"./form-control-DdsGnUHJ.js";import"./context-uzRk5v5o.js";import"./use-merge-refs-0QJjtJvY.js";import"./attr-DNG3tQ7M.js";import"./form-label-DXHxzbjA.js";import"./input-group-wtvJdxas.js";import"./children-B0anPadQ.js";import"./input-element-DQzyaPra.js";import"./icon-BKAVBbR4.js";import"./use-callback-ref-BnXW2utd.js";import"./use-update-effect-BDAUnvJJ.js";import"./use-safe-layout-effect-ZCDLejXd.js";import"./use-event-listener-DX7KVXI6.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Cpj8bSau.js";import"./flex-gyDmVpPH.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
