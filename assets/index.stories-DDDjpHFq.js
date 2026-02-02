import{j as b}from"./jsx-runtime-DdRIrGsz.js";import{r as d}from"./index-BSPg11Bq.js";import{C as i}from"./index-BQPDzcUG.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-NCWq_qb0.js";import"./index-wuvquoEo.js";import"./index-BvK3__Ip.js";import"./factory-DvdZ96DC.js";import"./index-B_S-btUT.js";import"./create-recipe-context-TJnFh2et.js";import"./numericalFormatting-CJi_Lygq.js";import"./stringFormatting-BssC8xaW.js";import"./index-BpNRchGn.js";import"./iconBase-kFL7wY3w.js";import"./index-4hVu8MLp.js";import"./types-DmPTLQ2E.js";import"./index.esm-glKXtJH6.js";import"./useColorFormatConverter-BegyUfOu.js";import"./index-DDoQL5gt.js";import"./index-CRPmJIUh.js";import"./IconWrapper-nIe2otKg.js";import"./theme-DMYu2WI8.js";import"./types-CADCUrdn.js";import"./color-mode-4sSBuS6H.js";import"./icon-button-DpPl243L.js";import"./button-CYmFsM_p.js";import"./attr-DhmmAXiK.js";import"./spinner-DiozNA0e.js";import"./skeleton-BH1Enz8-.js";import"./stack-bBQTV9s7.js";import"./input-group-SSFvZ-Xl.js";import"./field-NxPdSTqK.js";import"./create-slot-recipe-context-XMZaW4Jc.js";import"./icon-HjlVpbkQ.js";import"./use-field-context-DFgtpIU_.js";import"./create-context-BLuoDCXV.js";import"./factory-DbMwfEwL.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CyqHSb4m.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BzLkSx5C.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-ClWKq5A0.js";import"./index-Dol97L80.js";import"./index-CiQhf5Zx.js";import"./use-locale-context-C0BKfG9v.js";import"./flex-NZFQz2Ng.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
