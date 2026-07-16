import{j as d}from"./jsx-runtime-BGcxFHfU.js";import{r as b}from"./index-B0yVpsDW.js";import{C as i}from"./index-BjjJvIY6.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-GaotBMNf.js";import"./index-DOX3_H0P.js";import"./index-DjAQZrVP.js";import"./factory-CF2a3kaT.js";import"./index-DEq67tjr.js";import"./create-recipe-context-D9kkmKMO.js";import"./numericalFormatting-1HqAvrvP.js";import"./stringFormatting-r3iGBYLy.js";import"./index-DniPWfy0.js";import"./iconBase-B1jl8VR0.js";import"./index-4S6L4At_.js";import"./types-n3s-XB7U.js";import"./index.esm-BI7EaxFV.js";import"./useColorFormatConverter-DBWH7ZI_.js";import"./index-BfMhBfU3.js";import"./index-Bzc7lKzu.js";import"./IconWrapper-ChBFOM6w.js";import"./theme-D-orLjha.js";import"./types-RJkDjEfO.js";import"./color-mode-YIxMxqOQ.js";import"./icon-button-Cd6eoGMg.js";import"./button-C1b4uQig.js";import"./attr-DhmmAXiK.js";import"./spinner-pYbUAc9i.js";import"./skeleton-BbHeFlNk.js";import"./stack-B8oYQZeG.js";import"./input-group-BBoErCCa.js";import"./field-BQ5qBbU0.js";import"./create-slot-recipe-context-Cu7idRdr.js";import"./icon-CKa88xsx.js";import"./use-field-context-Cvyh3ORQ.js";import"./create-context-BlHQPKjU.js";import"./factory-NNq8EB_E.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-ISZqcu-a.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-Czlh0e6K.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-CQmmRITb.js";import"./index-rH2g5JbQ.js";import"./index-AP_1WMee.js";import"./use-locale-context-DTuxNaJ8.js";import"./flex-DRA7j1Lm.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(u=c.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,p,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const de=["Default","Single"];export{c as Default,t as Single,de as __namedExportsOrder,ye as default};
