import{j as b}from"./jsx-runtime-B1YqPMzg.js";import{r as d}from"./index-C6Ifh64Z.js";import{C as i}from"./index-DJW_iv2E.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DxuRPcUd.js";import"./index-PgtJKhun.js";import"./index-BMJVRFE5.js";import"./factory-D2_oMNtR.js";import"./index-DehFT42x.js";import"./create-recipe-context-G-F8B2ld.js";import"./numericalFormatting-B_zpb12_.js";import"./stringFormatting-DfvbczUg.js";import"./index-TK7NCjQ3.js";import"./iconBase-SxvgYEOR.js";import"./index-DEA6frUR.js";import"./types-2ijdTlTS.js";import"./index.esm-CbvsDBvr.js";import"./useColorFormatConverter-BKCnzz-k.js";import"./index-CMWNrqDx.js";import"./index-BLzgalC3.js";import"./IconWrapper-QVujEf73.js";import"./theme-DMYu2WI8.js";import"./types-hQmVnQtr.js";import"./color-mode-Br67UNNZ.js";import"./icon-button-CMCJVQ62.js";import"./button-DCGkmVk4.js";import"./attr-DhmmAXiK.js";import"./spinner-BDy8dhp6.js";import"./skeleton-Cofe36cm.js";import"./stack-G0-Hs9UY.js";import"./input-group-DWbhNFqV.js";import"./field-Cu5evqaD.js";import"./create-slot-recipe-context-CDJMCMnz.js";import"./icon-CX4kF63o.js";import"./use-field-context-qg5FJMQx.js";import"./create-context-D6u6EDCp.js";import"./factory-BEIpqoMf.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DBLinOWL.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-wQvnTOoZ.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-LaxTnubX.js";import"./index-DOUhQWuc.js";import"./index-Pe3ZON2l.js";import"./use-locale-context-CWY39VhK.js";import"./flex-BsXV40MI.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
