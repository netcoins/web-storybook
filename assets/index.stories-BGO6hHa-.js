import{j as b}from"./jsx-runtime-BevlS7C8.js";import{r as d}from"./index-DQA5jI_f.js";import{C as i}from"./index-2ozKiXWM.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BzTS-aQH.js";import"./index-dJNx5oMu.js";import"./index-B3ZpYf62.js";import"./factory-DrQ3NJUc.js";import"./index-ChwUUqwk.js";import"./create-recipe-context-BqK9pFug.js";import"./numericalFormatting-Bi-zzNfL.js";import"./stringFormatting-C66olT0n.js";import"./index-CCH0jWWR.js";import"./iconBase-CtH_TkY4.js";import"./index-BBY4Ss1z.js";import"./types-Bk42P0T0.js";import"./index.esm-Cjsi_1SU.js";import"./useColorFormatConverter-DPIoGppJ.js";import"./index-DchCQQiI.js";import"./index-CS5pDNJv.js";import"./IconWrapper-DbjtCYCc.js";import"./theme-DMYu2WI8.js";import"./types-D8g4Cao4.js";import"./color-mode-BphJjCLU.js";import"./icon-button-BqLHkFQs.js";import"./button-DL82Z4Oz.js";import"./attr-DhmmAXiK.js";import"./spinner-BB78e0YY.js";import"./skeleton-C1lZ2mBY.js";import"./stack-B4--9JDN.js";import"./input-group-CLjy7Rhx.js";import"./field-uqy5sYrE.js";import"./create-slot-recipe-context-BiRuo-30.js";import"./icon-DokDLnNh.js";import"./use-field-context-BZWZE9AC.js";import"./create-context-C_2it4Wg.js";import"./factory-j7LST4F8.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-ChGjPzAt.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-MqN6DQ1z.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BRXhrF8D.js";import"./index-C8KcWIb-.js";import"./index-Cb7YvuK1.js";import"./use-locale-context-B0PjAUe_.js";import"./flex-DdO_G3d8.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
