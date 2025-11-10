import{j as b}from"./jsx-runtime-B791eGeM.js";import{r as d}from"./index-DIojWxTx.js";import{C as s}from"./index-Ch857ZgH.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CxvPOnKM.js";import"./index-CcUa9Zzn.js";import"./box-B80E9g7g.js";import"./factory-CgJe7pVc.js";import"./text-BOMZCICA.js";import"./use-style-config-D4hZ3gJS.js";import"./numericalFormatting-CkiMQxeS.js";import"./stringFormatting-DII244a2.js";import"./index-BFX15_Ms.js";import"./iconBase-BdnFlmf7.js";import"./index-Bjml5eVG.js";import"./types-BHg-vhx1.js";import"./index.esm-DErIGJ3a.js";import"./useColorFormatConverter-BTJ0WMQ0.js";import"./index-ChP5bzyg.js";import"./IconWrapper-C26FGh8I.js";import"./theme-DMYu2WI8.js";import"./types-CEwoWStK.js";import"./form-control-DOyJwfpb.js";import"./context-lpI2Zs0F.js";import"./use-merge-refs-0PJQmlTb.js";import"./attr-DNG3tQ7M.js";import"./form-label-Bx0vQrpZ.js";import"./input-group-BoPEH9uj.js";import"./children-gORKtQ_Q.js";import"./input-element-CUbWYSrM.js";import"./icon-BYdeT4Jt.js";import"./use-callback-ref-BTIe4Lfr.js";import"./use-update-effect-B6CgvZue.js";import"./use-safe-layout-effect-BQz89kL8.js";import"./use-event-listener-D-_kvGlA.js";import"./call-all--NRVVPhS.js";import"./use-form-control-hl55MpA4.js";import"./flex-DwRBA7jn.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
