import{j as d}from"./jsx-runtime-CtgriOoh.js";import{r as b}from"./index-LDZjwPyK.js";import{C as i}from"./index-Co1KLGDB.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DLsxSodE.js";import"./index-BscnjJkY.js";import"./index-Dw1lZ4FK.js";import"./factory-D7c-2M3o.js";import"./index-D1jbgNMH.js";import"./create-recipe-context-BLZQd8M7.js";import"./numericalFormatting-CW_bAaie.js";import"./stringFormatting-M5RcpNuH.js";import"./index-DLR-uKNa.js";import"./iconBase-DR4eJmrE.js";import"./index-Ylvtnn61.js";import"./types-CzbgSW5q.js";import"./index.esm-CHSLZMkk.js";import"./useColorFormatConverter-CRkoFG45.js";import"./index-BBY6kj-w.js";import"./index-DOhakZs4.js";import"./IconWrapper-CUN8m0Bf.js";import"./theme-DMYu2WI8.js";import"./types-DP-8OxfX.js";import"./color-mode-WpVxmr8-.js";import"./icon-button-4urCg8tt.js";import"./button-CHXIAACq.js";import"./attr-DhmmAXiK.js";import"./spinner-DC8HgJAI.js";import"./skeleton-DD0Nrcg9.js";import"./stack-Jh-ScoFN.js";import"./input-group-DwwPU540.js";import"./field-BTvCJ-gO.js";import"./create-slot-recipe-context--PPhlwPT.js";import"./icon-DmbwW8Q1.js";import"./use-field-context-qfsscg7h.js";import"./create-context-92yfNqHp.js";import"./factory-VLekbDmk.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DO611hRr.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Dyq_nO0F.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-C4YyM1t6.js";import"./index-D_GShtYd.js";import"./index-AzNZc0ao.js";import"./use-locale-context-pKa6yYTo.js";import"./flex-jTox-Jle.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
