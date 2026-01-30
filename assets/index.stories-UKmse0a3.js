import{j as b}from"./jsx-runtime-DLK1c8mL.js";import{r as g}from"./index-obpcf3uZ.js";import{M as i}from"./index-CUbgRDex.js";import"./iframe-DFj02Vrh.js";import"./index-DHH0SeQ4.js";import"./types-xgkBN97i.js";import"./color-mode-CvvGBAVy.js";import"./iconBase-D-qK7w_K.js";import"./icon-button-iJKUe8mn.js";import"./button-BM10STi-.js";import"./factory-CT43gu3E.js";import"./create-recipe-context-cQ96QGTW.js";import"./attr-DhmmAXiK.js";import"./spinner-CqiEr1qg.js";import"./skeleton-BajQGoYs.js";import"./index-hJ6zoFh7.js";import"./stack-huQZwe5u.js";import"./flex-Hgy-kcRB.js";import"./icon-CAGxRSDQ.js";import"./index-C_F0s_q2.js";import"./index-BLpe4OfU.js";import"./index-D-l-y6X9.js";import"./index.esm-DX2PBgUy.js";import"./index-BC_5M_Yq.js";import"./index-xnQFBkQF.js";import"./link-DCsKPo-r.js";import"./types-BrwJZpL-.js";import"./h-stack-F1XD3gxV.js";import"./field-2H0cDM5D.js";import"./create-slot-recipe-context-CkZzG8Q7.js";import"./use-field-context-BxiAs7PF.js";import"./create-context-DGA_u_gH.js";import"./factory-C1yDKUk1.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CttZFIz3.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-WMBthFKS.js";import"./index-DlnLg0TF.js";import"./index-BEDwC8vw.js";import"./use-locale-context--8O4dasF.js";import"./use-event-CaFuEKcu.js";import"./index-Bmet623u.js";import"./useColorFormatConverter-CIBfepim.js";import"./index-DOhZzwyQ.js";import"./ReactIconWrapper-CCmx6Q9J.js";import"./input-group-DeMWf3rJ.js";import"./input-Dpr8CMkh.js";import"./useTranslation-CtXe89YX.js";import"./context-1UDTWkza.js";import"./portal-Bwxh3h5D.js";import"./v-stack-ByV5RIh_.js";import"./menu-Brnxd73J.js";import"./icons-DhMxiydi.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DxgHFXSF.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
