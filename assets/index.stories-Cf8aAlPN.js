import{j as b}from"./jsx-runtime-CpDozxPR.js";import{r as d}from"./index-D01Myi75.js";import{C as s}from"./index-Dj7m7s3s.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DystbDa4.js";import"./index-ueyHVRi_.js";import"./box-BVpat9EY.js";import"./factory-D77lZdb7.js";import"./text-Bm2hgtv_.js";import"./use-style-config-D_1jrDOF.js";import"./numericalFormatting-CA8dOqd6.js";import"./stringFormatting-Dbeedycy.js";import"./index-PbswSILV.js";import"./iconBase-CUWHmIsI.js";import"./index-CX5dkyVe.js";import"./types-BzqHVfMk.js";import"./index.esm-Rvn5CvA_.js";import"./useColorFormatConverter-DMb5fJYy.js";import"./index-x_Wa5nJj.js";import"./IconWrapper-DTGMfNVn.js";import"./theme-DMYu2WI8.js";import"./types-C307-Iyf.js";import"./form-control-DAy5Vtqb.js";import"./context-BxRtqpQ2.js";import"./use-merge-refs-CCG2dtML.js";import"./attr-DNG3tQ7M.js";import"./form-label-cHt7u8X_.js";import"./input-group-BhQPBH6l.js";import"./children-Cqy4imaC.js";import"./input-element-BUx50t3Y.js";import"./icon-CNJWkug4.js";import"./use-callback-ref-DMT5aitM.js";import"./use-update-effect-BaI2BA4c.js";import"./use-safe-layout-effect-CuBrxhfb.js";import"./use-event-listener-DNaNt6q8.js";import"./call-all--NRVVPhS.js";import"./use-form-control-CgssX4uG.js";import"./flex-agrL0LXn.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
