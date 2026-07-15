import{j as d}from"./jsx-runtime-BJHVzd25.js";import{r as b}from"./index-VxVViXr4.js";import{C as i}from"./index-BIsr6cde.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CGwqlfIZ.js";import"./index-DhEH0hsS.js";import"./index-BFVolvpb.js";import"./factory-D3CzzD93.js";import"./index-BEDx-PZR.js";import"./create-recipe-context-C0rP7BHD.js";import"./numericalFormatting-uJsyl8gT.js";import"./stringFormatting-BhDbrPrg.js";import"./index-ChA8WshL.js";import"./iconBase-D4v2qpjo.js";import"./index-BlekwhZr.js";import"./types-dvzlzRIy.js";import"./index.esm-CTsfzHYp.js";import"./useColorFormatConverter-BQd5H4zW.js";import"./index-BYtHqjsy.js";import"./index-CVBAMk44.js";import"./IconWrapper-Bu0EYZy6.js";import"./theme-D-orLjha.js";import"./types-BGHqYegv.js";import"./color-mode-CQKZvi94.js";import"./icon-button-DoVYBZ5X.js";import"./button-CXDxTzIk.js";import"./attr-DhmmAXiK.js";import"./spinner-DsDt0AX3.js";import"./skeleton-9YhPHkpN.js";import"./stack-BxVtpCg8.js";import"./input-group-DKEQbb37.js";import"./field-fkZXqPBh.js";import"./create-slot-recipe-context-DT2sM_Rf.js";import"./icon-C-m6gAy_.js";import"./use-field-context-BIqbowXh.js";import"./create-context-B4X-33h2.js";import"./factory-C_MTHdUW.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BoA0IiRe.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-BrIDjJil.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-DZBBpV9S.js";import"./index-CksDWgDQ.js";import"./index-BDOSyVE_.js";import"./use-locale-context-eBwgLnAh.js";import"./flex-CfUsGUci.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
