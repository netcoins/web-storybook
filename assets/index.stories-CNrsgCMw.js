import{j as d}from"./jsx-runtime-CduTOOfn.js";import{r as b}from"./index-ClPmWnsX.js";import{C as i}from"./index-Ct1f1K60.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BpABGnI4.js";import"./index-BhbUPRfa.js";import"./index-CH70ubJh.js";import"./factory-B3hSHJDC.js";import"./index-CMEDxCVY.js";import"./create-recipe-context-B2waEiXu.js";import"./numericalFormatting-Cr06itru.js";import"./stringFormatting-DIw8ZlAl.js";import"./index-bwFzWqk4.js";import"./iconBase-BVk6jCQq.js";import"./index-DZdKtrv4.js";import"./types-DqYp1gDz.js";import"./index.esm-BsC3GXYt.js";import"./useColorFormatConverter-BRxW3NKi.js";import"./index-CpYY3Dg8.js";import"./index-830OjV1u.js";import"./IconWrapper-OzR6gy89.js";import"./theme-D-orLjha.js";import"./types-0U7NkUgF.js";import"./color-mode-BanjnlIQ.js";import"./icon-button-C1Cq5hle.js";import"./button-DbYHaHW8.js";import"./attr-DhmmAXiK.js";import"./spinner-thS745cd.js";import"./skeleton-B7Ls8NQH.js";import"./stack-BjHxnlpl.js";import"./input-group-m0o7K6mn.js";import"./field-DpOeJwmR.js";import"./create-slot-recipe-context-D1te7Ir6.js";import"./icon-oBX4yy-1.js";import"./use-field-context-D12MP_Co.js";import"./create-context-xmcyEHj6.js";import"./factory-BVrBx0dq.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cok1_jl8.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CFWLUXKu.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-jDWBX6Q4.js";import"./index-joiVYGhu.js";import"./index-OGDBcsV8.js";import"./use-locale-context-C-4X2lFx.js";import"./flex-B82ORBpF.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
