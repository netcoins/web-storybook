import{j as d}from"./jsx-runtime-BpYqQpYB.js";import{r as b}from"./index-DjG89Z2B.js";import{C as s}from"./index-BTVBNJ4P.js";import{D as g}from"./stringFormatting-B4EXER8g.js";import"./iframe-vEyeFhkB.js";import"./index-XVw65vnC.js";import"./box-3BWZ-P-F.js";import"./factory-3DviKehv.js";import"./text-jTJ9VSZj.js";import"./use-style-config-B4krmTsC.js";import"./numericalFormatting-dVCSXURY.js";import"./index-CO2tabdQ.js";import"./iconBase-HBcpiIgO.js";import"./index-Df9lAK5E.js";import"./types-B2SFjECo.js";import"./index.esm-DoyaEO4D.js";import"./useColorFormatConverter-CDBIy4xD.js";import"./index-BU6ai9Y2.js";import"./IconWrapper-DNUjZdut.js";import"./theme-DMYu2WI8.js";import"./types-CgeYtEi4.js";import"./form-control-D4PiLWX7.js";import"./context-C5A39F5l.js";import"./use-merge-refs-BTanDmtf.js";import"./attr-DNG3tQ7M.js";import"./form-label-DO9xyhlC.js";import"./input-group-CgYvaq4f.js";import"./children-C3P3kTPv.js";import"./input-element-6GRIYH4q.js";import"./icon-DA8n6PgO.js";import"./use-callback-ref-BbtNEzqx.js";import"./use-update-effect-Ckbjrd2C.js";import"./use-safe-layout-effect-BFAZaPli.js";import"./use-event-listener-DL0pOkPD.js";import"./call-all--NRVVPhS.js";import"./use-form-control-Ro9pFThm.js";import"./flex-C8ffAcKe.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="a7e7cf93-b82f-41cc-863d-8154194b57c8",n._sentryDebugIdIdentifier="sentry-dbid-a7e7cf93-b82f-41cc-863d-8154194b57c8")}catch{}const ee={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
