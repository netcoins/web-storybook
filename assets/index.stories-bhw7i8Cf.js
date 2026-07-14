import{j as d}from"./jsx-runtime-DdTrgmh6.js";import{r as b}from"./index-Doy9K_Lq.js";import{C as i}from"./index-CKpC1B-h.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CPKQXw8u.js";import"./index-PD4wFrx7.js";import"./index-CiD8ffQD.js";import"./factory-B_FeIluF.js";import"./index-DcnYjPVR.js";import"./create-recipe-context-eS8k-IfO.js";import"./numericalFormatting-B__uaVeO.js";import"./stringFormatting-Dtt0M0Rk.js";import"./index-Bta823fh.js";import"./iconBase-DThdn73S.js";import"./index-CIlsGupT.js";import"./types-CzcDTLHd.js";import"./index.esm-B_XMfJwj.js";import"./useColorFormatConverter-DVV2UMrQ.js";import"./index-MDJWhgnS.js";import"./index-DlKbNFHH.js";import"./IconWrapper-DIVeRFGK.js";import"./theme-D-orLjha.js";import"./types-B1sHBVi_.js";import"./color-mode-vkBR2unv.js";import"./icon-button-B7AYAQIj.js";import"./button-CU-guoam.js";import"./attr-DhmmAXiK.js";import"./spinner-DYB5rzf-.js";import"./skeleton-DwRLdBCT.js";import"./stack-CJEr98D3.js";import"./input-group-BpbBRtsw.js";import"./field-DOlY-tjT.js";import"./create-slot-recipe-context-C9afv3o-.js";import"./icon-BICUf5ZJ.js";import"./use-field-context-DOL8xcgG.js";import"./create-context-aTZI0bsY.js";import"./factory-un-6e7vo.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DRfnZesD.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-BjDtRF1n.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-DFmpnsNs.js";import"./index-D97N19Xa.js";import"./index-CKUrVTwF.js";import"./use-locale-context-DfUOnOoa.js";import"./flex-pu2ivikD.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
