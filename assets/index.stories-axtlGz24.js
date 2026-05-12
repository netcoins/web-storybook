import{j as d}from"./jsx-runtime-CJCQCLJI.js";import{r as b}from"./index-D8usWla-.js";import{C as i}from"./index-CB4NumSR.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-IWDmby_F.js";import"./index-BhAwlz2j.js";import"./index-D7r-7tD1.js";import"./factory-DedWl3Tk.js";import"./index-BxwczoFa.js";import"./create-recipe-context-CPj0a1UK.js";import"./numericalFormatting-CvztUrpe.js";import"./stringFormatting-BkgBYQVI.js";import"./index-3fXSA4Ff.js";import"./iconBase-B1VAODlm.js";import"./index-2vdo_tfS.js";import"./types-Bb8BpVSL.js";import"./index.esm-BlbiOE1S.js";import"./useColorFormatConverter-B6zR1Ot5.js";import"./index-3NA4VWyQ.js";import"./index-Dq0vSbVz.js";import"./IconWrapper-CHryEMli.js";import"./theme-D-orLjha.js";import"./types-auUehNaD.js";import"./color-mode-CclVGNHo.js";import"./icon-button-Uxm-OE58.js";import"./button-CegeHSAs.js";import"./attr-DhmmAXiK.js";import"./spinner-BeWklPwI.js";import"./skeleton-B6I1xp5g.js";import"./stack-CEz8mpCb.js";import"./input-group-DIJ9Awkx.js";import"./field-BVUHUyD-.js";import"./create-slot-recipe-context-D7RvhRsF.js";import"./icon-D_aEX7pC.js";import"./use-field-context-Cn2EotVe.js";import"./create-context-DQTmaOV4.js";import"./factory-DNT7CGpT.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-2WGmVval.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BPc5UJLb.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-x6Q_lp1p.js";import"./index-D85ezpTA.js";import"./index-zXXnIVSt.js";import"./use-locale-context-DeJ8gWfc.js";import"./flex-DuMVE5fE.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
