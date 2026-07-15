import{j as d}from"./jsx-runtime-D5DeI2s5.js";import{r as b}from"./index-C8i9cqqN.js";import{C as i}from"./index-D0b2HPXg.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C-XDvpdu.js";import"./index-DOSv6vaa.js";import"./index-CXQPOW_k.js";import"./factory-kNuYJGc7.js";import"./index-BfLgRuuH.js";import"./create-recipe-context-BRH5V4XP.js";import"./numericalFormatting-DAQIyu0B.js";import"./stringFormatting-CNxoM4h-.js";import"./index-CW430clL.js";import"./iconBase-DMl_FT9g.js";import"./index-CuZVimFl.js";import"./types-BsOBGp4O.js";import"./index.esm-DGwO2Hmp.js";import"./useColorFormatConverter-CtVqpEKy.js";import"./index-pzCQNOgO.js";import"./index-CjGiWooP.js";import"./IconWrapper-UVgJ-tYm.js";import"./theme-D-orLjha.js";import"./types-B195cW8T.js";import"./color-mode-CFE50dCx.js";import"./icon-button-Cn5-K_8d.js";import"./button-Co_WvyBc.js";import"./attr-DhmmAXiK.js";import"./spinner-BP9ad5oI.js";import"./skeleton-2IoI-YEm.js";import"./stack-NR9H_vs6.js";import"./input-group-CqMvzMSM.js";import"./field-Bbhnm3Mp.js";import"./create-slot-recipe-context-U_n8nSAV.js";import"./icon-Cc5gBrFu.js";import"./use-field-context-Dl8iMPum.js";import"./create-context-XQK9kIJ7.js";import"./factory-ZHcklB47.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-aix4a6ly.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-COkOUVff.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-DvYIvpKO.js";import"./index-DBUEsidC.js";import"./index-CTOKdcSd.js";import"./use-locale-context-BrI47jrT.js";import"./flex-DKdUXSv4.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
