import{j as b}from"./jsx-runtime-C0fRXbar.js";import{r as g}from"./index-D4Zf458D.js";import{M as i}from"./index-_awRSkgA.js";import"./iframe-bBSWD1Tg.js";import"./index-qScZV993.js";import"./types-BafXeXoO.js";import"./color-mode-VYk6Kd8u.js";import"./iconBase-BCBmLMOw.js";import"./icon-button-BwA7iWeW.js";import"./button-DfHiIcYQ.js";import"./factory-D1ONI24A.js";import"./create-recipe-context-r8X2UfhT.js";import"./attr-DhmmAXiK.js";import"./spinner-CsUCpoxK.js";import"./skeleton-B0-OqQNt.js";import"./index-h3UWFF-P.js";import"./stack-J6e6Xkeb.js";import"./flex-C0L6tFnI.js";import"./icon-CCoClnjh.js";import"./index-Nv1PTGUN.js";import"./index-Dbmdv5s1.js";import"./index-CYQZ1FCJ.js";import"./index.esm-J_i56aLd.js";import"./index-CwQJ1sg4.js";import"./link-DAuZI2zv.js";import"./types-CM7xr7hI.js";import"./index-tI3kyUfn.js";import"./h-stack-Byd3RwSa.js";import"./field-CXjvBgMh.js";import"./create-slot-recipe-context-uQQmN7VU.js";import"./use-field-context-B32lZmfY.js";import"./create-context-B1kwbtPe.js";import"./factory-CNccXcJn.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B3kb5O_v.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DacfgpBe.js";import"./index-n3KrCqsu.js";import"./index-DYMGQ_Mm.js";import"./use-locale-context-BuX8pwLA.js";import"./use-event-CyiAn14y.js";import"./index-DAQPmNJg.js";import"./useColorFormatConverter-CLMYGC2r.js";import"./index-CYycQ7GP.js";import"./ReactIconWrapper-BhnTT4Yp.js";import"./input-group-CX7FHxE8.js";import"./input-DYKy9g2s.js";import"./useTranslation-xtRBVmO8.js";import"./context-cVqldkDT.js";import"./portal-BsG-6jAD.js";import"./v-stack-BVSUoq3i.js";import"./menu-6MNMZGMx.js";import"./icons-DmYAgdrp.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CHt3EMcr.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ee=["Default","Search"];export{r as Default,o as Search,Ee as __namedExportsOrder,ye as default};
