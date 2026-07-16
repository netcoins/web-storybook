import{j as d}from"./jsx-runtime-CztcPgbW.js";import{r as b}from"./index-C6WcHQVu.js";import{C as i}from"./index-Dwe9ToHc.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-ivN2um-2.js";import"./index-BDFIDHLx.js";import"./index-Cu59q5qw.js";import"./factory-CJkQxrme.js";import"./index-DmjKt0-Y.js";import"./create-recipe-context-CwIDP-ao.js";import"./numericalFormatting-HvTS7RNJ.js";import"./stringFormatting-CFO1R6PU.js";import"./index-DgOEmS6m.js";import"./iconBase-BX0Px6ub.js";import"./index-Dk-QLEMQ.js";import"./types-BnhNrmdr.js";import"./index.esm-BRsAtpWO.js";import"./useColorFormatConverter-DVQkr4Vx.js";import"./index-nSsedJbZ.js";import"./index-DY77qMWQ.js";import"./IconWrapper-CesavbAG.js";import"./theme-D-orLjha.js";import"./types-BYlYEmiw.js";import"./color-mode-CwgZp5WT.js";import"./icon-button-BFswoRTM.js";import"./button-COE5TYqy.js";import"./attr-DhmmAXiK.js";import"./spinner-p4Jfzthr.js";import"./skeleton-GIe9JoXB.js";import"./stack-GuBoGb4F.js";import"./input-group-DQ7wqQTL.js";import"./field-CV9dxmH0.js";import"./create-slot-recipe-context-BcxVd4Kv.js";import"./icon-B9_jY1jk.js";import"./use-field-context-VcRSjQ1I.js";import"./create-context-B3XnG-Fl.js";import"./factory-2Ss3JzA2.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-dSjGDzpp.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-5EUryMJi.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-C-VG2e1r.js";import"./index-BgqstqNg.js";import"./index-Barifufe.js";import"./use-locale-context-Aly0yhC9.js";import"./flex-BMlFDfj1.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
