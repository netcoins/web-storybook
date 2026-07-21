import{j as b}from"./jsx-runtime-dpHUe5oX.js";import{r as g}from"./index-DPsTlIcQ.js";import{M as i}from"./index-BBwBWGTR.js";import"./iframe-D4J09tqF.js";import"./index-D3vC-ror.js";import"./types-D7oyB0ED.js";import"./color-mode-DorTQ_pA.js";import"./iconBase-BQceEhqF.js";import"./icon-button-4wufgt4y.js";import"./button-L69jpsz8.js";import"./factory-DcUfu5AJ.js";import"./create-recipe-context-3TfFPQ_z.js";import"./attr-DhmmAXiK.js";import"./spinner-c1LSv21B.js";import"./skeleton-CMdTgRaP.js";import"./index-BFDgfXC7.js";import"./stack-8P0tmoY-.js";import"./flex-DnvIn_-I.js";import"./icon-ClJ4Cvth.js";import"./index-DRCMA9EB.js";import"./index-Ca2hoZ1G.js";import"./index-B-lJfF_e.js";import"./index.esm-Nwh7Rjkv.js";import"./index-w54ydhQS.js";import"./link-Bun4EGqP.js";import"./types-DZ55HAvx.js";import"./index-CIYBD4A_.js";import"./h-stack-CxDz28hC.js";import"./field-C-ibONS3.js";import"./create-slot-recipe-context-gG80uYLW.js";import"./use-field-context-C2NoC21B.js";import"./create-context-BFrdJnFd.js";import"./factory-C7xUFiq6.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-jfMv8zJN.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-GlM4NKcy.js";import"./index-CGkU_XEW.js";import"./index-CPungreA.js";import"./use-locale-context-BmWDqTNH.js";import"./use-event-0ZIs8Gha.js";import"./index-fwr81PCn.js";import"./useColorFormatConverter-C6FqpJsY.js";import"./index-V-bhHtkg.js";import"./ReactIconWrapper-Dl6VW_Lk.js";import"./input-group-CDtCOEjt.js";import"./input-taqnPkBF.js";import"./useTranslation-BA2sE2QE.js";import"./context-DfIPjo34.js";import"./portal-D0q4-5qA.js";import"./v-stack-JEuiuwLE.js";import"./menu-B_BN0bjw.js";import"./icons-Cyv0Bv6L.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CONGTX7y.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
