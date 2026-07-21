import{j as b}from"./jsx-runtime-Dv6h_XlB.js";import{r as g}from"./index-BgbMN5dq.js";import{M as i}from"./index-BJ-2JbHW.js";import"./iframe-5BB01l3a.js";import"./index-C9goC6pl.js";import"./types-cugwsTdZ.js";import"./color-mode-0AagC6oM.js";import"./iconBase-CFnVzm67.js";import"./icon-button-BtUhN-7k.js";import"./button-CLJSN4xv.js";import"./factory-D9WiRpeC.js";import"./create-recipe-context-Dw5PdPAw.js";import"./attr-DhmmAXiK.js";import"./spinner-DysC1OTN.js";import"./skeleton-BqsXea5j.js";import"./index-DGMoT2ut.js";import"./stack-DR9RPPRD.js";import"./flex-B4PlRkJs.js";import"./icon-C_Y1OiQ8.js";import"./index-DN4xKRjX.js";import"./index-VESmiUCt.js";import"./index-utzkaUjw.js";import"./index.esm-DT9xcQLu.js";import"./index-CvVlSNcQ.js";import"./link-B7MeHrQy.js";import"./types-CYS9T1Z8.js";import"./index-DVv2u3tL.js";import"./h-stack-WK1Bt89K.js";import"./field-Bed4nULZ.js";import"./create-slot-recipe-context-BXRKlOob.js";import"./use-field-context-mtPdk3mS.js";import"./create-context-DiQzd9re.js";import"./factory-Cr6h4uxL.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-zHEUtKQg.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CVm8Eq50.js";import"./index-DF6SSJYS.js";import"./index-CeVOANK0.js";import"./use-locale-context-aiaD2-EW.js";import"./use-event-D9IXCFjh.js";import"./index-8e_bUXCW.js";import"./useColorFormatConverter-DeCPE4df.js";import"./index-CGfsq5yH.js";import"./ReactIconWrapper-uEHygEQ5.js";import"./input-group-BQBMGm5I.js";import"./input-DmjMWUjc.js";import"./useTranslation-B7ZeAily.js";import"./context-DjSw8wfr.js";import"./portal-CrSaEQlY.js";import"./v-stack-DhsZq-0X.js";import"./menu-COMB0aCa.js";import"./icons-BYgu2604.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-DLChSmDs.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
