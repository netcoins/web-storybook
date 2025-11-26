import{j as b}from"./jsx-runtime-gm4AVeUT.js";import{r as d}from"./index-CSiA_BGD.js";import{C as s}from"./index-kwrrU5wo.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-aGQYMViW.js";import"./index-xAgp9Tdq.js";import"./box-CWJQTfLh.js";import"./factory-BdeMgres.js";import"./text-6DnfXPcZ.js";import"./use-style-config-BT2DE8GV.js";import"./numericalFormatting-B_0LPHdc.js";import"./stringFormatting-DUnXCgck.js";import"./index-CwGOSc4o.js";import"./iconBase-C4j581gM.js";import"./index-KMh5jP7U.js";import"./types-D0V2tb3F.js";import"./index.esm-DU73G487.js";import"./useColorFormatConverter-DJl-3hVF.js";import"./index-C_a4vFts.js";import"./IconWrapper-C3GzfJ69.js";import"./theme-DMYu2WI8.js";import"./types-DovpqNaE.js";import"./form-control-BTiBnRZj.js";import"./context-BF6D2IRR.js";import"./use-merge-refs-B5jpiKUE.js";import"./attr-DNG3tQ7M.js";import"./form-label-DOlz4xaz.js";import"./input-group-BguAcJSo.js";import"./children-G6mVDnMw.js";import"./input-element-CwnLVqs6.js";import"./icon-BL6FALx9.js";import"./use-callback-ref-C1s38EFd.js";import"./use-update-effect-CuRjgoMp.js";import"./use-safe-layout-effect-MN875fNg.js";import"./use-event-listener-CwMhulPT.js";import"./call-all--NRVVPhS.js";import"./use-form-control-MxoYEYHW.js";import"./flex-D0yvUZ8Q.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
