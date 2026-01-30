import{j as b}from"./jsx-runtime-BVY10pED.js";import{r as d}from"./index-DW5bu5RW.js";import{C as i}from"./index-Dkpi81El.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CApDH0hY.js";import"./index-BCbbupt6.js";import"./index-B5j-RP-T.js";import"./factory-yOZ78Dg3.js";import"./index-D3k4mYSx.js";import"./create-recipe-context-BkNLTCsp.js";import"./numericalFormatting-DZ7cWPKu.js";import"./stringFormatting-B13vqIKC.js";import"./index-DZuEwn1E.js";import"./iconBase-BTYLBUKh.js";import"./index-BrLkiltn.js";import"./types-DAudMlzW.js";import"./index.esm-CcbmFPwF.js";import"./useColorFormatConverter-BWtE2Mx4.js";import"./index-p4RlcTn-.js";import"./index-CvS5Gq4J.js";import"./IconWrapper-rMYgVJ3m.js";import"./theme-DMYu2WI8.js";import"./types-H9ohBBL7.js";import"./color-mode-D2ofyYVm.js";import"./icon-button-BvL7cb0c.js";import"./button-fWua-gme.js";import"./attr-DhmmAXiK.js";import"./spinner-FxNy1ryz.js";import"./skeleton-Ds_Z9WVg.js";import"./stack-doreAFd5.js";import"./input-group-Ydi1_H1v.js";import"./field-iVyZGn6T.js";import"./create-slot-recipe-context-BDCi0j_a.js";import"./icon-XPDaqCT4.js";import"./use-field-context-BY-99woy.js";import"./create-context-Bkj2IisU.js";import"./factory-Bl0KWrBj.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CVBI5jZb.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-uPolhlRs.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Bwu7z2Tz.js";import"./index-DkF1YONj.js";import"./index-7_erN2mG.js";import"./use-locale-context-BbVkPGu5.js";import"./flex-8Giq18CW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
