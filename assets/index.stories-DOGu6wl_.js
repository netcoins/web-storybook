import{j as b}from"./jsx-runtime-DbvkyYZD.js";import{r as d}from"./index-BoxDUdTk.js";import{C as i}from"./index-BPu4_6gX.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D8w-pxek.js";import"./index-PVMNmfJT.js";import"./index-BrprQboO.js";import"./factory-B1BVY0n9.js";import"./index-D4Lh4ZJ4.js";import"./create-recipe-context-6lql2HUX.js";import"./numericalFormatting-ChlujmlX.js";import"./stringFormatting-BDjoLYxI.js";import"./index-CHlBkFWM.js";import"./iconBase-B-oR8SiC.js";import"./index-BkiiU0VS.js";import"./types-CybhLM25.js";import"./index.esm-DNNjiUAI.js";import"./useColorFormatConverter-BC6xdNWC.js";import"./index-D-eKkphl.js";import"./index-BAwOFgJs.js";import"./IconWrapper-DyIM1Jua.js";import"./theme-DMYu2WI8.js";import"./types-DBqYI4UW.js";import"./color-mode-RIzTu4R0.js";import"./icon-button-2GNdMsXP.js";import"./button-psr4bebK.js";import"./attr-DhmmAXiK.js";import"./spinner-Cl-UNF31.js";import"./skeleton-CDu8YmDQ.js";import"./stack-C5xCv2_5.js";import"./input-group-BHo3EUAN.js";import"./field-Cr3ZjHpX.js";import"./create-slot-recipe-context-BHNnS9mG.js";import"./icon-BqNPEnAH.js";import"./use-field-context-DboLCFeE.js";import"./create-context-BLWAqHwp.js";import"./factory-BTTf5Jjx.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CvhS_Z2Q.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D1lwFusK.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DOTT7wj5.js";import"./index-B3L6Fl-Q.js";import"./index-DcmcCQ6g.js";import"./use-locale-context-C-U_wJ9H.js";import"./flex-DgrC-Xw3.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
