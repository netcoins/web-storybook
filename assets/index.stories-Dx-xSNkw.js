import{j as b}from"./jsx-runtime-BEALrSiw.js";import{r as d}from"./index-D6Rt38Md.js";import{C as i}from"./index-BsO-2ZTI.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C7fe_6PB.js";import"./index-BSMH8mLE.js";import"./index-BPqvcJiY.js";import"./factory-FaUDqzG9.js";import"./index-D2Di4sUN.js";import"./create-recipe-context-DLES19Fj.js";import"./numericalFormatting-DrybrjfR.js";import"./stringFormatting-DNzZy_HY.js";import"./index-Bjaf9lYr.js";import"./iconBase-DAclO8sU.js";import"./index-fwFcfAnY.js";import"./types-OSqUH5NV.js";import"./index.esm-6UvfEHMT.js";import"./useColorFormatConverter-BWzs4f2b.js";import"./index-Cj73TuUf.js";import"./index-CDsSZRrA.js";import"./IconWrapper-DaMGN9nB.js";import"./theme-DMYu2WI8.js";import"./types-D1Ps7rGN.js";import"./color-mode-Cn2E7N5O.js";import"./icon-button-iGTLvu5L.js";import"./button-D4XqECwX.js";import"./attr-DhmmAXiK.js";import"./spinner-Da7Tzysx.js";import"./skeleton-BGUlOgBz.js";import"./stack-BNh86J78.js";import"./input-group-D7rWL54E.js";import"./field-Djp9hTpt.js";import"./create-slot-recipe-context-V2WoLaU_.js";import"./icon-BY3liC7U.js";import"./use-field-context-CtGaobV9.js";import"./create-context-BX2lWgvX.js";import"./factory-CO0KLv9F.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BSDnEsNA.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D5MTKEFI.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-EgcsF-Nr.js";import"./index-kuc1nk3o.js";import"./index-snrugqQW.js";import"./use-locale-context-DPiHV0td.js";import"./flex-ClmIt6a8.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
