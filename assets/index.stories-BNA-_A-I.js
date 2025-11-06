import{j as b}from"./jsx-runtime-0j627tJz.js";import{r as d}from"./index-CqM68cw3.js";import{C as s}from"./index-BlvcLTKm.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BequwYZt.js";import"./index-8cSUdPo7.js";import"./box-BxwTpzrX.js";import"./factory-Bd3V6wa0.js";import"./text-B0fW30gV.js";import"./use-style-config-K9VkrvYr.js";import"./numericalFormatting-CNEM4TW3.js";import"./stringFormatting-D6DDC22O.js";import"./index-CH_UO4tK.js";import"./iconBase-BZJQX4CJ.js";import"./index-CkPQy1lh.js";import"./types-CBPNg1lY.js";import"./index.esm-BCdeYzXr.js";import"./useColorFormatConverter-Bqk7RZn8.js";import"./index-D8MyQIYB.js";import"./IconWrapper-5ZHSRTx5.js";import"./theme-DMYu2WI8.js";import"./types-CB4wqhg4.js";import"./form-control-CsmaPJDd.js";import"./context-CRHpPgiL.js";import"./use-merge-refs-JZ-KxWIX.js";import"./attr-DNG3tQ7M.js";import"./form-label-M6-Nvp7-.js";import"./input-group-Bdt0rDHz.js";import"./children-DMrXMgaK.js";import"./input-element-OeBnfCwI.js";import"./icon-MsGxxGD1.js";import"./use-callback-ref-Bb_HrfCB.js";import"./use-update-effect-Z2q3P0cR.js";import"./use-safe-layout-effect-cxAStKeI.js";import"./use-event-listener-UqEDgyih.js";import"./call-all--NRVVPhS.js";import"./use-form-control-7GzFy7Wz.js";import"./flex-BUw3zH7M.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
