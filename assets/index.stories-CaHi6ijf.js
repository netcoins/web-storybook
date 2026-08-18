import{j as d}from"./jsx-runtime-61X6p04z.js";import{r as b}from"./index-FTHuyDgz.js";import{C as i}from"./index-CuSe3gWy.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-w46rLmyV.js";import"./index-DsX3710V.js";import"./index-CIBiqLQk.js";import"./factory-1wIWHVn8.js";import"./index-C1MnbaMG.js";import"./create-recipe-context-51Wky_FY.js";import"./numericalFormatting-B5K154tu.js";import"./stringFormatting-PhLda0tJ.js";import"./index-BLDur28M.js";import"./iconBase-Dn9Bs-L0.js";import"./index-p6kYSdGE.js";import"./types-Htb8MD6O.js";import"./index.esm-CgJdVPbZ.js";import"./useColorFormatConverter-B_rbyqSE.js";import"./index-7R0dq5IQ.js";import"./index-DPAO-M1U.js";import"./IconWrapper-BOGUdLoi.js";import"./theme-D-orLjha.js";import"./types-B25YbRo0.js";import"./color-mode-5Ju0sEEN.js";import"./icon-button-YEPExeRt.js";import"./button-C_1-umRw.js";import"./attr-DhmmAXiK.js";import"./spinner-Hh8fXAcT.js";import"./skeleton-GQSww-ul.js";import"./stack-CpKMBVjm.js";import"./input-group-6wWCWxHL.js";import"./field-Bi9gTM-F.js";import"./create-slot-recipe-context-CUHxvQJC.js";import"./icon-BDrRINN6.js";import"./use-field-context-BcJXzOac.js";import"./create-context-BhmVO2sS.js";import"./factory-B4n7juWv.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cf8zmWsa.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-Of5vkunC.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-w-UAPwIN.js";import"./index-D1W9R6k_.js";import"./index-Cp15CQdA.js";import"./use-locale-context-BrabtY5T.js";import"./flex-DOwOL4aM.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
