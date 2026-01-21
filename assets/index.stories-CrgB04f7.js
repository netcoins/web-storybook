import{j as b}from"./jsx-runtime-CXuEMHCc.js";import{r as d}from"./index-DWCqTqlq.js";import{C as i}from"./index-cxwiCY1n.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-C3sC0Urb.js";import"./index-D63h7itx.js";import"./index-BRt8y6ED.js";import"./factory-B6cV-n7x.js";import"./index-CYeRDnHu.js";import"./create-recipe-context-BQjsOjb0.js";import"./numericalFormatting-CssaNlo5.js";import"./stringFormatting-DlxqJRVC.js";import"./index-Cu0qynvn.js";import"./iconBase-CgPrQLqS.js";import"./index-C7u-2wtA.js";import"./types-CaPREOpO.js";import"./index.esm-xtGoauLv.js";import"./useColorFormatConverter-DoYen0sZ.js";import"./index-BN7hyBMN.js";import"./index-CF0OctL1.js";import"./IconWrapper-B-vUkiDs.js";import"./theme-DMYu2WI8.js";import"./types-sbBi8jhd.js";import"./color-mode-CYDtweeM.js";import"./icon-button-D4h8OqJE.js";import"./button-DG34yHYq.js";import"./attr-DhmmAXiK.js";import"./spinner-BPxnhxmm.js";import"./skeleton-DZZGfg81.js";import"./stack-TAFHdRhn.js";import"./input-group-cR-b6oQu.js";import"./field-CrZT5nwK.js";import"./create-slot-recipe-context-DJCkHth2.js";import"./icon-C6lAAFvR.js";import"./use-field-context-aC3qtfLJ.js";import"./create-context-3ytI-4hL.js";import"./factory-BwZQjjbE.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BcKn39sN.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-HnL5PA4g.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Cou-PIoa.js";import"./index-mEPFYMiw.js";import"./index-D4uzyClB.js";import"./use-locale-context-BkMXLXS_.js";import"./flex-KcyHNsg6.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
