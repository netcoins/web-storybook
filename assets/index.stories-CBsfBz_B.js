import{j as b}from"./jsx-runtime-BrDIq2Vy.js";import{r as d}from"./index-DwNhJ73_.js";import{C as i}from"./index-n54FfJgv.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CRrzge9r.js";import"./index-BFBicQsq.js";import"./index-BYgTkbrz.js";import"./factory-C1Uzg4zz.js";import"./index-Dr05u4es.js";import"./create-recipe-context-Oylc3ahw.js";import"./numericalFormatting-Dvjgkt4Q.js";import"./stringFormatting-sPsQ3Vjj.js";import"./index-aKDTXMeh.js";import"./iconBase-CXLIUDar.js";import"./index-CIVTJJNL.js";import"./types-QqSu7of4.js";import"./index.esm-wLwZ7-An.js";import"./useColorFormatConverter-DwX-TVYV.js";import"./index-DsC_UoyC.js";import"./index-DJZncEQP.js";import"./IconWrapper-BvQa7lwt.js";import"./theme-DMYu2WI8.js";import"./types-r1ugFsA_.js";import"./color-mode-YPmZ7lnv.js";import"./icon-button-BQdK1qKc.js";import"./button-ByokCN9o.js";import"./attr-DhmmAXiK.js";import"./spinner-BQMUlTwL.js";import"./skeleton-BJ0CVDYe.js";import"./stack-DBKNMwDX.js";import"./input-group-Dj8SZoQA.js";import"./field-DCqWh4Ev.js";import"./create-slot-recipe-context-BSkqsq95.js";import"./icon-DxLxHHwU.js";import"./use-field-context-BK7lymlY.js";import"./create-context-C-VJco7Q.js";import"./factory-BdHIA0hD.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DLEq7ZQD.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-D-72d_Q-.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-GrHIfG7b.js";import"./index-BAu7jeDG.js";import"./index-BqbSUrJq.js";import"./use-locale-context-BX6DLzva.js";import"./flex-IpYzbbMW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
