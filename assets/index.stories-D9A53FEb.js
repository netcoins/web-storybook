import{j as b}from"./jsx-runtime-Bf6FIY89.js";import{r as d}from"./index-BI5uO-PF.js";import{C as s}from"./index-CJoHzHju.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DzoY9gxD.js";import"./index-6lkYQT7v.js";import"./box-D_riIZ06.js";import"./factory-B1KwL9fl.js";import"./text-Boo3MJ2c.js";import"./use-style-config-BXPz3sCm.js";import"./numericalFormatting-Bnmyrswu.js";import"./stringFormatting-uQAQpuNe.js";import"./index-BJOvK6Do.js";import"./iconBase-BlvCQgOC.js";import"./index-BKuXE9V7.js";import"./types-B-Q6A-Fi.js";import"./index.esm-lzu-9L0x.js";import"./useColorFormatConverter-C2kmG-cl.js";import"./index-CoAiqwVu.js";import"./IconWrapper-DXfDSY2z.js";import"./theme-DMYu2WI8.js";import"./types-DYIJde27.js";import"./form-control-BoFRfAXb.js";import"./context-rJ4pha0b.js";import"./use-merge-refs-B5DWbnO3.js";import"./attr-DNG3tQ7M.js";import"./form-label-C7uIacsf.js";import"./input-group-B9HprW6c.js";import"./children-CqaGmJg9.js";import"./input-element-CJ1wcNwK.js";import"./icon-BVLsEFas.js";import"./use-callback-ref-C7rBtymT.js";import"./use-update-effect-DSBV5QZx.js";import"./use-safe-layout-effect-xEfYQs6i.js";import"./use-event-listener-CvA1Os5D.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CcvwwqEj.js";import"./flex-Cg_eJLpA.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
