import{j as d}from"./jsx-runtime-DtacxP_4.js";import{r as b}from"./index-DHs_mBbP.js";import{C as s}from"./index-CKJHvFTI.js";import{D as g}from"./stringFormatting-Bs5nCwpA.js";import"./iframe-CkPY_Ypo.js";import"./index-CYGnApim.js";import"./box-cqxK0scF.js";import"./factory-BSZ2LSit.js";import"./text-f8pfWaXy.js";import"./use-style-config-DU0N-5r8.js";import"./numericalFormatting-CCUsu81F.js";import"./index-DUbLpLX5.js";import"./iconBase-CgTwkM-e.js";import"./index-DOTKbP6x.js";import"./types-CqvheROq.js";import"./index.esm-BEAUId7p.js";import"./useColorFormatConverter-ClaBWUD0.js";import"./index-OGxFJpyX.js";import"./IconWrapper-Bsz0deDn.js";import"./theme-DMYu2WI8.js";import"./types-PdkQMeUd.js";import"./form-control-C38UQpcH.js";import"./context-BdSOZ7Q5.js";import"./use-merge-refs-D4qh9Xfz.js";import"./attr-DNG3tQ7M.js";import"./form-label-B5VubQsH.js";import"./input-group-d8d3QHZT.js";import"./children-ARrS5LHC.js";import"./input-element-BwU05_HN.js";import"./icon-DCg-fDMN.js";import"./use-callback-ref-BYXMBTH6.js";import"./use-update-effect-BJrD3U-Y.js";import"./use-safe-layout-effect-BQyxOZ8O.js";import"./use-event-listener-Bllo18Fx.js";import"./call-all--NRVVPhS.js";import"./use-form-control-1-27og7y.js";import"./flex-D8UJ-dAy.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
