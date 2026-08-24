import{j as d}from"./jsx-runtime-DjZ9KS0r.js";import{r as b}from"./index-DxpgWG7b.js";import{C as i}from"./index-DMFNJCY0.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Ca3FI6N_.js";import"./index-dEinOBNF.js";import"./index-RERI5SxM.js";import"./factory-CkIswdXp.js";import"./index-CA-zX646.js";import"./create-recipe-context-Ca2ETeP7.js";import"./numericalFormatting-DuwLMhF-.js";import"./stringFormatting-uVWgNK-7.js";import"./index-CiLjou_b.js";import"./iconBase-inQQw-X_.js";import"./index-CqU4yOtY.js";import"./types-CChSWMN9.js";import"./index.esm-C2rUt7kn.js";import"./useColorFormatConverter-B-NBYLUG.js";import"./index-CXbguA4k.js";import"./index-BmDLyhPP.js";import"./IconWrapper-CjuB12sF.js";import"./theme-D-orLjha.js";import"./types-BT1VWJp3.js";import"./color-mode-l7isAfj8.js";import"./icon-button-CITuGZP6.js";import"./button-DIm3ItXi.js";import"./attr-DhmmAXiK.js";import"./spinner-BBupLXtE.js";import"./skeleton-CdxIYIE6.js";import"./stack-X2DqdxXX.js";import"./input-group-BNEeqyej.js";import"./field-pwdFI1H1.js";import"./create-slot-recipe-context-DufNZYZ4.js";import"./icon-Bjoi7iP7.js";import"./use-field-context-r1MPkJdJ.js";import"./create-context-BJ1TGDfn.js";import"./factory-DnWGm3BK.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C0ZaeCEi.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-jfGilTQM.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-Bo9ToQBr.js";import"./index-kwmH48ZG.js";import"./index-LR98TBys.js";import"./use-locale-context-DqqzijXe.js";import"./flex-ie_KwMrI.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
