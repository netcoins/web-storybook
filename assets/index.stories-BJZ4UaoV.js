import{j as b}from"./jsx-runtime-CSb4GwCe.js";import{r as g}from"./index-qPvl7ajq.js";import{M as i}from"./index-Dk3bfEOq.js";import"./iframe-DV_QLQnz.js";import"./index-C42lyzHf.js";import"./types-CN3Z0IaX.js";import"./color-mode-BdOyUgjA.js";import"./iconBase-CCTR-bxa.js";import"./icon-button-Dc3D3Ff1.js";import"./button-DuaI0Kn4.js";import"./factory-CYXDsxQy.js";import"./create-recipe-context-BadC4lWu.js";import"./attr-DhmmAXiK.js";import"./spinner-BizRjsXr.js";import"./skeleton-D9oFPkg9.js";import"./index-DEPqYUoG.js";import"./stack-BubkjnOz.js";import"./flex-C80kLLfX.js";import"./icon-Cb9GXmSM.js";import"./index-D0TDNuV0.js";import"./index-BNJLZyeb.js";import"./index-Dau74HJW.js";import"./index.esm-R4vvUOCZ.js";import"./index-BgCHaAgU.js";import"./link-axYuNyyn.js";import"./types-BZ-9TaSE.js";import"./index-D0wbCSoc.js";import"./h-stack-BtZ0mN6i.js";import"./field-CHsQQ853.js";import"./create-slot-recipe-context-0awDiFiH.js";import"./use-field-context-DNNwAZvt.js";import"./create-context-DMf-5M48.js";import"./factory-voLpCmRv.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-EX7yYgdC.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-B4oSqDZp.js";import"./index-DnjSmgRE.js";import"./index-LnzW0tDQ.js";import"./use-locale-context-D9Le0eAE.js";import"./use-event-37lQ7xmW.js";import"./index-BEZ93Sbb.js";import"./useColorFormatConverter-Cs4SK2Xc.js";import"./index-BJId75oB.js";import"./ReactIconWrapper-B3g7_2Af.js";import"./input-group-uYqs_Md3.js";import"./input-BFvEObYU.js";import"./useTranslation-7e3giW4I.js";import"./context-DGtv37A5.js";import"./portal-D3HthffI.js";import"./v-stack-J9cThL_F.js";import"./menu-924rkRbI.js";import"./icons-PVhWhCfM.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CR5l2YIe.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
