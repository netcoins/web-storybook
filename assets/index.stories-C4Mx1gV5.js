import{j as b}from"./jsx-runtime-Bv3C32xW.js";import{r as d}from"./index-Om3-GvrL.js";import{C as i}from"./index-CCtA8YPF.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Clf5EUVv.js";import"./index-BsLAd2pV.js";import"./index-BFAzA-6k.js";import"./factory-CvLv5Mli.js";import"./index-CjAJoXa6.js";import"./create-recipe-context-Ax8NUD4P.js";import"./numericalFormatting-CuwxJKjR.js";import"./stringFormatting-Dq7qvA3q.js";import"./index-DmyDE26J.js";import"./iconBase-BIsCXZWK.js";import"./index-nrVfEifT.js";import"./types-y2_l6fKV.js";import"./index.esm-B-H8slbq.js";import"./useColorFormatConverter-CRjm2YcW.js";import"./index-D290kPh_.js";import"./index-KAjvdCFo.js";import"./IconWrapper-DVPATgNa.js";import"./theme-DMYu2WI8.js";import"./types-BJ-q1_cm.js";import"./color-mode-CBFjWLI8.js";import"./icon-button-C0rGsMRN.js";import"./button-CGqNfQQO.js";import"./attr-DhmmAXiK.js";import"./spinner-AqeHUs4w.js";import"./skeleton-BqQxaCXi.js";import"./stack-C7BViUfp.js";import"./input-group-wpuZCqcX.js";import"./field-BNeyIagP.js";import"./create-slot-recipe-context-DhUPxT2v.js";import"./icon-Bn0iHJ7l.js";import"./use-field-context-CN-Kosi1.js";import"./create-context-DLxvbK2-.js";import"./factory-B6MEGtac.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dd5-C9jD.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Cn8ZuMaj.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DWg8MitZ.js";import"./index-Dd6emaqc.js";import"./index-DWAZbJq-.js";import"./use-locale-context-DFSoZ1Yf.js";import"./flex-Bjd7_Xsc.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
