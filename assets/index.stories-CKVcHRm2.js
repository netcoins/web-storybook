import{j as d}from"./jsx-runtime-BmMgCgA2.js";import{r as b}from"./index-DmlYK-Z3.js";import{C as s}from"./index-CYzTT2id.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BSEJFnMu.js";import"./index-CECk23uR.js";import"./box-BhZeQsVn.js";import"./factory-CQA8Rns8.js";import"./text-Ceh3FTYN.js";import"./use-style-config-DHCZb2oj.js";import"./numericalFormatting-DmTjjz-o.js";import"./stringFormatting-CHP5kVyb.js";import"./index-DrxAg71I.js";import"./iconBase-BiK6znbS.js";import"./index-ClF1a21h.js";import"./types-B6HLB56J.js";import"./index.esm-P6WrTEEE.js";import"./useColorFormatConverter-BBFtt4F9.js";import"./index-BNfGa1QD.js";import"./IconWrapper-BOg6E8UP.js";import"./theme-DMYu2WI8.js";import"./types-D6voKK4K.js";import"./form-control-B1SIxlKp.js";import"./context-CTsseuKW.js";import"./use-merge-refs-NbDdLJmB.js";import"./attr-DNG3tQ7M.js";import"./form-label-BRPghFdH.js";import"./input-group-ysGMFK-Y.js";import"./children-BS06lfKN.js";import"./input-element-D4S9jWPc.js";import"./icon-Bcxmfz2b.js";import"./use-callback-ref-cafkOCBk.js";import"./use-update-effect-D9ssCkk4.js";import"./use-safe-layout-effect-8WLRTJpb.js";import"./use-event-listener-DpLxMhnm.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DgNE3C4i.js";import"./flex-fLoPxTNl.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
