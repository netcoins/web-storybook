import{j as b}from"./jsx-runtime-N0vrP3J0.js";import{r as d}from"./index-ck60p0RU.js";import{C as i}from"./index-B_RQO_FJ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CUp94-pj.js";import"./index-Clk35_dC.js";import"./index-BCX2X0gs.js";import"./factory-EpxFmmKQ.js";import"./index-B05ag1x8.js";import"./create-recipe-context-sFy9g3iL.js";import"./numericalFormatting-CSh298gQ.js";import"./stringFormatting-B9tL_7nV.js";import"./index-BoJ2oI9c.js";import"./iconBase-CVpsqnYs.js";import"./index-DFkcBUK5.js";import"./types-Crl4Xl8g.js";import"./index.esm-By6RUUFA.js";import"./useColorFormatConverter-Cu5iqwfi.js";import"./index-C4RetVhZ.js";import"./index-DpAdDZv6.js";import"./IconWrapper-DoaQfuy3.js";import"./theme-DMYu2WI8.js";import"./types-B8QioRln.js";import"./color-mode-D5WvVSXc.js";import"./icon-button-DVeqxbdt.js";import"./button-D4eLA8JR.js";import"./attr-DhmmAXiK.js";import"./spinner-Ccxf0wYu.js";import"./skeleton-Gc7LgP16.js";import"./stack-CrMjg_MK.js";import"./input-group-BAv_349E.js";import"./field-DOT4dvsW.js";import"./create-slot-recipe-context-BiT62ULc.js";import"./icon-Bh7gwcFj.js";import"./use-field-context-Dt6U_Td3.js";import"./create-context-CP7Ju5q1.js";import"./factory-BoNAhHKo.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-41vH5xdv.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CihvqIas.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-1mfK8cUQ.js";import"./index-WH2LLmG4.js";import"./index-BRVYogLb.js";import"./use-locale-context-CFZpZPxA.js";import"./flex-vwFOHc22.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const be=["Default","Single"];export{c as Default,t as Single,be as __namedExportsOrder,ye as default};
