import{j as b}from"./jsx-runtime-ZI6Z-dzu.js";import{r as d}from"./index-B5XP0WwC.js";import{C as i}from"./index-CFuzLP9G.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-DRNniMC4.js";import"./index-CuPAvp9o.js";import"./index-B40KQeKh.js";import"./factory-hLNJDQjk.js";import"./index-zZJO9NJ8.js";import"./create-recipe-context-BgYW2p2v.js";import"./numericalFormatting-U-rciDTj.js";import"./stringFormatting-DkeK2aWU.js";import"./index-C0G6dD_w.js";import"./iconBase-38i7vPSg.js";import"./index-DB4x_e-Q.js";import"./types-BzSHPz5A.js";import"./index.esm-BYQPPqAi.js";import"./useColorFormatConverter-rQJe00hj.js";import"./index-DltnNELb.js";import"./index-orjnmwtH.js";import"./IconWrapper-B6e_i7t5.js";import"./theme-DMYu2WI8.js";import"./types-B0S6frxA.js";import"./color-mode-tki6fT9J.js";import"./icon-button-CEzNe-1R.js";import"./button-F7qCZEQU.js";import"./attr-DhmmAXiK.js";import"./spinner-DbsOvcVt.js";import"./skeleton-BasQXDOi.js";import"./stack-BwAM3Cff.js";import"./input-group-oRZw7U7K.js";import"./field-BqvGdx2r.js";import"./create-slot-recipe-context-B8uprmjH.js";import"./icon-CjgTRsk6.js";import"./use-field-context-BSlNDXbl.js";import"./create-context-DAN7Itxj.js";import"./factory-DVPRWu19.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CvATggAk.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Dcsh6KJ_.js";import"./index--Ouwiaud.js";import"./index-BLVBAjsL.js";import"./index-D0INw-E9.js";import"./index-B35l14ri.js";import"./index-DHnQOCdJ.js";import"./use-locale-context-DgDs1_va.js";import"./flex-Dm0c0XQx.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="b4ad0bcf-c808-4b40-8404-89e44b6a655d",n._sentryDebugIdIdentifier="sentry-dbid-b4ad0bcf-c808-4b40-8404-89e44b6a655d")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=d.useState({currencyOne:""});return b.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
