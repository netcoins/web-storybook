import{j as b}from"./jsx-runtime-xeqYPewq.js";import{r as d}from"./index-hVwbLp-A.js";import{C as i}from"./index-IUOiKaSf.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BjnDpM1q.js";import"./index-NwMzrfXH.js";import"./index-B4QVXL_Y.js";import"./factory-DRBblL-U.js";import"./index-BrexQjqi.js";import"./create-recipe-context-C7mXzTzl.js";import"./numericalFormatting-DiCwuHzM.js";import"./stringFormatting-BuC9RmDn.js";import"./index-c2ygc6ek.js";import"./iconBase-BERM_hi-.js";import"./index-w_o_s6jF.js";import"./types-D1chk2Wc.js";import"./index.esm-D0-EKn2s.js";import"./useColorFormatConverter-DMOkDtYH.js";import"./index-BN6QUe6G.js";import"./index-DRwItG8i.js";import"./IconWrapper-ZG8epMX2.js";import"./theme-DMYu2WI8.js";import"./types-8eU0r5Rg.js";import"./color-mode-BjAyG-Xp.js";import"./icon-button-DHsl625e.js";import"./button-DRIY0DBw.js";import"./attr-DhmmAXiK.js";import"./spinner-DpPWGqJ2.js";import"./skeleton-keKVgNg9.js";import"./stack-DFTLJjt_.js";import"./input-group-CWgl5ohT.js";import"./field-D5qeFB0k.js";import"./create-slot-recipe-context-B_OtZbOA.js";import"./icon-BT06J39D.js";import"./use-field-context-BdETl923.js";import"./create-context-Htpb7xq5.js";import"./factory-C_CkSUHW.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-FUSVVJH4.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-ewpvCfel.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-il-cW10v.js";import"./index-Cscg3vxp.js";import"./index-BwgPNZka.js";import"./use-locale-context-CLphdXLH.js";import"./flex-C9se37Rv.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
