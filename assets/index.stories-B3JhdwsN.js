import{j as b}from"./jsx-runtime-DycBG7t2.js";import{r as d}from"./index-BtnZsqI8.js";import{C as s}from"./index-Df26usNK.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DQF7kjwh.js";import"./index-BV-H1ya0.js";import"./box-DcZt547K.js";import"./factory-BQdo0XKC.js";import"./text-8uFHArpX.js";import"./use-style-config-DpFmMCn2.js";import"./numericalFormatting-CWeFbqVT.js";import"./stringFormatting-CO5qpWGm.js";import"./index-J6xFpodX.js";import"./iconBase-Dqh1lum1.js";import"./index-ODo3gNYp.js";import"./types-DQlJ93xp.js";import"./index.esm-PKoZXSjd.js";import"./useColorFormatConverter-VslqQnjZ.js";import"./index-XKOg27B9.js";import"./IconWrapper-BOfZqmSL.js";import"./theme-DMYu2WI8.js";import"./types-CY5RIAmY.js";import"./form-control-CJQ-cH7l.js";import"./context-De3L8j-K.js";import"./use-merge-refs-CKiHq7u4.js";import"./attr-DNG3tQ7M.js";import"./form-label-BkAX1Q6B.js";import"./input-group-CHC1hX9L.js";import"./children-c925zUJn.js";import"./input-element-D8_0fUFC.js";import"./icon-4CVVtdFC.js";import"./use-callback-ref-C1u5CAv-.js";import"./use-update-effect-CWLww0cP.js";import"./use-safe-layout-effect-z0HIe9GO.js";import"./use-event-listener-CIVNAP9L.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CeoYJWzD.js";import"./flex-Bu-vBFNV.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const re=["Default","Single"];export{c as Default,a as Single,re as __namedExportsOrder,ne as default};
