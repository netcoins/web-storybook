import{j as d}from"./jsx-runtime-DlF6v3u0.js";import{r as b}from"./index-BCmqf7GJ.js";import{C as s}from"./index-0Qco_fFI.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CHfQ2a_W.js";import"./index-DDpYluw1.js";import"./box-CYFoxoEU.js";import"./factory-DDL3rPui.js";import"./text-DETZ-iIg.js";import"./use-style-config-qDuYDxQU.js";import"./numericalFormatting-C9Sa0jBN.js";import"./stringFormatting-C4hr0ZbA.js";import"./index-CZevnRLL.js";import"./iconBase-B-QtO6dx.js";import"./index-Cy3IJ0jm.js";import"./types-CaxQ8rlA.js";import"./index.esm-CiO0CQxP.js";import"./useColorFormatConverter-D5SCyQdu.js";import"./index-BAAZp-oA.js";import"./IconWrapper-DQyDPTTB.js";import"./theme-DMYu2WI8.js";import"./types-CLVUZS4J.js";import"./form-control-d6lvYfpz.js";import"./context-C96lZh_h.js";import"./use-merge-refs-BpqUWJ6O.js";import"./attr-DNG3tQ7M.js";import"./form-label-B56gqoQt.js";import"./input-group-D4ODPLeo.js";import"./children-B5MfXqgM.js";import"./input-element-Bpm4nL7j.js";import"./icon-6obiMily.js";import"./use-callback-ref-eWuaOITF.js";import"./use-update-effect-eFMd0ahG.js";import"./use-safe-layout-effect-CnUFX_Ly.js";import"./use-event-listener-BjX5zl6G.js";import"./call-all--NRVVPhS.js";import"./use-form-control-NT9UaTWX.js";import"./flex-WoA_jbBl.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
