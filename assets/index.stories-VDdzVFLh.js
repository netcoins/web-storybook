import{j as b}from"./jsx-runtime-TwQoPtbL.js";import{r as d}from"./index-BrEum-xU.js";import{C as i}from"./index-D4V8J2Xj.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe--10Z506v.js";import"./index-fin766B_.js";import"./index-y1_3aT07.js";import"./factory-CEqmgX0o.js";import"./index-aWf7_3X9.js";import"./create-recipe-context-wVONaudd.js";import"./numericalFormatting-Cab1kIfJ.js";import"./stringFormatting-C8ZGRSqG.js";import"./index-xkoTY5WA.js";import"./iconBase-Cg_Nz2SH.js";import"./index-xIU-hbNB.js";import"./types-Bi1QEw26.js";import"./index.esm-Cb7GJb-K.js";import"./useColorFormatConverter-DK5X8DhR.js";import"./index-ChNyevMZ.js";import"./index-C_tYXvgD.js";import"./IconWrapper-DEk6eZd1.js";import"./theme-DMYu2WI8.js";import"./types-BiqUJkCR.js";import"./color-mode-CU-MnDFr.js";import"./icon-button-ClcPcIAX.js";import"./button-CN29c2zi.js";import"./attr-DhmmAXiK.js";import"./spinner-D0Qq2dgW.js";import"./skeleton-B1hP5P8q.js";import"./stack-DwV2E_nC.js";import"./input-group-B1nEz79a.js";import"./field-CQIUvXKz.js";import"./create-slot-recipe-context-DSsE1GzP.js";import"./icon-hqLlehJb.js";import"./use-field-context-BVCh_Sn4.js";import"./create-context-CwUdvEJE.js";import"./factory-DXN2yoRN.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-xf_PMs7C.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DToZiDvp.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DJTdB3tN.js";import"./index-Ci3fpwgr.js";import"./index-d7eHKCWO.js";import"./use-locale-context-CdpJWGcw.js";import"./flex-xCnbHnBz.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const be=["Default","Single"];export{c as Default,t as Single,be as __namedExportsOrder,ye as default};
