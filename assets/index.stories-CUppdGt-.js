import{j as d}from"./jsx-runtime-MHZvqL_t.js";import{r as b}from"./index-BQja5mEm.js";import{C as s}from"./index-9f6ucvrh.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BS01ocFG.js";import"./index-Dr7fQdVg.js";import"./box-CNEYIEc2.js";import"./factory-CqABM38r.js";import"./text-CFn7IS6o.js";import"./use-style-config-C5kUKhAX.js";import"./numericalFormatting-BzIJKOYd.js";import"./stringFormatting-CysaII5y.js";import"./index-CX5TbEnR.js";import"./iconBase-9XpoQhKd.js";import"./index-Dv_WX2HC.js";import"./index-CkaCs0Fe.js";import"./index.esm-9XsWftmY.js";import"./flex-ClNkGKqe.js";import"./input-group-DREaKnhU.js";import"./children-iOGQJqdJ.js";import"./context-CjJ0Wp3S.js";import"./input-element-DEy3t-G_.js";import"./input--7OBSjo0.js";import"./use-form-control-DAUpvPNK.js";import"./form-control-CSe84P0z.js";import"./use-merge-refs-B0dABy0A.js";import"./attr-DNG3tQ7M.js";import"./call-all--NRVVPhS.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a3c9e66b-4a09-4e93-8628-546f8dabd33e",n._sentryDebugIdIdentifier="sentry-dbid-a3c9e66b-4a09-4e93-8628-546f8dabd33e")}catch{}const M={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    return <CurrencySwitchFormField mode="dual" currencies={args.currencies} balance={args.balance} exchangeRate={args.exchangeRate} label={args.label} value={value} onTextChange={(values: {
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
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,y,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    return <CurrencySwitchFormField mode="single" currencies={args.currencies} balance={args.balance} label={args.label} value={value} onTextChange={(values: {
      currencyOne: string;
      focus: "currencyOne";
    }) => {
      setValue({
        currencyOne: values.currencyOne
      });
    }} />;
  }
}`,...(p=(y=a.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};const N=["Default","Single"];export{c as Default,a as Single,N as __namedExportsOrder,M as default};
