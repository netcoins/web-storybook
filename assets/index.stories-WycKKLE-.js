import{j as d}from"./jsx-runtime-CP_l27Og.js";import{r as b}from"./index-CifKAwtN.js";import{C as s}from"./index-C8KfW22Q.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B0IufI44.js";import"./index-Bdzxpu3L.js";import"./box-C8HWwTW7.js";import"./factory-CMYslHa5.js";import"./text-Dc4cdgMD.js";import"./use-style-config-CuBRFvaP.js";import"./numericalFormatting-puFCCkTS.js";import"./stringFormatting-D5FlY8aA.js";import"./index-CwR-zYOD.js";import"./iconBase-XtocjxSk.js";import"./index-D0VQXIBC.js";import"./types-BzPX2EUk.js";import"./index.esm-1QZa_XWt.js";import"./useColorFormatConverter-D55NBNKr.js";import"./index-BF2vn-ka.js";import"./IconWrapper-CFOvkP66.js";import"./theme-DMYu2WI8.js";import"./types-CIEZyqB4.js";import"./form-control-C7oaraRW.js";import"./context-B7IJ1l61.js";import"./use-merge-refs-B_UA-Osh.js";import"./attr-DNG3tQ7M.js";import"./form-label-C2GfmI-w.js";import"./input-group-aF-wfOr_.js";import"./children-CQWM9A1v.js";import"./input-element-BqxQ6cqw.js";import"./icon-BmCmp2Wh.js";import"./use-callback-ref-ze8OKKod.js";import"./use-update-effect-BOmdwVTy.js";import"./use-safe-layout-effect-yIea3rTY.js";import"./use-event-listener-DIHwNqRT.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DXPCZl1m.js";import"./flex-CX8y9bjv.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
