import{j as b}from"./jsx-runtime--lILZ9UO.js";import{r as d}from"./index-Dul_QMBV.js";import{C as s}from"./index-CojE_Puv.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DRoK8OQ_.js";import"./index-DT-XBtEi.js";import"./box-DJeTaR7J.js";import"./factory-cBEL_h0M.js";import"./text-DERrfHeR.js";import"./use-style-config-c90O6nFQ.js";import"./numericalFormatting-DzDR9C1Y.js";import"./stringFormatting-B7bTTrWA.js";import"./index-DL6zCrAR.js";import"./iconBase-Ck7fV1kq.js";import"./index-CujNs_a1.js";import"./types-DZykK08p.js";import"./index.esm-UOplP5n4.js";import"./useColorFormatConverter-5Fnd0JWq.js";import"./index-C5ZJblaI.js";import"./IconWrapper-CLRhBygL.js";import"./theme-DMYu2WI8.js";import"./types-CzrYQubx.js";import"./form-control-vTHNtAwl.js";import"./context-RwG5JgMk.js";import"./use-merge-refs-BA2mEcM2.js";import"./attr-DNG3tQ7M.js";import"./form-label-EahqggRp.js";import"./input-group-BNKa5hBy.js";import"./children-DPg40p0n.js";import"./input-element-BZ4716If.js";import"./icon-DGPOUiEw.js";import"./use-callback-ref-DMyOb9x9.js";import"./use-update-effect-B7dMLLC1.js";import"./use-safe-layout-effect-DtwtbX5i.js";import"./use-event-listener-ByPY-nI_.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CHLuQeBA.js";import"./flex-BXPhKBIF.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
