import{j as b}from"./jsx-runtime-1QcaBFjt.js";import{r as g}from"./index-C5DJK7Mn.js";import{M as i}from"./index-CqM9HgCd.js";import"./iframe-CJd8REah.js";import"./index-DZ9ydo65.js";import"./types-CvIw1aZe.js";import"./color-mode-ClV-3Jsa.js";import"./iconBase-u_eeBPt5.js";import"./icon-button-BTwj4JDT.js";import"./button-5rdY6g4m.js";import"./factory-BdGhXirw.js";import"./create-recipe-context-BL7vxUyW.js";import"./attr-DhmmAXiK.js";import"./spinner-Dwo6YvmC.js";import"./skeleton-DgVi4cdY.js";import"./index-CUUz_o0H.js";import"./stack-D2LoWOhJ.js";import"./flex-Lb8rYyah.js";import"./icon-R0tCKb8U.js";import"./index-mnZemksN.js";import"./index-COWChBgK.js";import"./index-CVdtW09o.js";import"./index.esm-BRJLqf3k.js";import"./index-DZTiOJNT.js";import"./link-ipu8y-QL.js";import"./types-auljHV9K.js";import"./index-B2ctT33-.js";import"./h-stack-3WmPhNTW.js";import"./field-AZGBpJI6.js";import"./create-slot-recipe-context-11ZmFkDp.js";import"./use-field-context-CoWYd30p.js";import"./create-context-z3Tag67_.js";import"./factory-CpSrrdZf.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DwB2GriR.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-B50MXpTV.js";import"./index-CAZ5y66m.js";import"./index-BjZ9T2Rl.js";import"./use-locale-context-BE9Vv-QU.js";import"./use-event-BFzJoFnI.js";import"./index-DYiGSArD.js";import"./useColorFormatConverter-NZCO0KXK.js";import"./index-09vw6sjf.js";import"./ReactIconWrapper-BHNsLW-5.js";import"./input-group-Bd3sl7vb.js";import"./input-s4NjHuCy.js";import"./useTranslation-BqkKbnMT.js";import"./context-DizLV2k_.js";import"./portal-BWX3qSHj.js";import"./v-stack-CNPy_XM4.js";import"./menu-Gr2Dt87R.js";import"./icons-Bfmdf0B7.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CPHMPni5.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
