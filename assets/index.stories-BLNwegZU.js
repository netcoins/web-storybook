import{j as d}from"./jsx-runtime-DZYSgAPK.js";import{r as b}from"./index-Ddgoexym.js";import{C as s}from"./index-3Kd3fpJv.js";import{D as g}from"./stringFormatting-BZ2iCSrH.js";import"./iframe-D_zOel9O.js";import"./index-Ba-l1Xti.js";import"./box-UwOhYLuN.js";import"./factory-DBKxysTQ.js";import"./text-CFlvWPPt.js";import"./use-style-config-A9Clw6KN.js";import"./numericalFormatting-4MGmtXII.js";import"./index-Bl_iX48n.js";import"./iconBase-DV5UXlGQ.js";import"./index-CyiM8dns.js";import"./types-BwaSftOc.js";import"./index.esm-C4HQpVU1.js";import"./useColorFormatConverter-u_6Cn4Ce.js";import"./index-_9nX-ZVo.js";import"./IconWrapper-zA_pDARh.js";import"./theme-DMYu2WI8.js";import"./types-BIdahLDU.js";import"./form-control-CVvfdg_r.js";import"./context-Cz3Oemje.js";import"./use-merge-refs-BgOG3T2G.js";import"./attr-DNG3tQ7M.js";import"./form-label-DjTlYK9W.js";import"./input-group-5TbM12V5.js";import"./children-CNLGalUC.js";import"./input-element-DIT4Pa0V.js";import"./icon-CPv7nqrf.js";import"./use-callback-ref-D0GXHZ7w.js";import"./use-update-effect-XDFDZ0or.js";import"./use-safe-layout-effect-Cu2YOrtN.js";import"./use-event-listener-BDlbKOki.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BxVKpCDd.js";import"./flex-T2gP-ZcI.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const ne=["Default","Single"];export{c as Default,a as Single,ne as __namedExportsOrder,ee as default};
