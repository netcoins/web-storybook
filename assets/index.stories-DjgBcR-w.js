import{j as d}from"./jsx-runtime--WFxFWJe.js";import{r as b}from"./index-BWRy1hAs.js";import{C as i}from"./index-sRrEBXbN.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-IaPkv7CH.js";import"./index-BqVNK_Wj.js";import"./index-5aBzXVds.js";import"./factory-BD6k6CXN.js";import"./index-DAj02rw5.js";import"./create-recipe-context-B8yw7VYA.js";import"./numericalFormatting-epOdfFdV.js";import"./stringFormatting-D2tQHTc_.js";import"./index-DGMRBbKe.js";import"./iconBase-B4bas2P2.js";import"./index-D7ykK7mN.js";import"./types-CLVvQ7IT.js";import"./index.esm-Dizn96H0.js";import"./useColorFormatConverter-DqoMk5bJ.js";import"./index-Cuxds7MK.js";import"./index-BaPgaBvd.js";import"./IconWrapper-DgKPrAiW.js";import"./theme-D-orLjha.js";import"./types-QwGKjzjy.js";import"./color-mode-B0_cIqMS.js";import"./icon-button-D-RUUr1v.js";import"./button-Ciw2S6Tm.js";import"./attr-DhmmAXiK.js";import"./spinner-CHm1fCy1.js";import"./skeleton-j87O3mf3.js";import"./stack-BtekSfGc.js";import"./input-group-CHEJdDUO.js";import"./field-DqU4jT8h.js";import"./create-slot-recipe-context-_LG65tWk.js";import"./icon-DKlUOMqA.js";import"./use-field-context-BLFsytiz.js";import"./create-context-BaiETKPX.js";import"./factory-Cj5xN7Bm.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BLSn3tlA.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-Ct4uC7Jf.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-DYbDfddm.js";import"./index-CgSuPseW.js";import"./index-BVaMZN4A.js";import"./use-locale-context-CjrjPKjt.js";import"./flex-CgmoetMW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
