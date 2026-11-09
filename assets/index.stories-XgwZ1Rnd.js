import{j as d}from"./jsx-runtime-D3deEOy7.js";import{r as b}from"./index-BAGmRPeF.js";import{C as i}from"./index-ppNK5X91.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-2uFkSe7y.js";import"./index-DHYyS4Nl.js";import"./index-BjG63qjm.js";import"./factory-B0B1u6wm.js";import"./index-Emj_soZZ.js";import"./create-recipe-context-DI-acw4i.js";import"./numericalFormatting-Dc6eKGUE.js";import"./stringFormatting-B6Tbifxy.js";import"./index-gW_qALDV.js";import"./iconBase-DUSP9WbV.js";import"./index-DdJp-FOi.js";import"./types-BJzokLOA.js";import"./index.esm-BQ0MQD7X.js";import"./useColorFormatConverter-CjIVTfhs.js";import"./index-CNb1Z5CF.js";import"./index-CNQUNXNG.js";import"./IconWrapper-BSDsRMNy.js";import"./theme-D-orLjha.js";import"./types-lkBLd8nb.js";import"./color-mode-DXYwyGtK.js";import"./icon-button-Bmq3ML0y.js";import"./button-t_NoiC0C.js";import"./attr-DhmmAXiK.js";import"./spinner-CQ95S0Ov.js";import"./skeleton-CP83ffmY.js";import"./stack-Dtm549T6.js";import"./input-group-IFG8xcvZ.js";import"./field-D8D-Abov.js";import"./create-slot-recipe-context-DpUqBK8P.js";import"./icon-C4JCwogT.js";import"./use-field-context-DUR67cJA.js";import"./create-context-31NeZeAO.js";import"./factory-EeQGlFze.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BQ03Gi7b.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-CLaxVLcp.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-ClVOmaAb.js";import"./index-Fl_USnmM.js";import"./index-CthIRYvC.js";import"./use-locale-context-DMuGIhkn.js";import"./flex-Dpkhht_T.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
