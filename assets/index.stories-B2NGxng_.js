import{j as b}from"./jsx-runtime-CSZfmDaY.js";import{r as d}from"./index-D_M76xYj.js";import{C as i}from"./index--LeZrmru.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-_JSWe4WA.js";import"./index-BU-rva9Z.js";import"./index-DrN1yt4o.js";import"./factory-Bf5cl-qM.js";import"./index-CgTCm2Rg.js";import"./create-recipe-context-BAsP0xW3.js";import"./numericalFormatting-DXqO6fdc.js";import"./stringFormatting-CYTA0x4f.js";import"./index-7pFrFxRr.js";import"./iconBase-D7L0XnIT.js";import"./index-Dn4_0_Yy.js";import"./types-oXH3xSaR.js";import"./index.esm-DNuHBpzF.js";import"./useColorFormatConverter-DT3vhYoa.js";import"./index-n9CWvb_C.js";import"./index-COKzj_Cc.js";import"./IconWrapper-CTWrwotA.js";import"./theme-DMYu2WI8.js";import"./types-6RqBevXW.js";import"./color-mode-DD0VJL-q.js";import"./icon-button-CQmhurw8.js";import"./button-C8i7scKm.js";import"./attr-DhmmAXiK.js";import"./spinner-BW76lQJ7.js";import"./skeleton-C4iODUiQ.js";import"./stack-DaJIfKoy.js";import"./input-group-mJqGvEp9.js";import"./field-C_iZ4jUF.js";import"./create-slot-recipe-context-BGksuD5H.js";import"./icon-CV2FadQy.js";import"./use-field-context-jz8F-fgU.js";import"./create-context-CryPlRD8.js";import"./factory-BuBYz4y9.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CaKwou38.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Sbvwkeqm.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CkPHRQKa.js";import"./index-BcFH91hk.js";import"./index-B_ZKmCDt.js";import"./use-locale-context-DjR1DQEv.js";import"./flex-8fiJaPiW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
