import{j as b}from"./jsx-runtime-BEUhhxPa.js";import{r as d}from"./index-DBM23BuH.js";import{C as i}from"./index-CbPXHSoh.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-H47w96H_.js";import"./index-BakkqRA1.js";import"./index--LIm_mEG.js";import"./factory-Aauz6rz0.js";import"./index-CSk_JCd_.js";import"./create-recipe-context-BE1JFOyh.js";import"./numericalFormatting-Cikdya09.js";import"./stringFormatting-BhYm7B-G.js";import"./index-D_mJZdjw.js";import"./iconBase-Ce4ODmaK.js";import"./index-dX90tmHB.js";import"./types-BO4TGL6A.js";import"./index.esm-6gSzw6bH.js";import"./useColorFormatConverter-CJy6vuir.js";import"./index-v1hrWzx6.js";import"./index-LjGfNRfM.js";import"./IconWrapper-CKgD0UoJ.js";import"./theme-DMYu2WI8.js";import"./types-BSgYhEb4.js";import"./color-mode-BMBt2Nmr.js";import"./icon-button-BgMEKwQI.js";import"./button-Bt0Py9ao.js";import"./attr-DhmmAXiK.js";import"./spinner-B_S03KXX.js";import"./skeleton-5rDaoyNq.js";import"./stack-BAkw1SmN.js";import"./input-group-BfVVOdWb.js";import"./field-9tam2a-o.js";import"./create-slot-recipe-context-Dq88yZwk.js";import"./icon-DoKXRjjY.js";import"./use-field-context-1ftB-pTa.js";import"./create-context-BtuTRjzY.js";import"./factory-Cvju92ob.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-eUexiVUl.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DloqsmNL.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Hs8SwUuK.js";import"./index-BNU9fL7F.js";import"./index-DoSglGze.js";import"./use-locale-context--hyY7w9l.js";import"./flex-B6-wpiI0.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
