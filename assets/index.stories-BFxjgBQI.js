import{j as b}from"./jsx-runtime-ae3r69FJ.js";import{r as d}from"./index-XBYBtqxJ.js";import{C as i}from"./index-BV4ZSFha.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-kK6UFf7H.js";import"./index-C7S_rK2L.js";import"./index-DxdNKgeD.js";import"./factory-_MSS-rU-.js";import"./index-D1cvT4Kn.js";import"./create-recipe-context-BxyFvRHK.js";import"./numericalFormatting-DyPhoPEm.js";import"./stringFormatting-CdjNZmC-.js";import"./index-DmIOy6So.js";import"./iconBase-DXhK__NV.js";import"./index-CnHOHARf.js";import"./types--bm3c-dY.js";import"./index.esm-BfvTism-.js";import"./useColorFormatConverter-ArMjdFHE.js";import"./index-D8sVZaDy.js";import"./index-tDRqDRvX.js";import"./IconWrapper-r9GGRehs.js";import"./theme-DMYu2WI8.js";import"./types-Dl_NbzJO.js";import"./color-mode-BlytE6KB.js";import"./icon-button-fden9lNM.js";import"./button-BIiprEQW.js";import"./attr-DhmmAXiK.js";import"./spinner-BB4OXv6J.js";import"./skeleton-edjD-HEU.js";import"./stack-toAFvhll.js";import"./input-group-Dst2w_Do.js";import"./field-C2yoY_O3.js";import"./create-slot-recipe-context-H-xVUtWh.js";import"./icon-7S2WRhgi.js";import"./use-field-context-BT8CYFn9.js";import"./create-context-wYGfa5_X.js";import"./factory-DStPiNMb.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0AsyEJJ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-OTkZttPu.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BDJYEYCe.js";import"./index-My67Tq_O.js";import"./index-B7hKTDCm.js";import"./use-locale-context-hwb_qjAX.js";import"./flex-BPM3tror.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
