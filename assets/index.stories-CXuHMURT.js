import{j as d}from"./jsx-runtime-NXhZHcg6.js";import{r as b}from"./index-Ch-dJqYU.js";import{C as s}from"./index-CqVfc-Jd.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BUebCkdh.js";import"./index-B4eq5C8q.js";import"./box-C6_2p-KD.js";import"./factory-BWQouZCw.js";import"./text-DfZTyfAf.js";import"./use-style-config-BeVa6Ocw.js";import"./numericalFormatting-BBLro4Ui.js";import"./stringFormatting-CcLzqBeJ.js";import"./index-Bv-lCoQI.js";import"./iconBase-D4f4cSS3.js";import"./index-CUiI8mxa.js";import"./types-BQZXY9M1.js";import"./index.esm-Dupz7weI.js";import"./useColorFormatConverter-p5siRVUE.js";import"./index-D9PIQ2pf.js";import"./IconWrapper-B3KvwTtU.js";import"./theme-DMYu2WI8.js";import"./types-Cp9kXdTs.js";import"./form-control-CEeNEQaV.js";import"./context-9zgJCxIX.js";import"./use-merge-refs-CNwRwZMM.js";import"./attr-DNG3tQ7M.js";import"./form-label-CRyCHPfp.js";import"./input-group-BcqjiCfC.js";import"./children-DI0np1TJ.js";import"./input-element-Dk_O3IRf.js";import"./icon-idr_5mYa.js";import"./use-callback-ref-lCHO6cKy.js";import"./use-update-effect-Dj-cxMAl.js";import"./use-safe-layout-effect-CVtmfawi.js";import"./use-event-listener-DQE33nso.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BBtzsbPN.js";import"./flex-DfFhdsg3.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
