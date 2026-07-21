import{j as d}from"./jsx-runtime-DxBEdQmC.js";import{r as b}from"./index-UoMFnjkK.js";import{C as i}from"./index-DzAu4fIX.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BKww4BIe.js";import"./index-M4UqqM6T.js";import"./index-CP_patft.js";import"./factory-C7ap2FvA.js";import"./index-CZvoKBsi.js";import"./create-recipe-context-pXnyIBHL.js";import"./numericalFormatting-BNKZrkjF.js";import"./stringFormatting-CqZKjPsh.js";import"./index-CjehYZL_.js";import"./iconBase-WpxnOCAJ.js";import"./index-BIy8BywK.js";import"./types-QUHmpgmE.js";import"./index.esm-DPI0gCM3.js";import"./useColorFormatConverter-CCEFiTFI.js";import"./index-DY2Yoi2s.js";import"./index-BQnbbreY.js";import"./IconWrapper-CJ9ZIA6X.js";import"./theme-D-orLjha.js";import"./types-D0J906aa.js";import"./color-mode-Czo0DBQ9.js";import"./icon-button-ChDq-ZE6.js";import"./button-DfxeIb5J.js";import"./attr-DhmmAXiK.js";import"./spinner-DLmv6_hO.js";import"./skeleton-CDwP96XG.js";import"./stack-jLnbIEHK.js";import"./input-group-DPAHI2ql.js";import"./field-Rt_Hn1MS.js";import"./create-slot-recipe-context-DZ77ylde.js";import"./icon-C2tazMMM.js";import"./use-field-context-CiYKUv5I.js";import"./create-context-C7r3fsSh.js";import"./factory-D9tmIfIR.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CKOfuaxo.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-CerStkTd.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-D-C9qMu8.js";import"./index-DIN6b4ja.js";import"./index-DTgH479f.js";import"./use-locale-context-B4g1rs2y.js";import"./flex-igvNLbTd.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
