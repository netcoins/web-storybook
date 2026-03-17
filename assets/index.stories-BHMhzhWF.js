import{j as b}from"./jsx-runtime-CWIYlopj.js";import{r as d}from"./index-B7rof8nh.js";import{C as i}from"./index-DGjkEyzg.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BDqx6jC8.js";import"./index-_C9pPYg9.js";import"./index-BaBwGcon.js";import"./factory-DZWhZEsy.js";import"./index-hYMh-BgI.js";import"./create-recipe-context-BNEqmHsA.js";import"./numericalFormatting-OEZ_XVPt.js";import"./stringFormatting-4aTeoO4d.js";import"./index-DlFYPTn4.js";import"./iconBase-y0IgG-hX.js";import"./index-BngiR8h9.js";import"./types-D9pSEpSG.js";import"./index.esm-uIuqjGnJ.js";import"./useColorFormatConverter-DerqyLOx.js";import"./index-Bbp79Ro2.js";import"./index-BJSQbUUZ.js";import"./IconWrapper-DZs0sM_i.js";import"./theme-DMYu2WI8.js";import"./types-B_o9coK7.js";import"./color-mode-D7qFYnL6.js";import"./icon-button-YYqKgVqK.js";import"./button-CHL-NboF.js";import"./attr-DhmmAXiK.js";import"./spinner-TtBTnMEZ.js";import"./skeleton-CviPbvZ2.js";import"./stack-Dr6O5j-C.js";import"./input-group-T4TqNFFk.js";import"./field-B_5gEUJN.js";import"./create-slot-recipe-context-wFqtBxXe.js";import"./icon-DA2l8ccV.js";import"./use-field-context-Drmb0GH-.js";import"./create-context-CRWhTCEP.js";import"./factory-CEH2qnGd.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dtpdv5Eh.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-wqZJOLXy.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-D8cMayX4.js";import"./index-DWVPVL3t.js";import"./index-DLoZlVJE.js";import"./use-locale-context-D4TZSxIS.js";import"./flex-Bggr3XRf.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
