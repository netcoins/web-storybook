import{j as d}from"./jsx-runtime-CVGkS9S6.js";import{r as b}from"./index-DsimY1Er.js";import{C as i}from"./index-Dkjngnfk.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-mYh3n4X9.js";import"./index-D7eaoBLr.js";import"./index-CVUQXY8B.js";import"./factory-CfaKATY1.js";import"./index-nLXlyfdO.js";import"./create-recipe-context-CfDVsj90.js";import"./numericalFormatting-DHLC2MXG.js";import"./stringFormatting-D4oYBpZJ.js";import"./index-Ct1_UDm6.js";import"./iconBase-0NfaldhP.js";import"./index-Bv0ATGI9.js";import"./types-mdukHKsn.js";import"./index.esm-BWMgYZCI.js";import"./useColorFormatConverter-7aZSf3ZY.js";import"./index-iQa19wCX.js";import"./index-DWMUIu-P.js";import"./IconWrapper-DBMuomBH.js";import"./theme-D-orLjha.js";import"./types-91ODjIi4.js";import"./color-mode-Byq_X5Xd.js";import"./icon-button-YbfWHFcP.js";import"./button-DVEJ2y3K.js";import"./attr-DhmmAXiK.js";import"./spinner-DSa_MMTg.js";import"./skeleton-BvBHD1FK.js";import"./stack-r4zfIMeb.js";import"./input-group-DjSIdCD1.js";import"./field-BT0kMcOF.js";import"./create-slot-recipe-context-DMGXGbVV.js";import"./icon-DbGTXddX.js";import"./use-field-context-B3ity01o.js";import"./create-context-CilLCYwj.js";import"./factory-m8yl7nBq.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-YPy70K4y.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-B54RsrCx.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-4h8lH-FW.js";import"./index-DsyquN5r.js";import"./index-CA_aMp87.js";import"./use-locale-context-CYQv6_ny.js";import"./flex-vMp7_VsP.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
