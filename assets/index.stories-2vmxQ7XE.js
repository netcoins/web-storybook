import{j as b}from"./jsx-runtime-Dv2agtU7.js";import{r as d}from"./index-BsoArW0f.js";import{C as s}from"./index-DTfoTSfk.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-dJqc1-Qj.js";import"./index-BrTali6O.js";import"./box-Wj3TPIrS.js";import"./factory-DItE7Zbf.js";import"./text-fxYgO8kb.js";import"./use-style-config-DimwGAZE.js";import"./numericalFormatting-DzkoKxc-.js";import"./stringFormatting-BQAP48Kz.js";import"./index-CXBWWOW0.js";import"./iconBase-QXUzZFCY.js";import"./index-557YcLLa.js";import"./types-BEMdp0BA.js";import"./index.esm-BsEiJ_Yr.js";import"./useColorFormatConverter-DkfLfv3G.js";import"./index-0HE4tDTS.js";import"./IconWrapper-Bg16KNiG.js";import"./theme-DMYu2WI8.js";import"./types-Dg61vmbz.js";import"./form-control-BupH7fAE.js";import"./context-DCB91Iml.js";import"./use-merge-refs-zIXrsNDy.js";import"./attr-DNG3tQ7M.js";import"./form-label-DqJNVx7w.js";import"./input-group-DNrB6VbG.js";import"./children-CWNAtveH.js";import"./input-element-C04IeagY.js";import"./icon-CFMzBpLt.js";import"./use-callback-ref-2eF-msno.js";import"./use-update-effect-BC_MjMJw.js";import"./use-safe-layout-effect-CpCXk6om.js";import"./use-event-listener-BglMcFjq.js";import"./call-all--NRVVPhS.js";import"./use-form-control-D6h5CGr1.js";import"./flex-C_oEG4_I.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
