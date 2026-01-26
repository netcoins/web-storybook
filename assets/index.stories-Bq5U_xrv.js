import{j as b}from"./jsx-runtime-4oOdI8QN.js";import{r as d}from"./index-4a76yvDm.js";import{C as i}from"./index-CIED_m_1.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bem8Vvwx.js";import"./index-tzIp2zP5.js";import"./index-B_llUZ0m.js";import"./factory-BHGxDoGR.js";import"./index-DVTb29Gg.js";import"./create-recipe-context-BqsjRtfZ.js";import"./numericalFormatting-B-Z4M-vr.js";import"./stringFormatting-Un5ftue1.js";import"./index-Dxqjh12C.js";import"./iconBase-Zu85hzRx.js";import"./index-DUwKH_rd.js";import"./types-B1RtLFPW.js";import"./index.esm-Bl2Kr19E.js";import"./useColorFormatConverter-C6DBN0YO.js";import"./index-DbKNWkPe.js";import"./index-6sdi7MN1.js";import"./IconWrapper-Drf_XTyA.js";import"./theme-DMYu2WI8.js";import"./types-BnNTJhLW.js";import"./color-mode-BeOXarVn.js";import"./icon-button-D77sc5e5.js";import"./button-DsXsEoa3.js";import"./attr-DhmmAXiK.js";import"./spinner-CPuOt0x5.js";import"./skeleton-BbTAhQyZ.js";import"./stack-r--FtJ6s.js";import"./input-group-B-feg0uy.js";import"./field-BkR9fs0C.js";import"./create-slot-recipe-context-DJmIboxP.js";import"./icon-BZPtVpe_.js";import"./use-field-context-88jQA77t.js";import"./create-context-BJuCrfFa.js";import"./factory-Dk6dUnob.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-aWWu1Rzj.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DyWm6uwU.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BXGN8QUh.js";import"./index-BjlGaKB6.js";import"./index-B4IeEIU5.js";import"./use-locale-context-_ty8LrKz.js";import"./flex-wCgNztPW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
