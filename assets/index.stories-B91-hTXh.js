import{j as d}from"./jsx-runtime-DYS3PmO5.js";import{r as b}from"./index-G1StbVMZ.js";import{C as s}from"./index-Bv2SWxRp.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CHXOveE0.js";import"./index-ujq43Rk9.js";import"./box-Bvz5ZBjj.js";import"./factory-DT96eYgU.js";import"./text-BVzRHyYg.js";import"./use-style-config-CHATY7L4.js";import"./numericalFormatting-ZshUm8wb.js";import"./stringFormatting-1JxzkN4Z.js";import"./index-dBd6rems.js";import"./iconBase-BRhaRC0N.js";import"./index-De0ojs8U.js";import"./types-Cnkok5xI.js";import"./index.esm-pIPZPHhl.js";import"./useColorFormatConverter-CxjK3LrN.js";import"./index-pxF5XmU1.js";import"./IconWrapper-B8ecv7rq.js";import"./theme-DMYu2WI8.js";import"./types-BhrsJ_Kh.js";import"./form-control-lpsqPcMd.js";import"./context-CX54VVWl.js";import"./use-merge-refs-xeHasOaO.js";import"./attr-DNG3tQ7M.js";import"./form-label-C7lUDOOz.js";import"./input-group-D-ozxHmm.js";import"./children-CcdxwiTe.js";import"./input-element-BuqH1vjn.js";import"./icon-Nyb6EwFN.js";import"./use-callback-ref-CI_DSrbi.js";import"./use-update-effect-hVpzPVe_.js";import"./use-safe-layout-effect-D61lC8va.js";import"./use-event-listener-C4WZ2tWD.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CfNMQjkN.js";import"./flex-l2Oq0ReB.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="52a752f3-f60e-4ead-a304-33ac9e44e05d",n._sentryDebugIdIdentifier="sentry-dbid-52a752f3-f60e-4ead-a304-33ac9e44e05d")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
