import{j as b}from"./jsx-runtime-DdTrgmh6.js";import{r as g}from"./index-Doy9K_Lq.js";import{M as i}from"./index-BeJTOw9y.js";import"./iframe-CPKQXw8u.js";import"./index-DEZ8dHPz.js";import"./types-CzcDTLHd.js";import"./color-mode-vkBR2unv.js";import"./iconBase-DThdn73S.js";import"./icon-button-B7AYAQIj.js";import"./button-CU-guoam.js";import"./factory-B_FeIluF.js";import"./create-recipe-context-eS8k-IfO.js";import"./attr-DhmmAXiK.js";import"./spinner-DYB5rzf-.js";import"./skeleton-DwRLdBCT.js";import"./index-CiD8ffQD.js";import"./stack-CJEr98D3.js";import"./flex-pu2ivikD.js";import"./icon-BICUf5ZJ.js";import"./index-DcnYjPVR.js";import"./index-Cz-oT88z.js";import"./index-CYp66hjM.js";import"./index.esm-B_XMfJwj.js";import"./index-CJ0F3W9V.js";import"./link-BHfPkSO0.js";import"./types-B1sHBVi_.js";import"./index-Bta823fh.js";import"./h-stack-rYXk_vyI.js";import"./field-DOlY-tjT.js";import"./create-slot-recipe-context-C9afv3o-.js";import"./use-field-context-DOL8xcgG.js";import"./create-context-aTZI0bsY.js";import"./factory-un-6e7vo.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DRfnZesD.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-DFmpnsNs.js";import"./index-D97N19Xa.js";import"./index-CKUrVTwF.js";import"./use-locale-context-DfUOnOoa.js";import"./use-event-j3_ul8IJ.js";import"./index-qTDywJ5s.js";import"./useColorFormatConverter-DVV2UMrQ.js";import"./index-MDJWhgnS.js";import"./ReactIconWrapper-BVkuq6yB.js";import"./input-group-BpbBRtsw.js";import"./input-l-j8Mjhf.js";import"./useTranslation-CDybTBaK.js";import"./context-DFb6A-RI.js";import"./portal-6J9FbOHO.js";import"./v-stack-CvZx08WB.js";import"./menu-wNhPkixc.js";import"./icons-BjDtRF1n.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-EXU1dR7S.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
