import{j as b}from"./jsx-runtime-BIoZ2dCl.js";import{r as d}from"./index-CyRyEcWT.js";import{C as i}from"./index-BIYn_OSw.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-COvAF4CN.js";import"./index-DZR51Zsd.js";import"./index-CN0u3JpD.js";import"./factory-ErsUi8OB.js";import"./index-ScbkrUjv.js";import"./create-recipe-context-DRJMtmFR.js";import"./numericalFormatting-DrMDjgAD.js";import"./stringFormatting-BRe71qBJ.js";import"./index-0gmafPrL.js";import"./iconBase-D4EbIw8Q.js";import"./index-xtkYM1bH.js";import"./types-DjpX97hm.js";import"./index.esm-BaK5f95z.js";import"./useColorFormatConverter-CTRFc8fp.js";import"./index-CLGsZlZE.js";import"./index-BjJbsMMT.js";import"./IconWrapper-Eu8kvo3D.js";import"./theme-DMYu2WI8.js";import"./types-DuEH93WK.js";import"./color-mode-BBva1DpT.js";import"./icon-button-Cxd4N8tV.js";import"./button-7uSJxb4b.js";import"./attr-DhmmAXiK.js";import"./spinner-DksmEeuV.js";import"./skeleton-C7VvfD8I.js";import"./stack-cZf5Ao1o.js";import"./input-group-3rHkTDhc.js";import"./field-Dkk13VxJ.js";import"./create-slot-recipe-context-DkFSk3G6.js";import"./icon-BjXk_YF2.js";import"./use-field-context-D1fjxzbB.js";import"./create-context-DAUj2LrL.js";import"./factory-Dqletjb-.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DSiRlzgy.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CrH8SrCN.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Bk9TZgpg.js";import"./index-B8BBeIPL.js";import"./index-Bt_Pb3m2.js";import"./use-locale-context-Bp9QmrpD.js";import"./flex-DMJ9oSOn.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
