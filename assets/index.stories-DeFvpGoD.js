import{j as b}from"./jsx-runtime-BadbQ4D2.js";import{r as d}from"./index-w9os1JgO.js";import{C as i}from"./index-lJt5NJye.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-9JMRyZas.js";import"./index--ACDQuaV.js";import"./index-CJfXC2YP.js";import"./factory-81AyAolv.js";import"./index-DWKdu4_S.js";import"./create-recipe-context-BWEBmoLb.js";import"./numericalFormatting-VKyVYLeS.js";import"./stringFormatting-CgU1LF02.js";import"./index-C2t8tLFw.js";import"./iconBase-Bd5ZFSwV.js";import"./index-9QFX8HGK.js";import"./types-ZRuUaJqp.js";import"./index.esm-C_9SLvd3.js";import"./useColorFormatConverter-BefnSW9e.js";import"./index-nOyjIbOD.js";import"./index-B4TZpkla.js";import"./IconWrapper-BZrAoSs8.js";import"./theme-DMYu2WI8.js";import"./types-Bs9f5XGy.js";import"./color-mode-CXp98lDI.js";import"./icon-button-z-hYztmz.js";import"./button-D1G0U53h.js";import"./attr-DhmmAXiK.js";import"./spinner-BDQyWriO.js";import"./skeleton-DRjTESew.js";import"./stack-FX_3AYCM.js";import"./input-group-CODQov0l.js";import"./field-BJi4YSJs.js";import"./create-slot-recipe-context-D8zc1ZJy.js";import"./icon-oFKqwMCZ.js";import"./use-field-context-CCdBIXm9.js";import"./create-context-DHObefiT.js";import"./factory-Ds56XDbQ.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CrRUKbW-.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BcAjo-9Z.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-B56_6NES.js";import"./index-BinecdLe.js";import"./index-DbaLl6eG.js";import"./use-locale-context-Dwo8zRT5.js";import"./flex-B7CrDZUT.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
