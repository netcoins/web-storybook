import{j as b}from"./jsx-runtime-RQ8k3sMt.js";import{r as g}from"./index-OCzkGLPT.js";import{M as i}from"./index-BHZy8KBY.js";import"./iframe-B47DNco7.js";import"./index-CTfsgh1e.js";import"./types-s5Whku4i.js";import"./color-mode-Y6kjzatB.js";import"./iconBase-Cyc9pI5V.js";import"./icon-button-ahaz9brJ.js";import"./button-XXNIpZaP.js";import"./factory-P0_JX4kp.js";import"./create-recipe-context-BA02WGjK.js";import"./attr-DhmmAXiK.js";import"./spinner-B0S1843P.js";import"./skeleton-Mvx8gLm_.js";import"./index-CIM3bxyb.js";import"./stack--8Lb8nzU.js";import"./flex-CVNQypev.js";import"./icon-CO9U4eUa.js";import"./index-Ddyb6Wlu.js";import"./index-DPF1ajmJ.js";import"./index-BKbhWqQ7.js";import"./index.esm-DJHaC-rU.js";import"./index-BTFcHSP_.js";import"./link-Bx3-YzlB.js";import"./types-D8pWz1Gb.js";import"./index-DVQThBvj.js";import"./h-stack-BO8jfvGL.js";import"./field-lqndZ-N-.js";import"./create-slot-recipe-context-BB-H1zAt.js";import"./use-field-context-Dgu6822w.js";import"./create-context-CEs7pdWx.js";import"./factory-Cj7iSSOJ.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D4F_fc2D.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-C_GeYPcM.js";import"./index-BvTDAgTf.js";import"./index-Dob5a5X0.js";import"./use-locale-context-Nnle0lP7.js";import"./use-event-DO393xee.js";import"./index-H0wO0Hx-.js";import"./useColorFormatConverter-DV2oiKcW.js";import"./index-B7H_FkDm.js";import"./ReactIconWrapper-nhuS8WCk.js";import"./input-group-CQmqsp4d.js";import"./input-DsRE2Kb_.js";import"./useTranslation-DE71QPRt.js";import"./context-BNdEdh5h.js";import"./portal-CSgXzQV8.js";import"./v-stack-D0_92Trm.js";import"./menu-BckG5HKv.js";import"./icons-T4IfpcrY.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-O3bWHy59.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
