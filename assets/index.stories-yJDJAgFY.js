import{j as b}from"./jsx-runtime-Cxzri3Pw.js";import{r as d}from"./index-CQyEhpui.js";import{C as s}from"./index-B1BDEXdt.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BtcXhJ9A.js";import"./index-Cf7loBwk.js";import"./box-DEvmMyh-.js";import"./factory-BiiuT5Nv.js";import"./text-H-5wkXYi.js";import"./use-style-config-BFsyumYa.js";import"./numericalFormatting-Bxu45m5b.js";import"./stringFormatting-vgOYGv2L.js";import"./index-CgHankdp.js";import"./iconBase-CHwgSB5w.js";import"./index-D25QvIKb.js";import"./types-B2wLIgRL.js";import"./index.esm-4sXSOt_G.js";import"./useColorFormatConverter-U5hoAya3.js";import"./index-DIY1syOo.js";import"./IconWrapper-BPSH-t0J.js";import"./theme-DMYu2WI8.js";import"./types-DPi3wbvO.js";import"./form-control-j8vYlO6h.js";import"./context-EVyQdOUc.js";import"./use-merge-refs-BcePpJJy.js";import"./attr-DNG3tQ7M.js";import"./form-label-BElXJdUT.js";import"./input-group-Bgk7DDEk.js";import"./children-BecUbAd4.js";import"./input-element-BaiKdQHg.js";import"./icon-BrvKO_hP.js";import"./use-callback-ref-DCq13M0N.js";import"./use-update-effect-CjuSFJnb.js";import"./use-safe-layout-effect-CosW4MJT.js";import"./use-event-listener-CXa35tU_.js";import"./call-all--NRVVPhS.js";import"./use-form-control-s7Gaciy5.js";import"./flex-DfPIxoPv.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
