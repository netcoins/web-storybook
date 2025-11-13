import{j as b}from"./jsx-runtime-CxukLqk6.js";import{r as d}from"./index-CiQMbla8.js";import{C as s}from"./index-CJxAj_CJ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D7rg4_Je.js";import"./index-DrbkGGNj.js";import"./box-CUlvbDxP.js";import"./factory-NsmCz-LG.js";import"./text-C6RSxZCk.js";import"./use-style-config-CJ_WbTpR.js";import"./numericalFormatting-DuS8xFdr.js";import"./stringFormatting-BVxYaPap.js";import"./index-CDlLPwaW.js";import"./iconBase-Bw8pfdU6.js";import"./index-d6qtp2oj.js";import"./types-BNoaUUWP.js";import"./index.esm-BrlR61bB.js";import"./useColorFormatConverter-yfpXWnwH.js";import"./index-F9y3ef5v.js";import"./IconWrapper-Dmq4HWDF.js";import"./theme-DMYu2WI8.js";import"./types-KfRLLsFr.js";import"./form-control-Bw91iBZj.js";import"./context-CgMiQkFd.js";import"./use-merge-refs-C3oA4Nik.js";import"./attr-DNG3tQ7M.js";import"./form-label-CLCKvPVk.js";import"./input-group-BI_li056.js";import"./children-BppR3lEu.js";import"./input-element-CbNB1mOK.js";import"./icon-D-MVpCZ3.js";import"./use-callback-ref-BhFV4E7J.js";import"./use-update-effect-DM7wJQ5t.js";import"./use-safe-layout-effect-VpWU712p.js";import"./use-event-listener-Cc4ZgxPH.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DRsYqeb2.js";import"./flex-DbNS81H2.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
