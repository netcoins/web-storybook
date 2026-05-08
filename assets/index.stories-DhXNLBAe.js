import{j as b}from"./jsx-runtime-CduTOOfn.js";import{r as g}from"./index-ClPmWnsX.js";import{M as i}from"./index-vXy5k1_G.js";import"./iframe-BpABGnI4.js";import"./index-CV5QtfG0.js";import"./types-DqYp1gDz.js";import"./color-mode-BanjnlIQ.js";import"./iconBase-BVk6jCQq.js";import"./icon-button-C1Cq5hle.js";import"./button-DbYHaHW8.js";import"./factory-B3hSHJDC.js";import"./create-recipe-context-B2waEiXu.js";import"./attr-DhmmAXiK.js";import"./spinner-thS745cd.js";import"./skeleton-B7Ls8NQH.js";import"./index-CH70ubJh.js";import"./stack-BjHxnlpl.js";import"./flex-B82ORBpF.js";import"./icon-oBX4yy-1.js";import"./index-CMEDxCVY.js";import"./index-DADT8a8M.js";import"./index-Bs7YhmJG.js";import"./index.esm-BsC3GXYt.js";import"./index-DqxkuJ_u.js";import"./link-xWgbemwq.js";import"./types-0U7NkUgF.js";import"./index-bwFzWqk4.js";import"./h-stack-DVkkq37Z.js";import"./field-DpOeJwmR.js";import"./create-slot-recipe-context-D1te7Ir6.js";import"./use-field-context-D12MP_Co.js";import"./create-context-xmcyEHj6.js";import"./factory-BVrBx0dq.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cok1_jl8.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-jDWBX6Q4.js";import"./index-joiVYGhu.js";import"./index-OGDBcsV8.js";import"./use-locale-context-C-4X2lFx.js";import"./use-event-CiODLNlK.js";import"./index-C45hHDQQ.js";import"./useColorFormatConverter-BRxW3NKi.js";import"./index-CpYY3Dg8.js";import"./ReactIconWrapper-BiRGK51F.js";import"./input-group-m0o7K6mn.js";import"./input-ChXUNITx.js";import"./useTranslation-SD-DlXTh.js";import"./context-RzpAXC9A.js";import"./portal-CCvRU0Xh.js";import"./v-stack-D7iQOBGV.js";import"./menu-6B3NxRGK.js";import"./icons-CFWLUXKu.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-H-Xsg-MJ.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
