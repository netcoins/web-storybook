import{j as b}from"./jsx-runtime-BMe23sfu.js";import{r as d}from"./index-3uRWScih.js";import{C as i}from"./index-B6V7MTvi.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DO8Utu4A.js";import"./index-Bta8E39O.js";import"./index-DdhCPmU1.js";import"./factory-5lifs_Uf.js";import"./index-3hkjHPRT.js";import"./create-recipe-context-JEdEmLoL.js";import"./numericalFormatting-BLJjUs68.js";import"./stringFormatting-DX9mR1wn.js";import"./index-C7K-PE8c.js";import"./iconBase-BhSUSoPT.js";import"./index-Dax-rPWm.js";import"./types-DTqDQMcu.js";import"./index.esm-BjEMEgPx.js";import"./useColorFormatConverter-OGmnnpNM.js";import"./index-Hovq0g0r.js";import"./index-DbrXpF9-.js";import"./IconWrapper-BUHF326Y.js";import"./theme-DMYu2WI8.js";import"./types-Cp11Vp3T.js";import"./color-mode-BMbrLknA.js";import"./icon-button-BnhYOXv8.js";import"./button-DYtMcQ2w.js";import"./attr-DhmmAXiK.js";import"./spinner-DyQCA3dh.js";import"./skeleton-B_RHwsJi.js";import"./stack-DGOJf4HG.js";import"./input-group-BOAWiQq7.js";import"./field-hZlRc1Ir.js";import"./create-slot-recipe-context-CZXZtR1v.js";import"./icon-DTrIC6-A.js";import"./use-field-context-cSQid5c3.js";import"./create-context-CIH32tQA.js";import"./factory-CF4MNZmU.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-pw7MjvWF.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CQjG46XG.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CHzo0W0y.js";import"./index-BPkKsIEu.js";import"./index-DW6m2cXz.js";import"./use-locale-context-BESxcgKo.js";import"./flex-DB-eV0Db.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
