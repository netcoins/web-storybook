import{j as b}from"./jsx-runtime-D1fmR_0H.js";import{r as d}from"./index-D7kejBr3.js";import{C as s}from"./index-CIMSellg.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Djr8TDZX.js";import"./index-C0vcbpE5.js";import"./box-Ddo0T5vp.js";import"./factory-B75oiwYl.js";import"./text-DIezfyBL.js";import"./use-style-config-Daw0etIq.js";import"./numericalFormatting-DTV3hplR.js";import"./stringFormatting-C3QzfRha.js";import"./index-DP7MK6eO.js";import"./iconBase-_mle2yPy.js";import"./index-CfcfqLPA.js";import"./types-DUbbZXGd.js";import"./index.esm-cLm5M340.js";import"./useColorFormatConverter-CP7R4FjB.js";import"./index-bL6RcreP.js";import"./IconWrapper-CTchPece.js";import"./theme-DMYu2WI8.js";import"./types-DQ5KK60y.js";import"./form-control-Cd-d_dbf.js";import"./context-DtPzYcKH.js";import"./use-merge-refs-DWU1dUnL.js";import"./attr-DNG3tQ7M.js";import"./form-label-B5W2WD0K.js";import"./input-group-DTybUA7G.js";import"./children-V6qB4g97.js";import"./input-element-dbkV53-w.js";import"./icon-Amzc7Rxz.js";import"./use-callback-ref-Dc4T41Io.js";import"./use-update-effect-B98N2EbP.js";import"./use-safe-layout-effect-BGeZWWWj.js";import"./use-event-listener-CK1Cb9yv.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CWOMNZC0.js";import"./flex-B7jvFCuJ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
