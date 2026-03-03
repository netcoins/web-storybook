import{j as b}from"./jsx-runtime-C0fRXbar.js";import{r as d}from"./index-D4Zf458D.js";import{C as i}from"./index-Dr-hTCQu.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-bBSWD1Tg.js";import"./index-D-DY5h8b.js";import"./index-h3UWFF-P.js";import"./factory-D1ONI24A.js";import"./index-Nv1PTGUN.js";import"./create-recipe-context-r8X2UfhT.js";import"./numericalFormatting-DW8pXPr0.js";import"./stringFormatting-Bnc8HfyZ.js";import"./index-tI3kyUfn.js";import"./iconBase-BCBmLMOw.js";import"./index-CgoPuDaB.js";import"./types-BafXeXoO.js";import"./index.esm-J_i56aLd.js";import"./useColorFormatConverter-CLMYGC2r.js";import"./index-CYycQ7GP.js";import"./index-CToHcsKF.js";import"./IconWrapper-CPgaeYGv.js";import"./theme-DMYu2WI8.js";import"./types-CM7xr7hI.js";import"./color-mode-VYk6Kd8u.js";import"./icon-button-BwA7iWeW.js";import"./button-DfHiIcYQ.js";import"./attr-DhmmAXiK.js";import"./spinner-CsUCpoxK.js";import"./skeleton-B0-OqQNt.js";import"./stack-J6e6Xkeb.js";import"./input-group-CX7FHxE8.js";import"./field-CXjvBgMh.js";import"./create-slot-recipe-context-uQQmN7VU.js";import"./icon-CCoClnjh.js";import"./use-field-context-B32lZmfY.js";import"./create-context-B1kwbtPe.js";import"./factory-CNccXcJn.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B3kb5O_v.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DmYAgdrp.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DacfgpBe.js";import"./index-n3KrCqsu.js";import"./index-DYMGQ_Mm.js";import"./use-locale-context-BuX8pwLA.js";import"./flex-C0L6tFnI.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const be=["Default","Single"];export{c as Default,t as Single,be as __namedExportsOrder,ye as default};
