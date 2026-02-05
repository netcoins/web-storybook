import{j as b}from"./jsx-runtime-DQo9fPet.js";import{r as d}from"./index-229XtvDh.js";import{C as i}from"./index-Lnrav_Hn.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-ChFTKlVI.js";import"./index-C7qTrXp3.js";import"./index-C_-3R0Xz.js";import"./factory-CmDP7x3O.js";import"./index-CxqVxvyH.js";import"./create-recipe-context-BR_oivjX.js";import"./numericalFormatting-DB-rE4N9.js";import"./stringFormatting-BOywwM4o.js";import"./index-BrHpvttZ.js";import"./iconBase-BaDQeOPx.js";import"./index-j7nDdBOZ.js";import"./types-ConKdqU2.js";import"./index.esm-DoItNUrI.js";import"./useColorFormatConverter-CTUw8_LT.js";import"./index-YrrtSlZ5.js";import"./index-DqL0_Vxj.js";import"./IconWrapper-DfyrbPCj.js";import"./theme-DMYu2WI8.js";import"./types-BIv_f5je.js";import"./color-mode-QPJGjkXm.js";import"./icon-button-BhFqRiCJ.js";import"./button-C1Iun9uq.js";import"./attr-DhmmAXiK.js";import"./spinner-BNiF-eaO.js";import"./skeleton-Cyz-s8gK.js";import"./stack-DNowTymN.js";import"./input-group-DlOeY0l6.js";import"./field-BtpOKrmq.js";import"./create-slot-recipe-context-DfignGIo.js";import"./icon-BVUSo3jz.js";import"./use-field-context-CMK9blh9.js";import"./create-context-8f5wdsN6.js";import"./factory-BElNn8EN.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CwFKIzWy.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-DOKZWjtD.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-BWEtZFI-.js";import"./index-CnBJKnLv.js";import"./index-B09YaBTx.js";import"./use-locale-context-COiaeQ91.js";import"./flex-D3pQY3_v.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
