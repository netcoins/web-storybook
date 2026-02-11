import{j as b}from"./jsx-runtime-xpl3tfWg.js";import{r as d}from"./index-AOymK8m_.js";import{C as i}from"./index-DZg-ZE_4.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-i40_7hjf.js";import"./index-C2E7CF8-.js";import"./index-3s1TetRA.js";import"./factory-BFYvbmpq.js";import"./index-C-pN0QYH.js";import"./create-recipe-context-DTWuTcVr.js";import"./numericalFormatting-BrXVTa2E.js";import"./stringFormatting-DaI9SKCY.js";import"./index-C-13u3JV.js";import"./iconBase-BOpCY8f7.js";import"./index-DNeVng84.js";import"./types-DiIc_afn.js";import"./index.esm-Dj5G1alZ.js";import"./useColorFormatConverter-yMGrfFSx.js";import"./index-B1ObwhJR.js";import"./index-D2s2ur9o.js";import"./IconWrapper-B8mX-EPO.js";import"./theme-DMYu2WI8.js";import"./types-Z2Rm3fjg.js";import"./color-mode-DAiG6_lY.js";import"./icon-button-CfVOSJ4I.js";import"./button-Dh6L9XJM.js";import"./attr-DhmmAXiK.js";import"./spinner-BRrLnZK-.js";import"./skeleton-UGpLngQm.js";import"./stack-CGncDWzc.js";import"./input-group-DpNja5Yz.js";import"./field-CqjCRdvE.js";import"./create-slot-recipe-context-CvjrVRJh.js";import"./icon-Cmlhz88B.js";import"./use-field-context-BP-v1uDO.js";import"./create-context-D4YMJeYH.js";import"./factory-YIMFqM36.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CbExmSB2.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BVIunCGt.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CrerN4iy.js";import"./index-DMPuYm_R.js";import"./index-Da0eicq-.js";import"./use-locale-context-BUNPKIs4.js";import"./flex-BQzgGcSE.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
