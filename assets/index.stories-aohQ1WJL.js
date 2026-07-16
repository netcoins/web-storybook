import{j as d}from"./jsx-runtime-DBGTve3H.js";import{r as b}from"./index-DjdiN9vP.js";import{C as i}from"./index-DYDmtzKJ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bf3FyGLG.js";import"./index-BP-nTFKK.js";import"./index-B085l8KG.js";import"./factory-C3JCNE8b.js";import"./index-BIf0toKg.js";import"./create-recipe-context-DR4uimmH.js";import"./numericalFormatting-cqBG4f6_.js";import"./stringFormatting-fMbu8Hlb.js";import"./index-D99aBR2j.js";import"./iconBase-CeixPGSG.js";import"./index-BLfREvBE.js";import"./types-D4qpF0Vk.js";import"./index.esm-B_jMNGzk.js";import"./useColorFormatConverter-lkyk33ms.js";import"./index-_37wBSgY.js";import"./index-C9n3PsjS.js";import"./IconWrapper-4dqmYbzX.js";import"./theme-D-orLjha.js";import"./types-BEHz8SJi.js";import"./color-mode-CwFHgcvk.js";import"./icon-button-CX9-vSxg.js";import"./button-Ca11798a.js";import"./attr-DhmmAXiK.js";import"./spinner-CJXzuk8U.js";import"./skeleton-cMlXg9uL.js";import"./stack-Cw552mbC.js";import"./input-group-CmwdPnY-.js";import"./field-DD5RDtGl.js";import"./create-slot-recipe-context-oWqG-oZx.js";import"./icon-CvXioo0b.js";import"./use-field-context-YM5M-_6o.js";import"./create-context-CJg9NqfD.js";import"./factory-2WvRMv5c.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CB6MVj73.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-CXs0I25I.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-CSs7t-_Z.js";import"./index-BuwzOxV6.js";import"./index-D5SGSyZc.js";import"./use-locale-context-BYyBD7xr.js";import"./flex-veWOdYXU.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
