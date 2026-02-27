import{j as b}from"./jsx-runtime-vvhZueLp.js";import{r as d}from"./index-CW4k7OzC.js";import{C as i}from"./index-CETs26kJ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DRTKXJo7.js";import"./index-CxIJ4Hc0.js";import"./index-CmmruF8O.js";import"./factory-BjONj8Sm.js";import"./index-ChpQI84Q.js";import"./create-recipe-context-PRG2qmi_.js";import"./numericalFormatting-DYTcn6wc.js";import"./stringFormatting-BI7w191F.js";import"./index-CVI0Fqtt.js";import"./iconBase-CDcIIsVK.js";import"./index-D0f_PBIC.js";import"./types-IRUAuDAp.js";import"./index.esm-Dwmfs1IG.js";import"./useColorFormatConverter-DbJL0N3c.js";import"./index-BAYfHPwF.js";import"./index-CRxJN72j.js";import"./IconWrapper-UduSN8JQ.js";import"./theme-DMYu2WI8.js";import"./types-Bsle8a-S.js";import"./color-mode-CxtEDWX5.js";import"./icon-button-CnylSYfO.js";import"./button-CzF91Jmv.js";import"./attr-DhmmAXiK.js";import"./spinner-CwaiGiE5.js";import"./skeleton-DCxRYxTk.js";import"./stack-CywcskUk.js";import"./input-group-8evoVNMB.js";import"./field-D9fbaPfn.js";import"./create-slot-recipe-context-YdEYqDmV.js";import"./icon-BzywRMAe.js";import"./use-field-context-DxrplzGw.js";import"./create-context-kVyYew4k.js";import"./factory-Do0w9V6y.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-dVaTL65L.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BS1TKjPS.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-lT5it9nE.js";import"./index-DuBAXsA-.js";import"./index-Orm0DYhG.js";import"./use-locale-context-BsuG4Ck0.js";import"./flex-9XVylu8y.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
