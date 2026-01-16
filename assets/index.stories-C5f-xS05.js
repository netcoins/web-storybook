import{j as b}from"./jsx-runtime-CkPrEKpc.js";import{r as d}from"./index-B6FdbTTN.js";import{C as i}from"./index-mKk_UVpa.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CdM8ZGzA.js";import"./index-CY4sceDg.js";import"./index-JW3czXfw.js";import"./factory-Czip7KJ9.js";import"./index-0VOT2uIS.js";import"./create-recipe-context-BCZzhAeH.js";import"./numericalFormatting-kgV8wOkW.js";import"./stringFormatting-BlgzjCbI.js";import"./index-CAIITE4S.js";import"./iconBase-Dl7blY0Y.js";import"./index-CCx_I0Od.js";import"./types-BY3RZpTy.js";import"./index.esm-j5u7tfNz.js";import"./useColorFormatConverter-IhfvWfEW.js";import"./index-ChYy3Kbk.js";import"./index-CNSypadA.js";import"./IconWrapper-BPG3rABS.js";import"./theme-DMYu2WI8.js";import"./types-CunnnilO.js";import"./color-mode-DhbhUCnF.js";import"./icon-button-DPgBuy1M.js";import"./button-om885L8d.js";import"./attr-DhmmAXiK.js";import"./spinner-BefKdmgT.js";import"./skeleton-DWm6ToPd.js";import"./stack-Nnw6deO_.js";import"./input-group-kHQrnFF5.js";import"./field-C8-g2hXc.js";import"./create-slot-recipe-context-DoXLfIR3.js";import"./icon-DCaPN1_Z.js";import"./use-field-context-Dcf3s8TL.js";import"./create-context-b9M6o06d.js";import"./factory-C1trIdaF.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-TFVf1OGg.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-0HV41L9F.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-C5LFHObc.js";import"./index-g8Q00vWR.js";import"./index-SSq5X-CS.js";import"./use-locale-context-CWEiIogj.js";import"./flex-C0dB4hPV.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
