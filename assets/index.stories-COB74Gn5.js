import{j as b}from"./jsx-runtime-B1YqPMzg.js";import{r as g}from"./index-C6Ifh64Z.js";import{M as i}from"./index-BXtdVcne.js";import"./iframe-DxuRPcUd.js";import"./index-Br_UIWGN.js";import"./types-2ijdTlTS.js";import"./color-mode-Br67UNNZ.js";import"./iconBase-SxvgYEOR.js";import"./icon-button-CMCJVQ62.js";import"./button-DCGkmVk4.js";import"./factory-D2_oMNtR.js";import"./create-recipe-context-G-F8B2ld.js";import"./attr-DhmmAXiK.js";import"./spinner-BDy8dhp6.js";import"./skeleton-Cofe36cm.js";import"./index-BMJVRFE5.js";import"./stack-G0-Hs9UY.js";import"./flex-BsXV40MI.js";import"./icon-CX4kF63o.js";import"./index-DehFT42x.js";import"./index-CCcarbgh.js";import"./index-D3AthKcc.js";import"./index.esm-CbvsDBvr.js";import"./index-D6-uZyBV.js";import"./index-TK7NCjQ3.js";import"./link-BLfgl-PZ.js";import"./types-hQmVnQtr.js";import"./h-stack-0Ct3J9Ck.js";import"./field-Cu5evqaD.js";import"./create-slot-recipe-context-CDJMCMnz.js";import"./use-field-context-qg5FJMQx.js";import"./create-context-D6u6EDCp.js";import"./factory-BEIpqoMf.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DBLinOWL.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-LaxTnubX.js";import"./index-DOUhQWuc.js";import"./index-Pe3ZON2l.js";import"./use-locale-context-CWY39VhK.js";import"./use-event-Bhm_p7Wc.js";import"./index-CCMxYfAk.js";import"./useColorFormatConverter-BKCnzz-k.js";import"./index-CMWNrqDx.js";import"./ReactIconWrapper-slRaoyeL.js";import"./input-group-DWbhNFqV.js";import"./input-C9JPwB4t.js";import"./useTranslation-BOXy3uGt.js";import"./context-CC38MYtr.js";import"./portal-BUBtbaxR.js";import"./v-stack-BFx_CY15.js";import"./menu-NTX7HSwb.js";import"./icons-wQvnTOoZ.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-vuiXtbuS.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
