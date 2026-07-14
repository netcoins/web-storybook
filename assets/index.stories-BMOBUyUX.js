import{j as d}from"./jsx-runtime-BKsa-kTY.js";import{r as b}from"./index-S3kalpvb.js";import{C as i}from"./index-Cm7EqDix.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-ymdZsafo.js";import"./index-VvhxGsXZ.js";import"./index-DRJhr-Ay.js";import"./factory-DTRAecla.js";import"./index-BPHdwlNW.js";import"./create-recipe-context-C76SP1PL.js";import"./numericalFormatting-Cj81FcRz.js";import"./stringFormatting-Dw2W6Hyv.js";import"./index-DE2uMa8X.js";import"./iconBase-9F9zCqNZ.js";import"./index-BntoJk__.js";import"./types-D6A4QU2g.js";import"./index.esm-CO0gMxPa.js";import"./useColorFormatConverter-CkqsxHSv.js";import"./index-tN8oabAU.js";import"./index-D98Bu4MG.js";import"./IconWrapper--4mgFzTs.js";import"./theme-D-orLjha.js";import"./types-DFgs2ml8.js";import"./color-mode-CgKgUysE.js";import"./icon-button-BxEszn14.js";import"./button-CyYs9oT3.js";import"./attr-DhmmAXiK.js";import"./spinner-DwxijqVz.js";import"./skeleton-CQJtnLQi.js";import"./stack-C6pVxDps.js";import"./input-group-DH7Hu1tZ.js";import"./field-C_kiE8Um.js";import"./create-slot-recipe-context-xQzwiBEp.js";import"./icon-DGRTBViV.js";import"./use-field-context-DnVWDFjb.js";import"./create-context-CqOh1Gb_.js";import"./factory-B4wKdx-L.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Pm7Gq5_G.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./icons-DmlnuD3M.js";import"./index-DNzuT5Qd.js";import"./index-BLVBAjsL.js";import"./index-kQU88sZT.js";import"./index-CIlnl8IP.js";import"./index-BjQpxOce.js";import"./use-locale-context-Cd-pG421.js";import"./flex-DLdxf52l.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="c40483cc-6175-4a25-865a-7808e9f8d838",n._sentryDebugIdIdentifier="sentry-dbid-c40483cc-6175-4a25-865a-7808e9f8d838")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
