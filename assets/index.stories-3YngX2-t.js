import{j as b}from"./jsx-runtime-Dq7W06zL.js";import{r as g}from"./index-BjHbzPP8.js";import{M as i}from"./index-BP-XIEVG.js";import"./iframe-CFHa__DK.js";import"./index-BAvi1BHw.js";import"./types-Bya8AF9u.js";import"./color-mode-D6OYHb9C.js";import"./iconBase-CSInR4T_.js";import"./icon-button-Db3_V_Kt.js";import"./button-CNTjZ6un.js";import"./factory-CUIbw2Bt.js";import"./create-recipe-context-Cxk0unds.js";import"./attr-DhmmAXiK.js";import"./spinner-DFQiVBWK.js";import"./skeleton-4x1sFo-H.js";import"./index-COyK9N5Z.js";import"./stack-CC9ERj2t.js";import"./flex-DhnK0Ebq.js";import"./icon-IQ5wlY6s.js";import"./index-D2ra4k4c.js";import"./index-BLYugNX-.js";import"./index-DzV_90MV.js";import"./index.esm-t8LjiQuJ.js";import"./index-CUSq71Tx.js";import"./link-BDFANyUz.js";import"./types-smbBaHhE.js";import"./index-L2_9s95c.js";import"./h-stack-O13qNTs0.js";import"./field-Bh4YOGfH.js";import"./create-slot-recipe-context-D8AogUrq.js";import"./use-field-context-BTmiaCSB.js";import"./create-context-BuevO5jH.js";import"./factory-DPsNDTcO.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-5PbLNB6V.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-BTr-UseD.js";import"./index-CmZrJnyz.js";import"./index-CXPErH3M.js";import"./use-locale-context-CoddZVdY.js";import"./use-event-Xvz_LITB.js";import"./index-B-pW2005.js";import"./useColorFormatConverter-DsXXEW3d.js";import"./index-9dDthqe6.js";import"./ReactIconWrapper-fPXPMGAK.js";import"./input-group-OeZMQs32.js";import"./input-BjiyuhHg.js";import"./useTranslation-CpDRaNop.js";import"./context-D74-4YW_.js";import"./portal-CJrkXjh-.js";import"./v-stack-Cl258mRi.js";import"./menu-W8J7SUSh.js";import"./icons-B9e88lfj.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-C8iRi2or.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
