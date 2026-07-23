import{j as d}from"./jsx-runtime-RQ8k3sMt.js";import{r as b}from"./index-OCzkGLPT.js";import{C as i}from"./index-fBOW2V65.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B47DNco7.js";import"./index-B4DRkGrt.js";import"./index-CIM3bxyb.js";import"./factory-P0_JX4kp.js";import"./index-Ddyb6Wlu.js";import"./create-recipe-context-BA02WGjK.js";import"./numericalFormatting-CEjZrZMz.js";import"./stringFormatting-DJVyVovr.js";import"./index-DVQThBvj.js";import"./iconBase-Cyc9pI5V.js";import"./index-CuTUCX9K.js";import"./types-s5Whku4i.js";import"./index.esm-DJHaC-rU.js";import"./useColorFormatConverter-DV2oiKcW.js";import"./index-B7H_FkDm.js";import"./index-PvvgBQXN.js";import"./IconWrapper-HU0f9iDK.js";import"./theme-D-orLjha.js";import"./types-D8pWz1Gb.js";import"./color-mode-Y6kjzatB.js";import"./icon-button-ahaz9brJ.js";import"./button-XXNIpZaP.js";import"./attr-DhmmAXiK.js";import"./spinner-B0S1843P.js";import"./skeleton-Mvx8gLm_.js";import"./stack--8Lb8nzU.js";import"./input-group-CQmqsp4d.js";import"./field-lqndZ-N-.js";import"./create-slot-recipe-context-BB-H1zAt.js";import"./icon-CO9U4eUa.js";import"./use-field-context-Dgu6822w.js";import"./create-context-CEs7pdWx.js";import"./factory-Cj7iSSOJ.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D4F_fc2D.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-T4IfpcrY.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-C_GeYPcM.js";import"./index-BvTDAgTf.js";import"./index-Dob5a5X0.js";import"./use-locale-context-Nnle0lP7.js";import"./flex-CVNQypev.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
