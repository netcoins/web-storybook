import{j as d}from"./jsx-runtime-sSiny72Q.js";import{r as b}from"./index-BRZUHrxl.js";import{C as i}from"./index-CvtQcski.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BtF_amxx.js";import"./index-D8S6fdO_.js";import"./index-BKrEO2TL.js";import"./factory-DB5fldYk.js";import"./index-DJ0Z2Uk6.js";import"./create-recipe-context-ysTfWqWA.js";import"./numericalFormatting-D8Ny10HM.js";import"./stringFormatting-Db5SkY3r.js";import"./index-BG2rz5xQ.js";import"./iconBase-CmnmgoKb.js";import"./index-BwR2pv0b.js";import"./types-BZdQ1G8O.js";import"./index.esm-BxxdBVZ6.js";import"./useColorFormatConverter-CcDH0kBZ.js";import"./index-CyuQ5wOP.js";import"./index-C5FoPIoZ.js";import"./IconWrapper-Binb_ZqQ.js";import"./theme-D-orLjha.js";import"./types-BXyMDx4y.js";import"./color-mode-nwxn5eoU.js";import"./icon-button-922m34hN.js";import"./button-rhhJQ1Pi.js";import"./attr-DhmmAXiK.js";import"./spinner-DomKOxpT.js";import"./skeleton-CrT_m0wa.js";import"./stack-DwLzdsVO.js";import"./input-group-MraQ5BPn.js";import"./field-Dc8d6wMR.js";import"./create-slot-recipe-context-sVH52Z6B.js";import"./icon-ntc19Dh_.js";import"./use-field-context-BlcZIZyA.js";import"./create-context-uyfP516n.js";import"./factory-Cs1OGWTc.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DCmU3z1b.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-BYuY7D5V.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CF-5GPVB.js";import"./index-DLLSwTiU.js";import"./index-Bg6o_01X.js";import"./use-locale-context-CmisX32z.js";import"./flex-DBF-bEeD.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
