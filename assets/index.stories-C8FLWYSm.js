import{j as d}from"./jsx-runtime-ZLPFB8pn.js";import{r as b}from"./index-CHWf-PUi.js";import{C as s}from"./index-CvwFEzmy.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-UojKG_vw.js";import"./index-t1bwm2YH.js";import"./box-ByjJePYt.js";import"./factory-D8ndCW0v.js";import"./text-BOeVCVUm.js";import"./use-style-config-Cg8aYxrd.js";import"./numericalFormatting-B0eoEnTl.js";import"./stringFormatting-Cj1drBMD.js";import"./index-CqoI-c-E.js";import"./iconBase-Ouq04in_.js";import"./index-eFdbWKwO.js";import"./types-DUPZtMK_.js";import"./index.esm-Da7xAvB1.js";import"./useColorFormatConverter-BZQ6RoHg.js";import"./index-B2TCdh0Q.js";import"./IconWrapper-DK4W31Rg.js";import"./theme-DMYu2WI8.js";import"./types-C420_J_Z.js";import"./form-control-BVzeVhG_.js";import"./context-Um05ouW_.js";import"./use-merge-refs-B3q612Hx.js";import"./attr-DNG3tQ7M.js";import"./form-label-ALzR5bG9.js";import"./input-group-DEbfjZnW.js";import"./children-D5ERO0W6.js";import"./input-element-C15kGZY6.js";import"./icon-BZFQ4qcc.js";import"./use-callback-ref-CE30inw2.js";import"./use-update-effect-DdGsmHRq.js";import"./use-safe-layout-effect-DH_mtp6w.js";import"./use-event-listener-CXIVkvST.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CDfAi5bT.js";import"./flex-DMEMWe_B.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
