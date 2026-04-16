import{j as d}from"./jsx-runtime-UwRoxOis.js";import{r as b}from"./index-rQf-HDJx.js";import{C as i}from"./index-1olaFgto.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CKtoteMt.js";import"./index-CNrO0CkC.js";import"./index-TLTQQWtv.js";import"./factory-D4a8xBd5.js";import"./index-Clele84I.js";import"./create-recipe-context-BzOF1OiO.js";import"./numericalFormatting-CfOm6O8Y.js";import"./stringFormatting-BZkZTDiM.js";import"./index-Dij4ZHnC.js";import"./iconBase-DsUadah2.js";import"./index-vQxLaqEL.js";import"./types-BcN9sGVQ.js";import"./index.esm-DXjpUWkW.js";import"./useColorFormatConverter-DiySbfaW.js";import"./index-Cx4gDckJ.js";import"./index-BTrxfNPO.js";import"./IconWrapper-1hfrdvNk.js";import"./theme-D-orLjha.js";import"./types-8C0g96y0.js";import"./color-mode-Cl5PvG3f.js";import"./icon-button-CJzBbiT3.js";import"./button-CyMJf14M.js";import"./attr-DhmmAXiK.js";import"./spinner-DvoGTqtj.js";import"./skeleton-BcdZrhRf.js";import"./stack-C1sga2uC.js";import"./input-group-Bf40cQM7.js";import"./field-EpaGCDX-.js";import"./create-slot-recipe-context-QSL3U4Yy.js";import"./icon-Dmj_bu5Z.js";import"./use-field-context-DyoRtMRU.js";import"./create-context-C0W2S-rB.js";import"./factory-BPHrUvf4.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Z0prSxiy.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Dm1No1kO.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-FI9XQNsC.js";import"./index-CLC5K_V_.js";import"./index-DwQ_QCwy.js";import"./use-locale-context-BcrdLHZ3.js";import"./flex-sSglzitQ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
