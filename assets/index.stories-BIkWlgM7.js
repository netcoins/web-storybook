import{j as d}from"./jsx-runtime-CJmRwBu2.js";import{r as b}from"./index-C60rT7WO.js";import{C as i}from"./index-DrZ8uB6c.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BO9fv6dM.js";import"./index-D-dbjKvQ.js";import"./index-ChFkgRsI.js";import"./factory-BjKtRbVQ.js";import"./index-o4aYGhZ6.js";import"./create-recipe-context-BkMXg-I_.js";import"./numericalFormatting-CEM1i8YB.js";import"./stringFormatting-Dav6JrkT.js";import"./index-CBoEUXtP.js";import"./iconBase-B1X0d7tr.js";import"./index-DP4ECsrR.js";import"./types-BpNvq4H1.js";import"./index.esm-DIVvT_-l.js";import"./useColorFormatConverter-fnVBLwF-.js";import"./index-DhIbq1WJ.js";import"./index-DLWZaWoL.js";import"./IconWrapper-CjQrvQuU.js";import"./theme-D-orLjha.js";import"./types-CmUCUlpj.js";import"./color-mode-Box40ptH.js";import"./icon-button-C_akTEiA.js";import"./button-DqbMBDJY.js";import"./attr-DhmmAXiK.js";import"./spinner-CabIwlne.js";import"./skeleton--1jqoD_p.js";import"./stack-BUTpD4pi.js";import"./input-group-DxYBRmJy.js";import"./field-DwTU89wk.js";import"./create-slot-recipe-context-XZpqfDQz.js";import"./icon-AYf1V15_.js";import"./use-field-context-CEIwkwHv.js";import"./create-context-D9vclOlc.js";import"./factory-DG1uZ-bq.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DzhawKPY.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-CGyezO5c.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-DlhqcioK.js";import"./index-CFVp1Gql.js";import"./index-C4ULTJ7m.js";import"./use-locale-context-D4cWri8H.js";import"./flex-BvJ9ykOf.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
