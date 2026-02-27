import{j as b}from"./jsx-runtime-BcGWIucs.js";import{r as d}from"./index-BQe3gQq9.js";import{C as i}from"./index-CoiYPAZw.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CgBXbgYr.js";import"./index-C3WT7qG1.js";import"./index-DY9DOtOW.js";import"./factory-MNMIIc9M.js";import"./index-FIP92nG-.js";import"./create-recipe-context-Bhlvrdh6.js";import"./numericalFormatting-CUdUpWTg.js";import"./stringFormatting-CvuDS9_I.js";import"./index-CCBp9Y0v.js";import"./iconBase-CUEyF2gI.js";import"./index-B74VAslr.js";import"./types-CJcrFJ2a.js";import"./index.esm-CO7SIzaU.js";import"./useColorFormatConverter-CaiyS045.js";import"./index-C6KaWuXo.js";import"./index-CTZU-AwE.js";import"./IconWrapper-DJu9eBie.js";import"./theme-DMYu2WI8.js";import"./types-Z4-U10Vc.js";import"./color-mode-DTRNlfBG.js";import"./icon-button-WN6ZlCnW.js";import"./button-Dwbz6tDf.js";import"./attr-DhmmAXiK.js";import"./spinner-2XCKjix_.js";import"./skeleton-D12QHuMK.js";import"./stack-CwjOZmIe.js";import"./input-group-BH43Gif_.js";import"./field-BqaiwEIs.js";import"./create-slot-recipe-context-ggUIXqW2.js";import"./icon-NVXF8SuS.js";import"./use-field-context-BhCbwPva.js";import"./create-context-D5gnbQug.js";import"./factory-DpilkzRZ.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DohmNoxk.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-B0n29LkB.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Dt9fCmnq.js";import"./index-C7-LzFNw.js";import"./index-DdcwnEgB.js";import"./use-locale-context-DQZhIWJC.js";import"./flex-CKqNzTzX.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
