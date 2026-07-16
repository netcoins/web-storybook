import{j as d}from"./jsx-runtime-Cr-OWk_J.js";import{r as b}from"./index-VuwwLw8C.js";import{C as i}from"./index-BGKux9yv.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DS-h_83g.js";import"./index-6hRhf-Hn.js";import"./index-BtJRV4EL.js";import"./factory-BgJQcnv6.js";import"./index-Dbxc1QaM.js";import"./create-recipe-context-NRTypbfF.js";import"./numericalFormatting-DEjamkgY.js";import"./stringFormatting-_kQFNxoC.js";import"./index-Dkf5yR0g.js";import"./iconBase-DuDPyJsP.js";import"./index-BoreZCT4.js";import"./types-BytKVIH7.js";import"./index.esm-CzRezVFo.js";import"./useColorFormatConverter-wxQMjXC8.js";import"./index-DbuyklZ2.js";import"./index-DwQGx5FJ.js";import"./IconWrapper-IIvDp1lX.js";import"./theme-D-orLjha.js";import"./types-3awHX7c1.js";import"./color-mode-Dfb0NZTZ.js";import"./icon-button-MHxemLCO.js";import"./button-DGdXWSdt.js";import"./attr-DhmmAXiK.js";import"./spinner-Dfik6Vr2.js";import"./skeleton-BRPVTq5L.js";import"./stack-u-VzDqZP.js";import"./input-group-D6Hb9_Bn.js";import"./field-BsZdiNAk.js";import"./create-slot-recipe-context-CVjDydnc.js";import"./icon-CrYxhdN4.js";import"./use-field-context-lgOq5njt.js";import"./create-context-CN-TaxrJ.js";import"./factory-DLCmHIVH.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0UAMUCL.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-CnD987FH.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-qGguP1DE.js";import"./index-rE6ifZzV.js";import"./index-BWp6VOly.js";import"./use-locale-context-C89hwE1T.js";import"./flex-DMlc-13s.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
