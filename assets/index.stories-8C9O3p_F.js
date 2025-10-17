import{j as b}from"./jsx-runtime-CaqrN-wy.js";import{r as d}from"./index-QjMZFVYs.js";import{C as s}from"./index-C9Qa7AS0.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Cqpi4Msv.js";import"./index-Dm6W4lUc.js";import"./box-BodYN2xA.js";import"./factory-BwvVwOTu.js";import"./text-CtZ4cwpB.js";import"./use-style-config-bi-IgeFq.js";import"./numericalFormatting-BAN3E-0P.js";import"./stringFormatting-1etHC1fk.js";import"./index-IjW13TAE.js";import"./iconBase-C-wEJwje.js";import"./index-BUV4v1CT.js";import"./types-C1oQHacb.js";import"./index.esm-RVhRa2wZ.js";import"./useColorFormatConverter-B9YDd86Z.js";import"./index-B3g2Pfoj.js";import"./IconWrapper-CAWPMvqz.js";import"./theme-DMYu2WI8.js";import"./types-BVm_tglt.js";import"./form-control-DH8FFJ4f.js";import"./context-CZ0KRvgK.js";import"./use-merge-refs-BKbVhNWh.js";import"./attr-DNG3tQ7M.js";import"./form-label-f7TQ9cnC.js";import"./input-group-CEG2jyS-.js";import"./children-C5NfFATG.js";import"./input-element-_FDzdFHH.js";import"./icon-Bdfsf3m3.js";import"./use-callback-ref-HRjtNSAg.js";import"./use-update-effect-B72ZNyjo.js";import"./use-safe-layout-effect-CSWa5Pqu.js";import"./use-event-listener-DZkzscL_.js";import"./call-all--NRVVPhS.js";import"./use-form-control-B_x_eLXV.js";import"./flex-TdUGHDJc.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
