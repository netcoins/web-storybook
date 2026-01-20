import{j as b}from"./jsx-runtime-C5JiWg0O.js";import{r as d}from"./index-BJGlPEiI.js";import{C as i}from"./index-qJqITfOn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BEJIaQSr.js";import"./index-DmmgdHJ8.js";import"./index-B1LNMbz_.js";import"./factory-CrzPrGdW.js";import"./index-C-nhQMfH.js";import"./create-recipe-context-XX7T9Qvl.js";import"./numericalFormatting-D6I-GnzW.js";import"./stringFormatting-CTnsP_Sj.js";import"./index-DzFmOctF.js";import"./iconBase-hZN3Cdm0.js";import"./index-BETBDVov.js";import"./types-CgtssNhC.js";import"./index.esm-BVhnAcgh.js";import"./useColorFormatConverter-BxlsjvGt.js";import"./index-P9PkheWI.js";import"./index-i8aCyuh5.js";import"./IconWrapper-CE_6NKKa.js";import"./theme-DMYu2WI8.js";import"./types--5Yk5Mmb.js";import"./color-mode-DnOKbuQL.js";import"./icon-button-V_sGTRxl.js";import"./button-DLwBwJM0.js";import"./attr-DhmmAXiK.js";import"./spinner-BuVBBTpC.js";import"./skeleton-BMl1tJDC.js";import"./stack-CLK4gtgf.js";import"./input-group-BhlenDe7.js";import"./field-TDkbzUvW.js";import"./create-slot-recipe-context-Drqn5MvH.js";import"./icon-N9cy843p.js";import"./use-field-context-CgAB-d6-.js";import"./create-context-ByFBbNOn.js";import"./factory-eWvsQVsh.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DrXWZctL.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-C_uze_RI.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DtC4tO9V.js";import"./index-ByyG8cvv.js";import"./index-ChnTLw8b.js";import"./use-locale-context-Czhub17e.js";import"./flex-DEJux3l8.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
