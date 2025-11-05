import{j as d}from"./jsx-runtime-CkH6S3ig.js";import{r as b}from"./index-C4GKAn__.js";import{C as s}from"./index-DUugmfDR.js";import{D as g}from"./stringFormatting-90V5pS5M.js";import"./iframe-DcUMTise.js";import"./index-BLond_uY.js";import"./box-YCxJput_.js";import"./factory-CJgsC9Zc.js";import"./text-CJOhgQ4Z.js";import"./use-style-config-r-A-EIoM.js";import"./numericalFormatting-BSg3egFl.js";import"./index-uPpbHImm.js";import"./iconBase-CoN9m2S4.js";import"./index-DRSdy-eQ.js";import"./types-_Y-e29VJ.js";import"./index.esm-DNG1_9p7.js";import"./useColorFormatConverter-rpiPlluB.js";import"./index-BapfDFvL.js";import"./IconWrapper-DDuDseeC.js";import"./theme-DMYu2WI8.js";import"./types-hFFUSIID.js";import"./form-control-BVkitgZw.js";import"./context-Hvcz6sJt.js";import"./use-merge-refs-CetbD06m.js";import"./attr-DNG3tQ7M.js";import"./form-label-DirjrBK1.js";import"./input-group-CMQYfE1z.js";import"./children-DnWY1Axh.js";import"./input-element-BSB0vv9x.js";import"./icon-XYdOQzHF.js";import"./use-callback-ref-Bnkkzu65.js";import"./use-update-effect-BQ6_zsYZ.js";import"./use-safe-layout-effect-CPIC6cqQ.js";import"./use-event-listener-DUWti1KD.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BBAMJxQj.js";import"./flex-BcB-lZfE.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const ne=["Default","Single"];export{c as Default,a as Single,ne as __namedExportsOrder,ee as default};
