import{j as d}from"./jsx-runtime-Nog3FBKS.js";import{r as b}from"./index-Mm4yjXV8.js";import{C as i}from"./index-BqeIJblX.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B01Rhazy.js";import"./index-BCIPpSp6.js";import"./index-B3Z5u5ba.js";import"./factory-N6_sDeIQ.js";import"./index-jbykmj3K.js";import"./create-recipe-context-CpX93Itj.js";import"./numericalFormatting-BpB_hGZ4.js";import"./stringFormatting-BFdRPSKW.js";import"./index-LSdfx3_X.js";import"./iconBase-x4ewFLct.js";import"./index-BmuwfJQn.js";import"./types-B4ZMD_Ix.js";import"./index.esm-DrDFQYzk.js";import"./useColorFormatConverter-CvTuYEOu.js";import"./index-dfqPFhO7.js";import"./index-BSalj8ZE.js";import"./IconWrapper-10ODQv6O.js";import"./theme-D-orLjha.js";import"./types-CwDDeHxl.js";import"./color-mode-BF20HVtQ.js";import"./icon-button-RtUQXOML.js";import"./button-sVoUEUTP.js";import"./attr-DhmmAXiK.js";import"./spinner-CNCW_VnY.js";import"./skeleton-D7Jd2T_m.js";import"./stack-j7TSn5zI.js";import"./input-group-BJi_3-f1.js";import"./field-DAUKCP-D.js";import"./create-slot-recipe-context-C0pz5CIq.js";import"./icon-yi4lADk0.js";import"./use-field-context-B2FDmJ6M.js";import"./create-context-VxOajozH.js";import"./factory-B_IBsr2U.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-_tICM2Zd.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-D9mh23eq.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-C2PRfEqY.js";import"./index-CHc7YHay.js";import"./index-C4FKJP_g.js";import"./use-locale-context-B-cxjhbP.js";import"./flex-DXc-o7XK.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
