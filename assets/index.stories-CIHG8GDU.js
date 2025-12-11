import{j as b}from"./jsx-runtime-CV680pqn.js";import{r as d}from"./index-DL9vO-rj.js";import{C as s}from"./index-DKOmtjyZ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DCqy6VzA.js";import"./index-CKfkBoss.js";import"./box-62PiFcGi.js";import"./factory-D3yNxF8l.js";import"./text-DKjMziLV.js";import"./use-style-config-Cbgaf-5n.js";import"./numericalFormatting-C-4vTzeT.js";import"./stringFormatting-CsdvANbp.js";import"./index-DY1ieXN2.js";import"./iconBase-DMxfJ9H4.js";import"./index-CiGf95Id.js";import"./types-Bs4OvTV8.js";import"./index.esm-DHF0ek0D.js";import"./useColorFormatConverter-DLrIFdCL.js";import"./index-BUTJ-Fnu.js";import"./IconWrapper-Bso0hbGF.js";import"./theme-DMYu2WI8.js";import"./types-Cv2gSuHh.js";import"./form-control-DjhdtlDf.js";import"./context--KVgOoiA.js";import"./use-merge-refs-tYiOXfA7.js";import"./attr-DNG3tQ7M.js";import"./form-label-BgciKvxP.js";import"./input-group-CnJASgGB.js";import"./children-B-3IhWZF.js";import"./input-element-C-I7LqEm.js";import"./icon-2SqZ_3hO.js";import"./use-callback-ref-D8IQrGma.js";import"./use-update-effect-0eXWhn6w.js";import"./use-safe-layout-effect-CMAg2atf.js";import"./use-event-listener-CCxWZA2q.js";import"./call-all--NRVVPhS.js";import"./use-form-control-LAj_GkV_.js";import"./flex-vj2tIqhx.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
