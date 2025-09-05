import{j as d}from"./jsx-runtime-ydD5Yllt.js";import{r as b}from"./index-CPBmZDNx.js";import{C as s}from"./index-GqB2_Aav.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Cucd9TTe.js";import"./index-BoEtkNKi.js";import"./box-KzV_V6oH.js";import"./factory-Cyl6eWPO.js";import"./text-BlSpEd-U.js";import"./use-style-config-C2tJll5c.js";import"./numericalFormatting-Pbo_MSHE.js";import"./stringFormatting-QIe0FEBj.js";import"./index-ISDZpMUR.js";import"./iconBase-DxyqNysn.js";import"./index-BQ--1NwJ.js";import"./types-D1qfs8Ca.js";import"./index.esm-DzaRUYh4.js";import"./useColorFormatConverter-MQkWhB9x.js";import"./index-BxCVjwlp.js";import"./IconWrapper-B6QaNuap.js";import"./theme-DMYu2WI8.js";import"./types-DcVh6_Kq.js";import"./form-control-BDUFr2OV.js";import"./context-COfqbvr5.js";import"./use-merge-refs-BWnqh23d.js";import"./attr-DNG3tQ7M.js";import"./form-label-IrTIXq6n.js";import"./input-group-CED2vSdn.js";import"./children-CQv4PfSI.js";import"./input-element-B2NCF_3r.js";import"./icon-3_V4cxGi.js";import"./use-callback-ref-BkEaq5rq.js";import"./use-update-effect-DkurWNFT.js";import"./use-safe-layout-effect-De1pOtlk.js";import"./use-event-listener-D1C6NsDw.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DjFdvKpV.js";import"./flex-DQfbM5OU.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
