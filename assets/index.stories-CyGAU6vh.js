import{j as b}from"./jsx-runtime-DsisYA5V.js";import{r as d}from"./index-CKMqqnRX.js";import{C as i}from"./index-DPud0cgf.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BmGz4e7O.js";import"./index-DfYkhCnB.js";import"./index-WRhI99xF.js";import"./factory-Cc9wlzk0.js";import"./index-7Ecb5-HI.js";import"./create-recipe-context-A4NzrDmT.js";import"./numericalFormatting-Tm_aBUjf.js";import"./stringFormatting-I3OIM8j0.js";import"./index-CRjqxKtr.js";import"./iconBase-D09jbBhI.js";import"./index-CpjbQbHs.js";import"./types-C2d73Vgx.js";import"./index.esm-DtdJ8M3I.js";import"./useColorFormatConverter-Ds_mVWhH.js";import"./index-BJRHnXuN.js";import"./index-QBswnd8m.js";import"./IconWrapper-CRu5Vtnl.js";import"./theme-DMYu2WI8.js";import"./types-UwUGfn0h.js";import"./color-mode-B-XvCCsK.js";import"./icon-button-Don1fyMy.js";import"./button-BV0q3xzJ.js";import"./attr-DhmmAXiK.js";import"./spinner-C_3A3SF_.js";import"./skeleton-B-ujUgIV.js";import"./stack-Cy_tz-BX.js";import"./input-group-BkUsNEjc.js";import"./field-BheTsbxb.js";import"./create-slot-recipe-context-OCKFpwcK.js";import"./icon-CEdFO0_q.js";import"./use-field-context-CI2uDJo5.js";import"./create-context-CK_wmhmM.js";import"./factory-BT9p-7y8.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BOuC2Yv3.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-5d-stagj.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DD9Yp8Xe.js";import"./index-CL_a17YK.js";import"./index-B6nkZF41.js";import"./use-locale-context-DEDmwn6D.js";import"./flex-B_EvRp7n.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
