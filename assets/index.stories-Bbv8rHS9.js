import{j as d}from"./jsx-runtime-BRD6R0GW.js";import{r as b}from"./index-DghP1NKQ.js";import{C as i}from"./index-CYbk8PNt.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-ZHyus-fW.js";import"./index-IzZdnZj-.js";import"./index-BgoNz-9t.js";import"./factory-Ct2hEz6c.js";import"./index-D5pH0UZE.js";import"./create-recipe-context-BKOzy2ji.js";import"./numericalFormatting-Dmx8x7Wm.js";import"./stringFormatting-BNSHIHmi.js";import"./index-DyPBBHwz.js";import"./iconBase-DHXnvs95.js";import"./index-3IfoNY8q.js";import"./types-BJlFDIuw.js";import"./index.esm-DhFksOSF.js";import"./useColorFormatConverter-H6rkuQdc.js";import"./index-hmhhPCl4.js";import"./index-IBqvPqvS.js";import"./IconWrapper-BzC0t4DI.js";import"./theme-DMYu2WI8.js";import"./types-cGjEF-h3.js";import"./color-mode-6Ra4OaTw.js";import"./icon-button-MfjZ2acx.js";import"./button-Bunhrx-l.js";import"./attr-DhmmAXiK.js";import"./spinner-D5TZj8o-.js";import"./skeleton-DVU7drCb.js";import"./stack-frXQUfl-.js";import"./input-group-7NVKq20f.js";import"./field-CElsnGC9.js";import"./create-slot-recipe-context-C-dxgf5u.js";import"./icon-ta0TndNj.js";import"./use-field-context-COvlcQun.js";import"./create-context-iH1h34s0.js";import"./factory-DwGhjHtG.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-xhY7UNUR.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DUhU-uOn.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-BwqZVLYh.js";import"./index-BhwikxFV.js";import"./index-CMQRTCwC.js";import"./use-locale-context-D7DfQcNY.js";import"./flex-BodrJ31l.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
