import{j as d}from"./jsx-runtime-Dhrbqpri.js";import{r as b}from"./index-CzSRUdrE.js";import{C as s}from"./index-D_OuUL8b.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C8I02Bx3.js";import"./index-BPKOdox1.js";import"./box-CTSBZsvQ.js";import"./factory-CBrbN6_W.js";import"./text-Bt5-f5YI.js";import"./use-style-config-kh6Tc1aV.js";import"./numericalFormatting-Cy9mBwIK.js";import"./stringFormatting-Jz6IjUMU.js";import"./index-6BCkbKkZ.js";import"./iconBase-Dsms7VPy.js";import"./index-BOXVYvtP.js";import"./types-Bw3DbmIu.js";import"./index.esm-D624K_DY.js";import"./useColorFormatConverter-D64kaTrg.js";import"./index-B2L0OboI.js";import"./IconWrapper-C4Z91MAq.js";import"./theme-DMYu2WI8.js";import"./types-rqaDjOut.js";import"./form-control-nv1pV6SB.js";import"./context-DwezA3OE.js";import"./use-merge-refs-BZyy81Es.js";import"./attr-DNG3tQ7M.js";import"./form-label-CbE_ZqCf.js";import"./input-group-VlDJuIxa.js";import"./children-CRy4xU31.js";import"./input-element-U5HQHaMb.js";import"./icon-BDLVmkxC.js";import"./use-callback-ref-BvsL_xqi.js";import"./use-update-effect-Sb3YueJ2.js";import"./use-safe-layout-effect-BBg335iZ.js";import"./use-event-listener-DzueSwTk.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BCG9IpQT.js";import"./flex-Cs8ShCrJ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
