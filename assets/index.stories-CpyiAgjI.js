import{j as d}from"./jsx-runtime-D_4qiIy0.js";import{r as b}from"./index-C1ekC43O.js";import{C as s}from"./index-DxaXc-O_.js";import{D as g}from"./stringFormatting-0ew47I3P.js";import"./iframe-C7ieZSvQ.js";import"./index-BOfQoM9y.js";import"./box-BB4rDWuC.js";import"./factory-rAKMj1My.js";import"./text-BamakWJb.js";import"./use-style-config-XEXEo28b.js";import"./numericalFormatting-DtHneiat.js";import"./index-QE8qyUgF.js";import"./iconBase-yug-LDNG.js";import"./index-BxuPR69m.js";import"./types-Cp_ejnJf.js";import"./index.esm-BH8TJ9oA.js";import"./useColorFormatConverter-DVHf8VyT.js";import"./index-uZ_9oRBU.js";import"./IconWrapper-fegtTQii.js";import"./theme-DMYu2WI8.js";import"./types-DLILaoG9.js";import"./form-control-DDh_aLrg.js";import"./context-DPrVx6su.js";import"./use-merge-refs-BgISZL9b.js";import"./attr-DNG3tQ7M.js";import"./form-label-Bw0FGtvF.js";import"./input-group-nFvYnX9E.js";import"./children-BVU_zDcv.js";import"./input-element-oW3S1xlj.js";import"./icon-BySI98nS.js";import"./use-callback-ref-Dc_hOJ7s.js";import"./use-update-effect-B-oXktot.js";import"./use-safe-layout-effect-CsZICL8W.js";import"./use-event-listener-Dg-DSDoU.js";import"./call-all--NRVVPhS.js";import"./use-form-control-VjycLsJs.js";import"./flex-DREtfaGN.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
