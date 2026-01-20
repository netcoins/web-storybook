import{j as b}from"./jsx-runtime-C8sZR6xJ.js";import{r as d}from"./index-CZAOJvop.js";import{C as i}from"./index-pBAyr-29.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bi_dd9P6.js";import"./index-J-cd2_k0.js";import"./index-CCHio9hf.js";import"./factory-VZGNgIUr.js";import"./index-Bo5KZ4j4.js";import"./create-recipe-context-QWrXPsIQ.js";import"./numericalFormatting-Dy0yLkO-.js";import"./stringFormatting-CwttGtit.js";import"./index-BUpXgJMa.js";import"./iconBase-D00S-eeg.js";import"./index-Ct30PbM_.js";import"./types-CO30oSEc.js";import"./index.esm-uFYjuLBd.js";import"./useColorFormatConverter-CrkMr5tP.js";import"./index-BTW3nEXU.js";import"./index-DcZjW4eH.js";import"./IconWrapper-BTY8iUfr.js";import"./theme-DMYu2WI8.js";import"./types-Cj7vMbbX.js";import"./color-mode-BV5hdiWi.js";import"./icon-button-C-pd7yMf.js";import"./button-DnFuyCID.js";import"./attr-DhmmAXiK.js";import"./spinner-DyB2UJCV.js";import"./skeleton-BwqsU9fg.js";import"./stack-DUU66HJG.js";import"./input-group-DllahJHI.js";import"./field-DqPOrPZY.js";import"./create-slot-recipe-context-CdRWyxjm.js";import"./icon-vHbhv79Q.js";import"./use-field-context-DUZgjkII.js";import"./create-context-Bj39Qvq8.js";import"./factory-DAoVn6r0.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-rYVx8atw.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DYSQ_gME.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-WlxBd_lj.js";import"./index-rWgvrhrL.js";import"./index-ErT5GozN.js";import"./use-locale-context-DmaTYUGM.js";import"./flex-D81_Fc7J.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
