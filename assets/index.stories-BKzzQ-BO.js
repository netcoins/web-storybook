import{j as b}from"./jsx-runtime-DxtjtboY.js";import{r as d}from"./index-L3vAlb-y.js";import{C as i}from"./index-DFVAUKU2.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DEysEr8S.js";import"./index-BEKalHd2.js";import"./index-DbelVYWN.js";import"./factory-B9ydZp0x.js";import"./index-kcyWw_-P.js";import"./create-recipe-context-D1tK31RP.js";import"./numericalFormatting-Dyp2EIr6.js";import"./stringFormatting-CYZuPiBJ.js";import"./index-CPyxFXPr.js";import"./iconBase-BUq_hCdc.js";import"./index-DCpT3Xeh.js";import"./types-D_kNePt8.js";import"./index.esm-BiHqTqT0.js";import"./useColorFormatConverter-fVvloAwP.js";import"./index-_f9ddYha.js";import"./index-HH_L7vYm.js";import"./IconWrapper-BDH726rD.js";import"./theme-DMYu2WI8.js";import"./types-Car_UGEL.js";import"./color-mode-h7cJMvYu.js";import"./icon-button-B9F9fbLd.js";import"./button-DokTW0Wy.js";import"./attr-DhmmAXiK.js";import"./spinner-DQHxhM-v.js";import"./skeleton-DqrjNTC4.js";import"./stack-oGIozCYN.js";import"./input-group-CpXZWogC.js";import"./field-BLGlucJN.js";import"./create-slot-recipe-context-AmuKVsZY.js";import"./icon-paSOMUCh.js";import"./use-field-context-Bsw_B8hx.js";import"./create-context-CbVx-s2l.js";import"./factory-BLxpcTLO.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-e8cVzEs8.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-FdeO1lik.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DSUxZ13_.js";import"./index-DvU9st2B.js";import"./index-Cqx1v9qP.js";import"./use-locale-context-BWILmsrT.js";import"./flex-DIY0cChB.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
