import{j as b}from"./jsx-runtime-CtUEez0z.js";import{r as d}from"./index-Cqmn51YS.js";import{C as s}from"./index-BsvhzwUn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-COwPw1VY.js";import"./index-ig4HC__u.js";import"./box-9BX69DHc.js";import"./factory-DJYjEkMm.js";import"./text-DU2wDpPi.js";import"./use-style-config-DWzjkw3h.js";import"./numericalFormatting-B7Gp9UWV.js";import"./stringFormatting-8D6JRvbe.js";import"./index-CMMXWqW6.js";import"./iconBase-Dn46-paq.js";import"./index-BFQ2qw94.js";import"./types-DPgPz0vc.js";import"./index.esm-SnMe3SUP.js";import"./useColorFormatConverter-DSHGKob3.js";import"./index-CnJ3wpYQ.js";import"./IconWrapper-BUDF_B9X.js";import"./theme-DMYu2WI8.js";import"./types-DydRC4nw.js";import"./form-control-DvJrd1B_.js";import"./context-BxW3_Ype.js";import"./use-merge-refs-DD_bcvjC.js";import"./attr-DNG3tQ7M.js";import"./form-label-Cusndtu-.js";import"./input-group-BBJauUcI.js";import"./children-BEjxqSlI.js";import"./input-element-BM-vpf2h.js";import"./icon-pHxpQceI.js";import"./use-callback-ref-DrjLitdx.js";import"./use-update-effect-3eGvpoH8.js";import"./use-safe-layout-effect-Bz0q2S9E.js";import"./use-event-listener-D32HG4Yo.js";import"./call-all--NRVVPhS.js";import"./use-form-control-C5Wt8_wf.js";import"./flex-WnzeImCB.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
