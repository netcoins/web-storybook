import{j as d}from"./jsx-runtime-CD1_vtUx.js";import{r as b}from"./index-CMnzKS7h.js";import{C as i}from"./index-hk1GIhct.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-CepHEkUM.js";import"./index-Ctr--CVR.js";import"./index-DVTgaKa7.js";import"./factory-Dy5ne_At.js";import"./index-DtA9_8B8.js";import"./create-recipe-context-CPIrATom.js";import"./numericalFormatting-CbvecYWl.js";import"./stringFormatting-a4Ioi5Ig.js";import"./index-CuLqocma.js";import"./iconBase-KccDBRcX.js";import"./index-Cfaniv9A.js";import"./types-Dn6m61cm.js";import"./index.esm-rgf3_cot.js";import"./useColorFormatConverter-Da_nK1dJ.js";import"./index-C74UT2Ix.js";import"./index-D8Vahxe-.js";import"./IconWrapper-CTQQOknK.js";import"./theme-D-orLjha.js";import"./types-sRk1v4xQ.js";import"./color-mode-D4Uj_cJJ.js";import"./icon-button-Ml9PqnE2.js";import"./button-EWLNwFOu.js";import"./attr-DhmmAXiK.js";import"./spinner-BbQtVInR.js";import"./skeleton-BL2YO705.js";import"./stack-Ae5-6MsW.js";import"./input-group-Bmq38lTf.js";import"./field-f1Xc_E5R.js";import"./create-slot-recipe-context-BXAXMN0K.js";import"./icon-BmT76vSy.js";import"./use-field-context-CqyvMIlM.js";import"./create-context-Be0TmX7n.js";import"./factory-D1Ydo2mU.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-TyIzF7rb.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-DY4SfmQ_.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-CHXAW4jd.js";import"./index-7bmnATwq.js";import"./index-kI1pKDnj.js";import"./use-locale-context-CyxdlCBq.js";import"./flex-0MNK0DX9.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
