import{j as d}from"./jsx-runtime-Dq7W06zL.js";import{r as b}from"./index-BjHbzPP8.js";import{C as i}from"./index-alFevLEs.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CFHa__DK.js";import"./index-cgHj5gpd.js";import"./index-COyK9N5Z.js";import"./factory-CUIbw2Bt.js";import"./index-D2ra4k4c.js";import"./create-recipe-context-Cxk0unds.js";import"./numericalFormatting-DKWpO9mb.js";import"./stringFormatting-C890yOwM.js";import"./index-L2_9s95c.js";import"./iconBase-CSInR4T_.js";import"./index-H0Rf4NIS.js";import"./types-Bya8AF9u.js";import"./index.esm-t8LjiQuJ.js";import"./useColorFormatConverter-DsXXEW3d.js";import"./index-9dDthqe6.js";import"./index-DmwnkCZC.js";import"./IconWrapper-BSt8CWR5.js";import"./theme-D-orLjha.js";import"./types-smbBaHhE.js";import"./color-mode-D6OYHb9C.js";import"./icon-button-Db3_V_Kt.js";import"./button-CNTjZ6un.js";import"./attr-DhmmAXiK.js";import"./spinner-DFQiVBWK.js";import"./skeleton-4x1sFo-H.js";import"./stack-CC9ERj2t.js";import"./input-group-OeZMQs32.js";import"./field-Bh4YOGfH.js";import"./create-slot-recipe-context-D8AogUrq.js";import"./icon-IQ5wlY6s.js";import"./use-field-context-BTmiaCSB.js";import"./create-context-BuevO5jH.js";import"./factory-DPsNDTcO.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-5PbLNB6V.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-B9e88lfj.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-BTr-UseD.js";import"./index-CmZrJnyz.js";import"./index-CXPErH3M.js";import"./use-locale-context-CoddZVdY.js";import"./flex-DhnK0Ebq.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
