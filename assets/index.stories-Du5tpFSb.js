import{j as b}from"./jsx-runtime-TfDHebw4.js";import{r as d}from"./index-CPl1TtMu.js";import{C as s}from"./index-CdYU7YCg.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BdUtgHWX.js";import"./index-fYujPuIe.js";import"./box-BWJKPCN_.js";import"./factory-BCL44Dzi.js";import"./text-DgMdesdE.js";import"./use-style-config-B0tnetkV.js";import"./numericalFormatting-w5e_Wchd.js";import"./stringFormatting-CjpdcdDS.js";import"./index-XsfWHKs7.js";import"./iconBase-BlRDwo4h.js";import"./index-NxNyLRJj.js";import"./types-Dj1ZaXpj.js";import"./index.esm-BEbykbQ6.js";import"./useColorFormatConverter-pbxVVqJ9.js";import"./index-Dl0ST6Js.js";import"./IconWrapper-CoPYtSnA.js";import"./theme-DMYu2WI8.js";import"./types-D-kPqIMd.js";import"./form-control-D9l9axzN.js";import"./context-DnTp_QLC.js";import"./use-merge-refs-BhYeWxmI.js";import"./attr-DNG3tQ7M.js";import"./form-label-lJ5VUxUw.js";import"./input-group-Czkv0izn.js";import"./children-ChdJrD7-.js";import"./input-element-C1E06c07.js";import"./icon-DfpksJ9t.js";import"./use-callback-ref-BaAVc1sY.js";import"./use-update-effect-DmrwXUsL.js";import"./use-safe-layout-effect-DvanQ93z.js";import"./use-event-listener-BIw_4Kj3.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Cn6Y8zlK.js";import"./flex-Bzyv8CP_.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
