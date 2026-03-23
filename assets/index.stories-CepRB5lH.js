import{j as d}from"./jsx-runtime-BltyMVIj.js";import{r as b}from"./index-BjuGsieF.js";import{C as i}from"./index-DJK-sMsI.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B-P9KW7i.js";import"./index-DGYWOEqX.js";import"./index-Edfv0Anl.js";import"./factory-ocjNe6K2.js";import"./index-DflaUoxw.js";import"./create-recipe-context-By7s9Zk1.js";import"./numericalFormatting-DYl_FWqb.js";import"./stringFormatting-BhxH8PUv.js";import"./index-eUghAEEC.js";import"./iconBase-BDWalNut.js";import"./index-ue7BAODW.js";import"./types-ICKj_b2q.js";import"./index.esm-BiQ-PVy8.js";import"./useColorFormatConverter-DFWNXOfr.js";import"./index-ytlkeB_A.js";import"./index-Bxkea7U1.js";import"./IconWrapper-CHa9Dlbm.js";import"./theme-DMYu2WI8.js";import"./types-CwVLbh-j.js";import"./color-mode-CBToMy9a.js";import"./icon-button-BzEYbUqf.js";import"./button-ZueBprW2.js";import"./attr-DhmmAXiK.js";import"./spinner-B-e5hEbv.js";import"./skeleton-Dp1nZXAr.js";import"./stack-DIiR3leU.js";import"./input-group-UwC5IqZT.js";import"./field-Ck0sgloS.js";import"./create-slot-recipe-context-CC-za7tj.js";import"./icon-DgEtWLCh.js";import"./use-field-context-D83MLuUm.js";import"./create-context-7wl3JBuT.js";import"./factory-iSMd0M8_.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D5nKmaaZ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Bkb8vEjG.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-DG45gfGJ.js";import"./index-DgKPo2JY.js";import"./index-BwC597cU.js";import"./use-locale-context-rlkPj7tD.js";import"./flex-C9bK1Iii.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
