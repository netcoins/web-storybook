import{j as b}from"./jsx-runtime-BLW7vmIs.js";import{r as d}from"./index-BuciqDi9.js";import{C as i}from"./index-OeoN4-Vm.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DiZSclG8.js";import"./index-CWSRq6zf.js";import"./index-D_bZ587B.js";import"./factory-CQh60Vfe.js";import"./index-Bwe7Da_z.js";import"./create-recipe-context-D7jXOWUf.js";import"./numericalFormatting-FTx1f66C.js";import"./stringFormatting-Bphfm5je.js";import"./index-dKLz0I_1.js";import"./iconBase-C3K2rWt0.js";import"./index-CeBrr7vA.js";import"./types-BX_FZ5N3.js";import"./index.esm-CotADk9P.js";import"./useColorFormatConverter-DOeSRWk6.js";import"./index-Qx5QikyW.js";import"./index-l--jtXH1.js";import"./IconWrapper-BMyUGkew.js";import"./theme-DMYu2WI8.js";import"./types-I5b3Ifx_.js";import"./color-mode-Dxala48Y.js";import"./icon-button-BhaBh6Ba.js";import"./button-DwPqojo3.js";import"./attr-DhmmAXiK.js";import"./spinner-fJR9AYKk.js";import"./skeleton-CFVHW_tn.js";import"./stack-Du1QtMiS.js";import"./input-group-C9whkEf1.js";import"./field-C8LX5nN2.js";import"./create-slot-recipe-context-Dj9vmKFq.js";import"./icon-D7P6YC7o.js";import"./use-field-context-Cqz2Vk_N.js";import"./create-context-D0c93ZHP.js";import"./factory-BgJucH8z.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DmXLTmo3.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-r9qCEGln.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-87lNcsQn.js";import"./index-oN33ymx3.js";import"./index-BaJITF0q.js";import"./use-locale-context-B845lndu.js";import"./flex-Dc63DRfh.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
