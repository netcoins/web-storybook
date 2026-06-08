import{j as d}from"./jsx-runtime-DBWTvkZQ.js";import{r as b}from"./index-DN5v9M3U.js";import{C as i}from"./index-CJcX1q9d.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BpMmzN_y.js";import"./index-DTx2Uy9n.js";import"./index-Cnhf3yz8.js";import"./factory-CnL8o6oZ.js";import"./index-Ch58T9V-.js";import"./create-recipe-context-D4XxGmVN.js";import"./numericalFormatting-B-JD5LjY.js";import"./stringFormatting-Cnu1nz7l.js";import"./index-DemlsjCA.js";import"./iconBase-CigdmIWU.js";import"./index-BQ_Tnpup.js";import"./types-Bz5ska2O.js";import"./index.esm-CKsqWO09.js";import"./useColorFormatConverter-Dx2cxaEs.js";import"./index-BzcM5yDV.js";import"./index-DB1N885b.js";import"./IconWrapper-BR3qE4mA.js";import"./theme-D-orLjha.js";import"./types-B0gBkp4z.js";import"./color-mode-B6LReZL6.js";import"./icon-button-B29ejyJR.js";import"./button-Dq9wyFbQ.js";import"./attr-DhmmAXiK.js";import"./spinner-gotHpeTL.js";import"./skeleton-sSyYsiKy.js";import"./stack-Tzm9BjVX.js";import"./input-group-BbfcDckF.js";import"./field-DlR8iT0I.js";import"./create-slot-recipe-context-C37483WK.js";import"./icon-DpWJ-Jqk.js";import"./use-field-context-BUKZxdA6.js";import"./create-context-B5kKFizl.js";import"./factory-CAUoQwrY.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CcjURY_D.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-B4v_ZQBU.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-CEpGWQ9E.js";import"./index-BvE0SIBr.js";import"./index-C4eCJrbV.js";import"./use-locale-context-BJeNXhVl.js";import"./flex-B3BAmyYv.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
