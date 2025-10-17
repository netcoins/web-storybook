import{j as b}from"./jsx-runtime-DscWB3Vs.js";import{r as d}from"./index-CfXWI6FN.js";import{C as s}from"./index-BZddJm2q.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BQZJxh_e.js";import"./index-CDYmCGXI.js";import"./box-loMJShw8.js";import"./factory-B5fHfxcP.js";import"./text-BLZhNId4.js";import"./use-style-config-B9pV9ukR.js";import"./numericalFormatting-BvdSRQoO.js";import"./stringFormatting-BCIhJXtm.js";import"./index-DrHOL_wO.js";import"./iconBase-_jlUlvKi.js";import"./index-DF_E_uNg.js";import"./types--ojs4B1h.js";import"./index.esm-BLoCqLXT.js";import"./useColorFormatConverter-DstyGXOK.js";import"./index-WyAQGwIH.js";import"./IconWrapper-WAXsVIUd.js";import"./theme-DMYu2WI8.js";import"./types-Bxoyx3pQ.js";import"./form-control-DaY-Oaeg.js";import"./context-r-FSc8-Z.js";import"./use-merge-refs-DuVcGSWU.js";import"./attr-DNG3tQ7M.js";import"./form-label-VfXELawC.js";import"./input-group-BNeIgeYP.js";import"./children-C9tzRyS9.js";import"./input-element-DPRatCuO.js";import"./icon-CBpHzWgh.js";import"./use-callback-ref-BWNMBIJ6.js";import"./use-update-effect-Bb2mVCcQ.js";import"./use-safe-layout-effect-Dod6fcsT.js";import"./use-event-listener-iq0qso-o.js";import"./call-all--NRVVPhS.js";import"./use-form-control-C5S1AzM0.js";import"./flex-CX88ajTu.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
