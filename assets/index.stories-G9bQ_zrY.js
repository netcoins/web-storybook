import{j as d}from"./jsx-runtime-BAHkwMDK.js";import{r as b}from"./index-B55Y58qC.js";import{C as s}from"./index-702LE-1m.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D-TJPMKI.js";import"./index-8Gy3K6qp.js";import"./box-V9RFyv-G.js";import"./factory-BZQLU6AG.js";import"./text-mVpiV7mX.js";import"./use-style-config-BukXu9xt.js";import"./numericalFormatting-3PZyeY6H.js";import"./stringFormatting-DyXgANDx.js";import"./index-DTZ5O4Cb.js";import"./iconBase-hrozPChH.js";import"./index-CHb7DBRm.js";import"./types-BdB6yev_.js";import"./index.esm-CPgTa6-8.js";import"./useColorFormatConverter-BEZNSExQ.js";import"./index-DQXB-Ii_.js";import"./IconWrapper-CqsaZfDL.js";import"./theme-DMYu2WI8.js";import"./types-DV554yXb.js";import"./form-control-4OyUZJSl.js";import"./context-CkPkX8JS.js";import"./use-merge-refs-CmkJWJHw.js";import"./attr-DNG3tQ7M.js";import"./form-label-DBKhUaLx.js";import"./input-group-Cfbhbexv.js";import"./children-BmYhthtx.js";import"./input-element-D9vzgoQ5.js";import"./icon-CokYXYBF.js";import"./use-callback-ref-BQiLbObc.js";import"./use-update-effect-LconGziQ.js";import"./use-safe-layout-effect-Dx_a2YpM.js";import"./use-event-listener-IHX94G-r.js";import"./call-all--NRVVPhS.js";import"./use-form-control-dZYn4_L9.js";import"./flex-Cq1z79I7.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
