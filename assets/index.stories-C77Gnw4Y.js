import{j as b}from"./jsx-runtime-C2GWZ_W3.js";import{r as d}from"./index-ELNt7lwK.js";import{C as s}from"./index-B-LUDOqU.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BhoQJi6U.js";import"./index-DPTeiJpI.js";import"./box-DTedscfu.js";import"./factory-ByB9Vezk.js";import"./text-B7yE0Q6c.js";import"./use-style-config-Cf47N2Lw.js";import"./numericalFormatting-Dpoio3kf.js";import"./stringFormatting-G-v8441W.js";import"./index-CWXQ1UYx.js";import"./iconBase-DPcfMA0j.js";import"./index-BMlohdP7.js";import"./types-DuhQV6xA.js";import"./index.esm-BbqGliF4.js";import"./useColorFormatConverter-BIkeUeBn.js";import"./index-Cv6H17pV.js";import"./IconWrapper-v7oo7eus.js";import"./theme-DMYu2WI8.js";import"./types-O-yI6Onh.js";import"./form-control-CaKUgUf_.js";import"./context-DEaw93aE.js";import"./use-merge-refs-DiUX7u9z.js";import"./attr-DNG3tQ7M.js";import"./form-label-BwCMCKrq.js";import"./input-group-YhII4J0D.js";import"./children-Bw_aNAeJ.js";import"./input-element-GxyyX-kQ.js";import"./icon-Ch91KDQR.js";import"./use-callback-ref-z_gf96Ga.js";import"./use-update-effect-CMEQEZjR.js";import"./use-safe-layout-effect-CJT_4pGR.js";import"./use-event-listener-Bv4rFJ8W.js";import"./call-all--NRVVPhS.js";import"./use-form-control-BsY7O5HP.js";import"./flex-CzMWTp_E.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
