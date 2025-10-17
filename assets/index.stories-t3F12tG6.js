import{j as b}from"./jsx-runtime-BQw1FJDh.js";import{r as d}from"./index-DTl8I9_w.js";import{C as s}from"./index-BCtPF41f.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C_jfAiMj.js";import"./index-Dln0n5kP.js";import"./box-Bw4wVIZk.js";import"./factory-95VCNEo_.js";import"./text-zElQ8Nwl.js";import"./use-style-config-D9XEOVc0.js";import"./numericalFormatting-DdXvJs3l.js";import"./stringFormatting-BtMrslxA.js";import"./index-CbsBzCud.js";import"./iconBase-B8sU32g4.js";import"./index-Br48SqNM.js";import"./types-CiFe_Wa1.js";import"./index.esm-D1sQLTUd.js";import"./useColorFormatConverter-mqv7ev3N.js";import"./index-D05MN0-y.js";import"./IconWrapper-FBBrRzdJ.js";import"./theme-DMYu2WI8.js";import"./types-DQYWxJb3.js";import"./form-control-BcJ9cC3k.js";import"./context-DSQWxCfV.js";import"./use-merge-refs-C6RWpFVp.js";import"./attr-DNG3tQ7M.js";import"./form-label-BPVG_mtr.js";import"./input-group-DK_Qygg2.js";import"./children-DjAaBJU7.js";import"./input-element-BXIkEL04.js";import"./icon-DEvmVRH5.js";import"./use-callback-ref-CCAEGgPX.js";import"./use-update-effect-xgLTvF7y.js";import"./use-safe-layout-effect-B9bJ6F1P.js";import"./use-event-listener-Ci8K31Ls.js";import"./call-all--NRVVPhS.js";import"./use-form-control-vYKfHPXC.js";import"./flex-CmNuIjJk.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
