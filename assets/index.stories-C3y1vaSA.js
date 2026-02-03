import{j as b}from"./jsx-runtime-BuboEnn7.js";import{r as d}from"./index-Cf4RApSA.js";import{C as i}from"./index-Cn-qxVd5.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CtpZ5jTH.js";import"./index-DLC7pgmR.js";import"./index--vQbilcC.js";import"./factory-D9tfIkox.js";import"./index-BicNAlus.js";import"./create-recipe-context-D4D-cicv.js";import"./numericalFormatting-B5pKR78q.js";import"./stringFormatting-ufKj5bGA.js";import"./index-DhyiOSPZ.js";import"./iconBase-BG8FLNyp.js";import"./index-BxOn2ERP.js";import"./types-BOiLn_NO.js";import"./index.esm-CmyaJfgk.js";import"./useColorFormatConverter-BuJmBaNn.js";import"./index-8k5jMNpW.js";import"./index-CA3NwVwX.js";import"./IconWrapper-BuSWAC0k.js";import"./theme-DMYu2WI8.js";import"./types-Cz6FkQg9.js";import"./color-mode-By_qS8f8.js";import"./icon-button-DAmzD-eE.js";import"./button-BZf7YSsO.js";import"./attr-DhmmAXiK.js";import"./spinner-1Wl8Dn19.js";import"./skeleton-elnMix4R.js";import"./stack-Bt6buO_p.js";import"./input-group-BKeQX1CE.js";import"./field-Yf4S9Iwl.js";import"./create-slot-recipe-context-Zfj36F3x.js";import"./icon-jiYTDmDH.js";import"./use-field-context-C5fldtC3.js";import"./create-context-DkHlJRJW.js";import"./factory-Zlghz-Uw.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C3bqE_55.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CWYO_3hP.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CEMWQzdY.js";import"./index-CB4KQhWX.js";import"./index-Dtvn1iyZ.js";import"./use-locale-context-D8_wHvaM.js";import"./flex-BdP6wZZJ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
