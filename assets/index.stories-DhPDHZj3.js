import{j as b}from"./jsx-runtime-kt9n4iwU.js";import{r as d}from"./index-C5-kSor8.js";import{C as s}from"./index-seekoyqH.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D7wbNBmz.js";import"./index-BjCfMhl5.js";import"./box-CZUQNIQs.js";import"./factory-C6_WZdci.js";import"./text-D0xi-gj7.js";import"./use-style-config-BE1MhXTw.js";import"./numericalFormatting-B6tTSdOH.js";import"./stringFormatting-02fe0S7f.js";import"./index-BvQliYax.js";import"./iconBase-CoO-FPPt.js";import"./index-CgzG1YGc.js";import"./types-C3YyWlXj.js";import"./index.esm-GdeVpYF7.js";import"./useColorFormatConverter-BGIk7649.js";import"./index-yUGPlRE6.js";import"./IconWrapper-D5UY6zRL.js";import"./theme-DMYu2WI8.js";import"./types-Z3pxIf61.js";import"./form-control-D-rAMJfi.js";import"./context-EacpbQHw.js";import"./use-merge-refs-B5p8p7Vm.js";import"./attr-DNG3tQ7M.js";import"./form-label-B7DfTTXu.js";import"./input-group-CaFXdrrH.js";import"./children-Cd3wGwDw.js";import"./input-element-lo09vx8W.js";import"./icon-DFb405kj.js";import"./use-callback-ref-CD8hS37E.js";import"./use-update-effect-BUeBa4Sg.js";import"./use-safe-layout-effect-CsQxp-Nf.js";import"./use-event-listener-BeHW0YbW.js";import"./call-all--NRVVPhS.js";import"./use-form-control-tVuLv2C1.js";import"./flex-1MUZeXBn.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
