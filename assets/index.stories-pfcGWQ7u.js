import{j as d}from"./jsx-runtime-Cy_Yt1kJ.js";import{r as b}from"./index-BGm0zkb6.js";import{C as i}from"./index-BMDO5fv4.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B4TYx1_P.js";import"./index-DfkyMtZw.js";import"./index-BUHku0_r.js";import"./factory-TqThdlkg.js";import"./index-DVIIDqPG.js";import"./create-recipe-context-BxDfs5L8.js";import"./numericalFormatting-DvRrG3X6.js";import"./stringFormatting-D6_uGBrM.js";import"./index-Dk9SYCTb.js";import"./iconBase-CKdlrUt7.js";import"./index-sFUO_bRS.js";import"./types-BpX5_-8M.js";import"./index.esm-C1QGb8nP.js";import"./useColorFormatConverter-2KAYf5QT.js";import"./index-SgIYqkTW.js";import"./index-CdjV9tos.js";import"./IconWrapper-B8XxBP95.js";import"./theme-D-orLjha.js";import"./types-DBxY25W7.js";import"./color-mode-DQ7Wn1G1.js";import"./icon-button-CnzKuCSX.js";import"./button-D685v6yz.js";import"./attr-DhmmAXiK.js";import"./spinner-BS8JVwea.js";import"./skeleton-DyCwJhgM.js";import"./stack-D20aLspE.js";import"./input-group-ArotDElk.js";import"./field-CIDoPlJH.js";import"./create-slot-recipe-context-0me9uDQK.js";import"./icon-BGq-Wc2Q.js";import"./use-field-context-3n2YLwar.js";import"./create-context-CM9s3U4L.js";import"./factory-K1epug5H.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BTSqAaDF.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-BAaExsrk.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-DQOs12En.js";import"./index-CMm0TDLj.js";import"./index-AKLCFhWn.js";import"./use-locale-context-0a80SidC.js";import"./flex-BDvoaPDf.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
