import{j as b}from"./jsx-runtime-C09U0QkG.js";import{r as d}from"./index-tU2a8peJ.js";import{C as i}from"./index-D1FSHnkY.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-WSTQLAUA.js";import"./index-CFKFv6JV.js";import"./index-F3aO5O03.js";import"./factory-BGpqAhvl.js";import"./index-DyRkg7z2.js";import"./create-recipe-context-781SFowN.js";import"./numericalFormatting-CfGa_auE.js";import"./stringFormatting-sbKzsLAR.js";import"./index-CbwDE7O0.js";import"./iconBase-BkfLj6ee.js";import"./index-gEGXHdmP.js";import"./types-BI0ZWuNn.js";import"./index.esm-Bs9hH3kX.js";import"./useColorFormatConverter-B3bCQUne.js";import"./index-X9BNhYow.js";import"./index-DyH9vWmS.js";import"./IconWrapper-BUUe6SpX.js";import"./theme-DMYu2WI8.js";import"./types-B5gSrMYx.js";import"./color-mode-BH1yKA6J.js";import"./icon-button-BjiCyMuy.js";import"./button-CnC__iYh.js";import"./attr-DhmmAXiK.js";import"./spinner-Cl4Qlu3G.js";import"./skeleton-Dau7vFDf.js";import"./stack-CcBinJLK.js";import"./input-group-CpzUVSVY.js";import"./field-CGmY8jAg.js";import"./create-slot-recipe-context-Cp1e8qjv.js";import"./icon-DX3fR94h.js";import"./use-field-context-CF8O1Ek4.js";import"./create-context-9EW50sQ_.js";import"./factory-DtUifINl.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-f4e1uT1e.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BEHiho1u.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-LOS8InN1.js";import"./index-GmLmEsmK.js";import"./index-By_ipVIJ.js";import"./use-locale-context-VtJtWEH-.js";import"./flex-vmcZAlQT.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
