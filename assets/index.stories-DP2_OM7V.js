import{j as b}from"./jsx-runtime-fezQJGwC.js";import{r as d}from"./index-MfSlmDxg.js";import{C as i}from"./index-CPbgvXaa.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Ba6dBgyN.js";import"./index-dvE_31UF.js";import"./index-DcwZbOWG.js";import"./factory-D_JC9Kkz.js";import"./index-CTmjKpaO.js";import"./create-recipe-context-BC6ZiKdP.js";import"./numericalFormatting-DEPWGtNa.js";import"./stringFormatting-D46FSjWa.js";import"./index-9o5R-Sgu.js";import"./iconBase-DiGyIPt2.js";import"./index-DR6dM7xl.js";import"./types-BKiRLemP.js";import"./index.esm-3yHxfltq.js";import"./useColorFormatConverter-CRyQJtdX.js";import"./index-9ALxs8Rd.js";import"./index-BJcsL2ro.js";import"./IconWrapper-CQD8XKXP.js";import"./theme-DMYu2WI8.js";import"./types-C2I_yXWS.js";import"./color-mode-DTiJWfs7.js";import"./icon-button-D8CqYqzU.js";import"./button-B8CP5wr3.js";import"./attr-DhmmAXiK.js";import"./spinner-CS9s6OO9.js";import"./skeleton-BoKHo_f5.js";import"./stack-BjLt4K0v.js";import"./input-group-jP6OotDk.js";import"./field-Cbv1hbcf.js";import"./create-slot-recipe-context-BzGdvS1h.js";import"./icon-CuerpiLG.js";import"./use-field-context-Bv5fde__.js";import"./create-context-U0a3jka0.js";import"./factory-PcDGO__Q.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BpHin42c.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D0Ht11aa.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DrYN9Kua.js";import"./index-BAbcPywl.js";import"./index-Dee84FJB.js";import"./use-locale-context-B64sql60.js";import"./flex-DP55scCH.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
