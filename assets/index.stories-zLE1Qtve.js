import{j as b}from"./jsx-runtime-0OGM7D8K.js";import{r as d}from"./index-1P1cuAZu.js";import{C as i}from"./index-CnhIXc1k.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-B7ROeOph.js";import"./index-CJUIO4ff.js";import"./index-W1sMBFyr.js";import"./factory-DPvUXeh5.js";import"./index-CCa55i0U.js";import"./create-recipe-context-BMJ4Bne9.js";import"./numericalFormatting-B9KUcCRM.js";import"./stringFormatting-C8z7Qx0e.js";import"./index-DrbaCE0D.js";import"./iconBase-D9sNXsAR.js";import"./index-CGjFB_pV.js";import"./types-Cz55r_dD.js";import"./index.esm-BDtJ3E62.js";import"./useColorFormatConverter-ByfZbXgn.js";import"./index-Cj2AohNs.js";import"./index-DpwqFBAe.js";import"./IconWrapper-DBGD7qHU.js";import"./theme-DMYu2WI8.js";import"./types-BAFF9zQ4.js";import"./color-mode-CAFxY0To.js";import"./icon-button-CstuL5ue.js";import"./button-Bpjwt7-y.js";import"./attr-DhmmAXiK.js";import"./spinner-BR2YGWDH.js";import"./skeleton-gOxXofzu.js";import"./stack-CabptGAO.js";import"./input-group-CLh6luag.js";import"./field-MHGG9shF.js";import"./create-slot-recipe-context-CD1f4BuO.js";import"./icon-DSSspk90.js";import"./use-field-context-CEcqr4gq.js";import"./create-context-BexXYZEx.js";import"./factory-BV6aqosp.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DoEpLGjQ.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Dvxzsnwj.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-Cqc-BzUM.js";import"./index-BM1Z8WG2.js";import"./index-BJ3UbgYL.js";import"./use-locale-context-B8PG6r8S.js";import"./flex-DN0vLbX1.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
