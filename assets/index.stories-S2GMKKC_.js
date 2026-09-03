import{j as d}from"./jsx-runtime-CVZYPpe3.js";import{r as b}from"./index-CaYcWLWq.js";import{C as i}from"./index-Bget97sK.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DxI-Xxek.js";import"./index-CYEbhkDB.js";import"./index-BE64qa4m.js";import"./factory-DerXpTZ7.js";import"./index-B9UJmMLF.js";import"./create-recipe-context-gmrgIQJg.js";import"./numericalFormatting-DE62yAD1.js";import"./stringFormatting-BwlTCSZO.js";import"./index-DE7afPCt.js";import"./iconBase-C8F894Sy.js";import"./index-BzI4QaDo.js";import"./types-DPdOs-gH.js";import"./index.esm-B-mOrASf.js";import"./useColorFormatConverter-FVROWtKk.js";import"./index-Cq8JysY8.js";import"./index-Bfu1JmNP.js";import"./IconWrapper-CRfEQb-H.js";import"./theme-D-orLjha.js";import"./types-D62JpG42.js";import"./color-mode-DNb9yxVm.js";import"./icon-button-D2615jxZ.js";import"./button-CFlHdhO-.js";import"./attr-DhmmAXiK.js";import"./spinner-j5i0pIZU.js";import"./skeleton-O7eoA4e7.js";import"./stack-B3E5i3Ws.js";import"./input-group-CEeN7A0n.js";import"./field-FVX3ZI2O.js";import"./create-slot-recipe-context-Azz0Zyfa.js";import"./icon-Cgf6Ffhr.js";import"./use-field-context-Dk4bTIQn.js";import"./create-context-CSdpx3fF.js";import"./factory-CYvAY8Ws.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C4Ba3eMx.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-D3Ya11Ib.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-Dw4GHwN2.js";import"./index-9Ra_W91a.js";import"./index-BFHA2OmZ.js";import"./use-locale-context-7DrbYO-v.js";import"./flex-ChIhw5dD.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
