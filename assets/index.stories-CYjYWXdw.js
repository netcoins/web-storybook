import{j as b}from"./jsx-runtime-CP4nKzdQ.js";import{r as d}from"./index-BtIgOQNS.js";import{C as i}from"./index-CIlK0fZC.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-wiFF9nb3.js";import"./index-BHg7C-X9.js";import"./index-CnxuPyCl.js";import"./factory-eHtKlpVN.js";import"./index-B6NYvjTU.js";import"./create-recipe-context-KDjhqFwd.js";import"./numericalFormatting-QpoYVPwV.js";import"./stringFormatting-33G5uw3q.js";import"./index-CQZ2_0rY.js";import"./iconBase-BtQ6vqoS.js";import"./index-a6kwT4Ur.js";import"./types-DqsLbD-W.js";import"./index.esm-B9Smdsfj.js";import"./useColorFormatConverter-B37jtvKV.js";import"./index-Cx7jngQ1.js";import"./index-DxeWLtf3.js";import"./IconWrapper-BzdzWr0W.js";import"./theme-DMYu2WI8.js";import"./types-DZarl5eD.js";import"./color-mode-DhHJC96g.js";import"./icon-button-DTE2wowj.js";import"./button-D7OdK6w9.js";import"./attr-DhmmAXiK.js";import"./spinner-BQfVqKdb.js";import"./skeleton-wdaRPjIc.js";import"./stack-TMoGmj7S.js";import"./input-group-CMSdp8yM.js";import"./field-FlycJkyT.js";import"./create-slot-recipe-context-CA6jRw1R.js";import"./icon-FOYHG5uR.js";import"./use-field-context-BvFhfkN4.js";import"./create-context-Cmurla9d.js";import"./factory-HgC5yevf.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DNWTGJq-.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-VpLPnlho.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-o1KEF2md.js";import"./index-BON-wgls.js";import"./index-DzetRwug.js";import"./use-locale-context-Bi91Ai2L.js";import"./flex-lv2J4Goy.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
