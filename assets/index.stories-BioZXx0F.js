import{j as b}from"./jsx-runtime-B_QZGRHU.js";import{r as d}from"./index-BmFZb7kM.js";import{C as i}from"./index-BRmzBfJf.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CYQC6yyR.js";import"./index-XlNgGUlv.js";import"./index-BXmB9v7M.js";import"./factory-D-qnGI5Z.js";import"./index-29tFnivV.js";import"./create-recipe-context-BhnHlAqQ.js";import"./numericalFormatting-tI2qtb9t.js";import"./stringFormatting-CzOfT7N_.js";import"./index-C-t0MQ1u.js";import"./iconBase-DQgngLqi.js";import"./index-Bmuipx5y.js";import"./types-CYWO44fi.js";import"./index.esm-IzELTDM7.js";import"./useColorFormatConverter-9dyoo32o.js";import"./index-D_4WIvlM.js";import"./index-CaQoc1jx.js";import"./IconWrapper-BHvvvAfS.js";import"./theme-DMYu2WI8.js";import"./types-TwfzlpoU.js";import"./color-mode-Cnm-smEv.js";import"./icon-button-DJ5hZvpO.js";import"./button-DsGZoONq.js";import"./attr-DhmmAXiK.js";import"./spinner-DryhmGmQ.js";import"./skeleton-LbzxkL9Z.js";import"./stack-BRo-31Bx.js";import"./input-group-hdRevzx2.js";import"./field-BWUpnmDO.js";import"./create-slot-recipe-context-DKfJEoIW.js";import"./icon-Dlgi_ll_.js";import"./use-field-context-3BRIuCmw.js";import"./create-context-DEpFLOLj.js";import"./factory-50A13anQ.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CVgayjla.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CXwFWDnP.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DKdyCKAp.js";import"./index-DAkO8SRl.js";import"./index-CeTrerxm.js";import"./use-locale-context-aiZRKtnh.js";import"./flex-B5zW3QsN.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
