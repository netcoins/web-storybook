import{j as b}from"./jsx-runtime-nFzByLiI.js";import{r as d}from"./index-CGZuSIq3.js";import{C as i}from"./index-ROHL18Kc.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Bw6Up1i9.js";import"./index-99cYnghN.js";import"./index-DrqUaSaV.js";import"./factory-Btb8DIP_.js";import"./index-Bap8cVM3.js";import"./create-recipe-context-Dunp_Aku.js";import"./numericalFormatting-C9yPL-o4.js";import"./stringFormatting-DTCed8AG.js";import"./index-pwhw57S2.js";import"./iconBase-CSMb_o5_.js";import"./index-DrmsKpH6.js";import"./types-CNT9cKmJ.js";import"./index.esm-DY1OEX1l.js";import"./useColorFormatConverter-BfRVT7OR.js";import"./index-DYkQXI9g.js";import"./index-BI_GEAiI.js";import"./IconWrapper-BYxsA7pN.js";import"./theme-DMYu2WI8.js";import"./types-BUI7fWe3.js";import"./color-mode-DNPU-OQz.js";import"./icon-button-aBf93WeK.js";import"./button-DvW9NqUH.js";import"./attr-DhmmAXiK.js";import"./spinner-C5bpsrGQ.js";import"./skeleton-D0FbdEAz.js";import"./stack-B45SJNnS.js";import"./input-group-BA3AsbkE.js";import"./field-CMz-YaxU.js";import"./create-slot-recipe-context-DLA_dLZQ.js";import"./icon-CDLMSUbn.js";import"./use-field-context-D8ht8QAy.js";import"./create-context-Ixa4SXUd.js";import"./factory-DGthlQ1F.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BG-JW8dt.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D7257whU.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DMJnktWT.js";import"./index-C9ygYplY.js";import"./index-BevH-wRg.js";import"./use-locale-context-kAYMFkbv.js";import"./flex-Chy164kH.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
