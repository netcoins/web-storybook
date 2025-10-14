import{j as b}from"./jsx-runtime-CkqShpyA.js";import{r as d}from"./index-IW8FPJOU.js";import{C as s}from"./index-CgnIOEzO.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BJq5BMyn.js";import"./index-BHtEPB6G.js";import"./box-B-D2v0a0.js";import"./factory-CKtiPKZr.js";import"./text-GON4Vkp0.js";import"./use-style-config-8n956FSR.js";import"./numericalFormatting-Dg5ohAtR.js";import"./stringFormatting-0nMRDfYd.js";import"./index-kfdw80cU.js";import"./iconBase-C6AHXny0.js";import"./index-Bx4hPFev.js";import"./types-BedflaCU.js";import"./index.esm-CBWmNwV4.js";import"./useColorFormatConverter-QwgLKL98.js";import"./index-C-GhOg-C.js";import"./IconWrapper-B4LQlZqi.js";import"./theme-DMYu2WI8.js";import"./types-vX9D9biA.js";import"./form-control-CGRP2t5T.js";import"./context-Bn2zS-FM.js";import"./use-merge-refs-Bqvfu2Mu.js";import"./attr-DNG3tQ7M.js";import"./form-label-DBRGzY9A.js";import"./input-group-BfYZtgy3.js";import"./children-BsgAU_km.js";import"./input-element-DkleLXDU.js";import"./icon--S2rgtL6.js";import"./use-callback-ref-B6Bowab4.js";import"./use-update-effect-BN-81ZCS.js";import"./use-safe-layout-effect-Dwjav_-e.js";import"./use-event-listener-Dj7qYGEe.js";import"./call-all--NRVVPhS.js";import"./use-form-control-KeS-uruy.js";import"./flex-B8935f0N.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="4d362c60-2fee-4715-9bb2-9be69d1eee5b",n._sentryDebugIdIdentifier="sentry-dbid-4d362c60-2fee-4715-9bb2-9be69d1eee5b")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const re=["Default","Single"];export{c as Default,a as Single,re as __namedExportsOrder,ne as default};
