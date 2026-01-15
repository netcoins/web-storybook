import{j as b}from"./jsx-runtime-Ciu9vFw6.js";import{r as d}from"./index-D3ZUCIWZ.js";import{C as i}from"./index-Crg8zjW6.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CYfU2A1M.js";import"./index-B9X1ypQe.js";import"./index-BI4iJpE3.js";import"./factory-8Q1V0TBv.js";import"./index-Po7Q-z57.js";import"./create-recipe-context-XaO16wtv.js";import"./numericalFormatting-BdCuXurO.js";import"./stringFormatting-TsbmCYTg.js";import"./index-CmqROfgt.js";import"./iconBase-DqaTlC-7.js";import"./index-8lu2dnrE.js";import"./types-D8j8-XKG.js";import"./index.esm-DxE7fkaB.js";import"./useColorFormatConverter-CKLsest-.js";import"./index-k4ysbLRL.js";import"./index-Bo_ThZAw.js";import"./IconWrapper-9c4dh6f_.js";import"./theme-DMYu2WI8.js";import"./types-DTBPHNV1.js";import"./color-mode-BYZ-u1xo.js";import"./icon-button-B6w575rN.js";import"./button-CMIrRkt-.js";import"./attr-DhmmAXiK.js";import"./spinner-BoI7ccru.js";import"./skeleton-AO7Q0msM.js";import"./stack-CcYnFDzW.js";import"./input-group-qipdNtDM.js";import"./field-MqeMVvww.js";import"./create-slot-recipe-context-B_S8L_ac.js";import"./icon-UQmEZHqh.js";import"./use-field-context-Bd-BF34x.js";import"./create-context-C1ilVfGZ.js";import"./factory-B6vrsh1u.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DYvA1DRX.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-ZEaVCJBU.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CrSfnzVK.js";import"./index-CAyElBx_.js";import"./index-CCXExiXg.js";import"./use-locale-context-Chy5OiYs.js";import"./flex-CnHbzLHW.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
