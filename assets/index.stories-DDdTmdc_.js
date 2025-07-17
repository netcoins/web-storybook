import{j as p}from"./jsx-runtime-B4yJAW4F.js";import{r as b}from"./index-7mQJAlOt.js";import{C as s}from"./index-DcP5D5nq.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-uoe2xVnD.js";import"./box-CYwnp9cV.js";import"./use-style-config-BbW2_Tay.js";import"./text-ckVTOhTF.js";import"./numericalFormatting-D1UGzxIA.js";import"./stringFormatting-CYkJ_Vu0.js";import"./index-4PzaVRRh.js";import"./iconBase-MUa0mIqo.js";import"./index-HQs6VlhL.js";import"./index-DsGkuK_C.js";import"./index.esm-1FzDA09A.js";import"./flex-BPty2MAD.js";import"./input-group-DBndln86.js";import"./children-0WRIqFam.js";import"./context-pZcGTPqu.js";import"./input-element-CzX1dkFW.js";import"./input-2dSwiuRm.js";import"./use-form-control-FC1gUooy.js";import"./form-control-CD8Ov2BQ.js";import"./use-merge-refs-DrPKD2E9.js";import"./attr-DNG3tQ7M.js";import"./call-all--NRVVPhS.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="71d3e537-d599-43f5-af5a-6ae63c0e7904",n._sentryDebugIdIdentifier="sentry-dbid-71d3e537-d599-43f5-af5a-6ae63c0e7904")}catch{}const J={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return p.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return p.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,y,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const K=["Default","Single"];export{c as Default,a as Single,K as __namedExportsOrder,J as default};
