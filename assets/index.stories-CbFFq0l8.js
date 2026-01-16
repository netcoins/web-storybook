import{j as b}from"./jsx-runtime-DPMpNnXZ.js";import{r as d}from"./index-B84vUFZt.js";import{C as i}from"./index-DW1As3rj.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D4MesB1-.js";import"./index-DSWueFCE.js";import"./index-BuaD3O4C.js";import"./factory-DyNYFw1b.js";import"./index-TWaqeXJZ.js";import"./create-recipe-context-Dvnq3eBD.js";import"./numericalFormatting-v8sCh4V0.js";import"./stringFormatting-B0zCRGTk.js";import"./index-BbzQ0eBl.js";import"./iconBase-Ba8qU5zn.js";import"./index-BZU3OpQQ.js";import"./types-kOqasbvD.js";import"./index.esm-DcEY3u_i.js";import"./useColorFormatConverter-BlgdVcHW.js";import"./index-CMlnaBwA.js";import"./index-cEvMUtIh.js";import"./IconWrapper-D5a_4NF9.js";import"./theme-DMYu2WI8.js";import"./types-JE7Own_N.js";import"./color-mode-CTbOIU0k.js";import"./icon-button-BTouLfA7.js";import"./button-P1cOoHXw.js";import"./attr-DhmmAXiK.js";import"./spinner-B0SaDVG2.js";import"./skeleton-0FhqIADY.js";import"./stack-zAxET8FT.js";import"./input-group-CxnQlXKX.js";import"./field-DMIbX8Fj.js";import"./create-slot-recipe-context-Dcgux3jd.js";import"./icon-Bo4cYvSi.js";import"./use-field-context-J6-MTnZZ.js";import"./create-context-TtKSSaLt.js";import"./factory-BNSsrlYH.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BBCdx3we.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DekzO3u_.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-tKXbQ0NM.js";import"./index-BAYPxm6O.js";import"./index-CDgzWiXg.js";import"./use-locale-context-Dp4Prn2t.js";import"./flex-DRNaZEXn.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
