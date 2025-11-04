import{j as d}from"./jsx-runtime-CIqfBLiW.js";import{r as b}from"./index-k1jG6xPF.js";import{C as s}from"./index-CEv0KcbV.js";import{D as g}from"./stringFormatting-CBotqdXZ.js";import"./iframe-CgiJZm3J.js";import"./index-DVyKrmpV.js";import"./box-Bzwi0K9I.js";import"./factory-DGji_UzY.js";import"./text-0vmpramh.js";import"./use-style-config-DID0GbhU.js";import"./numericalFormatting-6O0RxtlX.js";import"./index-B0bugIJk.js";import"./iconBase-CDzHQ3cO.js";import"./index-BcLzxcf1.js";import"./types-B9ro9maI.js";import"./index.esm-sb9XZy4D.js";import"./useColorFormatConverter-0uxC8t_G.js";import"./index-DjG4CZ9g.js";import"./IconWrapper-nlAeDmK2.js";import"./theme-DMYu2WI8.js";import"./types-qxRC8LDa.js";import"./form-control-Brrh6gVB.js";import"./context-DUOxryss.js";import"./use-merge-refs-DfiD8wIE.js";import"./attr-DNG3tQ7M.js";import"./form-label-CKFiJ7sv.js";import"./input-group-B_NnEzkr.js";import"./children-Ba6STUgf.js";import"./input-element-B6tg7nTo.js";import"./icon-FneL2-dz.js";import"./use-callback-ref-C71cmK3f.js";import"./use-update-effect-qaQ-aU4k.js";import"./use-safe-layout-effect-vuqKibam.js";import"./use-event-listener-BC-P5lEF.js";import"./call-all--NRVVPhS.js";import"./use-form-control-4mUeMgol.js";import"./flex-DG9TD6-J.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
