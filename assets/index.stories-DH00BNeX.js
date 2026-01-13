import{j as d}from"./jsx-runtime-I4c7N6zH.js";import{r as b}from"./index-CWyT7x85.js";import{C as s}from"./index-BDHV9IvZ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C-Rv5Q8n.js";import"./index-B4obi6Gd.js";import"./box-B4IDSXko.js";import"./factory-CxsWn2IJ.js";import"./text-DkmekN7G.js";import"./use-style-config-ClISlWbF.js";import"./numericalFormatting-BOHuzm0C.js";import"./stringFormatting-BUWaiz1Y.js";import"./index-DT5_7pR7.js";import"./iconBase-D93790M0.js";import"./index-DmX299Cq.js";import"./types-D01s_72T.js";import"./index.esm-D71Y-9N4.js";import"./useColorFormatConverter-BWI3p9VT.js";import"./index-DeowDpAX.js";import"./IconWrapper-BKgZf9bj.js";import"./theme-DMYu2WI8.js";import"./types-BTZiZfGt.js";import"./form-control-Cce34L96.js";import"./context-DYqOeRpp.js";import"./use-merge-refs-Cn14LXPv.js";import"./attr-DNG3tQ7M.js";import"./form-label-DgXdQa4N.js";import"./input-group-DZCOSCDS.js";import"./children-D3mpEkIK.js";import"./input-element-Dl5hR0OW.js";import"./icon-DByWxsdy.js";import"./use-callback-ref-TVx1onfD.js";import"./use-update-effect-BxVHYP9Q.js";import"./use-safe-layout-effect-DYbCEC4t.js";import"./use-event-listener-D606AHpj.js";import"./call-all--NRVVPhS.js";import"./use-form-control-YqDMGrDM.js";import"./flex-peuWrThC.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
