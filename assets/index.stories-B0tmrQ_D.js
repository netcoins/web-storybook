import{j as b}from"./jsx-runtime-BqOX5UEi.js";import{r as d}from"./index-RlXJTQ99.js";import{C as i}from"./index-BF-nN0Gs.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BavLbHK7.js";import"./index-CU9_uFNa.js";import"./index-D-4wtkNP.js";import"./factory-DUjN4Oio.js";import"./index-DqyRJAm4.js";import"./create-recipe-context-D_oE-ofH.js";import"./numericalFormatting-DylsxWcF.js";import"./stringFormatting-Dh7VqFha.js";import"./index-qFSwcm1O.js";import"./iconBase-Cxlh6-T5.js";import"./index-BYx2jyIG.js";import"./types-Do1LstX_.js";import"./index.esm-BRAUSs8K.js";import"./useColorFormatConverter-B-m4EMEW.js";import"./index-BNFJ-35O.js";import"./index-BjfD2KRA.js";import"./IconWrapper-CDffn2DP.js";import"./theme-DMYu2WI8.js";import"./types-khfaPnav.js";import"./color-mode-CKMtpxB9.js";import"./icon-button-HyleWcZr.js";import"./button-COa2nJm_.js";import"./attr-DhmmAXiK.js";import"./spinner-ZmIngnFW.js";import"./skeleton-DvzveMgS.js";import"./stack-DcXLkzAW.js";import"./input-group-qnZ92Nto.js";import"./field-DSLMoJEu.js";import"./create-slot-recipe-context-CzdSPLme.js";import"./icon-lzrplNNo.js";import"./use-field-context-CKjogIRH.js";import"./create-context-C-NUsE_J.js";import"./factory-B8fFjxyy.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B5C4-k-Q.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CJGjTKfj.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Dc1chcId.js";import"./index-EnQEigIQ.js";import"./index-D6dPdGkB.js";import"./use-locale-context-ylHC4quW.js";import"./flex-x3xZzN0g.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
