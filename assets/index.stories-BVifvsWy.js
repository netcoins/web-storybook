import{j as b}from"./jsx-runtime-CZkq8z0z.js";import{r as d}from"./index-CKAFE1Br.js";import{C as s}from"./index-BDTCc7Tw.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BVBjFYr0.js";import"./index-Bd8Jtzaw.js";import"./box-Bw_hwRh1.js";import"./factory-C_DTyCp0.js";import"./text-xcBgO68X.js";import"./use-style-config-BEiOxPkt.js";import"./numericalFormatting-B8ovaBS-.js";import"./stringFormatting-BvxZErlq.js";import"./index-C8Di1zHG.js";import"./iconBase-DSyHl9us.js";import"./index-ITgEDTie.js";import"./types-BDHPKxHo.js";import"./index.esm-CeRwpjbn.js";import"./useColorFormatConverter-yKd7wXaj.js";import"./index-CysvYfeJ.js";import"./IconWrapper-9E3hAHq3.js";import"./theme-DMYu2WI8.js";import"./types-Cq3sBz-x.js";import"./form-control-9_nSLmHn.js";import"./context-lTEyNo82.js";import"./use-merge-refs-D9BTl6tE.js";import"./attr-DNG3tQ7M.js";import"./form-label-D9rwyg9g.js";import"./input-group-BQvI1dOR.js";import"./children-B4SAxB2Z.js";import"./input-element-CQoVeCqo.js";import"./icon-DGC3k6da.js";import"./use-callback-ref-xEm3rI_V.js";import"./use-update-effect-Be51hUgx.js";import"./use-safe-layout-effect-Dzqzh0uU.js";import"./use-event-listener-CagsjyVX.js";import"./call-all--NRVVPhS.js";import"./use-form-control-GNoYR6B0.js";import"./flex-D4D6Hnue.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
