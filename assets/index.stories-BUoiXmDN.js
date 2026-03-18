import{j as d}from"./jsx-runtime-C-kOd8ra.js";import{r as b}from"./index-DBbTb9B2.js";import{C as i}from"./index-BeIkKR_J.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BxgWbTN1.js";import"./index-DehCCBuc.js";import"./index-koSqZCrf.js";import"./factory-BJmwlrVc.js";import"./index-BwfINbw1.js";import"./create-recipe-context-COPnnEYf.js";import"./numericalFormatting-jVDETd61.js";import"./stringFormatting-8GPVZ4Nh.js";import"./index-C7JHjPDe.js";import"./iconBase-C_LfVN9r.js";import"./index-AMtGdmFA.js";import"./types-DAGKeQ17.js";import"./index.esm-BgDACuSt.js";import"./useColorFormatConverter-C-E8HYKD.js";import"./index-B86AYc71.js";import"./index-TinvK5ZL.js";import"./IconWrapper-CLbM1tne.js";import"./theme-DMYu2WI8.js";import"./types-_1ZkbGy3.js";import"./color-mode-CifVEnSw.js";import"./icon-button-B5QWHccg.js";import"./button-DI7a9-fU.js";import"./attr-DhmmAXiK.js";import"./spinner-BwI3w9OM.js";import"./skeleton-CB6q5jgg.js";import"./stack-DMvBj6s9.js";import"./input-group-zT3NHBEW.js";import"./field-qMT6_b4b.js";import"./create-slot-recipe-context-Bs5XWZRb.js";import"./icon-DeqR9OkW.js";import"./use-field-context-DF1fTboI.js";import"./create-context-BbxrZvQg.js";import"./factory-BfAgfkbe.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dqk0w5Su.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DjPR7SXx.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-BdNz4lOZ.js";import"./index-BX6Sg72M.js";import"./index-3yZECisG.js";import"./use-locale-context-DKtRHnB2.js";import"./flex-xRwok3JK.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
