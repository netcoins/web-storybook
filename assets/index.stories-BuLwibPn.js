import{j as b}from"./jsx-runtime-DjPZmkbi.js";import{r as d}from"./index-DTXxPIFw.js";import{C as s}from"./index-CcTh6skO.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BLZSnykw.js";import"./index-s7aY4EKS.js";import"./box-BXTCu-RW.js";import"./factory-q5wLhK22.js";import"./text-yjNePx3r.js";import"./use-style-config-Bj4N7Blw.js";import"./numericalFormatting-BJ3Qq1ip.js";import"./stringFormatting-DCWJOPQm.js";import"./index-B7mBvpYP.js";import"./iconBase-b8Y9VbFy.js";import"./index-DvRZ3X5N.js";import"./types-DSNbzllL.js";import"./index.esm-DlsSKOW2.js";import"./useColorFormatConverter-B1c4Zw5s.js";import"./index-BRKzZfel.js";import"./IconWrapper-B-NuI6_K.js";import"./theme-DMYu2WI8.js";import"./types-D1itbdrH.js";import"./form-control-TeQeVZTE.js";import"./context-DCjw7QTu.js";import"./use-merge-refs-DSzVtLhp.js";import"./attr-DNG3tQ7M.js";import"./form-label-BgQ6SAYk.js";import"./input-group-DV1Q9b-0.js";import"./children-V4PxMHm4.js";import"./input-element-galsfjwv.js";import"./icon-CyBHApQ9.js";import"./use-callback-ref-D2KL2uja.js";import"./use-update-effect-Y9_yQDSV.js";import"./use-safe-layout-effect-CyiLue8j.js";import"./use-event-listener-CjVtIcE1.js";import"./call-all--NRVVPhS.js";import"./use-form-control-C8H3SQwJ.js";import"./flex-DwAoxwu-.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
