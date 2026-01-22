import{j as b}from"./jsx-runtime-ClexiTxb.js";import{r as d}from"./index-WN4e39Se.js";import{C as i}from"./index-Cjm79D9b.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DtMEe-Td.js";import"./index-K9Cd0ihH.js";import"./index-Sp1bLZGt.js";import"./factory-C5i_ciJ1.js";import"./index-CBWdwZgo.js";import"./create-recipe-context-rijHqnmR.js";import"./numericalFormatting-t1zE-4_9.js";import"./stringFormatting-DVjL7rXM.js";import"./index-b7yCAc4h.js";import"./iconBase-Be7_ooDO.js";import"./index-L-zO39Pu.js";import"./types-BK9vRONP.js";import"./index.esm-04lDmL97.js";import"./useColorFormatConverter-BJLfccrn.js";import"./index-CsQ9nnTT.js";import"./index-BAIgsT9X.js";import"./IconWrapper-BF4qYJr2.js";import"./theme-DMYu2WI8.js";import"./types-nOSRuCZB.js";import"./color-mode-agyQOBag.js";import"./icon-button-BTOclPHf.js";import"./button-JhAiIS8p.js";import"./attr-DhmmAXiK.js";import"./spinner-CF9eouy2.js";import"./skeleton-BX7fgfQf.js";import"./stack-hi6LYyaU.js";import"./input-group-D_Si0z-o.js";import"./field-BdQj6FYP.js";import"./create-slot-recipe-context-CnumcjDc.js";import"./icon-Cjh8QcCV.js";import"./use-field-context-DKKsys3H.js";import"./create-context-CeHeP5jK.js";import"./factory-5KQQv-OK.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-O4mvPwhC.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BqKrDrRI.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-C8n5XSO9.js";import"./index-BXCsrlVA.js";import"./index-CWvqYOYt.js";import"./use-locale-context-CjIzPHy-.js";import"./flex-B8J5oxX5.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
