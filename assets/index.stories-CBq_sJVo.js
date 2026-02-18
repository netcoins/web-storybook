import{j as b}from"./jsx-runtime-BvfgqyqX.js";import{r as d}from"./index-tleJD8oB.js";import{C as i}from"./index-BEx3K9i3.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BrNVpXR8.js";import"./index-CZV6dh9D.js";import"./index-DBa8kk1E.js";import"./factory-C8zgxApk.js";import"./index-B_n9MNKY.js";import"./create-recipe-context-BmxWgX0L.js";import"./numericalFormatting-DhtSHW5d.js";import"./stringFormatting-yFygHDt4.js";import"./index-CLFE_QU-.js";import"./iconBase-D-5AZUIY.js";import"./index-Cowb9afM.js";import"./types-BOheLfFn.js";import"./index.esm-BCp2Nill.js";import"./useColorFormatConverter-Dpg5Jrwl.js";import"./index-SZJc9drA.js";import"./index-DX4UOwzS.js";import"./IconWrapper-B6vopr2D.js";import"./theme-DMYu2WI8.js";import"./types-l-lO17JM.js";import"./color-mode-N0979DRJ.js";import"./icon-button-DAXQNsWF.js";import"./button-6EwN_P_k.js";import"./attr-DhmmAXiK.js";import"./spinner-HBPl8SDU.js";import"./skeleton-CrTxgvQg.js";import"./stack-Cd_Wm_48.js";import"./input-group-BtOAYxVG.js";import"./field-CRX0Kq49.js";import"./create-slot-recipe-context-BOkeZ-QE.js";import"./icon-DTJkuv9I.js";import"./use-field-context-DDUPNMJy.js";import"./create-context-Da_XNqZt.js";import"./factory-CBdGxQOW.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-vkYNOr5F.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CVaGROSj.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CMG1zV9H.js";import"./index-CP_9R17k.js";import"./index-CnjDLc13.js";import"./use-locale-context-iKXlJ_gJ.js";import"./flex-BuN_dKI6.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
