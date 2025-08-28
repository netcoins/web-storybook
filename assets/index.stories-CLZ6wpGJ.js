import{j as b}from"./jsx-runtime-C-c0mJju.js";import{r as g}from"./index-B_aE6-2H.js";import{M as i}from"./index-dRi9Ah_I.js";import"./iframe-Bkbip2i2.js";import"./index-z9iGyNBp.js";import"./index-BnUmreMh.js";import"./types-gAWpmpcF.js";import"./factory-CyKh-rbl.js";import"./button--BvaoyLF.js";import"./context-yJ7NARXX.js";import"./use-style-config-D3nBrkbw.js";import"./spinner-CjdsH2Wn.js";import"./emotion-react.browser.esm-BLUCsVRA.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-OVbA9q9E.js";import"./flex-B4nO2eNk.js";import"./icon-Ba7HgsNi.js";import"./text-nzrlnuSt.js";import"./index-C9us1w5l.js";import"./index-tazhzuyM.js";import"./index.esm--nqzUjC9.js";import"./index-DbY1WV-c.js";import"./index-3nGBOhhO.js";import"./iconBase-BTGs9oPA.js";import"./link-BrPFzIaR.js";import"./index-CVTk0Z0Q.js";import"./index-BHLvOy8l.js";import"./useColorFormatConverter-C4R6w7yp.js";import"./index-CHp5QfLj.js";import"./IconWrapper-DNVp8cZ0.js";import"./box-CmeTUdTZ.js";import"./form-control-CZLgrTRz.js";import"./form-label-CHr9mm0V.js";import"./input-group-BBs9spS7.js";import"./children-DOGYkxq_.js";import"./input-addon-ebJrBRSI.js";import"./input-Bq6FRR2y.js";import"./use-form-control-B7RdA_Po.js";import"./call-all--NRVVPhS.js";import"./input-element-RFqYuiER.js";import"./h-stack-CG8702iH.js";import"./stack-DXr64_xt.js";import"./responsive-Cz4dX5rn.js";import"./use-checkbox-CkWxU6Jo.js";import"./use-callback-ref-CyQa9n5S.js";import"./use-safe-layout-effect-DdZBfT0z.js";import"./use-update-effect-C-5dSHQr.js";import"./index-Lm4JqVmd.js";import"./ReactIconWrapper-DfyCwdWg.js";import"./useTranslation-CJ9Dp-1A.js";import"./context-BfzqKKdJ.js";import"./menu-list-CKpAOHMk.js";import"./use-descendant-CjzS0S_f.js";import"./use-popper-UPeu-Dpe.js";import"./use-event-listener-yFiuENdI.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-B2YD-zHn.js";import"./use-disclosure-DJn6kJep.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CjPe6rob.js";import"./motion-1zNnU4DV.js";import"./v-stack-3Jhz1ww5.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="35c7fa79-01fb-4501-adfc-6cc6af99012d",e._sentryDebugIdIdentifier="sentry-dbid-35c7fa79-01fb-4501-adfc-6cc6af99012d")}catch{}const Ee={component:i,tags:["pending"]},n={render:e=>{const[t,r]=g.useState([]),a=l=>{r(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:r})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,r]=g.useState([]),a=l=>{r(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:r})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<Option<string | number>[]>([]);
    const handleSaveClick = (newSelectedOptions: Option<string | number>[]) => {
      setSelectedOptions(newSelectedOptions);
    };
    return <MultiSelectDropdown {...args} selectedOptions={selectedOptions} onSaveClick={handleSaveClick} setSelectedOptions={setSelectedOptions} />;
  },
  args: {
    options: [{
      value: 1,
      label: "Apple",
      desc: "Fruit"
    }, {
      value: 2,
      label: "Banana",
      desc: "Fruit"
    }, {
      value: 3,
      label: "Carrot",
      desc: "Vegetable"
    }, {
      value: 4,
      label: "Date",
      desc: "Fruit"
    }, {
      value: 5,
      label: "Eggplant",
      desc: "Vegetable"
    }],
    placeholder: "Select Produce"
  }
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<Option<string | number>[]>([]);
    const handleSaveClick = (newSelectedOptions: Option<string | number>[]) => {
      setSelectedOptions(newSelectedOptions);
    };
    return <MultiSelectDropdown {...args} selectedOptions={selectedOptions} onSaveClick={handleSaveClick} setSelectedOptions={setSelectedOptions} />;
  },
  args: {
    search: true,
    options: [{
      value: 1,
      label: "Apple",
      desc: "Fruit"
    }, {
      value: 2,
      label: "Banana",
      desc: "Fruit"
    }, {
      value: 3,
      label: "Carrot",
      desc: "Vegetable"
    }, {
      value: 4,
      label: "Date",
      desc: "Fruit"
    }, {
      value: 5,
      label: "Eggplant",
      desc: "Vegetable"
    }],
    placeholder: "Select Produce"
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ve=["Default","Search"];export{n as Default,o as Search,Ve as __namedExportsOrder,Ee as default};
