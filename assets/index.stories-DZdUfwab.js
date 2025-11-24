import{j as b}from"./jsx-runtime-BrSp2Ewl.js";import{r as d}from"./index-DqYHC0RG.js";import{C as s}from"./index-BH-E00zD.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Da9QSqyA.js";import"./index-BzW3CV1F.js";import"./box-D3VWbUS2.js";import"./factory-CJIxymcM.js";import"./text-DgNhouKu.js";import"./use-style-config-B4eLLTY8.js";import"./numericalFormatting-inTRI9XG.js";import"./stringFormatting-BHwlxRnp.js";import"./index-DyvUqhsg.js";import"./iconBase-ZOPjsQ2i.js";import"./index-DK8iQcAf.js";import"./types-ByzphRdC.js";import"./index.esm-hxk8Djpd.js";import"./useColorFormatConverter-CjwfF-0o.js";import"./index-7jL3Nev6.js";import"./IconWrapper-BwiCmS36.js";import"./theme-DMYu2WI8.js";import"./types-DCCkijGI.js";import"./form-control-CK-OFkpp.js";import"./context-Dw3x_d_I.js";import"./use-merge-refs-Brd7YKDJ.js";import"./attr-DNG3tQ7M.js";import"./form-label-DupVs1Ed.js";import"./input-group-BIGPFGIC.js";import"./children-BZUbdYqu.js";import"./input-element-Bd3oU9_6.js";import"./icon-DMzvAwYu.js";import"./use-callback-ref-GN0-2TKS.js";import"./use-update-effect-CERPomX7.js";import"./use-safe-layout-effect-Bzul2FP2.js";import"./use-event-listener-DWSyjvy1.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DaPKLaI2.js";import"./flex-DihITaiS.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
