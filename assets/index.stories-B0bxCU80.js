import{j as d}from"./jsx-runtime-DlF-hKEQ.js";import{r as b}from"./index-teU4eNSH.js";import{C as i}from"./index-CRbJgLtF.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DKyycFJO.js";import"./index-CJssg5rG.js";import"./index-ytO-jv-j.js";import"./factory-CB3tuO0t.js";import"./index-Rdt5MFmh.js";import"./create-recipe-context-DTw5gmRX.js";import"./numericalFormatting-B7QfOKSt.js";import"./stringFormatting-BGqXrqbe.js";import"./index-BoV7HnQ-.js";import"./iconBase-DyiPEVfX.js";import"./index-B1JS4zDi.js";import"./types-rszNPkYy.js";import"./index.esm-B3a1Xdec.js";import"./useColorFormatConverter-CxK7ppPS.js";import"./index-CFB_IzTE.js";import"./index-Bcb2LRNl.js";import"./IconWrapper-DK9cxFcy.js";import"./theme-D-orLjha.js";import"./types-DjQg8NwA.js";import"./color-mode-DUByXpTq.js";import"./icon-button-CixX5Biv.js";import"./button-BjzmQImh.js";import"./attr-DhmmAXiK.js";import"./spinner-DWBNafRI.js";import"./skeleton-Bk2kW7IG.js";import"./stack-Bh1-Om3N.js";import"./input-group-CVxiaeI_.js";import"./field-XUhydDoz.js";import"./create-slot-recipe-context-KhOHVEWZ.js";import"./icon-Cs6LhBmu.js";import"./use-field-context-CYi84lSK.js";import"./create-context-GaBZH8Tp.js";import"./factory-Bh_A4Lv0.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BU5I_9S-.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-B4wzM0sE.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-CG4TY4cx.js";import"./index-DLCRCuKj.js";import"./index-BXtHAO76.js";import"./use-locale-context-DF1dwBAQ.js";import"./flex-CJh8IWin.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
