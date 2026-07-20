import{j as d}from"./jsx-runtime-BYSh-DGW.js";import{r as b}from"./index-Bw8xlNb9.js";import{C as i}from"./index-6kOJR3nv.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-dnKpcvKR.js";import"./index--LOTxYdW.js";import"./index-D0rhk3hK.js";import"./factory-DvwvH9wg.js";import"./index-BaiNFk9l.js";import"./create-recipe-context-CZNXbC5L.js";import"./numericalFormatting-BFxwUh1G.js";import"./stringFormatting-De00lIDt.js";import"./index-d258YrzJ.js";import"./iconBase-BynyZhxu.js";import"./index-s3kdlfFh.js";import"./types-Dc8Zw9ku.js";import"./index.esm-CKOTlNPK.js";import"./useColorFormatConverter-CmVkEg0N.js";import"./index-BXxCPW0V.js";import"./index-BMNBc5dZ.js";import"./IconWrapper-BlmGu3mN.js";import"./theme-D-orLjha.js";import"./types-CwBEcEnQ.js";import"./color-mode-VUKz2OmR.js";import"./icon-button-Bm0M2lb_.js";import"./button-Dg_iXUYc.js";import"./attr-DhmmAXiK.js";import"./spinner-C3Mn__uc.js";import"./skeleton-DHaXtgg5.js";import"./stack-ClhY4XM-.js";import"./input-group-NXV1_ptb.js";import"./field-CWD7w_3n.js";import"./create-slot-recipe-context-gsNmplTm.js";import"./icon-CEBuGx7n.js";import"./use-field-context-Bsi9wXg4.js";import"./create-context-gOhJwuw9.js";import"./factory-C-337fwu.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D1yFgS59.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-DOokjJbh.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-DaJb-Jar.js";import"./index-BadsPsEv.js";import"./index-B_J3PsIp.js";import"./use-locale-context-BcOWqna4.js";import"./flex-B4tAXCdm.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
