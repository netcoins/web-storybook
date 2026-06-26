import{j as d}from"./jsx-runtime-Crn6csNr.js";import{r as b}from"./index-DnSaMpA7.js";import{C as i}from"./index-Ct2YZIk0.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-btxaWulz.js";import"./index-Dh7MtB27.js";import"./index-B60wDBro.js";import"./factory-CfbmFtl0.js";import"./index-iiQGAJk2.js";import"./create-recipe-context-CNw3eJam.js";import"./numericalFormatting-BUuJ6DHi.js";import"./stringFormatting-DQDoSwpg.js";import"./index-B8U75IEm.js";import"./iconBase-DCpsZ7p3.js";import"./index-DHHOhWoa.js";import"./types-CJYnHQCh.js";import"./index.esm-Cpi9MziD.js";import"./useColorFormatConverter-BQb__Fze.js";import"./index-gQQMWDxS.js";import"./index-DXQwEWyk.js";import"./IconWrapper-BQR7NJog.js";import"./theme-D-orLjha.js";import"./types-BbvspfpW.js";import"./color-mode-Dv9_mYH9.js";import"./icon-button-DxJzajxF.js";import"./button-j7CnwX6P.js";import"./attr-DhmmAXiK.js";import"./spinner-CgMB24ML.js";import"./skeleton-o_qAArb0.js";import"./stack-BZSSY1VK.js";import"./input-group-DNEQb-y1.js";import"./field-ByBnqoWW.js";import"./create-slot-recipe-context-DIF2yOS6.js";import"./icon-BDKhTHkF.js";import"./use-field-context-DUhYFo2n.js";import"./create-context-BvVJYA2y.js";import"./factory-Dxcrw6Ie.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dv5alifQ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BOAxJq-c.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-BD0E2p3x.js";import"./index-BPwD21JX.js";import"./index-Dhan9Jap.js";import"./use-locale-context-BsewbQfm.js";import"./flex-iGRZGE5B.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
