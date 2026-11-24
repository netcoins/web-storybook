import{j as d}from"./jsx-runtime-ATAHYhDa.js";import{r as b}from"./index-DIrk1x5G.js";import{C as i}from"./index-CFbp640W.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BNaiGXWG.js";import"./index-DrgFRmju.js";import"./index-CXyISEFP.js";import"./factory-UAGRE-bk.js";import"./index-5oZEhw7j.js";import"./create-recipe-context-TArHIy8d.js";import"./numericalFormatting-D-awJXuO.js";import"./stringFormatting-D2pCxmub.js";import"./index-YsyNkL9P.js";import"./iconBase-Bfp-M5La.js";import"./index-Bjq3hrQ3.js";import"./types-CQf_1H1N.js";import"./index.esm-D_2rU5vl.js";import"./useColorFormatConverter-BG2ACrhR.js";import"./index-CFtuNTIz.js";import"./index-BOEmdoaq.js";import"./IconWrapper-DUwMGRDH.js";import"./theme-D-orLjha.js";import"./types-DRHYd0r5.js";import"./color-mode-B0vjAzQ4.js";import"./icon-button-DgbZVein.js";import"./button-BXFoe-eN.js";import"./attr-DhmmAXiK.js";import"./spinner-BtuEZShF.js";import"./skeleton-Cl865I1F.js";import"./stack-vBXN3jf0.js";import"./input-group-CK6Yz_r0.js";import"./field-CifvDdQw.js";import"./create-slot-recipe-context-IOcTTd2K.js";import"./icon-CF24s83Q.js";import"./use-field-context-1qMv5wgE.js";import"./create-context-DySYu1Sq.js";import"./factory-BwjozXtU.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B0G6fcAp.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-CTDb0rem.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-DPmP-I6D.js";import"./index-DnJBAwuu.js";import"./index-BG2z0qj9.js";import"./use-locale-context-KwiC6Z3f.js";import"./flex-DNMt-wOy.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
