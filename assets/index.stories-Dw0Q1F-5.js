import{j as b}from"./jsx-runtime-DBxujOLp.js";import{r as d}from"./index-HDHCKL1S.js";import{C as i}from"./index-DH7lrMB0.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DqNY1Mbr.js";import"./index-iZ60G2cB.js";import"./index-CgPzQfL8.js";import"./factory-C-6Oo286.js";import"./index-CBAdQ3B9.js";import"./create-recipe-context-DoKTuRzb.js";import"./numericalFormatting-BrFvfIq1.js";import"./stringFormatting-DZrzuwfU.js";import"./index-GX-cdDEZ.js";import"./iconBase-Dhemk1u5.js";import"./index-CVQj-H59.js";import"./types-BN5KfxcR.js";import"./index.esm-CKhwRBVl.js";import"./useColorFormatConverter-DOre46ii.js";import"./index-DQb6bglE.js";import"./index-D84mi3JZ.js";import"./IconWrapper-Cm4JSozv.js";import"./theme-DMYu2WI8.js";import"./types-C5RJ3InO.js";import"./color-mode-DQcCenTp.js";import"./icon-button-OdaVNcYu.js";import"./button-BDgx4IwJ.js";import"./attr-DhmmAXiK.js";import"./spinner-CVPfB2ny.js";import"./skeleton-B9DZtg37.js";import"./stack-CwLzpoIO.js";import"./input-group-7L0kSVXC.js";import"./field-DF9df5ft.js";import"./create-slot-recipe-context-FVkUQsqG.js";import"./icon-sAtHoJon.js";import"./use-field-context-BmfXXVOE.js";import"./create-context-C4ZCr8N3.js";import"./factory-DJiU1ecU.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CZxUaOZO.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DlPeb3Cj.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DiyWfDba.js";import"./index-CejL_Qc4.js";import"./index-mX9v4zlJ.js";import"./use-locale-context-uxQvS48D.js";import"./flex-FBoZP_4_.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
