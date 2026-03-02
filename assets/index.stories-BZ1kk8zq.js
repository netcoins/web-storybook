import{j as b}from"./jsx-runtime-jg6pqZ_i.js";import{r as d}from"./index-BSHGx6zv.js";import{C as i}from"./index-C9wMc1Th.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bq0h1ODx.js";import"./index-DrCC2ksx.js";import"./index-DoxBQr9B.js";import"./factory-Bpf62hMT.js";import"./index-Bft7ftNQ.js";import"./create-recipe-context-CDbsiUah.js";import"./numericalFormatting-DyvGi3Jg.js";import"./stringFormatting-BoHlr-py.js";import"./index-BL80Sg3v.js";import"./iconBase-DdifFKa-.js";import"./index-BJ8JsEai.js";import"./types-Cuz_xkVi.js";import"./index.esm-DveljwHM.js";import"./useColorFormatConverter-B14i2pIP.js";import"./index-CfQae_a0.js";import"./index-BGMEOh0m.js";import"./IconWrapper-Bc0q67af.js";import"./theme-DMYu2WI8.js";import"./types-BkJv8uNx.js";import"./color-mode-sFAM2dcP.js";import"./icon-button-CRF5dYkY.js";import"./button-D-mmUtU2.js";import"./attr-DhmmAXiK.js";import"./spinner-hcJ0FEpn.js";import"./skeleton-CdsqxAT9.js";import"./stack-B7JwP2k5.js";import"./input-group-B9zIFE9T.js";import"./field-BMxTQGMh.js";import"./create-slot-recipe-context-CI5mfXeb.js";import"./icon-CCBnoYvA.js";import"./use-field-context-D5MiyzvR.js";import"./create-context-C_3Soxv9.js";import"./factory-C4_lmgJw.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CN6qV6zg.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Bl0D-SAN.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CZb1Hhv0.js";import"./index-p10sExUS.js";import"./index-CDu8JjYl.js";import"./use-locale-context-Bfe2SuVb.js";import"./flex-BG3sCgss.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
