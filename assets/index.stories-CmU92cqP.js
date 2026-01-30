import{j as b}from"./jsx-runtime-DQRH0j5X.js";import{r as d}from"./index-BubfLMbL.js";import{C as i}from"./index-ZmCMnWYi.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BVQCg7xC.js";import"./index-DJw2-5VP.js";import"./index-DCNXGTV4.js";import"./factory-B1aBIMGK.js";import"./index-gh_q5Vq5.js";import"./create-recipe-context-DdNXpoAF.js";import"./numericalFormatting-CYxbk0le.js";import"./stringFormatting-BcZmQIWg.js";import"./index-dgh4_rh0.js";import"./iconBase-CM--pjBo.js";import"./index-DrTSl62l.js";import"./types-BVN3CnT0.js";import"./index.esm-kzcABPTx.js";import"./useColorFormatConverter-vRg7l7G7.js";import"./index-CiiREIQs.js";import"./index-D-ZukJq7.js";import"./IconWrapper-Dudu9mju.js";import"./theme-DMYu2WI8.js";import"./types-D-EFl2G1.js";import"./color-mode-C3UDCXEJ.js";import"./icon-button-D7ekBhbA.js";import"./button-DZd_Kduf.js";import"./attr-DhmmAXiK.js";import"./spinner-T6Hr3AsQ.js";import"./skeleton-0zeboJnp.js";import"./stack-CTVXPrNe.js";import"./input-group-BrVJGj9c.js";import"./field-CNZomNUa.js";import"./create-slot-recipe-context-CZuUheyz.js";import"./icon-Cdp4hAfn.js";import"./use-field-context-D_uG5wIF.js";import"./create-context-BZwjfeFF.js";import"./factory-CqNQS8ZP.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CAjeTCzs.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D6TY66CU.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BJ10RGUV.js";import"./index-BlFz10_C.js";import"./index-CF4oSWzG.js";import"./use-locale-context-DndsJTqL.js";import"./flex-CLR3R1iK.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
