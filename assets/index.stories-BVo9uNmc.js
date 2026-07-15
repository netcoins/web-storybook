import{j as d}from"./jsx-runtime-BTqjDgMf.js";import{r as b}from"./index-DYWH3DXx.js";import{C as i}from"./index-2g-xrFIP.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BITn7V8B.js";import"./index-Cvm6xEcV.js";import"./index-BZZ-eHkW.js";import"./factory-DMNV3kaj.js";import"./index-DS3Payst.js";import"./create-recipe-context-BO7oV3LB.js";import"./numericalFormatting-T_X9QQfg.js";import"./stringFormatting-DvDObqc4.js";import"./index-322o25iP.js";import"./iconBase-DmMODKqT.js";import"./index-CAFPQWdv.js";import"./types-Co6dJLMl.js";import"./index.esm-SQCmzF5N.js";import"./useColorFormatConverter-BKQfY-XB.js";import"./index-C7f6Qlo7.js";import"./index-C0IfCe1E.js";import"./IconWrapper-DAJJc7Oi.js";import"./theme-D-orLjha.js";import"./types-Dr_qp_GF.js";import"./color-mode-jw39W6D8.js";import"./icon-button-B6iBzQJ3.js";import"./button-XYcywuP9.js";import"./attr-DhmmAXiK.js";import"./spinner-DJXXviBy.js";import"./skeleton-C0Nl-bVP.js";import"./stack-BkYlu6_1.js";import"./input-group-BK6cFFgH.js";import"./field-C5YubgKD.js";import"./create-slot-recipe-context-DZV8ESso.js";import"./icon-CXCTjqaQ.js";import"./use-field-context-CHg4fCZZ.js";import"./create-context-JOqTF1vr.js";import"./factory-Br4R_U9X.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-avyk0saP.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-BDt6Tx2r.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-DB5REpe3.js";import"./index-BaJx9EGw.js";import"./index-B8Nr9h9G.js";import"./use-locale-context-enP3WUsM.js";import"./flex-BIV0zswu.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
