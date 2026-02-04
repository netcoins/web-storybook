import{j as b}from"./jsx-runtime-BSdmSggo.js";import{r as d}from"./index-CARzu7rq.js";import{C as i}from"./index-DeKl_I6i.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CuKY7SOM.js";import"./index-DE1EqaTJ.js";import"./index-o-DUAi9a.js";import"./factory-79QfSACv.js";import"./index-BRG-lOLa.js";import"./create-recipe-context-D2V1WGtt.js";import"./numericalFormatting-mbT97Ubm.js";import"./stringFormatting-DjbXYtjc.js";import"./index-CrQtmc8z.js";import"./iconBase-2FpXMSd-.js";import"./index-BziGwl76.js";import"./types-BzdqdPi6.js";import"./index.esm-BwvhJAx5.js";import"./useColorFormatConverter-CD7Fod3m.js";import"./index-Dl8juEZR.js";import"./index-CeV_LWzZ.js";import"./IconWrapper-DgjdHsC8.js";import"./theme-DMYu2WI8.js";import"./types-e_SBmQBN.js";import"./color-mode-WW2pnMXF.js";import"./icon-button-C54AeiWA.js";import"./button-BS_1QXZE.js";import"./attr-DhmmAXiK.js";import"./spinner-CfFi7YI2.js";import"./skeleton-Cw8X7MCm.js";import"./stack-oG4w9e4U.js";import"./input-group-shsedVgc.js";import"./field-rAVWqR2c.js";import"./create-slot-recipe-context-TZSfpw8m.js";import"./icon-DdcHrItk.js";import"./use-field-context-Bsn0mCKA.js";import"./create-context-Dph0B3KV.js";import"./factory-MMNosZ5Q.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DY6x1TVa.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D7P4zFC9.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CNRCaoLc.js";import"./index-hCnU0B4X.js";import"./index-DNz81eU8.js";import"./use-locale-context-Be-1an08.js";import"./flex-DlH2HMyZ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
