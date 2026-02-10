import{j as b}from"./jsx-runtime-D0j8ighF.js";import{r as d}from"./index-Bjl9x4An.js";import{C as i}from"./index-Bm5hFfae.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BKbmcILc.js";import"./index-WfT0S11K.js";import"./index-BDjd6R1y.js";import"./factory-meOjhzOA.js";import"./index-DYUkN7Ea.js";import"./create-recipe-context-CQhlGTHD.js";import"./numericalFormatting-CLBPSyV7.js";import"./stringFormatting-Bc-CZcK7.js";import"./index-B4RYgyCh.js";import"./iconBase-BDIq_Uzs.js";import"./index-Fl1jd9XV.js";import"./types-7s1Hjd_w.js";import"./index.esm-CANFEw97.js";import"./useColorFormatConverter-C24yn4Vc.js";import"./index-DZ1rZ4Uk.js";import"./index-DrniL7CW.js";import"./IconWrapper-CBQked-u.js";import"./theme-DMYu2WI8.js";import"./types-Bz6wce5n.js";import"./color-mode-Cy06qXX5.js";import"./icon-button-gM2V1MlJ.js";import"./button-DiodISAi.js";import"./attr-DhmmAXiK.js";import"./spinner-YETDV8CP.js";import"./skeleton-D6x80uBq.js";import"./stack-aeN9BL0s.js";import"./input-group-BJITPpUt.js";import"./field-iFUHFgem.js";import"./create-slot-recipe-context-BmsY035y.js";import"./icon-Cpjyx5WC.js";import"./use-field-context-B6PZyoVK.js";import"./create-context-DprOAEr5.js";import"./factory-Dn1XByA4.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BegJgoMc.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Cr_dKTmC.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-V2BdOexw.js";import"./index-_s9mJ0DW.js";import"./index-CjYKrjG1.js";import"./use-locale-context-5vmeQpBu.js";import"./flex-Cfnm5amj.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
