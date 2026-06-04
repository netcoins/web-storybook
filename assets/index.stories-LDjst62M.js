import{j as b}from"./jsx-runtime-D9n_btLS.js";import{r as g}from"./index-B_wJ61bp.js";import{M as i}from"./index-DDtWUPyB.js";import"./iframe-1RBj3wOP.js";import"./index-CgNk0YWf.js";import"./types-nbimkKB-.js";import"./color-mode-BMZ9UIOf.js";import"./iconBase-CezN9Gbw.js";import"./icon-button-CwKyN9QG.js";import"./button-BFkTNIvJ.js";import"./factory-CyXdg-dj.js";import"./create-recipe-context-DN1RLOxq.js";import"./attr-DhmmAXiK.js";import"./spinner-DmvQ2J-h.js";import"./skeleton-DosHTnA2.js";import"./index-BLEa5hZ3.js";import"./stack-C2_EcsIC.js";import"./flex-yBvgSHlG.js";import"./icon-BLYmZpDL.js";import"./index-Bl4cAPWq.js";import"./index-Cu83zrmE.js";import"./index-Dx47Q553.js";import"./index.esm-BObTKMPp.js";import"./index-B-kw0f_a.js";import"./link-DDNgRr5Z.js";import"./types-BiEG2T_l.js";import"./index-Bn-MvMLo.js";import"./h-stack-C7Pprr9a.js";import"./field-OOUdZejl.js";import"./create-slot-recipe-context-L6bnsHVP.js";import"./use-field-context-Cy4Rc0ye.js";import"./create-context-BjdCf3nT.js";import"./factory-BMiD_fvp.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DRC9xWgb.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-BBjY1HWT.js";import"./index-CS48tdeX.js";import"./index-DZDnQa2y.js";import"./use-locale-context-Bylepbc3.js";import"./use-event-CY5SEoY4.js";import"./index-CbOkDJig.js";import"./useColorFormatConverter-q-Yq07yA.js";import"./index-Cnig8v3c.js";import"./ReactIconWrapper-CI6YR7Bf.js";import"./input-group-Cj2STJaX.js";import"./input-CMK21mbl.js";import"./useTranslation-Bs_DcdEB.js";import"./context-4DbJ0GfA.js";import"./portal-BFJNLzaa.js";import"./v-stack-BDBhJsNe.js";import"./menu-P3u4Vnmt.js";import"./icons-Cw_f4ACE.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-YCUcugPp.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
