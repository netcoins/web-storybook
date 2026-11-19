import{j as d}from"./jsx-runtime-CSb4GwCe.js";import{r as b}from"./index-qPvl7ajq.js";import{C as i}from"./index-DafE3GNh.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DV_QLQnz.js";import"./index-Gkck_2IN.js";import"./index-DEPqYUoG.js";import"./factory-CYXDsxQy.js";import"./index-D0TDNuV0.js";import"./create-recipe-context-BadC4lWu.js";import"./numericalFormatting-y0apWOK3.js";import"./stringFormatting-7KHSnY9i.js";import"./index-D0wbCSoc.js";import"./iconBase-CCTR-bxa.js";import"./index-CfCJnzqu.js";import"./types-CN3Z0IaX.js";import"./index.esm-R4vvUOCZ.js";import"./useColorFormatConverter-Cs4SK2Xc.js";import"./index-BJId75oB.js";import"./index-Ciu4iTQf.js";import"./IconWrapper-5g5eRHcx.js";import"./theme-D-orLjha.js";import"./types-BZ-9TaSE.js";import"./color-mode-BdOyUgjA.js";import"./icon-button-Dc3D3Ff1.js";import"./button-DuaI0Kn4.js";import"./attr-DhmmAXiK.js";import"./spinner-BizRjsXr.js";import"./skeleton-D9oFPkg9.js";import"./stack-BubkjnOz.js";import"./input-group-uYqs_Md3.js";import"./field-CHsQQ853.js";import"./create-slot-recipe-context-0awDiFiH.js";import"./icon-Cb9GXmSM.js";import"./use-field-context-DNNwAZvt.js";import"./create-context-DMf-5M48.js";import"./factory-voLpCmRv.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-EX7yYgdC.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-PVhWhCfM.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-B4oSqDZp.js";import"./index-DnjSmgRE.js";import"./index-LnzW0tDQ.js";import"./use-locale-context-D9Le0eAE.js";import"./flex-C80kLLfX.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
