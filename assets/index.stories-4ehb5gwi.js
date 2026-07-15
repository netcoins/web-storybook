import{j as d}from"./jsx-runtime-Caq49NyI.js";import{r as b}from"./index-D8lQHrGn.js";import{C as i}from"./index-CEk7o4af.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B1-Bc3aj.js";import"./index-3QwZVsQz.js";import"./index-BGMJqn9I.js";import"./factory-BxfHbFh2.js";import"./index-BFIhJJnR.js";import"./create-recipe-context-ClxGMkfU.js";import"./numericalFormatting-CGIF-vgh.js";import"./stringFormatting-BjGd5xxJ.js";import"./index-NdkclZBp.js";import"./iconBase-4MjwOzg9.js";import"./index-CTfTrR_I.js";import"./types-BwYCn_Kf.js";import"./index.esm-CU3YP8uo.js";import"./useColorFormatConverter-CSRHU2LG.js";import"./index-DmeWpO2e.js";import"./index-DUz4JT7U.js";import"./IconWrapper-5hS3p8vo.js";import"./theme-D-orLjha.js";import"./types-B6otU-bp.js";import"./color-mode-BebDMqu-.js";import"./icon-button-Yv-CVJDg.js";import"./button-DzBIrWpD.js";import"./attr-DhmmAXiK.js";import"./spinner-K6UCCP2q.js";import"./skeleton-2M-Qrbu-.js";import"./stack-BTwkFosQ.js";import"./input-group-DvGVDmqU.js";import"./field-C9jQ20N2.js";import"./create-slot-recipe-context-DtIEFOvH.js";import"./icon-Dj74CtRp.js";import"./use-field-context-Dps3mwb_.js";import"./create-context-sT42AIyI.js";import"./factory-DuLzj89h.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cyli79z1.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-BHpT8f-d.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-70f33dnh.js";import"./index-CGMxa5UM.js";import"./index-Jx1nUab6.js";import"./use-locale-context-DLFuEBCy.js";import"./flex-KQ8jqxgd.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const de=["Default","Single"];export{c as Default,t as Single,de as __namedExportsOrder,ye as default};
