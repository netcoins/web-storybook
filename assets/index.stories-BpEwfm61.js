import{j as b}from"./jsx-runtime-DgtzbHQJ.js";import{r as d}from"./index-PX2AmoWm.js";import{C as i}from"./index-De8j4uE2.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BW7K25f6.js";import"./index-DvZwf7Wk.js";import"./index-Cirj_Cwb.js";import"./factory-sYn6EvwR.js";import"./index-DrzeFSM5.js";import"./create-recipe-context-DVMpvz8n.js";import"./numericalFormatting-D2ky2r4d.js";import"./stringFormatting-AUZNams7.js";import"./index-Cc6MKl7I.js";import"./iconBase-Co39pdQz.js";import"./index-B2If7WlB.js";import"./types-DXr63WN4.js";import"./index.esm-BMOBLBOC.js";import"./useColorFormatConverter-BxWLtmA8.js";import"./index-DmT_5D8c.js";import"./index-Bt7IkYe6.js";import"./IconWrapper-D5O5LOC4.js";import"./theme-DMYu2WI8.js";import"./types-DLeWL5xr.js";import"./color-mode-ChsUh5W6.js";import"./icon-button-D-HeHS8g.js";import"./button-27Tv2S1b.js";import"./attr-DhmmAXiK.js";import"./spinner-4fCeQuBn.js";import"./skeleton-BW3WyJ6G.js";import"./stack-CC6yZPtC.js";import"./input-group-DatiUVit.js";import"./field-180L7Zc4.js";import"./create-slot-recipe-context-D5MLl0N3.js";import"./icon-D5F8lPFD.js";import"./use-field-context-Dfd-UwG1.js";import"./create-context-Bo_m7ogT.js";import"./factory-E-i8mIub.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Dn_ob5u2.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-BnkcNdSt.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-B6BRnUrr.js";import"./index-gBPXjBrv.js";import"./index-Cs-rpkpj.js";import"./use-locale-context-DZeAGfKZ.js";import"./flex-DsQKlC28.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
