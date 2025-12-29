import{j as b}from"./jsx-runtime-BH2c4qLG.js";import{r as d}from"./index-7u_6Vy2k.js";import{C as s}from"./index-YtdrbNcM.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BGQbQ3dn.js";import"./index-DscTjUHO.js";import"./box-Bksqqz7s.js";import"./factory-DvGDcxFa.js";import"./text-7g6ehUQF.js";import"./use-style-config-CY0nP9yV.js";import"./numericalFormatting-DPDF05H-.js";import"./stringFormatting-BlaTvi9Q.js";import"./index-CV9lSecQ.js";import"./iconBase-rSet0i5-.js";import"./index-DgTcd4vo.js";import"./types-BXTzdq3Q.js";import"./index.esm-B1TkH2vR.js";import"./useColorFormatConverter-H15IBrVQ.js";import"./index-DjjJr4Wp.js";import"./IconWrapper-sDTiSEWJ.js";import"./theme-DMYu2WI8.js";import"./types-Cp-iaKuy.js";import"./form-control-BTHLgQmF.js";import"./context-DRG8Ee5j.js";import"./use-merge-refs-oCMSTRem.js";import"./attr-DNG3tQ7M.js";import"./form-label-BIfdqtAl.js";import"./input-group-C1u4VYhF.js";import"./children-CPq0-lbh.js";import"./input-element-D55q7HZU.js";import"./icon-BkH6qJp9.js";import"./use-callback-ref-DbzFf3Lu.js";import"./use-update-effect-LvKnJuLD.js";import"./use-safe-layout-effect-DatZKw9H.js";import"./use-event-listener-DEQVhWnC.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DT8uI3O4.js";import"./flex-Cq1r11cc.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
