import{j as b}from"./jsx-runtime-BdkXbjko.js";import{r as d}from"./index-DB51DUFv.js";import{C as i}from"./index--DAnP7x8.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-BdH25jYA.js";import"./index-DKVwFCSW.js";import"./index-BIcqwx7Y.js";import"./factory-CEv1ktPX.js";import"./index-Bm1yYWlC.js";import"./create-recipe-context-cqBIdbee.js";import"./numericalFormatting-Lx2J5SEf.js";import"./stringFormatting-dCs2NKxR.js";import"./index-mDyLfx55.js";import"./iconBase-Cci91VHL.js";import"./index-TVRaRwLu.js";import"./types-D6JDWcLC.js";import"./index.esm-1mm5WntI.js";import"./useColorFormatConverter-DubOYLvO.js";import"./index-mdkoDVvE.js";import"./index-CSqNXfRu.js";import"./IconWrapper-C2_U1BJN.js";import"./theme-DMYu2WI8.js";import"./types-C-RgQ8JY.js";import"./color-mode-D3YyOUEg.js";import"./icon-button-DMY86Cyk.js";import"./button-B8BXZL3n.js";import"./attr-DhmmAXiK.js";import"./spinner-C6Bgahz8.js";import"./skeleton-DwwamfRl.js";import"./stack-DL_zZhN6.js";import"./input-group-DwLPJsG5.js";import"./field-BYhjXbn_.js";import"./create-slot-recipe-context-BYz_odB4.js";import"./icon-C3lFvyta.js";import"./use-field-context-DkY1Ch3A.js";import"./create-context-D2AkJT4o.js";import"./factory-TzRYTmhl.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D2xClmVb.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-C2zFHK-T.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-DofmaLkm.js";import"./index-CA_foo3-.js";import"./index-C7Msfp21.js";import"./use-locale-context-DWo43fKx.js";import"./flex-BxpYFeL2.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
