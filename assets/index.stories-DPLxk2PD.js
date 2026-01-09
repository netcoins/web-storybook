import{j as d}from"./jsx-runtime-BBdz9i8f.js";import{r as b}from"./index-CLDyqeFf.js";import{C as s}from"./index-DhDXqcB3.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-nhziNmIE.js";import"./index-e7s3O7wo.js";import"./box-regrXMqG.js";import"./factory-3hpRlgfl.js";import"./text-qmt3YJXZ.js";import"./use-style-config-CnySYLUd.js";import"./numericalFormatting-HF6_cqjo.js";import"./stringFormatting-BgeUGq-9.js";import"./index-CYsx-XtB.js";import"./iconBase-CpSDsPtS.js";import"./index-DM3H7D6h.js";import"./types-D9VTD4dy.js";import"./index.esm-CSy5QF5r.js";import"./useColorFormatConverter-CbG93XDd.js";import"./index-DeNfyfgf.js";import"./IconWrapper-Bz45jgG1.js";import"./theme-DMYu2WI8.js";import"./types-D96cer-N.js";import"./form-control-CDazEoIO.js";import"./context-CKU252FF.js";import"./use-merge-refs-BcDpRs3V.js";import"./attr-DNG3tQ7M.js";import"./form-label-B0DjlKmt.js";import"./input-group-D1V46BZZ.js";import"./children-2Vu76deA.js";import"./input-element-BE9QsA5_.js";import"./icon-Bjc4M7s7.js";import"./use-callback-ref-CyHNAcAu.js";import"./use-update-effect-DMAr7OVE.js";import"./use-safe-layout-effect-CL_piIiz.js";import"./use-event-listener-DTPBW4jY.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Bl1VNFR1.js";import"./flex-Bptw1u-e.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
