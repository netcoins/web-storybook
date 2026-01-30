import{j as b}from"./jsx-runtime-YVpTO9Gy.js";import{r as d}from"./index-DvzEW59P.js";import{C as i}from"./index-BULcXa_M.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D9hs98DK.js";import"./index-BiqwK5o5.js";import"./index-BusDrbOB.js";import"./factory-DPsV-Df3.js";import"./index-DcME5kjJ.js";import"./create-recipe-context-CXZAdpmm.js";import"./numericalFormatting-DiE0VK_B.js";import"./stringFormatting-BRGpI08K.js";import"./index-BX9kmznL.js";import"./iconBase-Btv4CH4-.js";import"./index-BW5dPhQd.js";import"./types-CBDjR42g.js";import"./index.esm-DC2n8fqf.js";import"./useColorFormatConverter-BAKZhKM7.js";import"./index-C2wwVZyy.js";import"./index-VPuVf9kU.js";import"./IconWrapper-Bhblh_f7.js";import"./theme-DMYu2WI8.js";import"./types-BWzpuUxo.js";import"./color-mode-BjT6B5EY.js";import"./icon-button-CVN68njS.js";import"./button-BenQTUVm.js";import"./attr-DhmmAXiK.js";import"./spinner-Be0ZGc2A.js";import"./skeleton-D31jT9d7.js";import"./stack-CSBqHll1.js";import"./input-group-B6oXUMEv.js";import"./field-gdkH7CSX.js";import"./create-slot-recipe-context-BuB-mzTk.js";import"./icon-Bk__gXYj.js";import"./use-field-context-BSDfgis2.js";import"./create-context-CVKzcN51.js";import"./factory-CLzC9jzR.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B-CrTsdJ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DHwuMkoI.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DbNLG5Kt.js";import"./index-BexNeMe9.js";import"./index-BwRDypRe.js";import"./use-locale-context-CXgXpCt6.js";import"./flex-aI4RCtcQ.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
