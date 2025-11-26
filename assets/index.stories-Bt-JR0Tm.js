import{j as b}from"./jsx-runtime-f-LqmLrp.js";import{r as d}from"./index-DdGWbiM8.js";import{C as s}from"./index-Rj_Zj_bn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C8iPQQbg.js";import"./index-CqbOi8Cn.js";import"./box-CM5x4BGX.js";import"./factory-Cn76LgBF.js";import"./text-DqP0TTVC.js";import"./use-style-config-CSQQc7ef.js";import"./numericalFormatting-Bn8XnUQ-.js";import"./stringFormatting-C8hXxqOD.js";import"./index-B9XvT4gi.js";import"./iconBase-D_l9Hyr6.js";import"./index-Bv12dC_f.js";import"./types-BWUfrZAW.js";import"./index.esm-cEs5758K.js";import"./useColorFormatConverter-BSymcS_t.js";import"./index-pXKzJvOq.js";import"./IconWrapper-DNo_-gDp.js";import"./theme-DMYu2WI8.js";import"./types-B04CaY3k.js";import"./form-control-CB87nXP4.js";import"./context-DGdO9Tsj.js";import"./use-merge-refs-B8PxTFZn.js";import"./attr-DNG3tQ7M.js";import"./form-label-B-jja-IS.js";import"./input-group-BtlCROj_.js";import"./children-QRV0RdTX.js";import"./input-element-TccZQE30.js";import"./icon-CUWxfBPZ.js";import"./use-callback-ref-B1jvunlg.js";import"./use-update-effect-Crxbl6TK.js";import"./use-safe-layout-effect-DkEPWJAu.js";import"./use-event-listener-BN4pGAgl.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CRSw71OZ.js";import"./flex-D3orRMxn.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
