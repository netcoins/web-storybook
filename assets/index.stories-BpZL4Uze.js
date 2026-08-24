import{j as d}from"./jsx-runtime-8x-A6Wxb.js";import{r as b}from"./index-ojTWUFcI.js";import{C as i}from"./index-BSlXtVlM.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-hxK2I7d9.js";import"./index-bHUW-VBl.js";import"./index-DIB8MuzL.js";import"./factory-CCqnMufs.js";import"./index-CScJrfLt.js";import"./create-recipe-context-DwyIVBsh.js";import"./numericalFormatting-Cji-6vyj.js";import"./stringFormatting-CkMAKqms.js";import"./index-C97iw43W.js";import"./iconBase-DixheN5d.js";import"./index-D1IM7sN2.js";import"./types-B0FmjkVa.js";import"./index.esm-CHxB2pQy.js";import"./useColorFormatConverter-XyOv9Ot-.js";import"./index-Dez7MbZf.js";import"./index-95FxDoAe.js";import"./IconWrapper-BZkvtoU-.js";import"./theme-D-orLjha.js";import"./types-C-BHthbp.js";import"./color-mode-DBNGCvAp.js";import"./icon-button-B7YljAc6.js";import"./button-DfDcr1x7.js";import"./attr-DhmmAXiK.js";import"./spinner-D8hIOIgx.js";import"./skeleton-DFCLVDwK.js";import"./stack-DVfEpjU_.js";import"./input-group-yHM1XB3l.js";import"./field-CQFKkbRj.js";import"./create-slot-recipe-context-Bzqaa1Ge.js";import"./icon-BHzh5oyz.js";import"./use-field-context-D1ZBjOBB.js";import"./create-context-XwTSFXbL.js";import"./factory-DI2rNUYk.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-s5v9OhCp.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-l2C-GYsD.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CW9RkQj_.js";import"./index-Dx967tEU.js";import"./index-DI8I5cSl.js";import"./use-locale-context-CuglJ4j5.js";import"./flex-DJDmF0Mm.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
