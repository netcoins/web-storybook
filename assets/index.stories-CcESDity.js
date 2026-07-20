import{j as d}from"./jsx-runtime-NTOSteDC.js";import{r as b}from"./index-BgMO5fMJ.js";import{C as i}from"./index-BH_PzX1M.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BUkh0iid.js";import"./index-BnwXfoAg.js";import"./index-hC8Z7bH0.js";import"./factory-YZL-MebO.js";import"./index-BT4bpkGG.js";import"./create-recipe-context-B6lnw0jF.js";import"./numericalFormatting-CXY6B6Or.js";import"./stringFormatting-C_mQljSK.js";import"./index-BUb9W5xT.js";import"./iconBase-DFcsPij6.js";import"./index-1L9b92ck.js";import"./types-hv3_Alju.js";import"./index.esm-4RWL7zEk.js";import"./useColorFormatConverter-Dwm3Owkt.js";import"./index-DekC8wCP.js";import"./index-ByCKp_0G.js";import"./IconWrapper-BIzdmCdb.js";import"./theme-D-orLjha.js";import"./types-DrJRwLph.js";import"./color-mode-BcHFebzq.js";import"./icon-button-Dqr5M8AQ.js";import"./button-D3WYPjbr.js";import"./attr-DhmmAXiK.js";import"./spinner-DE_vzF3w.js";import"./skeleton-DQ_uYc-n.js";import"./stack-DAh5ySsY.js";import"./input-group-D6xzLdOS.js";import"./field-BPsqSJt3.js";import"./create-slot-recipe-context-CSuvDXA8.js";import"./icon-FGasikD9.js";import"./use-field-context-DkQC7Qif.js";import"./create-context-C3vEtmld.js";import"./factory-C2f8oxBE.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DE0oUeWy.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-BzoHp-Jq.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CsHhQW3k.js";import"./index-Dq0nvIc1.js";import"./index-B6rq3HoU.js";import"./use-locale-context-CYQX9JWo.js";import"./flex-ZuSbZT_S.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
