import{j as d}from"./jsx-runtime--vAOgGUu.js";import{r as b}from"./index-D38BWWf8.js";import{C as i}from"./index-Bc2bcZan.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DmP3HCjv.js";import"./index-DYuFG7lX.js";import"./index-BDSNCZXH.js";import"./factory-CCmCFv-x.js";import"./index-CsDLiRTK.js";import"./create-recipe-context-BdzhiBTJ.js";import"./numericalFormatting-6spZoZez.js";import"./stringFormatting-JAWa66cL.js";import"./index-pg_tmg7S.js";import"./iconBase-CkQhKdNF.js";import"./index-CFbPxrvt.js";import"./types-C-hywY_M.js";import"./index.esm-0BO8A0ZR.js";import"./useColorFormatConverter-CcbUzM8O.js";import"./index-BcPKrYD5.js";import"./index-BKmw-6s2.js";import"./IconWrapper-D3ufZAxY.js";import"./theme-DMYu2WI8.js";import"./types-RICTE3eD.js";import"./color-mode-DfYa29aK.js";import"./icon-button-D7-dA7fL.js";import"./button-Bunqq_MJ.js";import"./attr-DhmmAXiK.js";import"./spinner-BxrV7T0z.js";import"./skeleton-0ihUljf1.js";import"./stack-4CesuYbZ.js";import"./input-group-d1oB0kPS.js";import"./field-BXZEwUJY.js";import"./create-slot-recipe-context-kJ0gy0HK.js";import"./icon-KL1yYE4I.js";import"./use-field-context-DWENMkf2.js";import"./create-context-C6D4paPs.js";import"./factory-BhpIiCfV.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DOTRwmAi.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CJ5J5WU2.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-Bid_1RSM.js";import"./index-Bph04DZs.js";import"./index-BU9hfo_9.js";import"./use-locale-context-yrsgOKI-.js";import"./flex-DIVxdMwE.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
