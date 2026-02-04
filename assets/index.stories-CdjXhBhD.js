import{j as b}from"./jsx-runtime-B3i3TfHl.js";import{r as g}from"./index-BuBwsnyC.js";import{M as i}from"./index-l_40g68U.js";import"./iframe-B_Ou-_q9.js";import"./index-BCyqqEDr.js";import"./types-BSN3vCyc.js";import"./color-mode-cuTYZ3B4.js";import"./iconBase-R-Z32nMx.js";import"./icon-button-gzB6eSDR.js";import"./button-CgwpuGtR.js";import"./factory-AatMa-35.js";import"./create-recipe-context-C7EHPbke.js";import"./attr-DhmmAXiK.js";import"./spinner-DgTZ1n0S.js";import"./skeleton-D1q4D-Os.js";import"./index-NkeFFCVP.js";import"./stack-BY2ye9bl.js";import"./flex-lsXkLH1G.js";import"./icon-lQ5oFCI3.js";import"./index-BmuNFleU.js";import"./index-CeFC1-92.js";import"./index-C1VrnwUO.js";import"./index.esm-DEVKf4mN.js";import"./index-BwFYgewL.js";import"./index-Bx6H2JJV.js";import"./link-CvF9MVwD.js";import"./types-CgyGzvMv.js";import"./h-stack-B0JvKdfD.js";import"./field-BgVzcQro.js";import"./create-slot-recipe-context-GJrSDUTV.js";import"./use-field-context-DkQ396J8.js";import"./create-context-CKJ785NE.js";import"./factory-BTGuUBYI.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BKd811zj.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-CPbDxrL7.js";import"./index-l0Walh46.js";import"./index-BdBHoQ34.js";import"./use-locale-context-BRM5vxry.js";import"./use-event-DlHAnWQd.js";import"./index-BjUGn3U6.js";import"./useColorFormatConverter-CwQ4hQYS.js";import"./index-C8zccliu.js";import"./ReactIconWrapper-WN4qxN74.js";import"./input-group-CHiVDLXY.js";import"./input-D-xBq6BN.js";import"./useTranslation-zjij5_Ut.js";import"./context-Wo4ZxScD.js";import"./portal-BgXuPF4h.js";import"./v-stack-BsdWDDZ7.js";import"./menu-byPl4918.js";import"./icons-BhGZ2WYt.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-Dd-GbyYp.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
