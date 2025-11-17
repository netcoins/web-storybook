import{j as b}from"./jsx-runtime-SyxZwZjT.js";import{r as d}from"./index-CVVoCa6k.js";import{C as s}from"./index-DdRieCVn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B7ZWENLp.js";import"./index-1uqyTZAL.js";import"./box-uVcGOvFE.js";import"./factory-QFqscWsL.js";import"./text-DlZXEA6-.js";import"./use-style-config-DtWgkoz7.js";import"./numericalFormatting-B56KeESi.js";import"./stringFormatting-CJDVpvro.js";import"./index-Dwq-Esiu.js";import"./iconBase-CMKiqZlL.js";import"./index-D3VdHA7g.js";import"./types-DMZ0TDdA.js";import"./index.esm-C-GYhHCv.js";import"./useColorFormatConverter-DZhix_qd.js";import"./index-DH2QSORy.js";import"./IconWrapper-DFXnqovG.js";import"./theme-DMYu2WI8.js";import"./types-Y-X-Zg3f.js";import"./form-control-C0PIRaFI.js";import"./context-DqA_7S9L.js";import"./use-merge-refs-CZtfNzKX.js";import"./attr-DNG3tQ7M.js";import"./form-label-CmzP6A1a.js";import"./input-group-BuQpCkva.js";import"./children-BSJuE594.js";import"./input-element-BtbdK5NY.js";import"./icon-BzRqmdGT.js";import"./use-callback-ref-CeQ0gPZE.js";import"./use-update-effect-1d0At7KY.js";import"./use-safe-layout-effect-BEXVsV6r.js";import"./use-event-listener-D84f0T2D.js";import"./call-all--NRVVPhS.js";import"./use-form-control-xkgd3f-3.js";import"./flex-BpcjEIOZ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
