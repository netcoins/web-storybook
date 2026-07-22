import{j as d}from"./jsx-runtime-CVRg4XhV.js";import{r as b}from"./index-BtSqkbcu.js";import{C as i}from"./index-DZFryLOa.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D_hlYlWl.js";import"./index-BrXX1rzQ.js";import"./index-JesgJ71m.js";import"./factory--V-sPcSn.js";import"./index-BqbUXWjh.js";import"./create-recipe-context-BrWCAkPX.js";import"./numericalFormatting-CB8hRU1o.js";import"./stringFormatting-B_GPmPah.js";import"./index-DaInESEs.js";import"./iconBase-B1nRdBgN.js";import"./index-CXjSCZ6n.js";import"./types-D4it2m59.js";import"./index.esm-BhshCoqR.js";import"./useColorFormatConverter-DTauljzD.js";import"./index-350jGckw.js";import"./index-BUWOd3Hl.js";import"./IconWrapper-D39dplSm.js";import"./theme-D-orLjha.js";import"./types-DDRsnOsB.js";import"./color-mode-Ob_iCA9O.js";import"./icon-button-C8LCEmYJ.js";import"./button-DzNv3SHm.js";import"./attr-DhmmAXiK.js";import"./spinner-DgYEPcB1.js";import"./skeleton-CA4-R8hc.js";import"./stack-DHAYRj-8.js";import"./input-group-nbAJ5xZF.js";import"./field-D0yCJOrY.js";import"./create-slot-recipe-context-4DzO8Ea8.js";import"./icon-B6GKRAdX.js";import"./use-field-context-BwFrGhC0.js";import"./create-context-cB0RdLHW.js";import"./factory-tckkHXlM.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BSfcELgs.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-DybU4FfY.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CzwmfC7t.js";import"./index-DAM3f0XV.js";import"./index-z3_lWKoQ.js";import"./use-locale-context-DELe_GJu.js";import"./flex-Xx19yt3s.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
