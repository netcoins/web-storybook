import{j as b}from"./jsx-runtime-DN61zNGZ.js";import{r as d}from"./index-BpLaRMlr.js";import{C as i}from"./index-YU6ics28.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bb0sqAOi.js";import"./index-DLFDkxke.js";import"./index-s83KEs-X.js";import"./factory-BwfxkOOd.js";import"./index-BbEepsVM.js";import"./create-recipe-context-dDu3KTWq.js";import"./numericalFormatting-CGD91IdU.js";import"./stringFormatting-BAjLT-5M.js";import"./index-BH_pea3h.js";import"./iconBase-16T0ykv2.js";import"./index-BRpqWQ-U.js";import"./types-BQNeT5Qa.js";import"./index.esm-Du0wQEQk.js";import"./useColorFormatConverter-DiQkZuFm.js";import"./index-D27ozKAg.js";import"./index-DJjHir_H.js";import"./IconWrapper-BlN2m-eD.js";import"./theme-DMYu2WI8.js";import"./types-CHDcdjaV.js";import"./color-mode-oIg2W76_.js";import"./icon-button-B2q4aMYR.js";import"./button-BaH4UkFI.js";import"./attr-DhmmAXiK.js";import"./spinner-DB_WoPMT.js";import"./skeleton-Bgq5UWu9.js";import"./stack-DvFkM1J6.js";import"./input-group-CeUP5YCk.js";import"./field-BR9kJdf6.js";import"./create-slot-recipe-context-BG38Zyxr.js";import"./icon-CdGyX7ym.js";import"./use-field-context-B9amWtgF.js";import"./create-context-DB95bXe4.js";import"./factory-BjKZl4UI.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-H3FUvUIu.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Dc8ljpWq.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CitJgtYc.js";import"./index-BOpFzUyp.js";import"./index-Df8eR-gd.js";import"./use-locale-context-BXRcHZiF.js";import"./flex-jNFRfmkW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
