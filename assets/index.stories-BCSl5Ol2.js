import{j as d}from"./jsx-runtime-CCRVXynG.js";import{r as b}from"./index-BELy8Dkx.js";import{C as i}from"./index-DrbqKa1d.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-o_2TxUQe.js";import"./index-sPUIfaCY.js";import"./index-CcxhxnrD.js";import"./factory-CJvbO2Gw.js";import"./index-C0IbJbm4.js";import"./create-recipe-context-yXDN9tEe.js";import"./numericalFormatting-aghUPMpR.js";import"./stringFormatting-C-_92eBZ.js";import"./index-MvLh9K7p.js";import"./iconBase-NJZpWQF1.js";import"./index--iQs6ez7.js";import"./types-Bt0EFqqt.js";import"./index.esm-ehz7Xs6U.js";import"./useColorFormatConverter-B3_w_7Oz.js";import"./index-C3EGyQR2.js";import"./index-C2-hHmOA.js";import"./IconWrapper-C10Zzkzq.js";import"./theme-D-orLjha.js";import"./types-Dh4LclSq.js";import"./color-mode-CYw0w3nf.js";import"./icon-button-DCvEIO40.js";import"./button-DmjCKSjU.js";import"./attr-DhmmAXiK.js";import"./spinner-Ft3-kMsJ.js";import"./skeleton-D43_ykDb.js";import"./stack-BKnPQADs.js";import"./input-group-C3tyZLPE.js";import"./field-BK41zlka.js";import"./create-slot-recipe-context-DX78yAB_.js";import"./icon-D7C1liIR.js";import"./use-field-context-DoQSZsoh.js";import"./create-context-B9CN9yxX.js";import"./factory-D5shfhPb.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BtKT7hs3.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-6rl3F-_X.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-D8EPn6aJ.js";import"./index-D804QfBB.js";import"./index-Ay4JRkWl.js";import"./use-locale-context-C-NrCje6.js";import"./flex-DvudTNLT.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
