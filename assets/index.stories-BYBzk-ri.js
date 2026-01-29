import{j as b}from"./jsx-runtime-7yixh_5U.js";import{r as d}from"./index-BUh3xvHs.js";import{C as i}from"./index-CFoFiDrW.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BsuB-fvY.js";import"./index-DN3Rvfvf.js";import"./index-DhFsV7aF.js";import"./factory-BYnniXGj.js";import"./index-CfmZAZjw.js";import"./create-recipe-context-Dwiwssqq.js";import"./numericalFormatting-BLO6r6b5.js";import"./stringFormatting-BZKVIaGI.js";import"./index-BPp1dD4t.js";import"./iconBase-DDvwHFSR.js";import"./index-BmDiuvVM.js";import"./types-i_4xUcTY.js";import"./index.esm-B1_x4l9U.js";import"./useColorFormatConverter-BsHbCq2t.js";import"./index-CuV_UUZK.js";import"./index-D9z6W570.js";import"./IconWrapper-CvIC7bFm.js";import"./theme-DMYu2WI8.js";import"./types-CIuAlQbu.js";import"./color-mode-2l2_wo5m.js";import"./icon-button-t5uRIeoE.js";import"./button-CIp_oSu_.js";import"./attr-DhmmAXiK.js";import"./spinner-D9trGiGs.js";import"./skeleton-CL8v6Giw.js";import"./stack-Beeo9DLB.js";import"./input-group-yB3TsqbT.js";import"./field-bW9F_Cv9.js";import"./create-slot-recipe-context-C91mmyLH.js";import"./icon-D4WQkC7v.js";import"./use-field-context-BmNwbjJm.js";import"./create-context-BrungHNr.js";import"./factory-COYYFnqv.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DdYuhfNz.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BITOyxq7.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-CU5ZLFwR.js";import"./index-Djl66SsW.js";import"./index-aK8japuk.js";import"./use-locale-context-CIF6J7aY.js";import"./flex-CKAyNLPN.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
