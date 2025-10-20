import{j as b}from"./jsx-runtime-DIpYUS1o.js";import{r as d}from"./index-DF9hz7cV.js";import{C as s}from"./index-CKYQgwJW.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DeHYuAfY.js";import"./index-C9ptRV7w.js";import"./box-vQ5lBCtK.js";import"./factory-lxEkicMP.js";import"./text-Co1dKC_9.js";import"./use-style-config-DkK2YeSb.js";import"./numericalFormatting-B9v6D8VS.js";import"./stringFormatting-BozzkyVL.js";import"./index-9_8UlQfr.js";import"./iconBase-BphQcjDl.js";import"./index-A6DUp-A7.js";import"./types-Bsq5ksGq.js";import"./index.esm-Dy6gil0Y.js";import"./useColorFormatConverter-DVME-Px4.js";import"./index-COT5FPYv.js";import"./IconWrapper-CBd8pHH0.js";import"./theme-DMYu2WI8.js";import"./types-CbSSJ4xN.js";import"./form-control-D_yO8zKR.js";import"./context-CvwolcE_.js";import"./use-merge-refs-D5JN6S49.js";import"./attr-DNG3tQ7M.js";import"./form-label-D4f3PtbF.js";import"./input-group-D_ua4xh3.js";import"./children-BD9Kr41D.js";import"./input-element-CERZQ8ct.js";import"./icon-ChFxYhRv.js";import"./use-callback-ref-BRhE1dEt.js";import"./use-update-effect-BEqB3HGj.js";import"./use-safe-layout-effect-zph5UAo0.js";import"./use-event-listener-DmU0zlt8.js";import"./call-all--NRVVPhS.js";import"./use-form-control-NiPJ-DcN.js";import"./flex-B7joyxkC.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
