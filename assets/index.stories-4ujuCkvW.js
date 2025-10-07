import{j as b}from"./jsx-runtime-Dl65b5Ft.js";import{r as d}from"./index-Dx8U6HT0.js";import{C as s}from"./index-l8jwSAfE.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CspplzkO.js";import"./index--2LtXAS4.js";import"./box-xJmNwxIz.js";import"./factory-BVSOBJDN.js";import"./text-C_yf4AbR.js";import"./use-style-config-Cg25QPWW.js";import"./numericalFormatting-CPboTbjJ.js";import"./stringFormatting-DFbGkZ-V.js";import"./index-BnQR5SKL.js";import"./iconBase-ypD8OVkJ.js";import"./index-JHZpBa2w.js";import"./types-LnE0NQFQ.js";import"./index.esm-5KF0nAe3.js";import"./useColorFormatConverter-JZ-CgPFw.js";import"./index-BZEwQBIE.js";import"./IconWrapper-1rNE6X67.js";import"./theme-DMYu2WI8.js";import"./types-uJVEkAb7.js";import"./form-control-BQMFElq6.js";import"./context-CbOneei4.js";import"./use-merge-refs-BN62VkOm.js";import"./attr-DNG3tQ7M.js";import"./form-label-BwqqXTRa.js";import"./input-group-BJGUqcDd.js";import"./children-DrTEusAb.js";import"./input-element-By3ZRodp.js";import"./icon-BQZJQIlv.js";import"./use-callback-ref-D7vYO4C0.js";import"./use-update-effect-DyVwXlaJ.js";import"./use-safe-layout-effect-B3ZR_d1v.js";import"./use-event-listener-ekDpyWuY.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CTbD-N8j.js";import"./flex-CCsjEBiM.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
