import{j as d}from"./jsx-runtime-Dso0oQ8e.js";import{r as b}from"./index-DqOy4NCE.js";import{C as i}from"./index-CC3fGa3_.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BSb3dkxL.js";import"./index-BV6w15zE.js";import"./index-C9A_1p4A.js";import"./factory-BX8gXkm0.js";import"./index-QNk2wPmi.js";import"./create-recipe-context-DdSXfxgW.js";import"./numericalFormatting-BgIvDrRW.js";import"./stringFormatting-3j0OfQSg.js";import"./index-BbAk-nqt.js";import"./iconBase-SmKGG0Wa.js";import"./index-3LsLy6Q1.js";import"./types-DlgsL2QM.js";import"./index.esm-BF49-0g6.js";import"./useColorFormatConverter-DCnsOyXB.js";import"./index-tV63Sd_0.js";import"./index-CGXD-u_6.js";import"./IconWrapper-02P-6Bou.js";import"./theme-D-orLjha.js";import"./types-BNza5hFd.js";import"./color-mode-COm9eqfQ.js";import"./icon-button-BvGmUBgl.js";import"./button-983oc3P3.js";import"./attr-DhmmAXiK.js";import"./spinner-BGUCA4H8.js";import"./skeleton-Cv2duZTU.js";import"./stack-DxcZUIuG.js";import"./input-group-BIwRNGCt.js";import"./field-UqCfUgp5.js";import"./create-slot-recipe-context-DNbb1UH1.js";import"./icon-B9v7n158.js";import"./use-field-context-Be8s3Oz8.js";import"./create-context-DK9-C9Hf.js";import"./factory-I5EY8nfp.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BkhY8l0j.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-CnZK-1Aa.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CHZ3RzCr.js";import"./index-CZEX_3UZ.js";import"./index-Cx7HxNjM.js";import"./use-locale-context-DJFkpnTj.js";import"./flex-DHnzza0I.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
