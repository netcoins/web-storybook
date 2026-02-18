import{j as b}from"./jsx-runtime-BLmHfCky.js";import{r as d}from"./index-CnQrtYIs.js";import{C as i}from"./index-CeAj9ng9.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Cwze2tCc.js";import"./index-v7eKiePr.js";import"./index-DsH-zof2.js";import"./factory-Ch1I7S1Y.js";import"./index-B0Ue0_SS.js";import"./create-recipe-context-BRLnDGDc.js";import"./numericalFormatting-CGWfefvU.js";import"./stringFormatting-CHA1okq8.js";import"./index-BnKqTKik.js";import"./iconBase---9GiGh3.js";import"./index-aZKUN2iF.js";import"./types-DHujnpPf.js";import"./index.esm-kR7k6Tgr.js";import"./useColorFormatConverter-B6JY4fIW.js";import"./index-DbOt26hC.js";import"./index-CHo0TIQ1.js";import"./IconWrapper-CL2_D3os.js";import"./theme-DMYu2WI8.js";import"./types-poJiUSwb.js";import"./color-mode-CVBxgpr4.js";import"./icon-button-Dbv2SCZY.js";import"./button-DVGh3juC.js";import"./attr-DhmmAXiK.js";import"./spinner-Cm52mKXc.js";import"./skeleton-CQIoax4a.js";import"./stack-uSpN3c7f.js";import"./input-group-DxKeFNut.js";import"./field-Dzr3OYhs.js";import"./create-slot-recipe-context-C0UksDmC.js";import"./icon-BdcW7C2d.js";import"./use-field-context-BHLnlpVa.js";import"./create-context-0bXuCLlP.js";import"./factory-CC3vKxIL.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DzkDUxbm.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DsuDXEoX.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Bl3NHraY.js";import"./index-BMcN5yBh.js";import"./index-DneuiAfd.js";import"./use-locale-context-C-WnUJZR.js";import"./flex-BwIkksZc.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
