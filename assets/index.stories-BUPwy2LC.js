import{j as b}from"./jsx-runtime-Bkqm60Fd.js";import{r as d}from"./index-gq4ihODM.js";import{C as i}from"./index-CWfEdtcH.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C6kebKm6.js";import"./index-DBxE7ZN-.js";import"./index-DZMJxMb1.js";import"./factory-CWmNxzkf.js";import"./index-CKHISS95.js";import"./create-recipe-context-Dpntgim3.js";import"./numericalFormatting-CgSfLsof.js";import"./stringFormatting-aD6a9yaT.js";import"./index-fNZAsoi2.js";import"./iconBase-BBlRpcer.js";import"./index-DJS6cHVw.js";import"./types-B0g6DURd.js";import"./index.esm-BGkGkyjO.js";import"./useColorFormatConverter-CG70OPhG.js";import"./index-BNtmiEke.js";import"./index-BTPm05jA.js";import"./IconWrapper-BkeK3-qX.js";import"./theme-DMYu2WI8.js";import"./types-CgCUjcX1.js";import"./color-mode-DW5oD5QQ.js";import"./icon-button-Dr9mtXdG.js";import"./button-f65VYvbu.js";import"./attr-DhmmAXiK.js";import"./spinner-hkNlqNv1.js";import"./skeleton-Dks-ZOnr.js";import"./stack-BkETM8K_.js";import"./input-group-zYuZLa2K.js";import"./field-yC9FZpso.js";import"./create-slot-recipe-context-DUJS-TNr.js";import"./icon-pNcQxXL6.js";import"./use-field-context-CVW_AzM3.js";import"./create-context-DOxQlMuh.js";import"./factory-u7MOd-Lz.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DJ87Ieuc.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CdJ08tX4.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-mKTgb1Ny.js";import"./index-AY189Qph.js";import"./index-9OSA5oOi.js";import"./use-locale-context-BdgXv1Vq.js";import"./flex-BBE0JoKc.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
