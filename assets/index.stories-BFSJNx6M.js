import{j as d}from"./jsx-runtime-BqansXUO.js";import{r as b}from"./index-CaUP9lQz.js";import{C as i}from"./index-CoaS9_3G.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CJPrE54o.js";import"./index-h2OvGjkJ.js";import"./index-CWrwlmuB.js";import"./index-CHIBpTh-.js";import"./factory-noIglyie.js";import"./index-BA_Zk4lD.js";import"./create-recipe-context-1-EkR5W0.js";import"./flex-BtG4Z1Cz.js";import"./numericalFormatting-C3eQTntT.js";import"./stringFormatting-CcfRwEo7.js";import"./index-Ce98lioX.js";import"./iconBase-BO8Qqx_p.js";import"./index-xjKj6PDA.js";import"./types-C5fLNVPg.js";import"./index.esm-ZuC3cyJA.js";import"./useColorFormatConverter-DVOP3ZhN.js";import"./index-DBuI_83k.js";import"./index-DJ-zlmvA.js";import"./IconWrapper-C3JaFsaq.js";import"./theme-D-orLjha.js";import"./types-OSGDVERG.js";import"./color-mode-CdumHHNo.js";import"./icon-button-zxobNv8-.js";import"./button-ogbieDS2.js";import"./attr-DhmmAXiK.js";import"./spinner-CULqHpKw.js";import"./skeleton-CBRYoeMu.js";import"./stack-1pNxbbrw.js";import"./input-group-CqOUflYg.js";import"./field-NTrPLfn0.js";import"./create-slot-recipe-context-NNrBNKNw.js";import"./icon-DQ6FgcAR.js";import"./use-field-context-qmxdmUHC.js";import"./create-context-yWkgqma1.js";import"./factory-DeJ31wet.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BDYXX-pg.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-Bh5IB2_W.js";import"./index-Bn_AFYQC.js";import"./index-BLVBAjsL.js";import"./index-B2OV5qgV.js";import"./index-Bk8PeV3R.js";import"./index-Bh2oxZLh.js";import"./use-locale-context-BpYWQfIH.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="0cbd0ae6-e4d3-464a-a234-39abb1529093",n._sentryDebugIdIdentifier="sentry-dbid-0cbd0ae6-e4d3-464a-a234-39abb1529093")}catch{}const de={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(u=c.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const be=["Default","Single"];export{c as Default,a as Single,be as __namedExportsOrder,de as default};
