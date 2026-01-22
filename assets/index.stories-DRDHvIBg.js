import{j as b}from"./jsx-runtime-C-MFBsJt.js";import{r as d}from"./index-CabVnVSx.js";import{C as i}from"./index-CThyliTd.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B4dX3bd3.js";import"./index-EwVIK-Yx.js";import"./index-CAHpqgbX.js";import"./factory-qU0kTcex.js";import"./index-zt5Xy--Z.js";import"./create-recipe-context-C3wpX-tJ.js";import"./numericalFormatting-D3501I88.js";import"./stringFormatting-TTYgP__k.js";import"./index-CzPBYKVu.js";import"./iconBase-AXKmiLLI.js";import"./index-aMHUvllS.js";import"./types-CXRWlzj-.js";import"./index.esm-DfgaqmZ1.js";import"./useColorFormatConverter-GgWhum32.js";import"./index-_JZpkHP6.js";import"./index-DZeurHMR.js";import"./IconWrapper-GpaV7pGh.js";import"./theme-DMYu2WI8.js";import"./types-D1WLhCt2.js";import"./color-mode-Bs4Gz60I.js";import"./icon-button-Cun9L0Vt.js";import"./button-C9r8DCdA.js";import"./attr-DhmmAXiK.js";import"./spinner-Cy5XVZac.js";import"./skeleton-DJqvmLNx.js";import"./stack-BhGZ5tx7.js";import"./input-group-DVYpWS9r.js";import"./field-BAzpa4_U.js";import"./create-slot-recipe-context-B7jX8uZg.js";import"./icon-DJIySF__.js";import"./use-field-context-BFFcYpjq.js";import"./create-context-D-cni63V.js";import"./factory-CEUAgGkR.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cl1aTswv.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-47OXJK41.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-VUxFe_Az.js";import"./index-CEIB1emd.js";import"./index-B6TDlUA9.js";import"./use-locale-context-Dyg8A8fN.js";import"./flex-CRIE8yUF.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const be=["Default","Single"];export{c as Default,t as Single,be as __namedExportsOrder,ye as default};
