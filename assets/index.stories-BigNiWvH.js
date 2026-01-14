import{j as d}from"./jsx-runtime-dwLmKzBU.js";import{r as b}from"./index-DD7I555u.js";import{C as s}from"./index-BZO544Mx.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CTDEooyK.js";import"./index-6WLR7Vvj.js";import"./box-UiBjKlxC.js";import"./factory-C-MThQCt.js";import"./text-Bq_lQngR.js";import"./use-style-config-DkkLwA2c.js";import"./numericalFormatting-CKRhGeMq.js";import"./stringFormatting-DCLMea_z.js";import"./index-jpLJ-bTA.js";import"./iconBase-YpL9J8BA.js";import"./index-B4ETeyVR.js";import"./types-C77LlJgK.js";import"./index.esm-BoYM9p_m.js";import"./useColorFormatConverter-oPfoAqcG.js";import"./index-CMUtOvCK.js";import"./IconWrapper-D8OiwTGJ.js";import"./theme-DMYu2WI8.js";import"./types-4z2v2O9k.js";import"./form-control-CiZjiyyj.js";import"./context-DcV_87gr.js";import"./use-merge-refs-WbnRqhDC.js";import"./attr-DNG3tQ7M.js";import"./form-label-CJZxnmPO.js";import"./input-group-BDXzOsvA.js";import"./children-C5brfHjB.js";import"./input-element-DIix2Dec.js";import"./icon-DrNKr4M9.js";import"./use-callback-ref-Bs6xhpD_.js";import"./use-update-effect-5exfd1-h.js";import"./use-safe-layout-effect-yxcMGgBv.js";import"./use-event-listener-ytVGhmcj.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CjxqDkDL.js";import"./flex-BrPt1u5T.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
