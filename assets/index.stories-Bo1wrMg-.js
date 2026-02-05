import{j as b}from"./jsx-runtime-CbfWXZdM.js";import{r as d}from"./index-Dbu5ORvP.js";import{C as i}from"./index-Uyh2DjUh.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CAxZ8mgG.js";import"./index-BK6CVM24.js";import"./index-Du4VUMg_.js";import"./factory-D_1cLrCM.js";import"./index-BCQGA2NH.js";import"./create-recipe-context-DMJOz-xJ.js";import"./numericalFormatting-Du5CSkWW.js";import"./stringFormatting-C229lDI_.js";import"./index-DrnXVuNR.js";import"./iconBase-DZLFYoPK.js";import"./index-D1ikDZDN.js";import"./types-MfIZTqiI.js";import"./index.esm-U594VdF0.js";import"./useColorFormatConverter-HSOOHGrS.js";import"./index-DEBns6Fv.js";import"./index-CB7kU-Ce.js";import"./IconWrapper-DBDZf4CV.js";import"./theme-DMYu2WI8.js";import"./types-DiBvI8n0.js";import"./color-mode-BHYkESIc.js";import"./icon-button-Ch9JaqA9.js";import"./button-CQVp9zpF.js";import"./attr-DhmmAXiK.js";import"./spinner-D0VqeHT_.js";import"./skeleton-Chzag2Jw.js";import"./stack-BCQZigtg.js";import"./input-group-D_6BFrFi.js";import"./field-D0MkTaFj.js";import"./create-slot-recipe-context-DtfR-cUh.js";import"./icon-BWHMUnMc.js";import"./use-field-context-DNNXLXD8.js";import"./create-context-Bxm401fB.js";import"./factory-DE21cdeI.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Oy_J9JOL.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-rFQm2Xtn.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-1umBbmgB.js";import"./index-CgEDtrCz.js";import"./index-QHEBrzkI.js";import"./use-locale-context-CUCPVl2a.js";import"./flex-HZUojDDe.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
