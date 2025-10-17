import{j as b}from"./jsx-runtime-B7kt-w8m.js";import{r as d}from"./index-ljNtE6jk.js";import{C as s}from"./index-EaPHZa01.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B1MAy5GU.js";import"./index-CSB2Xy0-.js";import"./box-DB6caj5F.js";import"./factory-mOUK1xij.js";import"./text-DdZUcbr0.js";import"./use-style-config-CMJaUkQS.js";import"./numericalFormatting-CYau19ze.js";import"./stringFormatting-DZ0MnwpR.js";import"./index-CsSj1Fmw.js";import"./iconBase-b4A1PDge.js";import"./index-C8IgpuH0.js";import"./types-0nED4nic.js";import"./index.esm-NgCC-C_v.js";import"./useColorFormatConverter-Dceb41KM.js";import"./index-Du-8bLpv.js";import"./IconWrapper-B4Zm94ig.js";import"./theme-DMYu2WI8.js";import"./types-yTaU_WOE.js";import"./form-control-8VnbhH6C.js";import"./context-is24LiEB.js";import"./use-merge-refs-eimc2np2.js";import"./attr-DNG3tQ7M.js";import"./form-label-sJeyBW3g.js";import"./input-group-B8z_rhim.js";import"./children-BIvgulF7.js";import"./input-element-mc80-Xyt.js";import"./icon-ljRhRRLu.js";import"./use-callback-ref-DqHJ43nd.js";import"./use-update-effect-CQ1Lw5zL.js";import"./use-safe-layout-effect-B7OeJ9eV.js";import"./use-event-listener-BgKTUJdu.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DqHfh_PI.js";import"./flex-CAwgA86V.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
