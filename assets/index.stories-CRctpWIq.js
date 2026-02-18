import{j as b}from"./jsx-runtime-ChOHf6sN.js";import{r as d}from"./index-MyiED9uL.js";import{C as i}from"./index-BbVM_sNc.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B33itwOw.js";import"./index-C6m7OjfI.js";import"./index-Bo7ONVNL.js";import"./factory-B8tEKhm0.js";import"./index-hhAQfRbS.js";import"./create-recipe-context-Bzbhk6Ec.js";import"./numericalFormatting-CphBIlyQ.js";import"./stringFormatting-o2UOr19v.js";import"./index-Qh6kRb-6.js";import"./iconBase-CjZFk7Dr.js";import"./index-CFKBx3f3.js";import"./types-D4p3Aqni.js";import"./index.esm-BjnXUdG2.js";import"./useColorFormatConverter-DBiKJ5De.js";import"./index-BfcmBlCG.js";import"./index-CcQ6SdVd.js";import"./IconWrapper-D9q5jsmg.js";import"./theme-DMYu2WI8.js";import"./types-lRypU6X6.js";import"./color-mode-CFVbDZiH.js";import"./icon-button-D0eDoR6S.js";import"./button-C_fPn0qm.js";import"./attr-DhmmAXiK.js";import"./spinner-DsqX5Znn.js";import"./skeleton-w0e5rLiI.js";import"./stack-A-6RhKZQ.js";import"./input-group-ge6u5Piv.js";import"./field-B5ugnfLL.js";import"./create-slot-recipe-context-B4BqL5Mf.js";import"./icon-CUnOKsHv.js";import"./use-field-context-B7zsSeDO.js";import"./create-context-oh9N9rjv.js";import"./factory-DeA8uI4O.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-mM0XnsnV.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D_uBM72-.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CfN_aJtg.js";import"./index-CG74IVSW.js";import"./index-DjYNeaXR.js";import"./use-locale-context-C_-Velaf.js";import"./flex-5zmgOCdO.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
