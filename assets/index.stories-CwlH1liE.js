import{j as d}from"./jsx-runtime-D_1f7RZ4.js";import{r as b}from"./index-DIRGU5C1.js";import{C as i}from"./index-CjV2O8Mn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BBV-l3q3.js";import"./index-CuPJQ1nd.js";import"./index-CxgjJer_.js";import"./factory-CKP4BZby.js";import"./index-kFKkt1G0.js";import"./create-recipe-context-BGig898f.js";import"./numericalFormatting-75pkRfFd.js";import"./stringFormatting-C17-3LVa.js";import"./index-Dmea0HfC.js";import"./iconBase-fHNp_0oX.js";import"./index-DcOp-JYb.js";import"./types-DTkqfOrj.js";import"./index.esm-DD23aLUu.js";import"./useColorFormatConverter-CYmghEnF.js";import"./index-BvPqQ4VY.js";import"./index-CcaOcobt.js";import"./IconWrapper-03gHpDH6.js";import"./theme-D-orLjha.js";import"./types-Dv7IIWSp.js";import"./color-mode-NKp8z5lH.js";import"./icon-button-NFwAFxs6.js";import"./button-DevS3c95.js";import"./attr-DhmmAXiK.js";import"./spinner-DLNsJ-XC.js";import"./skeleton-DVOx7zqR.js";import"./stack-Cwn4G4FP.js";import"./input-group-7MTgo-NM.js";import"./field-Clo7uy2r.js";import"./create-slot-recipe-context-Cxilg6R5.js";import"./icon-X8vhnAXh.js";import"./use-field-context-ClLumNUb.js";import"./create-context-DHKO3_a-.js";import"./factory-Bg3Joqry.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BevWolDu.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-BmBfeNqA.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-B_Nrj-OR.js";import"./index-COjxmNs_.js";import"./index-DwiKA_ie.js";import"./use-locale-context-C-74Rs9E.js";import"./flex-CIQn6QKF.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
