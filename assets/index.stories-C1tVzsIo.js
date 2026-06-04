import{j as d}from"./jsx-runtime-D9n_btLS.js";import{r as b}from"./index-B_wJ61bp.js";import{C as i}from"./index-19-Bhnnx.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-1RBj3wOP.js";import"./index-owKYYE_3.js";import"./index-BLEa5hZ3.js";import"./factory-CyXdg-dj.js";import"./index-Bl4cAPWq.js";import"./create-recipe-context-DN1RLOxq.js";import"./numericalFormatting-DWgtbGqk.js";import"./stringFormatting-B_vpNkVn.js";import"./index-Bn-MvMLo.js";import"./iconBase-CezN9Gbw.js";import"./index-C0sAReGz.js";import"./types-nbimkKB-.js";import"./index.esm-BObTKMPp.js";import"./useColorFormatConverter-q-Yq07yA.js";import"./index-Cnig8v3c.js";import"./index-zl2zPYr2.js";import"./IconWrapper-BWSdEIUj.js";import"./theme-D-orLjha.js";import"./types-BiEG2T_l.js";import"./color-mode-BMZ9UIOf.js";import"./icon-button-CwKyN9QG.js";import"./button-BFkTNIvJ.js";import"./attr-DhmmAXiK.js";import"./spinner-DmvQ2J-h.js";import"./skeleton-DosHTnA2.js";import"./stack-C2_EcsIC.js";import"./input-group-Cj2STJaX.js";import"./field-OOUdZejl.js";import"./create-slot-recipe-context-L6bnsHVP.js";import"./icon-BLYmZpDL.js";import"./use-field-context-Cy4Rc0ye.js";import"./create-context-BjdCf3nT.js";import"./factory-BMiD_fvp.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DRC9xWgb.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./icons-Cw_f4ACE.js";import"./index-w4LQ1Xt6.js";import"./index-BLVBAjsL.js";import"./index-BBjY1HWT.js";import"./index-CS48tdeX.js";import"./index-DZDnQa2y.js";import"./use-locale-context-Bylepbc3.js";import"./flex-yBvgSHlG.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="d645d4bc-9ef2-448a-9d08-4c8b3b28eced",n._sentryDebugIdIdentifier="sentry-dbid-d645d4bc-9ef2-448a-9d08-4c8b3b28eced")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
