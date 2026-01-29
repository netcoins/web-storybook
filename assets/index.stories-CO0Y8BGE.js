import{j as b}from"./jsx-runtime-kgXYXbxN.js";import{r as d}from"./index-DkrDHoA0.js";import{C as i}from"./index-CifbrSjS.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BBryyjVm.js";import"./index-BTMmkxTM.js";import"./index-Cd8Lmteg.js";import"./factory-BZTzI5pW.js";import"./index-LdhaInLk.js";import"./create-recipe-context-BePLyMJS.js";import"./numericalFormatting-DNW-2bEM.js";import"./stringFormatting-D_ZXISfc.js";import"./index-BI4T21_x.js";import"./iconBase-Cawm1F28.js";import"./index-y008H3OI.js";import"./types-CPd_33zr.js";import"./index.esm-DOlWt8x_.js";import"./useColorFormatConverter-C162ko_Z.js";import"./index-E-ygkpZ0.js";import"./index-uOKqOJ9l.js";import"./IconWrapper-DpkMYCgX.js";import"./theme-DMYu2WI8.js";import"./types-BeJb0_Ij.js";import"./color-mode-ChMGBL4r.js";import"./icon-button-CQtFySye.js";import"./button-BURgWbhi.js";import"./attr-DhmmAXiK.js";import"./spinner-DC4_QDZr.js";import"./skeleton-Cgg4E_Wj.js";import"./stack-CiQGU0t-.js";import"./input-group-Q3tDYGcI.js";import"./field-d61FX-VH.js";import"./create-slot-recipe-context-BpOBAris.js";import"./icon-M9MOxPzT.js";import"./use-field-context-DyxzB5Op.js";import"./create-context-INHbO-rg.js";import"./factory-C2K0EIi5.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DWxkAKGZ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Cqn--cx_.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CyBBoEyT.js";import"./index-Bpl4YvaA.js";import"./index-DfUPD731.js";import"./use-locale-context-C5nh4WAs.js";import"./flex-CsIhHmY6.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
