import{j as b}from"./jsx-runtime-u-6qd-el.js";import{r as d}from"./index-H08RK_yE.js";import{C as i}from"./index-Dl0skwwL.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-czKbx93c.js";import"./index-AZ5WUqR1.js";import"./index-CsVVJ4AF.js";import"./factory-BAGb02Ns.js";import"./index-BlPBLEqm.js";import"./create-recipe-context-D6UF33Qh.js";import"./numericalFormatting-BdPbjuCx.js";import"./stringFormatting-BgdACG2_.js";import"./index-CqiD0WE8.js";import"./iconBase-BtiFMvlY.js";import"./index-CIUizdFH.js";import"./types-ngJkVjL2.js";import"./index.esm-DojYnSbB.js";import"./useColorFormatConverter-BteJr02d.js";import"./index-Cjotvhly.js";import"./index-Bt2wc2Mw.js";import"./IconWrapper-B20C7fyy.js";import"./theme-DMYu2WI8.js";import"./types-BcZuC824.js";import"./color-mode-6SnMZu3d.js";import"./icon-button-CjLbkHII.js";import"./button-f3NsoD5G.js";import"./attr-DhmmAXiK.js";import"./spinner-BJB_93Er.js";import"./skeleton-CLpseNTE.js";import"./stack-JRGhDut6.js";import"./input-group-DxgTlSSM.js";import"./field-x8-r-LCs.js";import"./create-slot-recipe-context-C7Xtc5ey.js";import"./icon-DI1fej6o.js";import"./use-field-context-xQ5JBp_F.js";import"./create-context-BEl2lWMx.js";import"./factory-lzBkJamw.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D4E7OPXq.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DYFNS445.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-D0DXe0Bc.js";import"./index-Dx2yk9Qf.js";import"./index-jy6A5c5b.js";import"./use-locale-context-CJhWYnQ-.js";import"./flex-uxbJD1vw.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
