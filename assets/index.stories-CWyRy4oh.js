import{j as b}from"./jsx-runtime-CHyxX_5n.js";import{r as d}from"./index-BCTaj__g.js";import{C as s}from"./index-cgH8TyB9.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C3Vznt8H.js";import"./index-CpeRQpra.js";import"./box-CQ4YIrS1.js";import"./factory-D36qWwKB.js";import"./text-CIBszfI9.js";import"./use-style-config-BXPCbPng.js";import"./numericalFormatting-ZkSQ6GFV.js";import"./stringFormatting-DEH4fgq4.js";import"./index-Ihh17YBv.js";import"./iconBase-BEozv2MW.js";import"./index-CifwXFcn.js";import"./types-DcX6hwuZ.js";import"./index.esm-BeMODac2.js";import"./useColorFormatConverter-DVOvKiCp.js";import"./index-T0YlA4FV.js";import"./IconWrapper-DswvVErM.js";import"./theme-DMYu2WI8.js";import"./types-BW5CsRAK.js";import"./form-control-DlOhVEbC.js";import"./context-B1S3rUf_.js";import"./use-merge-refs-DPXjVske.js";import"./attr-DNG3tQ7M.js";import"./form-label-BqG0gJso.js";import"./input-group-Bj7FnyoJ.js";import"./children-LpmKVeDd.js";import"./input-element-Ba_aFqFV.js";import"./icon-54qfchxO.js";import"./use-callback-ref-AXr5jWp6.js";import"./use-update-effect-yGGxCaHf.js";import"./use-safe-layout-effect-rR6xqPwy.js";import"./use-event-listener-DhB1fxOR.js";import"./call-all--NRVVPhS.js";import"./use-form-control-qzCuoaDu.js";import"./flex-DAOyVrXN.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
