import{j as d}from"./jsx-runtime-1QcaBFjt.js";import{r as b}from"./index-C5DJK7Mn.js";import{C as i}from"./index-Bj5995AA.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CJd8REah.js";import"./index-DgJpk_lK.js";import"./index-CUUz_o0H.js";import"./factory-BdGhXirw.js";import"./index-mnZemksN.js";import"./create-recipe-context-BL7vxUyW.js";import"./numericalFormatting-CckxYXga.js";import"./stringFormatting-CH2GU7ue.js";import"./index-B2ctT33-.js";import"./iconBase-u_eeBPt5.js";import"./index-DGZfA3NA.js";import"./types-CvIw1aZe.js";import"./index.esm-BRJLqf3k.js";import"./useColorFormatConverter-NZCO0KXK.js";import"./index-09vw6sjf.js";import"./index-CUquxNsf.js";import"./IconWrapper-CA_-sf9r.js";import"./theme-D-orLjha.js";import"./types-auljHV9K.js";import"./color-mode-ClV-3Jsa.js";import"./icon-button-BTwj4JDT.js";import"./button-5rdY6g4m.js";import"./attr-DhmmAXiK.js";import"./spinner-Dwo6YvmC.js";import"./skeleton-DgVi4cdY.js";import"./stack-D2LoWOhJ.js";import"./input-group-Bd3sl7vb.js";import"./field-AZGBpJI6.js";import"./create-slot-recipe-context-11ZmFkDp.js";import"./icon-R0tCKb8U.js";import"./use-field-context-CoWYd30p.js";import"./create-context-z3Tag67_.js";import"./factory-CpSrrdZf.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DwB2GriR.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-Bfmdf0B7.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-B50MXpTV.js";import"./index-CAZ5y66m.js";import"./index-BjZ9T2Rl.js";import"./use-locale-context-BE9Vv-QU.js";import"./flex-Lb8rYyah.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
