import{j as b}from"./jsx-runtime-BRRoXCkO.js";import{r as d}from"./index-C2qJCNAO.js";import{C as i}from"./index-uNsH5iW2.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BTMSo_JT.js";import"./index-Bl7nApB_.js";import"./index-PtM_AfHA.js";import"./factory-CHumcM9w.js";import"./index-BuF7Pojp.js";import"./create-recipe-context-DiR8rkt1.js";import"./numericalFormatting-pecUgO38.js";import"./stringFormatting-Dg4vCECx.js";import"./index-DEABvyBn.js";import"./iconBase-C2srJJb9.js";import"./index-BK8-7ZZy.js";import"./types-DLWgSLwx.js";import"./index.esm-xJX5-1uU.js";import"./useColorFormatConverter-D1ZbVur_.js";import"./index-Bv1jQh9M.js";import"./index-B8IzhB6c.js";import"./IconWrapper-BQeb9r3B.js";import"./theme-DMYu2WI8.js";import"./types-BuqNbYfI.js";import"./color-mode-BwqAZtjB.js";import"./icon-button-DA8mDDDt.js";import"./button-CTTy1dlS.js";import"./attr-DhmmAXiK.js";import"./spinner-DJLrxBcZ.js";import"./skeleton-H5T4WGXV.js";import"./stack-CX1KRe_c.js";import"./input-group-CWHNHpD3.js";import"./field-DbyvMRJT.js";import"./create-slot-recipe-context-kgtqppeP.js";import"./icon-BNgImnbG.js";import"./use-field-context-C46Ub9S4.js";import"./create-context-DJH51S2t.js";import"./factory-C-WUR8wx.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B96I1FTt.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DiC8q1Lw.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DOSWFkgr.js";import"./index-BFng5UY6.js";import"./index-8eV6plGU.js";import"./use-locale-context-zK_94ux-.js";import"./flex-BAMcftSX.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
