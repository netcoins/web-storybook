import{j as b}from"./jsx-runtime-BAZvs5A0.js";import{r as d}from"./index-CrJ-1aZL.js";import{C as s}from"./index-CKRd6roQ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DoV1S5fd.js";import"./index-BD39PCZp.js";import"./box-BXR3r_-o.js";import"./factory-DsIFjfwt.js";import"./text-DoUjpBXO.js";import"./use-style-config-CS_U3WqC.js";import"./numericalFormatting-BUn590F-.js";import"./stringFormatting-DYxx767m.js";import"./index-y3MxZTpK.js";import"./iconBase-CXoTK8Ob.js";import"./index-BCtglZuB.js";import"./types-DMHAZAX2.js";import"./index.esm-CJqJsE6S.js";import"./useColorFormatConverter-CW99gA6Y.js";import"./index-BEiD6zCG.js";import"./IconWrapper-BtklMNFR.js";import"./theme-DMYu2WI8.js";import"./types-DsjE3Ya_.js";import"./form-control-BeJ0QHzw.js";import"./context-DLcajKlK.js";import"./use-merge-refs-BaSwpNy7.js";import"./attr-DNG3tQ7M.js";import"./form-label-DUI45pGq.js";import"./input-group-DVr_b9bz.js";import"./children-DLvkLNsz.js";import"./input-element-YLgOOwX7.js";import"./icon-BKxv0mgo.js";import"./use-callback-ref-DGhWitLy.js";import"./use-update-effect-DXzgDPQK.js";import"./use-safe-layout-effect-BM9K7dhN.js";import"./use-event-listener-C2ScdE8e.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BO2rED8_.js";import"./flex-D7q5yRS7.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
