import{j as b}from"./jsx-runtime-MGpiwdwx.js";import{r as d}from"./index-AC3qGyG6.js";import{C as i}from"./index-7PZgAWCP.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-MmFYWAG4.js";import"./index-CjhFyR2C.js";import"./index-etiTMqvT.js";import"./factory-4qZqBlUt.js";import"./index-D_yAn8MZ.js";import"./create-recipe-context-7KYQanMq.js";import"./numericalFormatting-B0aB7QoA.js";import"./stringFormatting-tRalvIQU.js";import"./index-QXYpfrgR.js";import"./iconBase-wS0h1zgJ.js";import"./index-DOI-d1-y.js";import"./types-DDtHKs8T.js";import"./index.esm-DehvHqM6.js";import"./useColorFormatConverter-Cd3LD9g6.js";import"./index-BH9uDo9t.js";import"./index-DHY5gq3T.js";import"./IconWrapper-5qNcPknA.js";import"./theme-DMYu2WI8.js";import"./types-D34240fG.js";import"./color-mode-CgNF_MLJ.js";import"./icon-button-MNbV7IeH.js";import"./button-2TNYDzdI.js";import"./attr-DhmmAXiK.js";import"./spinner-R3QkchvK.js";import"./skeleton-CmcHDX-R.js";import"./stack-BSk-Jr7C.js";import"./input-group-ChOOygd-.js";import"./field-_kw9dt_n.js";import"./create-slot-recipe-context-B1GMJY_P.js";import"./icon-DhzOIy2b.js";import"./use-field-context-Zhd4oRUY.js";import"./create-context-CRd99wwV.js";import"./factory-DGaYXRnr.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-ChsM16TM.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BPGw9-H3.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BO9ZEZJj.js";import"./index-CPtVxVkx.js";import"./index-Cxp8FyCW.js";import"./use-locale-context-B1CuUX7n.js";import"./flex-DLNdfp1T.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
