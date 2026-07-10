import{j as d}from"./jsx-runtime-CQ4vP9D9.js";import{r as b}from"./index-CCYt4LCz.js";import{C as i}from"./index-B8oLeEoY.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BOJVnPqD.js";import"./index-CwrFFkhL.js";import"./index-DjlwGPrX.js";import"./factory-CrYckV6z.js";import"./index-gt7Vnwoq.js";import"./create-recipe-context-Cd1gDX9n.js";import"./numericalFormatting-DF-HiCJj.js";import"./stringFormatting-BDimamaq.js";import"./index-Dfh99gWW.js";import"./iconBase-CXfTt_Jl.js";import"./index-D1Z-xWYY.js";import"./types-k0cYMeLo.js";import"./index.esm-DICDW_0Z.js";import"./useColorFormatConverter-B6_jhUye.js";import"./index-CdzBI73R.js";import"./index-DWbFHPty.js";import"./IconWrapper-BE-b7Ac7.js";import"./theme-D-orLjha.js";import"./types-dfX5aOoH.js";import"./color-mode-2OTExegU.js";import"./icon-button-BVV6VDZ-.js";import"./button-D40A6LZM.js";import"./attr-DhmmAXiK.js";import"./spinner-BL4NGIpA.js";import"./skeleton-eSB4KYuh.js";import"./stack-DYgF1RKE.js";import"./input-group-CRX4cXME.js";import"./field-dXbNe5SG.js";import"./create-slot-recipe-context-_OwTRBFK.js";import"./icon--Q6l7EXN.js";import"./use-field-context-DhY2YANv.js";import"./create-context-BUAO09gH.js";import"./factory-Ck8YRd_y.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C4F-LSFj.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-B6Y8OOCm.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-B_h_qEzf.js";import"./index-CHVa975E.js";import"./index-BmiN6_Fe.js";import"./use-locale-context-Mh34JPYx.js";import"./flex-BWqEwq43.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
