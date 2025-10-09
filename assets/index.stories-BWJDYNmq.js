import{j as b}from"./jsx-runtime-DsJGDrI9.js";import{r as d}from"./index-CsOWTxCq.js";import{C as s}from"./index-3PZ9Fetn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BrEj-fHR.js";import"./index-G-P_QcfM.js";import"./box-B3xH3qB_.js";import"./factory-DW-l0UZv.js";import"./text-K4yY-kv6.js";import"./use-style-config-CBmFdGG_.js";import"./numericalFormatting-B6B9JNSl.js";import"./stringFormatting-ADMh7W59.js";import"./index-0WkDQStm.js";import"./iconBase-hXrUR7qP.js";import"./index-CN7KD9ez.js";import"./types-BirG_6x_.js";import"./index.esm-BQ77KF0y.js";import"./useColorFormatConverter-Bowg8l9o.js";import"./index-DX_YVzAK.js";import"./IconWrapper-Bw1AfQLJ.js";import"./theme-DMYu2WI8.js";import"./types-B4GGb9js.js";import"./form-control-QkjLN9uU.js";import"./context-DbtF92DQ.js";import"./use-merge-refs-CW4qXNtA.js";import"./attr-DNG3tQ7M.js";import"./form-label-Mosmp34F.js";import"./input-group-D2MR9ZQV.js";import"./children-DC6ykxZ5.js";import"./input-element-B0RvksqY.js";import"./icon-ClTXsXRa.js";import"./use-callback-ref-16MUyjIN.js";import"./use-update-effect-BMqPnTiI.js";import"./use-safe-layout-effect-BwGeSXSZ.js";import"./use-event-listener-DYtPapfi.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Srs4pSZU.js";import"./flex-C1Misg7c.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
