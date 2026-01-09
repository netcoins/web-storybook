import{j as d}from"./jsx-runtime-CFb-dJ-y.js";import{r as b}from"./index-CiZbjJZF.js";import{C as s}from"./index-izvWK8yq.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BTnV4qdy.js";import"./index-D80_SMrj.js";import"./box-BE0ZO1h_.js";import"./factory-Ro1QILuS.js";import"./text-Cms4Ma7f.js";import"./use-style-config-BwOoHieX.js";import"./numericalFormatting-B8lKG8rr.js";import"./stringFormatting-D8uBy7mS.js";import"./index-DJin2CTS.js";import"./iconBase-DJsLEq5F.js";import"./index-C16tmMMK.js";import"./types-BDz6Q2uQ.js";import"./index.esm-C5ZF3KUe.js";import"./useColorFormatConverter-D_qWA8Ou.js";import"./index-D06Y7sgn.js";import"./IconWrapper-B9WeqKvf.js";import"./theme-DMYu2WI8.js";import"./types-BAyw8xk6.js";import"./form-control-iFJ1-8KZ.js";import"./context-DlYmRpvU.js";import"./use-merge-refs-DDDr9FUe.js";import"./attr-DNG3tQ7M.js";import"./form-label-BXLsXigM.js";import"./input-group-BC6wjstG.js";import"./children-phdannWK.js";import"./input-element-BJxXXGV0.js";import"./icon-QfhRCDRE.js";import"./use-callback-ref-BhdtL9aI.js";import"./use-update-effect-CWpgkBQd.js";import"./use-safe-layout-effect-D-nJR4lJ.js";import"./use-event-listener-Dl5CJ1TO.js";import"./call-all--NRVVPhS.js";import"./use-form-control-jULCzC3t.js";import"./flex-Bbi-2o1Z.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
