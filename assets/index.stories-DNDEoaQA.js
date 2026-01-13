import{j as d}from"./jsx-runtime-DUvnlu6r.js";import{r as b}from"./index-DbeXWJ-W.js";import{C as s}from"./index-Crv9cvEd.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-xLDCLI1U.js";import"./index-Dx_025bJ.js";import"./box-Qy06BcHb.js";import"./factory-EvmFdQJ8.js";import"./text-IH71t2kF.js";import"./use-style-config-BEaeOCj0.js";import"./numericalFormatting-I6nD7OhW.js";import"./stringFormatting-CE-pZdNz.js";import"./index-BcYljkKM.js";import"./iconBase-BEtHxgO5.js";import"./index-DiIJEp3E.js";import"./types-Sv4nceWf.js";import"./index.esm-BxxFJmZQ.js";import"./useColorFormatConverter-C9yn1Lut.js";import"./index-zwbR4msX.js";import"./IconWrapper-lguUNrIC.js";import"./theme-DMYu2WI8.js";import"./types-DIhVf-2O.js";import"./form-control-DGqTZ9PV.js";import"./context-D3WNSJYq.js";import"./use-merge-refs-Bl65njns.js";import"./attr-DNG3tQ7M.js";import"./form-label-AbBllbdt.js";import"./input-group-DL2D7JbS.js";import"./children-CiAjPAHz.js";import"./input-element-BbsixSex.js";import"./icon-CouGRMZl.js";import"./use-callback-ref-pRHjHwSk.js";import"./use-update-effect-CJwnIJfw.js";import"./use-safe-layout-effect-CiFH7Jzm.js";import"./use-event-listener-DJUhvG9G.js";import"./call-all--NRVVPhS.js";import"./use-form-control-D2jjusBg.js";import"./flex-t7eBuDrE.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
