import{j as d}from"./jsx-runtime-B28fAKwh.js";import{r as b}from"./index-BRvgYk6D.js";import{C as i}from"./index-CSuXvPvd.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-UugElKfX.js";import"./index-D5IpRlSF.js";import"./index-B4-O5UtE.js";import"./factory-Bf2aa36A.js";import"./index-bMOmcZtA.js";import"./create-recipe-context-CODMHF8x.js";import"./numericalFormatting-o8h8vvnK.js";import"./stringFormatting-DRe7mFX8.js";import"./index-BHojKa9S.js";import"./iconBase-gVQ2WkU2.js";import"./index-BtGtuUTh.js";import"./types-B2QU8jJ2.js";import"./index.esm-lsVamox4.js";import"./useColorFormatConverter-BGb92b4l.js";import"./index-DR0mp-qu.js";import"./index-CqSTZvHg.js";import"./IconWrapper-BjtXz3RH.js";import"./theme-D-orLjha.js";import"./types-CC4aF1bo.js";import"./color-mode-VOLiUyET.js";import"./icon-button-Q_vcw8nx.js";import"./button-LvSzMk3P.js";import"./attr-DhmmAXiK.js";import"./spinner-J9H_wG7h.js";import"./skeleton-DGf-XzyX.js";import"./stack-DtfxyQ6o.js";import"./input-group-BrwW4KkS.js";import"./field-CtW2ezUT.js";import"./create-slot-recipe-context-IEV-p8KP.js";import"./icon-BVhE98M1.js";import"./use-field-context-CBId6GJ8.js";import"./create-context-4OcS5IC2.js";import"./factory-DolINa2J.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-8VOhcZwr.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-D2MN8NAV.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-Dkam1v-0.js";import"./index-ENgqkjDv.js";import"./index-CjHFJhr_.js";import"./use-locale-context-0eyi3mLX.js";import"./flex-rtPauEav.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(u=c.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,p,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const de=["Default","Single"];export{c as Default,t as Single,de as __namedExportsOrder,ye as default};
