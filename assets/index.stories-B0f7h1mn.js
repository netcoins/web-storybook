import{j as b}from"./jsx-runtime-6DzW-w9x.js";import{r as d}from"./index-BIJSX7CD.js";import{C as i}from"./index-BDMeRpvH.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CNLJ-usq.js";import"./index-0DZD_7YW.js";import"./index-CZdVxye7.js";import"./factory-BOkKnT_u.js";import"./index-DpPOOW_v.js";import"./create-recipe-context-DFWLmO9E.js";import"./numericalFormatting-pK6Itvm8.js";import"./stringFormatting-CqfaRFaq.js";import"./index-8m69ZGx0.js";import"./iconBase-vfkI2uIw.js";import"./index-Cz8OTWci.js";import"./types-Dy4D8vAD.js";import"./index.esm-Ls6MbLFM.js";import"./useColorFormatConverter-DTq_YMy5.js";import"./index-XYYjZHrK.js";import"./index-Bl9m5Jv9.js";import"./IconWrapper-DQDQLRs7.js";import"./theme-DMYu2WI8.js";import"./types-B9EjYeAJ.js";import"./color-mode-BpNzd4cV.js";import"./icon-button-La8_Adik.js";import"./button-DDChIoyT.js";import"./attr-DhmmAXiK.js";import"./spinner-DslxOVYJ.js";import"./skeleton-BTTZ_DzR.js";import"./stack-CjGhprGb.js";import"./input-group-Dy7JOq4Z.js";import"./field-eZAi71og.js";import"./create-slot-recipe-context-Ba9wMddO.js";import"./icon-BG9-mbFW.js";import"./use-field-context-BIC7h4Nd.js";import"./create-context-D-gDz9l0.js";import"./factory-C_RYnyYp.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cq32gPHs.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Czsf-iyy.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Cm2YaVWT.js";import"./index-CfVgjBV3.js";import"./index-BmvQqpOn.js";import"./use-locale-context-DGRxXXZo.js";import"./flex-DfmF6aTq.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
