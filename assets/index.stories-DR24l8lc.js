import{j as d}from"./jsx-runtime-BmIRPXcQ.js";import{r as b}from"./index-BkU-Oecg.js";import{C as i}from"./index-BxQe8fle.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BVrz1qaQ.js";import"./index-Chx8yLbc.js";import"./index-DZlDJ0vk.js";import"./factory-BQmPCA93.js";import"./index-BhNoYcjM.js";import"./create-recipe-context-DF6Pj0BR.js";import"./numericalFormatting-BAAB4VJ-.js";import"./stringFormatting-MV-8NcHN.js";import"./index-C-6Boop3.js";import"./iconBase-CgPeBTf3.js";import"./index-DTLTDysp.js";import"./types-D4SmEPqK.js";import"./index.esm-07DYYImd.js";import"./useColorFormatConverter-C21Ptv_a.js";import"./index-Bfp0j7PF.js";import"./index-BuM56Eu2.js";import"./IconWrapper-CnRZ5dJg.js";import"./theme-D-orLjha.js";import"./types-B60uvUv0.js";import"./color-mode-DmyQw_E2.js";import"./icon-button-D0ru4QqC.js";import"./button-Dn1XneO_.js";import"./attr-DhmmAXiK.js";import"./spinner-q2SUT4TQ.js";import"./skeleton-CaYyUU15.js";import"./stack-DSoOKlT1.js";import"./input-group-BmJokjDX.js";import"./field-CNpNIGCV.js";import"./create-slot-recipe-context-BE3-Z8VU.js";import"./icon-M9cBGUYI.js";import"./use-field-context-CC8xWnYL.js";import"./create-context-DNduormU.js";import"./factory-9gAU_emI.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-6TT2R8NC.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-Yd7J-d6I.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-EF7W4Rwi.js";import"./index-ByT9A7T5.js";import"./index-az-DktjO.js";import"./use-locale-context-Dwb6_Kxe.js";import"./flex-DDo8lj7J.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
