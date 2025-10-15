import{j as b}from"./jsx-runtime-F2b9qZUC.js";import{r as d}from"./index-DEIjWCZM.js";import{C as s}from"./index-DgWqfLNj.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DO6PTJH3.js";import"./index-pBFOnRMf.js";import"./box-DYkp6abn.js";import"./factory-D4os3DTv.js";import"./text-f24MqBOH.js";import"./use-style-config-ltM-VqRn.js";import"./numericalFormatting-Cym5s0XV.js";import"./stringFormatting-sd5mmdp9.js";import"./index-eRWJBuzG.js";import"./iconBase-OOGBl0nZ.js";import"./index-qIoqjHbs.js";import"./types-Brim7Klo.js";import"./index.esm-DVn3rvtr.js";import"./useColorFormatConverter-BxSuu2SB.js";import"./index-CY0yoesy.js";import"./IconWrapper-jyneDP2o.js";import"./theme-DMYu2WI8.js";import"./types-CkjGSnQi.js";import"./form-control-BSOVpY4M.js";import"./context-DZDe_Ksj.js";import"./use-merge-refs-BYv1b4Zo.js";import"./attr-DNG3tQ7M.js";import"./form-label-Bo_oHJJl.js";import"./input-group-DuH94VbM.js";import"./children-CXYBuceE.js";import"./input-element-D6r6oXBX.js";import"./icon-w9rwFRe1.js";import"./use-callback-ref-D7g_qo5-.js";import"./use-update-effect-DX9nYMvX.js";import"./use-safe-layout-effect-B6Y0d9ov.js";import"./use-event-listener-RIwX6lXn.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DoqhA5K1.js";import"./flex-Dmt0vVc3.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
