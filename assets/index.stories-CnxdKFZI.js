import{j as d}from"./jsx-runtime-DPKh1yZ4.js";import{r as b}from"./index-CCpxSvwH.js";import{C as i}from"./index-DaVNMG4o.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-QonF7j5a.js";import"./index-XU5ZsetI.js";import"./index-DFSowNwj.js";import"./factory-CjBh8tPt.js";import"./index-BI0GrkrY.js";import"./create-recipe-context-B0NsN-XA.js";import"./numericalFormatting-cA1E19w9.js";import"./stringFormatting-DDCgUAP_.js";import"./index-CTI7aYEK.js";import"./iconBase-Day3x6kf.js";import"./index-CHRgvWtn.js";import"./types-CKiLoGCy.js";import"./index.esm-DTWKmrap.js";import"./useColorFormatConverter-ZVdGCFvU.js";import"./index-D7z6LLWT.js";import"./index-CDsV-h_d.js";import"./IconWrapper-BABzc1GN.js";import"./theme-D-orLjha.js";import"./types-DjmdEDme.js";import"./color-mode-BswawkeU.js";import"./icon-button-CjmUky1n.js";import"./button-rIHXeHCg.js";import"./attr-DhmmAXiK.js";import"./spinner-WaKuMFn5.js";import"./skeleton-6DSIEWqN.js";import"./stack-D5DiAFc-.js";import"./input-group-BQ-i7WZ4.js";import"./field-29q3CdLF.js";import"./create-slot-recipe-context-B92s7dgs.js";import"./icon-C2wRp5YE.js";import"./use-field-context-DA14qd8u.js";import"./create-context-C8dAhvxo.js";import"./factory-CVk_uaUF.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BZuCsz_8.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-DhfFZJfR.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-zZF-CcKg.js";import"./index-CcunNPc0.js";import"./index-Da6bQbEk.js";import"./use-locale-context-DxmCZpwU.js";import"./flex-DYRFH-uj.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
