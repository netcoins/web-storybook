import{j as b}from"./jsx-runtime-C9s0MxPb.js";import{r as d}from"./index-CbPWoY_S.js";import{C as s}from"./index-CNPHO0EK.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DDeUXOzN.js";import"./index-CsApvFyS.js";import"./box-CgtdGRxG.js";import"./factory-ChZTgBT9.js";import"./text-BkJb7YbC.js";import"./use-style-config-hCi5y6u4.js";import"./numericalFormatting-M_ZaJE8Q.js";import"./stringFormatting-BGY60vxJ.js";import"./index-dyRHPXh6.js";import"./iconBase-RxPoNZwz.js";import"./index-Bvka5lZ4.js";import"./types-DEeTrWpp.js";import"./index.esm-DrKOzY3P.js";import"./useColorFormatConverter-CPyQayDp.js";import"./index-CJWi4Om8.js";import"./IconWrapper-sS8W2gov.js";import"./theme-DMYu2WI8.js";import"./types-knqLOoc9.js";import"./form-control-vkUe2VYt.js";import"./context-g_O-K3XP.js";import"./use-merge-refs-DAystpBg.js";import"./attr-DNG3tQ7M.js";import"./form-label-HmpPl_Co.js";import"./input-group-D2CQOBxT.js";import"./children-ByCwVLSA.js";import"./input-element-Dhgu0z97.js";import"./icon-nxnZEOa5.js";import"./use-callback-ref-DB1qIbnU.js";import"./use-update-effect-DopMb-MJ.js";import"./use-safe-layout-effect-FM6UoDXy.js";import"./use-event-listener-qL3dpgc3.js";import"./call-all--NRVVPhS.js";import"./use-form-control-lehkleAh.js";import"./flex-BVidIDWj.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
