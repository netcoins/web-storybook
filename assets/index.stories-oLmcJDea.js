import{j as b}from"./jsx-runtime-B8REGvii.js";import{r as d}from"./index-CBRd0RYk.js";import{C as i}from"./index-DAELKOti.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D-C36FmD.js";import"./index-CS8ZuKSp.js";import"./index-C1556cwq.js";import"./factory-xTy0DZXR.js";import"./index-MJDKAg2t.js";import"./create-recipe-context-MTtfpxfL.js";import"./numericalFormatting-6xPqXejl.js";import"./stringFormatting-CiWo-l6T.js";import"./index-D-Qxoy_4.js";import"./iconBase-CpfC2b5H.js";import"./index-CMqrM7Dz.js";import"./types-DQSC6U3P.js";import"./index.esm-D8Ku6HXA.js";import"./useColorFormatConverter-Ci9bQygB.js";import"./index-Drsa-iFQ.js";import"./index-Bn4Wzoyc.js";import"./IconWrapper-DlcHIaa_.js";import"./theme-DMYu2WI8.js";import"./types-BicxvDJo.js";import"./color-mode-CO_SdLU-.js";import"./icon-button-DuEVt_zK.js";import"./button-WVbwLo8j.js";import"./attr-DhmmAXiK.js";import"./spinner-jwSw-tbz.js";import"./skeleton-DuO6cgWk.js";import"./stack-VxfsQL1O.js";import"./input-group-CHlIzIIp.js";import"./field-Bms_a4l0.js";import"./create-slot-recipe-context-CDS6I03o.js";import"./icon-Cvqi1pLH.js";import"./use-field-context-B7wACI5I.js";import"./create-context-DS5Ua430.js";import"./factory-BsAI7wPm.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D5Wd5XqK.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-C7gcWdi5.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CHiK4bbh.js";import"./index-t-LzyF5b.js";import"./index-DW7yf1Vu.js";import"./use-locale-context-nu2auvjw.js";import"./flex-Dy8yIwd2.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
