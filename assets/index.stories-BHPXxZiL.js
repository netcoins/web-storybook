import{j as d}from"./jsx-runtime-DbC44WDf.js";import{r as b}from"./index-CQtiP5W-.js";import{C as i}from"./index-C7Io5X0W.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-HX7IfX-E.js";import"./index-D9JborV8.js";import"./index-BeVGuXJQ.js";import"./factory-C1g9Nt31.js";import"./index-Wz9HiZoG.js";import"./create-recipe-context-DGjKhWId.js";import"./numericalFormatting-B5J5NOgd.js";import"./stringFormatting-CY59Q2dK.js";import"./index-CLYzHiRB.js";import"./iconBase-BL5HMgMq.js";import"./index-9bNE8O-I.js";import"./types-C4_yCHha.js";import"./index.esm-DsH4-CcN.js";import"./useColorFormatConverter-Crs_PvyP.js";import"./index-C5mZffmr.js";import"./index-papqKVk_.js";import"./IconWrapper-Bmy-A5Hm.js";import"./theme-D-orLjha.js";import"./types-CBAsZBPh.js";import"./color-mode-Dofp9sv2.js";import"./icon-button-Cxf-fdzV.js";import"./button-CVF5TL23.js";import"./attr-DhmmAXiK.js";import"./spinner-CYAjeUXB.js";import"./skeleton-B3GyZGtg.js";import"./stack-BtubjkGJ.js";import"./input-group-DrxhXHaL.js";import"./field-BrCONkXc.js";import"./create-slot-recipe-context-DMkemm9l.js";import"./icon-D1JcrNxR.js";import"./use-field-context-B-xE9U-V.js";import"./create-context-DEIXs1yV.js";import"./factory-CENUe966.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Chuy0k9k.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./icons-BtF9gu2P.js";import"./index-CUiv5Enp.js";import"./index-BLVBAjsL.js";import"./index-BNIFsM9j.js";import"./index-CPXiPJmz.js";import"./index-C3T8Y7we.js";import"./use-locale-context-r5rOvr59.js";import"./flex-SZL6UrBw.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="27d496e3-6fc3-4333-9a51-c164aa3443c6",n._sentryDebugIdIdentifier="sentry-dbid-27d496e3-6fc3-4333-9a51-c164aa3443c6")}catch{}const ye={component:i,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:"",currencyTwo:""});return d.jsx(i,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},t={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[a,o]=b.useState({currencyOne:""});return d.jsx(i,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:a,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var s,u,l;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
