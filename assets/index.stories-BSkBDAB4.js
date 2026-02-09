import{j as b}from"./jsx-runtime-aDiBerqi.js";import{r as d}from"./index-QHtmZMOc.js";import{C as i}from"./index-BqNt2-vD.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BWGQ-e-y.js";import"./index-BWAVOOMP.js";import"./index-DX2m3BLu.js";import"./factory-CAiCcLdZ.js";import"./index-MQf2AjTF.js";import"./create-recipe-context-C2eWbnfB.js";import"./numericalFormatting-CbqT6ww3.js";import"./stringFormatting-B9DaibkR.js";import"./index-CG0T9QDm.js";import"./iconBase-Bhx-vmP5.js";import"./index-BZx4hu-n.js";import"./types-BpWNOtjD.js";import"./index.esm-CHS3J8z_.js";import"./useColorFormatConverter-BLmyuoSu.js";import"./index-E35ZmiOz.js";import"./index-BMpr4_P-.js";import"./IconWrapper-2MrEA18q.js";import"./theme-DMYu2WI8.js";import"./types-CwTSBJMe.js";import"./color-mode-BBQ25pFD.js";import"./icon-button-Dp2P5kSP.js";import"./button-CTJoBQDg.js";import"./attr-DhmmAXiK.js";import"./spinner-R6GGbuEq.js";import"./skeleton-5QSm1s_2.js";import"./stack-Cqe9oQFW.js";import"./input-group-DR8hxtdF.js";import"./field-XEuq1P6f.js";import"./create-slot-recipe-context-DZDh3thd.js";import"./icon-Db8B1RaL.js";import"./use-field-context-CoxZdFQx.js";import"./create-context-CjGUCdtg.js";import"./factory-BoaWCybp.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BoXqgBC9.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-nEHd0VRJ.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BRWKyAje.js";import"./index-Bc4lnCfi.js";import"./index-Cx4ZODQ4.js";import"./use-locale-context-DfLxTiQ3.js";import"./flex-8HDKQfdF.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
