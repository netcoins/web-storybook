import{j as b}from"./jsx-runtime-DNabp6vP.js";import{r as d}from"./index-mys4YnTk.js";import{C as i}from"./index-DLpm6AgS.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DhJ-F6cv.js";import"./index-DGAEB6PI.js";import"./index-nf5oY5Co.js";import"./factory-RadjLeVb.js";import"./index-C4ZcEYmH.js";import"./create-recipe-context-CY9Ln4QB.js";import"./numericalFormatting-CXS0ElRU.js";import"./stringFormatting-BvGYkrfu.js";import"./index-ByF8BLu4.js";import"./iconBase-DoarWgLq.js";import"./index-BBKxMbCO.js";import"./types-DoKEtCm3.js";import"./index.esm-Rbndk6w_.js";import"./useColorFormatConverter-B1vfirjJ.js";import"./index-D6uUQPH9.js";import"./index-B_ZeebQy.js";import"./IconWrapper-CgbiOF9A.js";import"./theme-DMYu2WI8.js";import"./types-BDyAbaqb.js";import"./color-mode-PhwhN050.js";import"./icon-button-2ul5Y4bg.js";import"./button-BNjCBTth.js";import"./attr-DhmmAXiK.js";import"./spinner-DjxX-SyE.js";import"./skeleton-CY6KJtrO.js";import"./stack-NPgzWqCE.js";import"./input-group-ByRQvOgg.js";import"./field-BbUmxP-p.js";import"./create-slot-recipe-context-jWUnwPt4.js";import"./icon-Cfligyfw.js";import"./use-field-context-DkpEc-Ex.js";import"./create-context-BpDIB9Vw.js";import"./factory-bJ7Kr9x0.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BFgurxnK.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-lEeQZ8zS.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-T8xmJZXd.js";import"./index-CSovjGJd.js";import"./index-fLZKkVJm.js";import"./use-locale-context-C5uwjN8t.js";import"./flex-7Uwqc4yV.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
