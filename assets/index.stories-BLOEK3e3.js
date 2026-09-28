import{j as d}from"./jsx-runtime-29Qfk9KL.js";import{r as b}from"./index-DNGu3sjt.js";import{C as i}from"./index-DaO-DSvZ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-TOhJAv1u.js";import"./index-DLEhvarh.js";import"./index-B3wK-pie.js";import"./factory-DLijOqeV.js";import"./index-CGHJav7I.js";import"./create-recipe-context-BFVYoSYo.js";import"./numericalFormatting-JkzuEl14.js";import"./stringFormatting-C7RHXyXm.js";import"./index-Bk5AU3ZK.js";import"./iconBase-0YgzzPuf.js";import"./index-C8tn5OQe.js";import"./types-B6HYA5yd.js";import"./index.esm-jNa1J-tp.js";import"./useColorFormatConverter-BUVQ_yu9.js";import"./index-Dkc7SIy7.js";import"./index-CT1-IAE9.js";import"./IconWrapper-8gugYNnc.js";import"./theme-D-orLjha.js";import"./types-Ctd9Yju_.js";import"./color-mode-eEnzZioz.js";import"./icon-button-Dbupu2Hn.js";import"./button-CoO1RO3x.js";import"./attr-DhmmAXiK.js";import"./spinner-DYjKBXcP.js";import"./skeleton-BNyv3Gtv.js";import"./stack-CeITEkXz.js";import"./input-group-CyYky3ak.js";import"./field-BPnbzDPd.js";import"./create-slot-recipe-context-DHVJLOri.js";import"./icon-CL_v9C79.js";import"./use-field-context-B8kDCP13.js";import"./create-context-CkT0tWSw.js";import"./factory-BYUBUBzB.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CnTHevb8.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-pDmrogWB.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-DJaz1NvF.js";import"./index-CrIMUGgR.js";import"./index-h7__Mhkq.js";import"./use-locale-context-CI6jNlfZ.js";import"./flex-PuTe28AO.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
