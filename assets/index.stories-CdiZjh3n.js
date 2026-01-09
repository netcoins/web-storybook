import{j as d}from"./jsx-runtime-iXOLgLwO.js";import{r as b}from"./index-cAOKuQjw.js";import{C as s}from"./index-ettVV0TX.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-uyq-7X4L.js";import"./index-B3xiQaBF.js";import"./box-BIUMGfNC.js";import"./factory-Po77iMaV.js";import"./text-CNsjZqmu.js";import"./use-style-config-kq5Mpo0h.js";import"./numericalFormatting-CzFHpBmo.js";import"./stringFormatting-DQOgPRDc.js";import"./index-BzxgxCaI.js";import"./iconBase-Bd10wGQW.js";import"./index-HevZw9EH.js";import"./types-O39gFMWp.js";import"./index.esm-DYQTfIsa.js";import"./useColorFormatConverter-C4AHorjs.js";import"./index-D8JuxrsN.js";import"./IconWrapper-BsacTWmj.js";import"./theme-DMYu2WI8.js";import"./types-DGC8D5Vx.js";import"./form-control-BlURvw26.js";import"./context-DSwg1yRL.js";import"./use-merge-refs-B-PGwjXd.js";import"./attr-DNG3tQ7M.js";import"./form-label-CCWriivZ.js";import"./input-group-Hr9bNX7x.js";import"./children-CZbKFE3-.js";import"./input-element-D_0yPUk8.js";import"./icon-CQOMD3p2.js";import"./use-callback-ref-DHvAYSmx.js";import"./use-update-effect-8VKDXTkz.js";import"./use-safe-layout-effect-BRV__onL.js";import"./use-event-listener-BijUicvP.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CtWxgQz8.js";import"./flex-DVtQCmzT.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
