import{j as b}from"./jsx-runtime-BYvR9jk8.js";import{r as d}from"./index-Op2a2csG.js";import{C as i}from"./index-BLC9-2Rk.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Dsr7MOKx.js";import"./index-BOmjOX4d.js";import"./index-D2TERkRm.js";import"./factory-Bv92ChUh.js";import"./index-9kHTQHV3.js";import"./create-recipe-context-CGtuK1ky.js";import"./numericalFormatting-ZWCvxGX1.js";import"./stringFormatting-49DqDbhm.js";import"./index-BWvO4EXm.js";import"./iconBase-h35ESkFQ.js";import"./index-DFOKHs5U.js";import"./types-4NMHjuyI.js";import"./index.esm-CYU_JqzT.js";import"./useColorFormatConverter-C36SwdgE.js";import"./index-BrrAYyN9.js";import"./index-nYycLPth.js";import"./IconWrapper-0cA3i-Ke.js";import"./theme-DMYu2WI8.js";import"./types-BESUGL2z.js";import"./color-mode-wfQF1SzV.js";import"./icon-button-Dmkt5wR6.js";import"./button-BH2Bb22M.js";import"./attr-DhmmAXiK.js";import"./spinner-CA_YqLrl.js";import"./skeleton-CW2dYi9E.js";import"./stack-B55nP-S8.js";import"./input-group-DVY0ljeP.js";import"./field-BNDGy-i1.js";import"./create-slot-recipe-context-D6qVZ4hd.js";import"./icon-B-vHBGyv.js";import"./use-field-context-B_f95DQv.js";import"./create-context-ORx9b7GS.js";import"./factory-C8pOLYmA.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DBWf9Wfm.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CgRsFQ2R.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DcWfzxwM.js";import"./index-DEk39n8O.js";import"./index-BrD-eD_U.js";import"./use-locale-context-DrcNeWx3.js";import"./flex-CsCJnV2W.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
