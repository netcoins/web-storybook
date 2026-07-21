import{j as d}from"./jsx-runtime-dpHUe5oX.js";import{r as b}from"./index-DPsTlIcQ.js";import{C as i}from"./index-OX5JsYHQ.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-D4J09tqF.js";import"./index-BBKXkaS_.js";import"./index-BFDgfXC7.js";import"./factory-DcUfu5AJ.js";import"./index-DRCMA9EB.js";import"./create-recipe-context-3TfFPQ_z.js";import"./numericalFormatting-i5jcQdS7.js";import"./stringFormatting-ZLxmDW4e.js";import"./index-CIYBD4A_.js";import"./iconBase-BQceEhqF.js";import"./index-zGbWzBN3.js";import"./types-D7oyB0ED.js";import"./index.esm-Nwh7Rjkv.js";import"./useColorFormatConverter-C6FqpJsY.js";import"./index-V-bhHtkg.js";import"./index-DbPhlq6Y.js";import"./IconWrapper-WYppgMc7.js";import"./theme-D-orLjha.js";import"./types-DZ55HAvx.js";import"./color-mode-DorTQ_pA.js";import"./icon-button-4wufgt4y.js";import"./button-L69jpsz8.js";import"./attr-DhmmAXiK.js";import"./spinner-c1LSv21B.js";import"./skeleton-CMdTgRaP.js";import"./stack-8P0tmoY-.js";import"./input-group-CDtCOEjt.js";import"./field-C-ibONS3.js";import"./create-slot-recipe-context-gG80uYLW.js";import"./icon-ClJ4Cvth.js";import"./use-field-context-C2NoC21B.js";import"./create-context-BFrdJnFd.js";import"./factory-C7xUFiq6.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-jfMv8zJN.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-Cyv0Bv6L.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-GlM4NKcy.js";import"./index-CGkU_XEW.js";import"./index-CPungreA.js";import"./use-locale-context-BmWDqTNH.js";import"./flex-DnvIn_-I.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
