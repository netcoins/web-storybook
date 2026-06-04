import{j as d}from"./jsx-runtime-DkZJPG3z.js";import{r as b}from"./index-DExMN8wL.js";import{C as i}from"./index-CMdIbzp3.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BfYFZoBX.js";import"./index-BS09JyKU.js";import"./index-Yd8pjtEd.js";import"./factory-CPEZs0lN.js";import"./index-CzKmmJX-.js";import"./create-recipe-context-RF6iu8gY.js";import"./numericalFormatting-BajSOVRu.js";import"./stringFormatting-DA8vKBQD.js";import"./index-DXpgHCy0.js";import"./iconBase-Cyt-L-X2.js";import"./index-DcOh2iz1.js";import"./types-Cq6n4dUe.js";import"./index.esm-BQ7e1GhK.js";import"./useColorFormatConverter-CWBGtGMQ.js";import"./index-BwIp2Axg.js";import"./index-BFsqhg9N.js";import"./IconWrapper-DGYc5Sqf.js";import"./theme-D-orLjha.js";import"./types-YYOK-_q4.js";import"./color-mode-CrFDGDnW.js";import"./icon-button-DXBNWRcQ.js";import"./button-D_XY9Ucb.js";import"./attr-DhmmAXiK.js";import"./spinner-BnlPU65q.js";import"./skeleton-EPXg2M5P.js";import"./stack-BOKpDuJB.js";import"./input-group-DYyqE9IY.js";import"./field-CV5cy-sU.js";import"./create-slot-recipe-context-Cd3KQfhl.js";import"./icon-Cz-Cw_vu.js";import"./use-field-context-DgfImoCI.js";import"./create-context-BofXG7Yl.js";import"./factory-DE1tisMu.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B4EYAzen.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-_7FlVNAi.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-CRQHZmnS.js";import"./index-C1Y7T-Q2.js";import"./index-BGdhcXXc.js";import"./use-locale-context-DDZby7qs.js";import"./flex-DnxvsJus.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
