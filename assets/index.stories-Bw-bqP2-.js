import{j as b}from"./jsx-runtime-zGFq_C62.js";import{r as d}from"./index-yNGeAoM8.js";import{C as s}from"./index-WUc9bqpp.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Cki2KkBY.js";import"./index-BA9lsXPS.js";import"./box-D9oSJl1u.js";import"./factory-B-orROQ2.js";import"./text-BNtRnHpB.js";import"./use-style-config-Day8Q7qP.js";import"./numericalFormatting-Bi5Mn6dY.js";import"./stringFormatting-C9BZEETT.js";import"./index-BvhrlOX8.js";import"./iconBase-6Mbyj9fK.js";import"./index-CEnF7OHC.js";import"./types-B9Vi5VGG.js";import"./index.esm-C_Yx7wm2.js";import"./useColorFormatConverter-BkCCeILI.js";import"./index-DoRQB-W8.js";import"./IconWrapper-C_BlUv6B.js";import"./theme-DMYu2WI8.js";import"./types-C-b_AmW2.js";import"./form-control-D5QT7OfD.js";import"./context-DzU3Ccpl.js";import"./use-merge-refs-wqF3_X0V.js";import"./attr-DNG3tQ7M.js";import"./form-label-DXkU1gY7.js";import"./input-group-DnObiW26.js";import"./children-DOy171LJ.js";import"./input-element-CLEIilHC.js";import"./icon-DX5MWoK7.js";import"./use-callback-ref-BwTn-8qm.js";import"./use-update-effect-Bq1UiBd1.js";import"./use-safe-layout-effect-CZn_zMT5.js";import"./use-event-listener-CMpck3vV.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BHLRm-Bi.js";import"./flex-DXtktOtT.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
