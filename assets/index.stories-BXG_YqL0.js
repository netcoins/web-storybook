import{j as b}from"./jsx-runtime-BvBIwShg.js";import{r as d}from"./index-CDcfhRZO.js";import{C as s}from"./index-C0DUjL9Y.js";import{D as g}from"./decimal-C6g1TQWS.js";import"./iframe-Ce724jq7.js";import"./index-fq4srpic.js";import"./box-sNQzjEPu.js";import"./factory-0Wnaaj7g.js";import"./text-B7cnHvWE.js";import"./use-style-config-Dj-RQsNg.js";import"./numericalFormatting-DVWFeO4H.js";import"./stringFormatting-rBocLHbu.js";import"./index-BfSf7RSQ.js";import"./iconBase-CETdczyv.js";import"./index-Dz9BVMlu.js";import"./types-B409BuZL.js";import"./index.esm-hhJQ9cYX.js";import"./useColorFormatConverter-tAW6LAVI.js";import"./index-BF7LV5_I.js";import"./IconWrapper-B-_SNt5T.js";import"./theme-DMYu2WI8.js";import"./types-BgdgFazP.js";import"./form-control-hMrgMqrd.js";import"./context-CmScT-zJ.js";import"./use-merge-refs-rWySpHWW.js";import"./attr-DNG3tQ7M.js";import"./form-label-G-o0AcU8.js";import"./input-group-BCYucYTA.js";import"./children-B48MNwnK.js";import"./input-element-XZEY8EH7.js";import"./icon-dnSoyjh2.js";import"./use-callback-ref-uALQ6eL1.js";import"./use-update-effect-C75-GgUB.js";import"./use-safe-layout-effect-CDow6Rym.js";import"./use-event-listener-BmH9ZPbY.js";import"./call-all--NRVVPhS.js";import"./use-form-control-DDE0fgQt.js";import"./flex-Do7w5v-x.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="609451fb-4bee-4bf0-b95c-4ba1bb25deb7",n._sentryDebugIdIdentifier="sentry-dbid-609451fb-4bee-4bf0-b95c-4ba1bb25deb7")}catch{}const ne={component:s,tags:["pending"]},c={args:{mode:"dual",currencies:[{symbol:"BTC",precision:"8"},{symbol:"USD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},exchangeRate:1e4,label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:"",currencyTwo:""});return b.jsx(s,{mode:"dual",currencies:e.currencies,balance:e.balance,exchangeRate:e.exchangeRate,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne,currencyTwo:r.currencyTwo})}})}},a={args:{mode:"single",currencies:[{symbol:"CAD",precision:"2"}],balance:{quantity:new g(100),focus:"currencyOne"},label:"Label"},render:function(e){const[t,o]=d.useState({currencyOne:""});return b.jsx(s,{mode:"single",currencies:e.currencies,balance:e.balance,label:e.label,value:t,onTextChange:r=>{o({currencyOne:r.currencyOne})}})}};var u,i,l;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
