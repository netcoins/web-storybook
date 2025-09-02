import{j as d}from"./jsx-runtime-DCp243fw.js";import{r as b}from"./index-X37gZHMr.js";import{C as s}from"./index-Cj1EXiWi.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CjW4I00D.js";import"./index-DwVOSmmj.js";import"./box-CymiGRYS.js";import"./factory-BXOVdwo-.js";import"./text-ds9L_zFH.js";import"./use-style-config-BMocqkaz.js";import"./numericalFormatting-AL2xQBU0.js";import"./stringFormatting-DowMODBc.js";import"./index-BBYp1Flb.js";import"./iconBase-UsA_wLJJ.js";import"./index-CCIGLgql.js";import"./types-Dp09m0WB.js";import"./index.esm-BjNs8Fsk.js";import"./useColorFormatConverter-VtTZoGGA.js";import"./index-DFDU7Zqc.js";import"./IconWrapper-DtdbBRKI.js";import"./theme-DMYu2WI8.js";import"./types-CWhfRY6o.js";import"./form-control-C19FVZKI.js";import"./context-CUL0MZ7i.js";import"./use-merge-refs-AqbI99KR.js";import"./attr-DNG3tQ7M.js";import"./form-label-DNG6aFF2.js";import"./input-group-DFIWowZk.js";import"./children-DiN7cYJi.js";import"./input-element-BKZysbcB.js";import"./icon-CT-N4CCY.js";import"./use-callback-ref-du5lU8e5.js";import"./use-update-effect-CgawRsEa.js";import"./use-safe-layout-effect-CG6AAKpb.js";import"./use-event-listener-DAeWr4Xu.js";import"./call-all--NRVVPhS.js";import"./use-form-control-cejQcmxx.js";import"./flex-Cd8PCP7_.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
