import{j as d}from"./jsx-runtime-AewlgcOu.js";import{r as b}from"./index-Cqgwbpnr.js";import{C as s}from"./index-DLuBrYri.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B9xY27LM.js";import"./index-16ftXKOB.js";import"./box-BA191Mrb.js";import"./factory-mmaa4c1a.js";import"./text-CV_62mgg.js";import"./use-style-config-BTMIAVrz.js";import"./numericalFormatting-C3DmxQGr.js";import"./stringFormatting-6eP32qaQ.js";import"./index-DERaFJZI.js";import"./iconBase-BMnZXP9D.js";import"./index-BXEW6RcU.js";import"./types-BCBgOVTC.js";import"./index.esm-Bp9LnxWU.js";import"./useColorFormatConverter-C6G4Tf-k.js";import"./index-CF_wH_IA.js";import"./IconWrapper-DAt-Ds_-.js";import"./theme-DMYu2WI8.js";import"./types-D9NdGYGV.js";import"./form-control--OOehPzH.js";import"./context-CcEC96eH.js";import"./use-merge-refs-Dfn4EuEs.js";import"./attr-DNG3tQ7M.js";import"./form-label-BBNwEIhf.js";import"./input-group-Clcgrcbx.js";import"./children-DrYqTgdW.js";import"./input-element-Dc1MBq47.js";import"./icon-C4suDAwv.js";import"./use-callback-ref-B7erbWvM.js";import"./use-update-effect-Coy6l_Aj.js";import"./use-safe-layout-effect-DY2mvASA.js";import"./use-event-listener-vwej9F5O.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DncsMYPS.js";import"./flex-BiCQjXIU.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
