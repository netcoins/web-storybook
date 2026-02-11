import{j as b}from"./jsx-runtime-C-DfjFgm.js";import{r as d}from"./index-CWoUtc2r.js";import{C as i}from"./index-C3UGi97N.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DMi0SriE.js";import"./index-NHxmOX84.js";import"./index-CMqRwz5b.js";import"./factory-DcdjxUcj.js";import"./index-9cu0JOvW.js";import"./create-recipe-context-DihguQ24.js";import"./numericalFormatting-BVJdddfH.js";import"./stringFormatting-Br-rsLFt.js";import"./index-B3x6KEvZ.js";import"./iconBase-D97UU3yC.js";import"./index-CxbYjmNY.js";import"./types-BcaaBaAZ.js";import"./index.esm-CRZo0NFU.js";import"./useColorFormatConverter-B7lY-W6x.js";import"./index-uh2CiHY0.js";import"./index-BgQfvFpc.js";import"./IconWrapper-DR6jAKNC.js";import"./theme-DMYu2WI8.js";import"./types-vXVZKTWY.js";import"./color-mode-B6xlBy-w.js";import"./icon-button-Cnida6b9.js";import"./button-BssHtsSc.js";import"./attr-DhmmAXiK.js";import"./spinner-C9j74I5p.js";import"./skeleton-DFZOHhUI.js";import"./stack-CBU187r_.js";import"./input-group-BuqkJ_JO.js";import"./field-BNFqrDwV.js";import"./create-slot-recipe-context-DR7d1sN0.js";import"./icon-BuIEVlED.js";import"./use-field-context-CrjG6H9E.js";import"./create-context-CVoT-_s9.js";import"./factory-D8FEuAQT.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CUm5OVgO.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-CnOCWCMV.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-C6D5kX8u.js";import"./index-BFRN0wtV.js";import"./index-BTtFvzRX.js";import"./use-locale-context-CS8eBo3-.js";import"./flex-euIY3QBo.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
