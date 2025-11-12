import{j as b}from"./jsx-runtime-BZwxaNNh.js";import{r as d}from"./index-BQhHUdl8.js";import{C as s}from"./index-Cq8qYZDY.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-ICbxuxEW.js";import"./index-M7hG21zR.js";import"./box-Dx_9YnRk.js";import"./factory-p3NdpFZJ.js";import"./text-CUgKzfMJ.js";import"./use-style-config-C-wOO7jX.js";import"./numericalFormatting-BYBIA2sd.js";import"./stringFormatting-fONYHf5e.js";import"./index-BDPjcEk-.js";import"./iconBase-BrtR3i37.js";import"./index-Bm2DrAas.js";import"./types-Bk_QA-AA.js";import"./index.esm-XZlbHXCS.js";import"./useColorFormatConverter-ByPTEBqp.js";import"./index-B1LbzTgb.js";import"./IconWrapper-Dh2WiQ8g.js";import"./theme-DMYu2WI8.js";import"./types-ctkxwaNp.js";import"./form-control-jA4stk_3.js";import"./context-CCG-6Xra.js";import"./use-merge-refs-C4R-i6dx.js";import"./attr-DNG3tQ7M.js";import"./form-label-C3ndf3IC.js";import"./input-group-ErkMIBUz.js";import"./children-HmYKttmL.js";import"./input-element-BWY_nPN8.js";import"./icon-C5M2eNcs.js";import"./use-callback-ref-_SvJKVsu.js";import"./use-update-effect-nCDvy6p8.js";import"./use-safe-layout-effect-PZOpkBLl.js";import"./use-event-listener-lvU6OWri.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CC0oOqFN.js";import"./flex-_4Xanptx.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
