import{j as d}from"./jsx-runtime-YZ3G-iYu.js";import{r as b}from"./index-BS2vbNQg.js";import{C as i}from"./index-DH2uRQJr.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BX2xc-_U.js";import"./index-B8z01R1Y.js";import"./index-BIBh2192.js";import"./factory-Dg1TFsXz.js";import"./index-Clk5tSNG.js";import"./create-recipe-context-PhxApsI9.js";import"./numericalFormatting-CaAWESTu.js";import"./stringFormatting-9SWWlHPh.js";import"./index-aOgZSKCU.js";import"./iconBase-CboeoTjN.js";import"./index-DO_KtZEa.js";import"./types-D6FV2pvl.js";import"./index.esm-BtaOJ1x9.js";import"./useColorFormatConverter-B2fXDlZH.js";import"./index-Cfq8EuxB.js";import"./index-D3NeKLey.js";import"./IconWrapper-BD25o1Pn.js";import"./theme-D-orLjha.js";import"./types-BBiJSphr.js";import"./color-mode-HL2DhnOV.js";import"./icon-button-JdHpVamL.js";import"./button-Dztq2GMa.js";import"./attr-DhmmAXiK.js";import"./spinner-CfaLrlvh.js";import"./skeleton-CUsUe0jI.js";import"./stack-DpxukRFj.js";import"./input-group-Df1PVfa7.js";import"./field-vjwsIEhH.js";import"./create-slot-recipe-context-DcJDbZXT.js";import"./icon-8w6_OK_u.js";import"./use-field-context-Cgb4Qwak.js";import"./create-context-a0PSGyCM.js";import"./factory-BT1X8lRG.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BN3j2GKU.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-X-V7ucpc.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-A4ARPBR-.js";import"./index-2hBN-PtT.js";import"./index-Cd2H2Qi7.js";import"./use-locale-context-11IwyKIb.js";import"./flex-Bt2k7mEY.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
