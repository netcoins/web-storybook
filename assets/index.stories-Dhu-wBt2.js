import{j as d}from"./jsx-runtime-C3B292Xu.js";import{r as b}from"./index-PgOj0D5X.js";import{C as s}from"./index-DcS1UwF0.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CnHy6M6c.js";import"./index-BqsxoeoQ.js";import"./box-CwP0QlWK.js";import"./factory-BzKGzsDh.js";import"./text-DxtYMs2k.js";import"./use-style-config-BAkJ30-U.js";import"./numericalFormatting-BzCqF3nH.js";import"./stringFormatting-rK7GKAXi.js";import"./index-BCRaDTyh.js";import"./iconBase-CxYTiZMo.js";import"./index-DeCnD2hf.js";import"./types-CD_Qx30l.js";import"./index.esm-eEXxDIZI.js";import"./useColorFormatConverter-DWGh_ZJ-.js";import"./index-GC2BYMKH.js";import"./IconWrapper-CRSFfnZK.js";import"./theme-DMYu2WI8.js";import"./types-B83BoJZF.js";import"./form-control-BcxdIuT0.js";import"./context-YqG1KvsO.js";import"./use-merge-refs-CyvJz5hu.js";import"./attr-DNG3tQ7M.js";import"./form-label-DtH0LqYj.js";import"./input-group-B_7D1X9z.js";import"./children-Cj0PpSmN.js";import"./input-element-DcI5hFxH.js";import"./icon-XDhCQgpV.js";import"./use-callback-ref-C55yQHNk.js";import"./use-update-effect-CHkVTMZW.js";import"./use-safe-layout-effect-B_dOMywT.js";import"./use-event-listener-4LNcxXIR.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BlJDxNFk.js";import"./flex-DYAYLzzp.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
