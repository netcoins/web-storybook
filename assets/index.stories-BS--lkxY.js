import{j as b}from"./jsx-runtime-B3i3TfHl.js";import{r as d}from"./index-BuBwsnyC.js";import{C as i}from"./index-D-yWONbO.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B_Ou-_q9.js";import"./index-C94BjaBk.js";import"./index-NkeFFCVP.js";import"./factory-AatMa-35.js";import"./index-BmuNFleU.js";import"./create-recipe-context-C7EHPbke.js";import"./numericalFormatting-Ctt_Zxjg.js";import"./stringFormatting-D37UdZgB.js";import"./index-Bx6H2JJV.js";import"./iconBase-R-Z32nMx.js";import"./index-lWQWotk3.js";import"./types-BSN3vCyc.js";import"./index.esm-DEVKf4mN.js";import"./useColorFormatConverter-CwQ4hQYS.js";import"./index-C8zccliu.js";import"./index-DPznHS5M.js";import"./IconWrapper-a_Ym9wN9.js";import"./theme-DMYu2WI8.js";import"./types-CgyGzvMv.js";import"./color-mode-cuTYZ3B4.js";import"./icon-button-gzB6eSDR.js";import"./button-CgwpuGtR.js";import"./attr-DhmmAXiK.js";import"./spinner-DgTZ1n0S.js";import"./skeleton-D1q4D-Os.js";import"./stack-BY2ye9bl.js";import"./input-group-CHiVDLXY.js";import"./field-BgVzcQro.js";import"./create-slot-recipe-context-GJrSDUTV.js";import"./icon-lQ5oFCI3.js";import"./use-field-context-DkQ396J8.js";import"./create-context-CKJ785NE.js";import"./factory-BTGuUBYI.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BKd811zj.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BhGZ2WYt.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CPbDxrL7.js";import"./index-l0Walh46.js";import"./index-BdBHoQ34.js";import"./use-locale-context-BRM5vxry.js";import"./flex-lsXkLH1G.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
