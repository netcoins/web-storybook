import{j as d}from"./jsx-runtime-DoicMYWS.js";import{r as b}from"./index-DNdlWO5H.js";import{C as i}from"./index-Bd67DCyx.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DSQ9JSBG.js";import"./index-iZBmlMx8.js";import"./index-Dk3GMUO6.js";import"./factory-DE7yyQR0.js";import"./index-BG6_RFA9.js";import"./create-recipe-context-HdRpMqpb.js";import"./numericalFormatting-N5IqESQS.js";import"./stringFormatting-BycAy3eg.js";import"./index-Cdug8PNE.js";import"./iconBase-CIQhG1U3.js";import"./index-CAofED7J.js";import"./types-NAvF9iM9.js";import"./index.esm-c2MWcFpm.js";import"./useColorFormatConverter-D4YZsbu_.js";import"./index-B1roBAEe.js";import"./index-fHd4h5ev.js";import"./IconWrapper-BEYzgNsT.js";import"./theme-D-orLjha.js";import"./types-d_RLbZml.js";import"./color-mode-pYScYKhO.js";import"./icon-button-yjUl_a2V.js";import"./button-DNWc98Wp.js";import"./attr-DhmmAXiK.js";import"./spinner-YCzv7z72.js";import"./skeleton-CFlcXdnq.js";import"./stack-BrZblEjt.js";import"./input-group-Bvw7h_DX.js";import"./field-CDBVG7dd.js";import"./create-slot-recipe-context-BkkB0Gab.js";import"./icon-B5AgahgF.js";import"./use-field-context-zdPhpE4p.js";import"./create-context-B8EBDtyG.js";import"./factory-D3azWOJT.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C98wXqKf.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-S5oR5elF.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-C8bxUYFV.js";import"./index-Byvq8L2V.js";import"./index-BfoaV8by.js";import"./use-locale-context-CEFd7Pay.js";import"./flex-CtA8vkJm.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
