import{j as d}from"./jsx-runtime-BDAl52LU.js";import{r as b}from"./index-B1s4cwzX.js";import{C as s}from"./index-T1NMH44x.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BhO2U3Xu.js";import"./index-DXBzDxlS.js";import"./box-C-bloKO_.js";import"./factory-DHWnRJKK.js";import"./text-STVW4P1z.js";import"./use-style-config-DCB5cbiP.js";import"./numericalFormatting-D6gp-6zI.js";import"./stringFormatting-C_NBHJgu.js";import"./index-CtK85GdA.js";import"./iconBase-CQOD9rGf.js";import"./index-BLSg-5Pj.js";import"./types-CUjUJ4OC.js";import"./index.esm-BK215oCo.js";import"./useColorFormatConverter-BX7TKwBo.js";import"./index-Di8TDuaZ.js";import"./IconWrapper-B1hXisFj.js";import"./theme-DMYu2WI8.js";import"./types-Cw1COIiA.js";import"./form-control-BRV4ka79.js";import"./context-DrtiubOQ.js";import"./use-merge-refs-C3ItJBsG.js";import"./attr-DNG3tQ7M.js";import"./form-label-C2ot0Cvi.js";import"./input-group-DHpliLgf.js";import"./children-oLpyxZx_.js";import"./input-element-KubtCvoc.js";import"./icon-DC___YkL.js";import"./use-callback-ref-DDebzxyp.js";import"./use-update-effect-kHs7RVSV.js";import"./use-safe-layout-effect-aZdOLzAV.js";import"./use-event-listener-g8z1gQnN.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CD0eMEwM.js";import"./flex-BDC1Xipk.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d2601776-04eb-4ff5-a409-0b1d6cd3df35",n._sentryDebugIdIdentifier="sentry-dbid-d2601776-04eb-4ff5-a409-0b1d6cd3df35")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=b.useState({currencyOne:""});return d.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
