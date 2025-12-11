import{j as b}from"./jsx-runtime-Df5ADW8Y.js";import{r as d}from"./index-Bgn8tTkI.js";import{C as s}from"./index-DJGwQdX0.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B8afyZN2.js";import"./index-B8dz-NtP.js";import"./box-B-tlfbsC.js";import"./factory-D-NwjwAb.js";import"./text-ByE2EP2N.js";import"./use-style-config-CO91qvCY.js";import"./numericalFormatting-euTmbDJS.js";import"./stringFormatting-E7q0EY_L.js";import"./index-Cr8Mkff3.js";import"./iconBase-CEJJA6yT.js";import"./index-BsqDWAdh.js";import"./types-DqubogP1.js";import"./index.esm-BrT-rgsv.js";import"./useColorFormatConverter-9bG5M-ay.js";import"./index-BLuoM0uP.js";import"./IconWrapper-B5adEi1T.js";import"./theme-DMYu2WI8.js";import"./types-COuxkORr.js";import"./form-control-BLuABZAd.js";import"./context-CswDShTY.js";import"./use-merge-refs-CXebeteH.js";import"./attr-DNG3tQ7M.js";import"./form-label-CuXo4dJU.js";import"./input-group-CpT5rW6_.js";import"./children-t3kESdEs.js";import"./input-element-D5SlGagp.js";import"./icon-KSSt8GfX.js";import"./use-callback-ref-ZcN6Iqwp.js";import"./use-update-effect-DAn70UZc.js";import"./use-safe-layout-effect-CSTdT6-G.js";import"./use-event-listener-DBKaOWyR.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DLMvYCc4.js";import"./flex-BOwR_dYc.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
