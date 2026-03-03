import{j as b}from"./jsx-runtime-B_bxK6AO.js";import{r as d}from"./index-BU-LQum-.js";import{C as i}from"./index-CeLQ0ulG.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-rs6ZSAg3.js";import"./index-BADaOP65.js";import"./index-DU2zjQUg.js";import"./factory-D1-L-1Bf.js";import"./index-DhEv2XJ6.js";import"./create-recipe-context-CBDLXZVH.js";import"./numericalFormatting-DqBq4XVY.js";import"./stringFormatting-ii7weHYF.js";import"./index-Ds4n3OR0.js";import"./iconBase-DAjFcNyt.js";import"./index-6iOEb37M.js";import"./types-DUe2NkXm.js";import"./index.esm-D5QtIcBu.js";import"./useColorFormatConverter-d1OGdus-.js";import"./index-CrOPksQR.js";import"./index-BBhV8BPC.js";import"./IconWrapper-DAJYz76h.js";import"./theme-DMYu2WI8.js";import"./types-TeXkjDuC.js";import"./color-mode-frYqiW2M.js";import"./icon-button-Dl8aF8kt.js";import"./button-QYHzLzFl.js";import"./attr-DhmmAXiK.js";import"./spinner-EhcSM0W9.js";import"./skeleton-Cn5eM1xq.js";import"./stack-BoHGtZp7.js";import"./input-group-DDxMe3vw.js";import"./field-C9M2rUmW.js";import"./create-slot-recipe-context-Cqmdk6gb.js";import"./icon-FeZd41u5.js";import"./use-field-context-B1N_xuxQ.js";import"./create-context-DqC0W9EW.js";import"./factory-DCC48t7O.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DDwvyprB.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CSmj-NnU.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-B3sguw5S.js";import"./index-OKVNZlq8.js";import"./index-BdoqXbJm.js";import"./use-locale-context-Cz5KcUc7.js";import"./flex-CtMCnVhG.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
