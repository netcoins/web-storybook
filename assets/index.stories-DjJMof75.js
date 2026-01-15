import{j as b}from"./jsx-runtime-Cvbzbb4L.js";import{r as d}from"./index-Bk_lK4dE.js";import{C as i}from"./index-BdNiRqBo.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BANvMm9q.js";import"./index-bOJpMI9w.js";import"./index-DB9703Tc.js";import"./factory-C9gVng0o.js";import"./index-DY4-VTHJ.js";import"./create-recipe-context-BGOEO3ph.js";import"./numericalFormatting-DLXh8j-G.js";import"./stringFormatting-eImMp3Xn.js";import"./index-D5RNH5Gu.js";import"./iconBase-CKnDgKXJ.js";import"./index-97LJ-869.js";import"./types-kGfg81NG.js";import"./index.esm-BLPaJsVZ.js";import"./useColorFormatConverter-B3hvhfbR.js";import"./index-BEvLBB82.js";import"./index-Cf3af1Cr.js";import"./IconWrapper-odx1cDmp.js";import"./theme-DMYu2WI8.js";import"./types-jNYe16-l.js";import"./color-mode-Bs0Z5gnl.js";import"./icon-button-DvH2sKob.js";import"./button-D6K6SuhU.js";import"./attr-DhmmAXiK.js";import"./spinner-CvdZAnEr.js";import"./skeleton-l1pwevfO.js";import"./stack-NoryMxyE.js";import"./input-group-ZRSUQcQx.js";import"./field-Bmvm4axY.js";import"./create-slot-recipe-context-c-kSauhy.js";import"./icon-Ghh1BD4w.js";import"./use-field-context-MsGG_O4V.js";import"./create-context-CoWaMeE1.js";import"./factory-oKi7FqA4.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C0ILbdRR.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Chn8PkmL.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BUxGXZRA.js";import"./index-hbx5MZN1.js";import"./index-D5p_im79.js";import"./use-locale-context-nuxHRxt6.js";import"./flex-CimcCm75.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
