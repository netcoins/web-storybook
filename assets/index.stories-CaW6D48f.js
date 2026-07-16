import{j as d}from"./jsx-runtime-Caq2BR7C.js";import{r as b}from"./index-D2__PtDf.js";import{C as i}from"./index-Biv6zWKu.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BXQyGLXf.js";import"./index-Cs_tzXZI.js";import"./index-B1TfHqs7.js";import"./factory-BcZat9-O.js";import"./index-CvGFadaE.js";import"./create-recipe-context-DLHMpvKu.js";import"./numericalFormatting-Cs9zquBj.js";import"./stringFormatting-PDsFVLnU.js";import"./index-Cnld1KN3.js";import"./iconBase-Bco0OsWL.js";import"./index-W3jGakpq.js";import"./types-CZ60tLwk.js";import"./index.esm-BAR-iI7o.js";import"./useColorFormatConverter-Dq1hBwsm.js";import"./index-BR08H8eI.js";import"./index-Rdh4V2ik.js";import"./IconWrapper-BUWZ_5EF.js";import"./theme-D-orLjha.js";import"./types-B7ukgLhp.js";import"./color-mode-CZe2XitF.js";import"./icon-button-D-au2c1m.js";import"./button-qwRrpDpy.js";import"./attr-DhmmAXiK.js";import"./spinner-Dba7hITa.js";import"./skeleton-Hodq5eyh.js";import"./stack-BF6E-SXf.js";import"./input-group-BkViwIwg.js";import"./field-By6ijQ3d.js";import"./create-slot-recipe-context-_-LOkLUn.js";import"./icon-CybC54FQ.js";import"./use-field-context-vX8lToWm.js";import"./create-context-B8bSOmkY.js";import"./factory-B30C38N3.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Bukt8Mx6.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-DaO0CoxE.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-B7Bbu9-J.js";import"./index-DDRJZLnx.js";import"./index-D5rrMGtP.js";import"./use-locale-context-CzwvvcMb.js";import"./flex-Cti_WHtH.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
