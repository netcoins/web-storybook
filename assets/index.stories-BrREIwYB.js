import{j as b}from"./jsx-runtime-BF4M7H6S.js";import{r as d}from"./index-CcPnQtVc.js";import{C as i}from"./index-VrHF1B3k.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DaiGHfmA.js";import"./index-RtbIEfYA.js";import"./index-gGSd_tuc.js";import"./factory-DfZ_GLHF.js";import"./index-Dh77dQb7.js";import"./create-recipe-context-D_yoijnE.js";import"./numericalFormatting-sfx_HZbx.js";import"./stringFormatting-67-cNu0B.js";import"./index-QPDHu0vi.js";import"./iconBase-B9Ayvr_v.js";import"./index-CebPHTxL.js";import"./types-CqvNov5Q.js";import"./index.esm-BryMgwr3.js";import"./useColorFormatConverter-D0_l4mZa.js";import"./index-D9ww64sZ.js";import"./index-3mN5T-Vq.js";import"./IconWrapper-Dx8b9aCl.js";import"./theme-DMYu2WI8.js";import"./types-46GkiyaY.js";import"./color-mode-3-k0MeIY.js";import"./icon-button-D1qzwe0z.js";import"./button-BfLZ-VM-.js";import"./attr-DhmmAXiK.js";import"./spinner-DiyqDjLm.js";import"./skeleton-Cgpo4QtB.js";import"./stack-cZqjzF3h.js";import"./input-group-CCF-7K8C.js";import"./field-CC-Hk5CE.js";import"./create-slot-recipe-context-DY5iZR3X.js";import"./icon-6bd3B2Ot.js";import"./use-field-context-xJbHbs_J.js";import"./create-context-BBqg7HVM.js";import"./factory-Oor9AvS4.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D_MW--Ts.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-jXhLhQLW.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-PZ4yXx1y.js";import"./index-BxXR7b0z.js";import"./index-BKV_5PbR.js";import"./use-locale-context-CpLIZuHk.js";import"./flex-CXPrdUkq.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
