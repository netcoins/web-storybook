import{j as b}from"./jsx-runtime-zMX9kT-C.js";import{r as d}from"./index-CpCus5ys.js";import{C as s}from"./index-Cfsirha7.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B5gVaVZ6.js";import"./index-BD4n6Ca6.js";import"./box-DrCaN-g_.js";import"./factory-CJEULHob.js";import"./text-1bLNlq_T.js";import"./use-style-config-_reuVEHY.js";import"./numericalFormatting-BeaPVNb9.js";import"./stringFormatting-BAmkWjPx.js";import"./index-YD9vWKEv.js";import"./iconBase-CF2AAAhw.js";import"./index-BpbxD6zc.js";import"./types-DedsU6M9.js";import"./index.esm-DO-YoEFz.js";import"./useColorFormatConverter-BJRyOWI4.js";import"./index-CCRJ6Ck9.js";import"./IconWrapper-B-Vn2oqT.js";import"./theme-DMYu2WI8.js";import"./types-DyIzSLLX.js";import"./form-control-DIEuhNVH.js";import"./context-BxoWX6cn.js";import"./use-merge-refs-BmQVFCbM.js";import"./attr-DNG3tQ7M.js";import"./form-label-BBcv7bRZ.js";import"./input-group-CkSzndJ1.js";import"./children-DdDzpVh8.js";import"./input-element-a5c_cRqg.js";import"./icon-D9llGD4O.js";import"./use-callback-ref-CmZBCkEy.js";import"./use-update-effect-Det-WIcf.js";import"./use-safe-layout-effect-BGwQ2PqE.js";import"./use-event-listener-GQnZxBN1.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Bq4bFhSv.js";import"./flex-DjVMcIpx.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
