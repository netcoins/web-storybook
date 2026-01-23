import{j as b}from"./jsx-runtime-B1_a8hwj.js";import{r as d}from"./index-WONpn9lv.js";import{C as i}from"./index-N9eq3RW6.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B2VuCFQ1.js";import"./index-r9oaql0m.js";import"./index-CF-c-ho_.js";import"./factory-DxsDglld.js";import"./index-C_LPTu6O.js";import"./create-recipe-context-yK9vg825.js";import"./numericalFormatting-BrJbtaf5.js";import"./stringFormatting-tvSCPxap.js";import"./index-CYBH8In8.js";import"./iconBase-QDQcrdxX.js";import"./index-ZXS8C-6d.js";import"./types-DhdDGB6l.js";import"./index.esm-B9dmDpwL.js";import"./useColorFormatConverter-DMpEqu4K.js";import"./index-DpYYlvoi.js";import"./index-Db8zYEm-.js";import"./IconWrapper-BMI_kyzR.js";import"./theme-DMYu2WI8.js";import"./types-BYYdkN1a.js";import"./color-mode-tPdHy1zU.js";import"./icon-button-DRy3v8Nn.js";import"./button-DJA01QwW.js";import"./attr-DhmmAXiK.js";import"./spinner-Conn5JmV.js";import"./skeleton-gjG5zari.js";import"./stack-89CfcTh7.js";import"./input-group-BEKqCpRD.js";import"./field-DVYDV2rY.js";import"./create-slot-recipe-context-Dz9SWyWT.js";import"./icon-CV2PHFSI.js";import"./use-field-context-BwTqn6hk.js";import"./create-context-B-iLW4YK.js";import"./factory-BCoThrpa.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DzPJTd2M.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BCzLtvup.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CmHIf-20.js";import"./index-C5vwWYFn.js";import"./index-Bzj8OEaq.js";import"./use-locale-context-B9yuIw0e.js";import"./flex-B-JKexX_.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
