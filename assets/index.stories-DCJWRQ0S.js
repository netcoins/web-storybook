import{j as b}from"./jsx-runtime-D_1f7RZ4.js";import{r as g}from"./index-DIRGU5C1.js";import{M as i}from"./index-DfNmxYAE.js";import"./iframe-BBV-l3q3.js";import"./index-DXVQUD0r.js";import"./types-DTkqfOrj.js";import"./color-mode-NKp8z5lH.js";import"./iconBase-fHNp_0oX.js";import"./icon-button-NFwAFxs6.js";import"./button-DevS3c95.js";import"./factory-CKP4BZby.js";import"./create-recipe-context-BGig898f.js";import"./attr-DhmmAXiK.js";import"./spinner-DLNsJ-XC.js";import"./skeleton-DVOx7zqR.js";import"./index-CxgjJer_.js";import"./stack-Cwn4G4FP.js";import"./flex-CIQn6QKF.js";import"./icon-X8vhnAXh.js";import"./index-kFKkt1G0.js";import"./index-CNC3NZfv.js";import"./index-wC0jN3Fh.js";import"./index.esm-DD23aLUu.js";import"./index-B0L_ORGe.js";import"./link-CQ7ATltk.js";import"./types-Dv7IIWSp.js";import"./index-Dmea0HfC.js";import"./h-stack-BlOifcr8.js";import"./field-Clo7uy2r.js";import"./create-slot-recipe-context-Cxilg6R5.js";import"./use-field-context-ClLumNUb.js";import"./create-context-DHKO3_a-.js";import"./factory-Bg3Joqry.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BevWolDu.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-B_Nrj-OR.js";import"./index-COjxmNs_.js";import"./index-DwiKA_ie.js";import"./use-locale-context-C-74Rs9E.js";import"./use-event-Br7pEDOz.js";import"./index-Dsr9IxxU.js";import"./useColorFormatConverter-CYmghEnF.js";import"./index-BvPqQ4VY.js";import"./ReactIconWrapper-BIxUWG8K.js";import"./input-group-7MTgo-NM.js";import"./input-DWX1MZ9b.js";import"./useTranslation-DvkzkeNn.js";import"./context-DCFQDPaG.js";import"./portal-BMenfthf.js";import"./v-stack-C4AcemYp.js";import"./menu-Cy0noKZR.js";import"./icons-BmBfeNqA.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-Xiav_eHn.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
