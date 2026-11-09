import{j as d}from"./jsx-runtime-C59UixyM.js";import{r as b}from"./index-DrA2bMrC.js";import{C as i}from"./index-DvDieaTd.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BdGskVoo.js";import"./index-Cq1vRVxq.js";import"./index-Cn6i4Zrh.js";import"./factory-BO_uqw8M.js";import"./index-BpEnexkQ.js";import"./create-recipe-context-B56D5b4w.js";import"./numericalFormatting-DukX_M8X.js";import"./stringFormatting-DFZKTkiw.js";import"./index-wQhQDa7m.js";import"./iconBase-BqTamR0S.js";import"./index-D77fI_Bv.js";import"./types-D8qXaDki.js";import"./index.esm-D0gkFRzj.js";import"./useColorFormatConverter-BJkVKv-i.js";import"./index-7aYna7Y4.js";import"./index-CHoN_aUq.js";import"./IconWrapper-DKVfii2G.js";import"./theme-D-orLjha.js";import"./types-BP2uycxU.js";import"./color-mode-C5_1QNL7.js";import"./icon-button-B3s62mun.js";import"./button-DnhQwDCp.js";import"./attr-DhmmAXiK.js";import"./spinner-BN2slOPn.js";import"./skeleton-DJRydHvw.js";import"./stack-CvGHMQld.js";import"./input-group-B1uo1NA7.js";import"./field-B38Xf3MT.js";import"./create-slot-recipe-context-XurnZR1i.js";import"./icon-Fz-7Uxud.js";import"./use-field-context-U3zifuN2.js";import"./create-context-CPFXxin1.js";import"./factory-DnhdXfXU.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BZtc5lG_.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-ClTna0rl.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CSq8829W.js";import"./index-Claiuxw1.js";import"./index-cPps_6bW.js";import"./use-locale-context-BkAPZK1C.js";import"./flex-CQgJgZt_.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
